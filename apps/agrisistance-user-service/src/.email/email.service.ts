import { Injectable, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { google } from 'googleapis';
import * as nodemailer from 'nodemailer';
import * as fs from 'fs';
import * as path from 'path';


@Injectable()
export class EmailService {
    private readonly logger = new Logger(EmailService.name);
    private oAuth2Client: any;

    constructor(
      private readonly configService: ConfigService
      ) {
          this.oAuth2Client = new google.auth.OAuth2(
              this.configService.get<string>('GOOGLE_CLIENT_ID'),
              this.configService.get<string>('GOOGLE_CLIENT_SECRET'),
              this.configService.get<string>('GOOGLE_REDIRECT_URI'),
          );
      
          this.oAuth2Client.setCredentials({
              refresh_token: this.configService.get<string>('GOOGLE_REFRESH_TOKEN'),
            });
      }

    private emailTemplates = {
      confirmation: 'confirmationEmail.html',
      deletion: 'deletionEmail.html',
      successdeletion: 'successDeletionEmail.html',
      OTPverify: 'OTPverifyEmail.html',
      resetPassword: 'resetPasswordEmail.html',
      updateVerification: 'updateVerifEmail.html',
    };

    private emailObjects = {
      confirmation: 'Email Confirmation',
      deletion: 'Account Deletion Request',
      successdeletion: 'Account Deleted',
      OTPverify: '2FA One-Time Password',
      resetPassword: 'Reset Password',
      updateVerification: 'Update Verification',
    };

    async sendEmail(email: string, token: string, type: string) {
        try {
          const accessToken = await this.oAuth2Client.getAccessToken();
        
          const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
              type: 'OAuth2',
              user: this.configService.get<string>('EMAIL_USER'),
              clientId: this.configService.get<string>('GOOGLE_CLIENT_ID'),
              clientSecret: this.configService.get<string>('GOOGLE_CLIENT_SECRET'),
              refreshToken: this.configService.get<string>('GOOGLE_REFRESH_TOKEN'),
              accessToken: accessToken.token,
            },
          });
        
          const emailTemplateFile = this.emailTemplates[type];
          const emailObject = this.emailObjects[type];
        
          // Adjust the path to the email template
          const emailTemplatePath = path.join(process.cwd(), 'apps/agrisistance-user-service/src/.email/Emails', emailTemplateFile);
          const emailTemplate = fs.readFileSync(emailTemplatePath, 'utf-8');
        
          let emailHtml = emailTemplate;
        
          // Customize email content based on type
          if (type === 'confirmation') {
            emailHtml = emailTemplate.replace('verification_link', `https://agrisistance-server.onrender.com/api/auth/register/verify/${token}`);
          } else if (type === 'OTPverify') {
            emailHtml = emailTemplate.replace('{{otp}}', token);
          } else if (type === 'resetPassword') {
            emailHtml = emailTemplate.replace('reset_link', `https://agrisistatnce.netlify.app/auth/reset-password/${token}`);
          } else if (type === 'updateVerification') {
            emailHtml = emailTemplate.replace('verification_link', `https://agrisistance-server.onrender.com/api/profile/update-email/verify/${token}`);
          }
        
          const mailOptions = {
            from: this.configService.get<string>('EMAIL_USER'),
            to: email,
            subject: emailObject,
            html: emailHtml,
          };
        
          await transporter.sendMail(mailOptions);
        
          this.logger.log(`Email sent successfully to ${email}`);
        } catch (error) {
          this.logger.error('Error sending email:', error);
          throw new Error('Failed to send email');
        }
    }

    
  

  
}
