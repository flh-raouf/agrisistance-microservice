
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Land
 * 
 */
export type Land = $Result.DefaultSelection<Prisma.$LandPayload>
/**
 * Model LandStatistic
 * 
 */
export type LandStatistic = $Result.DefaultSelection<Prisma.$LandStatisticPayload>
/**
 * Model Crop
 * 
 */
export type Crop = $Result.DefaultSelection<Prisma.$CropPayload>
/**
 * Model CropMaintenance
 * 
 */
export type CropMaintenance = $Result.DefaultSelection<Prisma.$CropMaintenancePayload>
/**
 * Model Finance
 * 
 */
export type Finance = $Result.DefaultSelection<Prisma.$FinancePayload>
/**
 * Model Weather
 * 
 */
export type Weather = $Result.DefaultSelection<Prisma.$WeatherPayload>
/**
 * Model BusinessPlan
 * 
 */
export type BusinessPlan = $Result.DefaultSelection<Prisma.$BusinessPlanPayload>

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs>;

  /**
   * `prisma.land`: Exposes CRUD operations for the **Land** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Lands
    * const lands = await prisma.land.findMany()
    * ```
    */
  get land(): Prisma.LandDelegate<ExtArgs>;

  /**
   * `prisma.landStatistic`: Exposes CRUD operations for the **LandStatistic** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more LandStatistics
    * const landStatistics = await prisma.landStatistic.findMany()
    * ```
    */
  get landStatistic(): Prisma.LandStatisticDelegate<ExtArgs>;

  /**
   * `prisma.crop`: Exposes CRUD operations for the **Crop** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Crops
    * const crops = await prisma.crop.findMany()
    * ```
    */
  get crop(): Prisma.CropDelegate<ExtArgs>;

  /**
   * `prisma.cropMaintenance`: Exposes CRUD operations for the **CropMaintenance** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CropMaintenances
    * const cropMaintenances = await prisma.cropMaintenance.findMany()
    * ```
    */
  get cropMaintenance(): Prisma.CropMaintenanceDelegate<ExtArgs>;

  /**
   * `prisma.finance`: Exposes CRUD operations for the **Finance** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Finances
    * const finances = await prisma.finance.findMany()
    * ```
    */
  get finance(): Prisma.FinanceDelegate<ExtArgs>;

  /**
   * `prisma.weather`: Exposes CRUD operations for the **Weather** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Weathers
    * const weathers = await prisma.weather.findMany()
    * ```
    */
  get weather(): Prisma.WeatherDelegate<ExtArgs>;

  /**
   * `prisma.businessPlan`: Exposes CRUD operations for the **BusinessPlan** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more BusinessPlans
    * const businessPlans = await prisma.businessPlan.findMany()
    * ```
    */
  get businessPlan(): Prisma.BusinessPlanDelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 5.19.1
   * Query Engine version: 69d742ee20b815d88e17e54db4a2a7a3b30324e3
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Land: 'Land',
    LandStatistic: 'LandStatistic',
    Crop: 'Crop',
    CropMaintenance: 'CropMaintenance',
    Finance: 'Finance',
    Weather: 'Weather',
    BusinessPlan: 'BusinessPlan'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs, clientOptions: PrismaClientOptions }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], this['params']['clientOptions']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> = {
    meta: {
      modelProps: "user" | "land" | "landStatistic" | "crop" | "cropMaintenance" | "finance" | "weather" | "businessPlan"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Land: {
        payload: Prisma.$LandPayload<ExtArgs>
        fields: Prisma.LandFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LandFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LandPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LandFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LandPayload>
          }
          findFirst: {
            args: Prisma.LandFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LandPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LandFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LandPayload>
          }
          findMany: {
            args: Prisma.LandFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LandPayload>[]
          }
          create: {
            args: Prisma.LandCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LandPayload>
          }
          createMany: {
            args: Prisma.LandCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.LandCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LandPayload>[]
          }
          delete: {
            args: Prisma.LandDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LandPayload>
          }
          update: {
            args: Prisma.LandUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LandPayload>
          }
          deleteMany: {
            args: Prisma.LandDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LandUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.LandUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LandPayload>
          }
          aggregate: {
            args: Prisma.LandAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLand>
          }
          groupBy: {
            args: Prisma.LandGroupByArgs<ExtArgs>
            result: $Utils.Optional<LandGroupByOutputType>[]
          }
          count: {
            args: Prisma.LandCountArgs<ExtArgs>
            result: $Utils.Optional<LandCountAggregateOutputType> | number
          }
        }
      }
      LandStatistic: {
        payload: Prisma.$LandStatisticPayload<ExtArgs>
        fields: Prisma.LandStatisticFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LandStatisticFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LandStatisticPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LandStatisticFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LandStatisticPayload>
          }
          findFirst: {
            args: Prisma.LandStatisticFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LandStatisticPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LandStatisticFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LandStatisticPayload>
          }
          findMany: {
            args: Prisma.LandStatisticFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LandStatisticPayload>[]
          }
          create: {
            args: Prisma.LandStatisticCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LandStatisticPayload>
          }
          createMany: {
            args: Prisma.LandStatisticCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.LandStatisticCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LandStatisticPayload>[]
          }
          delete: {
            args: Prisma.LandStatisticDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LandStatisticPayload>
          }
          update: {
            args: Prisma.LandStatisticUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LandStatisticPayload>
          }
          deleteMany: {
            args: Prisma.LandStatisticDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LandStatisticUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.LandStatisticUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LandStatisticPayload>
          }
          aggregate: {
            args: Prisma.LandStatisticAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLandStatistic>
          }
          groupBy: {
            args: Prisma.LandStatisticGroupByArgs<ExtArgs>
            result: $Utils.Optional<LandStatisticGroupByOutputType>[]
          }
          count: {
            args: Prisma.LandStatisticCountArgs<ExtArgs>
            result: $Utils.Optional<LandStatisticCountAggregateOutputType> | number
          }
        }
      }
      Crop: {
        payload: Prisma.$CropPayload<ExtArgs>
        fields: Prisma.CropFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CropFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CropPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CropFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CropPayload>
          }
          findFirst: {
            args: Prisma.CropFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CropPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CropFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CropPayload>
          }
          findMany: {
            args: Prisma.CropFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CropPayload>[]
          }
          create: {
            args: Prisma.CropCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CropPayload>
          }
          createMany: {
            args: Prisma.CropCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CropCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CropPayload>[]
          }
          delete: {
            args: Prisma.CropDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CropPayload>
          }
          update: {
            args: Prisma.CropUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CropPayload>
          }
          deleteMany: {
            args: Prisma.CropDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CropUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.CropUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CropPayload>
          }
          aggregate: {
            args: Prisma.CropAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCrop>
          }
          groupBy: {
            args: Prisma.CropGroupByArgs<ExtArgs>
            result: $Utils.Optional<CropGroupByOutputType>[]
          }
          count: {
            args: Prisma.CropCountArgs<ExtArgs>
            result: $Utils.Optional<CropCountAggregateOutputType> | number
          }
        }
      }
      CropMaintenance: {
        payload: Prisma.$CropMaintenancePayload<ExtArgs>
        fields: Prisma.CropMaintenanceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CropMaintenanceFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CropMaintenancePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CropMaintenanceFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CropMaintenancePayload>
          }
          findFirst: {
            args: Prisma.CropMaintenanceFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CropMaintenancePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CropMaintenanceFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CropMaintenancePayload>
          }
          findMany: {
            args: Prisma.CropMaintenanceFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CropMaintenancePayload>[]
          }
          create: {
            args: Prisma.CropMaintenanceCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CropMaintenancePayload>
          }
          createMany: {
            args: Prisma.CropMaintenanceCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CropMaintenanceCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CropMaintenancePayload>[]
          }
          delete: {
            args: Prisma.CropMaintenanceDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CropMaintenancePayload>
          }
          update: {
            args: Prisma.CropMaintenanceUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CropMaintenancePayload>
          }
          deleteMany: {
            args: Prisma.CropMaintenanceDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CropMaintenanceUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.CropMaintenanceUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CropMaintenancePayload>
          }
          aggregate: {
            args: Prisma.CropMaintenanceAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCropMaintenance>
          }
          groupBy: {
            args: Prisma.CropMaintenanceGroupByArgs<ExtArgs>
            result: $Utils.Optional<CropMaintenanceGroupByOutputType>[]
          }
          count: {
            args: Prisma.CropMaintenanceCountArgs<ExtArgs>
            result: $Utils.Optional<CropMaintenanceCountAggregateOutputType> | number
          }
        }
      }
      Finance: {
        payload: Prisma.$FinancePayload<ExtArgs>
        fields: Prisma.FinanceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FinanceFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FinancePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FinanceFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FinancePayload>
          }
          findFirst: {
            args: Prisma.FinanceFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FinancePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FinanceFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FinancePayload>
          }
          findMany: {
            args: Prisma.FinanceFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FinancePayload>[]
          }
          create: {
            args: Prisma.FinanceCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FinancePayload>
          }
          createMany: {
            args: Prisma.FinanceCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.FinanceCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FinancePayload>[]
          }
          delete: {
            args: Prisma.FinanceDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FinancePayload>
          }
          update: {
            args: Prisma.FinanceUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FinancePayload>
          }
          deleteMany: {
            args: Prisma.FinanceDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FinanceUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.FinanceUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FinancePayload>
          }
          aggregate: {
            args: Prisma.FinanceAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFinance>
          }
          groupBy: {
            args: Prisma.FinanceGroupByArgs<ExtArgs>
            result: $Utils.Optional<FinanceGroupByOutputType>[]
          }
          count: {
            args: Prisma.FinanceCountArgs<ExtArgs>
            result: $Utils.Optional<FinanceCountAggregateOutputType> | number
          }
        }
      }
      Weather: {
        payload: Prisma.$WeatherPayload<ExtArgs>
        fields: Prisma.WeatherFieldRefs
        operations: {
          findUnique: {
            args: Prisma.WeatherFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WeatherPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.WeatherFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WeatherPayload>
          }
          findFirst: {
            args: Prisma.WeatherFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WeatherPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.WeatherFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WeatherPayload>
          }
          findMany: {
            args: Prisma.WeatherFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WeatherPayload>[]
          }
          create: {
            args: Prisma.WeatherCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WeatherPayload>
          }
          createMany: {
            args: Prisma.WeatherCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.WeatherCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WeatherPayload>[]
          }
          delete: {
            args: Prisma.WeatherDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WeatherPayload>
          }
          update: {
            args: Prisma.WeatherUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WeatherPayload>
          }
          deleteMany: {
            args: Prisma.WeatherDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.WeatherUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.WeatherUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WeatherPayload>
          }
          aggregate: {
            args: Prisma.WeatherAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateWeather>
          }
          groupBy: {
            args: Prisma.WeatherGroupByArgs<ExtArgs>
            result: $Utils.Optional<WeatherGroupByOutputType>[]
          }
          count: {
            args: Prisma.WeatherCountArgs<ExtArgs>
            result: $Utils.Optional<WeatherCountAggregateOutputType> | number
          }
        }
      }
      BusinessPlan: {
        payload: Prisma.$BusinessPlanPayload<ExtArgs>
        fields: Prisma.BusinessPlanFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BusinessPlanFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BusinessPlanPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BusinessPlanFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BusinessPlanPayload>
          }
          findFirst: {
            args: Prisma.BusinessPlanFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BusinessPlanPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BusinessPlanFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BusinessPlanPayload>
          }
          findMany: {
            args: Prisma.BusinessPlanFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BusinessPlanPayload>[]
          }
          create: {
            args: Prisma.BusinessPlanCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BusinessPlanPayload>
          }
          createMany: {
            args: Prisma.BusinessPlanCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BusinessPlanCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BusinessPlanPayload>[]
          }
          delete: {
            args: Prisma.BusinessPlanDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BusinessPlanPayload>
          }
          update: {
            args: Prisma.BusinessPlanUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BusinessPlanPayload>
          }
          deleteMany: {
            args: Prisma.BusinessPlanDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BusinessPlanUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.BusinessPlanUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BusinessPlanPayload>
          }
          aggregate: {
            args: Prisma.BusinessPlanAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBusinessPlan>
          }
          groupBy: {
            args: Prisma.BusinessPlanGroupByArgs<ExtArgs>
            result: $Utils.Optional<BusinessPlanGroupByOutputType>[]
          }
          count: {
            args: Prisma.BusinessPlanCountArgs<ExtArgs>
            result: $Utils.Optional<BusinessPlanCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
  }


  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    lands: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    lands?: boolean | UserCountOutputTypeCountLandsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountLandsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LandWhereInput
  }


  /**
   * Count Type LandCountOutputType
   */

  export type LandCountOutputType = {
    statistics: number
    crops: number
    maintenances: number
    finances: number
    weather_data: number
    business_plans: number
  }

  export type LandCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    statistics?: boolean | LandCountOutputTypeCountStatisticsArgs
    crops?: boolean | LandCountOutputTypeCountCropsArgs
    maintenances?: boolean | LandCountOutputTypeCountMaintenancesArgs
    finances?: boolean | LandCountOutputTypeCountFinancesArgs
    weather_data?: boolean | LandCountOutputTypeCountWeather_dataArgs
    business_plans?: boolean | LandCountOutputTypeCountBusiness_plansArgs
  }

  // Custom InputTypes
  /**
   * LandCountOutputType without action
   */
  export type LandCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LandCountOutputType
     */
    select?: LandCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * LandCountOutputType without action
   */
  export type LandCountOutputTypeCountStatisticsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LandStatisticWhereInput
  }

  /**
   * LandCountOutputType without action
   */
  export type LandCountOutputTypeCountCropsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CropWhereInput
  }

  /**
   * LandCountOutputType without action
   */
  export type LandCountOutputTypeCountMaintenancesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CropMaintenanceWhereInput
  }

  /**
   * LandCountOutputType without action
   */
  export type LandCountOutputTypeCountFinancesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FinanceWhereInput
  }

  /**
   * LandCountOutputType without action
   */
  export type LandCountOutputTypeCountWeather_dataArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WeatherWhereInput
  }

  /**
   * LandCountOutputType without action
   */
  export type LandCountOutputTypeCountBusiness_plansArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BusinessPlanWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    user_id: string | null
  }

  export type UserMaxAggregateOutputType = {
    user_id: string | null
  }

  export type UserCountAggregateOutputType = {
    user_id: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    user_id?: true
  }

  export type UserMaxAggregateInputType = {
    user_id?: true
  }

  export type UserCountAggregateInputType = {
    user_id?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    user_id: string
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    user_id?: boolean
    lands?: boolean | User$landsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    user_id?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    user_id?: boolean
  }

  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    lands?: boolean | User$landsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      lands: Prisma.$LandPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      user_id: string
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `user_id`
     * const userWithUser_idOnly = await prisma.user.findMany({ select: { user_id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `user_id`
     * const userWithUser_idOnly = await prisma.user.createManyAndReturn({ 
     *   select: { user_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    lands<T extends User$landsArgs<ExtArgs> = {}>(args?: Subset<T, User$landsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LandPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */ 
  interface UserFieldRefs {
    readonly user_id: FieldRef<"User", 'String'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data?: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
  }

  /**
   * User.lands
   */
  export type User$landsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Land
     */
    select?: LandSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LandInclude<ExtArgs> | null
    where?: LandWhereInput
    orderBy?: LandOrderByWithRelationInput | LandOrderByWithRelationInput[]
    cursor?: LandWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LandScalarFieldEnum | LandScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Land
   */

  export type AggregateLand = {
    _count: LandCountAggregateOutputType | null
    _avg: LandAvgAggregateOutputType | null
    _sum: LandSumAggregateOutputType | null
    _min: LandMinAggregateOutputType | null
    _max: LandMaxAggregateOutputType | null
  }

  export type LandAvgAggregateOutputType = {
    latitude: number | null
    longitude: number | null
    land_size: number | null
    ph_level: number | null
    phosphorus: number | null
    potassium: number | null
    oxygen_level: number | null
    nitrogen: number | null
  }

  export type LandSumAggregateOutputType = {
    latitude: number | null
    longitude: number | null
    land_size: number | null
    ph_level: number | null
    phosphorus: number | null
    potassium: number | null
    oxygen_level: number | null
    nitrogen: number | null
  }

  export type LandMinAggregateOutputType = {
    land_id: string | null
    latitude: number | null
    longitude: number | null
    land_size: number | null
    land_name: string | null
    land_image: string | null
    ph_level: number | null
    phosphorus: number | null
    potassium: number | null
    oxygen_level: number | null
    nitrogen: number | null
    user_id: string | null
  }

  export type LandMaxAggregateOutputType = {
    land_id: string | null
    latitude: number | null
    longitude: number | null
    land_size: number | null
    land_name: string | null
    land_image: string | null
    ph_level: number | null
    phosphorus: number | null
    potassium: number | null
    oxygen_level: number | null
    nitrogen: number | null
    user_id: string | null
  }

  export type LandCountAggregateOutputType = {
    land_id: number
    latitude: number
    longitude: number
    land_size: number
    land_name: number
    land_image: number
    ph_level: number
    phosphorus: number
    potassium: number
    oxygen_level: number
    nitrogen: number
    user_id: number
    _all: number
  }


  export type LandAvgAggregateInputType = {
    latitude?: true
    longitude?: true
    land_size?: true
    ph_level?: true
    phosphorus?: true
    potassium?: true
    oxygen_level?: true
    nitrogen?: true
  }

  export type LandSumAggregateInputType = {
    latitude?: true
    longitude?: true
    land_size?: true
    ph_level?: true
    phosphorus?: true
    potassium?: true
    oxygen_level?: true
    nitrogen?: true
  }

  export type LandMinAggregateInputType = {
    land_id?: true
    latitude?: true
    longitude?: true
    land_size?: true
    land_name?: true
    land_image?: true
    ph_level?: true
    phosphorus?: true
    potassium?: true
    oxygen_level?: true
    nitrogen?: true
    user_id?: true
  }

  export type LandMaxAggregateInputType = {
    land_id?: true
    latitude?: true
    longitude?: true
    land_size?: true
    land_name?: true
    land_image?: true
    ph_level?: true
    phosphorus?: true
    potassium?: true
    oxygen_level?: true
    nitrogen?: true
    user_id?: true
  }

  export type LandCountAggregateInputType = {
    land_id?: true
    latitude?: true
    longitude?: true
    land_size?: true
    land_name?: true
    land_image?: true
    ph_level?: true
    phosphorus?: true
    potassium?: true
    oxygen_level?: true
    nitrogen?: true
    user_id?: true
    _all?: true
  }

  export type LandAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Land to aggregate.
     */
    where?: LandWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Lands to fetch.
     */
    orderBy?: LandOrderByWithRelationInput | LandOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LandWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Lands from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Lands.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Lands
    **/
    _count?: true | LandCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: LandAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: LandSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LandMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LandMaxAggregateInputType
  }

  export type GetLandAggregateType<T extends LandAggregateArgs> = {
        [P in keyof T & keyof AggregateLand]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLand[P]>
      : GetScalarType<T[P], AggregateLand[P]>
  }




  export type LandGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LandWhereInput
    orderBy?: LandOrderByWithAggregationInput | LandOrderByWithAggregationInput[]
    by: LandScalarFieldEnum[] | LandScalarFieldEnum
    having?: LandScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LandCountAggregateInputType | true
    _avg?: LandAvgAggregateInputType
    _sum?: LandSumAggregateInputType
    _min?: LandMinAggregateInputType
    _max?: LandMaxAggregateInputType
  }

  export type LandGroupByOutputType = {
    land_id: string
    latitude: number
    longitude: number
    land_size: number
    land_name: string | null
    land_image: string | null
    ph_level: number
    phosphorus: number
    potassium: number
    oxygen_level: number
    nitrogen: number
    user_id: string
    _count: LandCountAggregateOutputType | null
    _avg: LandAvgAggregateOutputType | null
    _sum: LandSumAggregateOutputType | null
    _min: LandMinAggregateOutputType | null
    _max: LandMaxAggregateOutputType | null
  }

  type GetLandGroupByPayload<T extends LandGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LandGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LandGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LandGroupByOutputType[P]>
            : GetScalarType<T[P], LandGroupByOutputType[P]>
        }
      >
    >


  export type LandSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    land_id?: boolean
    latitude?: boolean
    longitude?: boolean
    land_size?: boolean
    land_name?: boolean
    land_image?: boolean
    ph_level?: boolean
    phosphorus?: boolean
    potassium?: boolean
    oxygen_level?: boolean
    nitrogen?: boolean
    user_id?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    statistics?: boolean | Land$statisticsArgs<ExtArgs>
    crops?: boolean | Land$cropsArgs<ExtArgs>
    maintenances?: boolean | Land$maintenancesArgs<ExtArgs>
    finances?: boolean | Land$financesArgs<ExtArgs>
    weather_data?: boolean | Land$weather_dataArgs<ExtArgs>
    business_plans?: boolean | Land$business_plansArgs<ExtArgs>
    _count?: boolean | LandCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["land"]>

  export type LandSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    land_id?: boolean
    latitude?: boolean
    longitude?: boolean
    land_size?: boolean
    land_name?: boolean
    land_image?: boolean
    ph_level?: boolean
    phosphorus?: boolean
    potassium?: boolean
    oxygen_level?: boolean
    nitrogen?: boolean
    user_id?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["land"]>

  export type LandSelectScalar = {
    land_id?: boolean
    latitude?: boolean
    longitude?: boolean
    land_size?: boolean
    land_name?: boolean
    land_image?: boolean
    ph_level?: boolean
    phosphorus?: boolean
    potassium?: boolean
    oxygen_level?: boolean
    nitrogen?: boolean
    user_id?: boolean
  }

  export type LandInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    statistics?: boolean | Land$statisticsArgs<ExtArgs>
    crops?: boolean | Land$cropsArgs<ExtArgs>
    maintenances?: boolean | Land$maintenancesArgs<ExtArgs>
    finances?: boolean | Land$financesArgs<ExtArgs>
    weather_data?: boolean | Land$weather_dataArgs<ExtArgs>
    business_plans?: boolean | Land$business_plansArgs<ExtArgs>
    _count?: boolean | LandCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type LandIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $LandPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Land"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      statistics: Prisma.$LandStatisticPayload<ExtArgs>[]
      crops: Prisma.$CropPayload<ExtArgs>[]
      maintenances: Prisma.$CropMaintenancePayload<ExtArgs>[]
      finances: Prisma.$FinancePayload<ExtArgs>[]
      weather_data: Prisma.$WeatherPayload<ExtArgs>[]
      business_plans: Prisma.$BusinessPlanPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      land_id: string
      latitude: number
      longitude: number
      land_size: number
      land_name: string | null
      land_image: string | null
      ph_level: number
      phosphorus: number
      potassium: number
      oxygen_level: number
      nitrogen: number
      user_id: string
    }, ExtArgs["result"]["land"]>
    composites: {}
  }

  type LandGetPayload<S extends boolean | null | undefined | LandDefaultArgs> = $Result.GetResult<Prisma.$LandPayload, S>

  type LandCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<LandFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: LandCountAggregateInputType | true
    }

  export interface LandDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Land'], meta: { name: 'Land' } }
    /**
     * Find zero or one Land that matches the filter.
     * @param {LandFindUniqueArgs} args - Arguments to find a Land
     * @example
     * // Get one Land
     * const land = await prisma.land.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LandFindUniqueArgs>(args: SelectSubset<T, LandFindUniqueArgs<ExtArgs>>): Prisma__LandClient<$Result.GetResult<Prisma.$LandPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Land that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {LandFindUniqueOrThrowArgs} args - Arguments to find a Land
     * @example
     * // Get one Land
     * const land = await prisma.land.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LandFindUniqueOrThrowArgs>(args: SelectSubset<T, LandFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LandClient<$Result.GetResult<Prisma.$LandPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Land that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LandFindFirstArgs} args - Arguments to find a Land
     * @example
     * // Get one Land
     * const land = await prisma.land.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LandFindFirstArgs>(args?: SelectSubset<T, LandFindFirstArgs<ExtArgs>>): Prisma__LandClient<$Result.GetResult<Prisma.$LandPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Land that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LandFindFirstOrThrowArgs} args - Arguments to find a Land
     * @example
     * // Get one Land
     * const land = await prisma.land.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LandFindFirstOrThrowArgs>(args?: SelectSubset<T, LandFindFirstOrThrowArgs<ExtArgs>>): Prisma__LandClient<$Result.GetResult<Prisma.$LandPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Lands that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LandFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Lands
     * const lands = await prisma.land.findMany()
     * 
     * // Get first 10 Lands
     * const lands = await prisma.land.findMany({ take: 10 })
     * 
     * // Only select the `land_id`
     * const landWithLand_idOnly = await prisma.land.findMany({ select: { land_id: true } })
     * 
     */
    findMany<T extends LandFindManyArgs>(args?: SelectSubset<T, LandFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LandPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Land.
     * @param {LandCreateArgs} args - Arguments to create a Land.
     * @example
     * // Create one Land
     * const Land = await prisma.land.create({
     *   data: {
     *     // ... data to create a Land
     *   }
     * })
     * 
     */
    create<T extends LandCreateArgs>(args: SelectSubset<T, LandCreateArgs<ExtArgs>>): Prisma__LandClient<$Result.GetResult<Prisma.$LandPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Lands.
     * @param {LandCreateManyArgs} args - Arguments to create many Lands.
     * @example
     * // Create many Lands
     * const land = await prisma.land.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LandCreateManyArgs>(args?: SelectSubset<T, LandCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Lands and returns the data saved in the database.
     * @param {LandCreateManyAndReturnArgs} args - Arguments to create many Lands.
     * @example
     * // Create many Lands
     * const land = await prisma.land.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Lands and only return the `land_id`
     * const landWithLand_idOnly = await prisma.land.createManyAndReturn({ 
     *   select: { land_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends LandCreateManyAndReturnArgs>(args?: SelectSubset<T, LandCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LandPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Land.
     * @param {LandDeleteArgs} args - Arguments to delete one Land.
     * @example
     * // Delete one Land
     * const Land = await prisma.land.delete({
     *   where: {
     *     // ... filter to delete one Land
     *   }
     * })
     * 
     */
    delete<T extends LandDeleteArgs>(args: SelectSubset<T, LandDeleteArgs<ExtArgs>>): Prisma__LandClient<$Result.GetResult<Prisma.$LandPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Land.
     * @param {LandUpdateArgs} args - Arguments to update one Land.
     * @example
     * // Update one Land
     * const land = await prisma.land.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LandUpdateArgs>(args: SelectSubset<T, LandUpdateArgs<ExtArgs>>): Prisma__LandClient<$Result.GetResult<Prisma.$LandPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Lands.
     * @param {LandDeleteManyArgs} args - Arguments to filter Lands to delete.
     * @example
     * // Delete a few Lands
     * const { count } = await prisma.land.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LandDeleteManyArgs>(args?: SelectSubset<T, LandDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Lands.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LandUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Lands
     * const land = await prisma.land.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LandUpdateManyArgs>(args: SelectSubset<T, LandUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Land.
     * @param {LandUpsertArgs} args - Arguments to update or create a Land.
     * @example
     * // Update or create a Land
     * const land = await prisma.land.upsert({
     *   create: {
     *     // ... data to create a Land
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Land we want to update
     *   }
     * })
     */
    upsert<T extends LandUpsertArgs>(args: SelectSubset<T, LandUpsertArgs<ExtArgs>>): Prisma__LandClient<$Result.GetResult<Prisma.$LandPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Lands.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LandCountArgs} args - Arguments to filter Lands to count.
     * @example
     * // Count the number of Lands
     * const count = await prisma.land.count({
     *   where: {
     *     // ... the filter for the Lands we want to count
     *   }
     * })
    **/
    count<T extends LandCountArgs>(
      args?: Subset<T, LandCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LandCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Land.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LandAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends LandAggregateArgs>(args: Subset<T, LandAggregateArgs>): Prisma.PrismaPromise<GetLandAggregateType<T>>

    /**
     * Group by Land.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LandGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends LandGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LandGroupByArgs['orderBy'] }
        : { orderBy?: LandGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, LandGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLandGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Land model
   */
  readonly fields: LandFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Land.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LandClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    statistics<T extends Land$statisticsArgs<ExtArgs> = {}>(args?: Subset<T, Land$statisticsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LandStatisticPayload<ExtArgs>, T, "findMany"> | Null>
    crops<T extends Land$cropsArgs<ExtArgs> = {}>(args?: Subset<T, Land$cropsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CropPayload<ExtArgs>, T, "findMany"> | Null>
    maintenances<T extends Land$maintenancesArgs<ExtArgs> = {}>(args?: Subset<T, Land$maintenancesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CropMaintenancePayload<ExtArgs>, T, "findMany"> | Null>
    finances<T extends Land$financesArgs<ExtArgs> = {}>(args?: Subset<T, Land$financesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FinancePayload<ExtArgs>, T, "findMany"> | Null>
    weather_data<T extends Land$weather_dataArgs<ExtArgs> = {}>(args?: Subset<T, Land$weather_dataArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WeatherPayload<ExtArgs>, T, "findMany"> | Null>
    business_plans<T extends Land$business_plansArgs<ExtArgs> = {}>(args?: Subset<T, Land$business_plansArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BusinessPlanPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Land model
   */ 
  interface LandFieldRefs {
    readonly land_id: FieldRef<"Land", 'String'>
    readonly latitude: FieldRef<"Land", 'Float'>
    readonly longitude: FieldRef<"Land", 'Float'>
    readonly land_size: FieldRef<"Land", 'Float'>
    readonly land_name: FieldRef<"Land", 'String'>
    readonly land_image: FieldRef<"Land", 'String'>
    readonly ph_level: FieldRef<"Land", 'Float'>
    readonly phosphorus: FieldRef<"Land", 'Float'>
    readonly potassium: FieldRef<"Land", 'Float'>
    readonly oxygen_level: FieldRef<"Land", 'Float'>
    readonly nitrogen: FieldRef<"Land", 'Float'>
    readonly user_id: FieldRef<"Land", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Land findUnique
   */
  export type LandFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Land
     */
    select?: LandSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LandInclude<ExtArgs> | null
    /**
     * Filter, which Land to fetch.
     */
    where: LandWhereUniqueInput
  }

  /**
   * Land findUniqueOrThrow
   */
  export type LandFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Land
     */
    select?: LandSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LandInclude<ExtArgs> | null
    /**
     * Filter, which Land to fetch.
     */
    where: LandWhereUniqueInput
  }

  /**
   * Land findFirst
   */
  export type LandFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Land
     */
    select?: LandSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LandInclude<ExtArgs> | null
    /**
     * Filter, which Land to fetch.
     */
    where?: LandWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Lands to fetch.
     */
    orderBy?: LandOrderByWithRelationInput | LandOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Lands.
     */
    cursor?: LandWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Lands from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Lands.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Lands.
     */
    distinct?: LandScalarFieldEnum | LandScalarFieldEnum[]
  }

  /**
   * Land findFirstOrThrow
   */
  export type LandFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Land
     */
    select?: LandSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LandInclude<ExtArgs> | null
    /**
     * Filter, which Land to fetch.
     */
    where?: LandWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Lands to fetch.
     */
    orderBy?: LandOrderByWithRelationInput | LandOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Lands.
     */
    cursor?: LandWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Lands from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Lands.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Lands.
     */
    distinct?: LandScalarFieldEnum | LandScalarFieldEnum[]
  }

  /**
   * Land findMany
   */
  export type LandFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Land
     */
    select?: LandSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LandInclude<ExtArgs> | null
    /**
     * Filter, which Lands to fetch.
     */
    where?: LandWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Lands to fetch.
     */
    orderBy?: LandOrderByWithRelationInput | LandOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Lands.
     */
    cursor?: LandWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Lands from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Lands.
     */
    skip?: number
    distinct?: LandScalarFieldEnum | LandScalarFieldEnum[]
  }

  /**
   * Land create
   */
  export type LandCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Land
     */
    select?: LandSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LandInclude<ExtArgs> | null
    /**
     * The data needed to create a Land.
     */
    data: XOR<LandCreateInput, LandUncheckedCreateInput>
  }

  /**
   * Land createMany
   */
  export type LandCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Lands.
     */
    data: LandCreateManyInput | LandCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Land createManyAndReturn
   */
  export type LandCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Land
     */
    select?: LandSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Lands.
     */
    data: LandCreateManyInput | LandCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LandIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Land update
   */
  export type LandUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Land
     */
    select?: LandSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LandInclude<ExtArgs> | null
    /**
     * The data needed to update a Land.
     */
    data: XOR<LandUpdateInput, LandUncheckedUpdateInput>
    /**
     * Choose, which Land to update.
     */
    where: LandWhereUniqueInput
  }

  /**
   * Land updateMany
   */
  export type LandUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Lands.
     */
    data: XOR<LandUpdateManyMutationInput, LandUncheckedUpdateManyInput>
    /**
     * Filter which Lands to update
     */
    where?: LandWhereInput
  }

  /**
   * Land upsert
   */
  export type LandUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Land
     */
    select?: LandSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LandInclude<ExtArgs> | null
    /**
     * The filter to search for the Land to update in case it exists.
     */
    where: LandWhereUniqueInput
    /**
     * In case the Land found by the `where` argument doesn't exist, create a new Land with this data.
     */
    create: XOR<LandCreateInput, LandUncheckedCreateInput>
    /**
     * In case the Land was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LandUpdateInput, LandUncheckedUpdateInput>
  }

  /**
   * Land delete
   */
  export type LandDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Land
     */
    select?: LandSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LandInclude<ExtArgs> | null
    /**
     * Filter which Land to delete.
     */
    where: LandWhereUniqueInput
  }

  /**
   * Land deleteMany
   */
  export type LandDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Lands to delete
     */
    where?: LandWhereInput
  }

  /**
   * Land.statistics
   */
  export type Land$statisticsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LandStatistic
     */
    select?: LandStatisticSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LandStatisticInclude<ExtArgs> | null
    where?: LandStatisticWhereInput
    orderBy?: LandStatisticOrderByWithRelationInput | LandStatisticOrderByWithRelationInput[]
    cursor?: LandStatisticWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LandStatisticScalarFieldEnum | LandStatisticScalarFieldEnum[]
  }

  /**
   * Land.crops
   */
  export type Land$cropsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Crop
     */
    select?: CropSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CropInclude<ExtArgs> | null
    where?: CropWhereInput
    orderBy?: CropOrderByWithRelationInput | CropOrderByWithRelationInput[]
    cursor?: CropWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CropScalarFieldEnum | CropScalarFieldEnum[]
  }

  /**
   * Land.maintenances
   */
  export type Land$maintenancesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CropMaintenance
     */
    select?: CropMaintenanceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CropMaintenanceInclude<ExtArgs> | null
    where?: CropMaintenanceWhereInput
    orderBy?: CropMaintenanceOrderByWithRelationInput | CropMaintenanceOrderByWithRelationInput[]
    cursor?: CropMaintenanceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CropMaintenanceScalarFieldEnum | CropMaintenanceScalarFieldEnum[]
  }

  /**
   * Land.finances
   */
  export type Land$financesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Finance
     */
    select?: FinanceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FinanceInclude<ExtArgs> | null
    where?: FinanceWhereInput
    orderBy?: FinanceOrderByWithRelationInput | FinanceOrderByWithRelationInput[]
    cursor?: FinanceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FinanceScalarFieldEnum | FinanceScalarFieldEnum[]
  }

  /**
   * Land.weather_data
   */
  export type Land$weather_dataArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Weather
     */
    select?: WeatherSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WeatherInclude<ExtArgs> | null
    where?: WeatherWhereInput
    orderBy?: WeatherOrderByWithRelationInput | WeatherOrderByWithRelationInput[]
    cursor?: WeatherWhereUniqueInput
    take?: number
    skip?: number
    distinct?: WeatherScalarFieldEnum | WeatherScalarFieldEnum[]
  }

  /**
   * Land.business_plans
   */
  export type Land$business_plansArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BusinessPlan
     */
    select?: BusinessPlanSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BusinessPlanInclude<ExtArgs> | null
    where?: BusinessPlanWhereInput
    orderBy?: BusinessPlanOrderByWithRelationInput | BusinessPlanOrderByWithRelationInput[]
    cursor?: BusinessPlanWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BusinessPlanScalarFieldEnum | BusinessPlanScalarFieldEnum[]
  }

  /**
   * Land without action
   */
  export type LandDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Land
     */
    select?: LandSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LandInclude<ExtArgs> | null
  }


  /**
   * Model LandStatistic
   */

  export type AggregateLandStatistic = {
    _count: LandStatisticCountAggregateOutputType | null
    _avg: LandStatisticAvgAggregateOutputType | null
    _sum: LandStatisticSumAggregateOutputType | null
    _min: LandStatisticMinAggregateOutputType | null
    _max: LandStatisticMaxAggregateOutputType | null
  }

  export type LandStatisticAvgAggregateOutputType = {
    land_use: number | null
    human_coverage: number | null
    water_availability: number | null
    distribution_optimality: number | null
    total_profit: number | null
  }

  export type LandStatisticSumAggregateOutputType = {
    land_use: number | null
    human_coverage: number | null
    water_availability: number | null
    distribution_optimality: number | null
    total_profit: number | null
  }

  export type LandStatisticMinAggregateOutputType = {
    land_stat_id: string | null
    land_use: number | null
    human_coverage: number | null
    water_availability: number | null
    distribution_optimality: number | null
    total_profit: number | null
    land_id: string | null
  }

  export type LandStatisticMaxAggregateOutputType = {
    land_stat_id: string | null
    land_use: number | null
    human_coverage: number | null
    water_availability: number | null
    distribution_optimality: number | null
    total_profit: number | null
    land_id: string | null
  }

  export type LandStatisticCountAggregateOutputType = {
    land_stat_id: number
    land_use: number
    human_coverage: number
    water_availability: number
    distribution_optimality: number
    total_profit: number
    land_id: number
    _all: number
  }


  export type LandStatisticAvgAggregateInputType = {
    land_use?: true
    human_coverage?: true
    water_availability?: true
    distribution_optimality?: true
    total_profit?: true
  }

  export type LandStatisticSumAggregateInputType = {
    land_use?: true
    human_coverage?: true
    water_availability?: true
    distribution_optimality?: true
    total_profit?: true
  }

  export type LandStatisticMinAggregateInputType = {
    land_stat_id?: true
    land_use?: true
    human_coverage?: true
    water_availability?: true
    distribution_optimality?: true
    total_profit?: true
    land_id?: true
  }

  export type LandStatisticMaxAggregateInputType = {
    land_stat_id?: true
    land_use?: true
    human_coverage?: true
    water_availability?: true
    distribution_optimality?: true
    total_profit?: true
    land_id?: true
  }

  export type LandStatisticCountAggregateInputType = {
    land_stat_id?: true
    land_use?: true
    human_coverage?: true
    water_availability?: true
    distribution_optimality?: true
    total_profit?: true
    land_id?: true
    _all?: true
  }

  export type LandStatisticAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LandStatistic to aggregate.
     */
    where?: LandStatisticWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LandStatistics to fetch.
     */
    orderBy?: LandStatisticOrderByWithRelationInput | LandStatisticOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LandStatisticWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LandStatistics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LandStatistics.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned LandStatistics
    **/
    _count?: true | LandStatisticCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: LandStatisticAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: LandStatisticSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LandStatisticMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LandStatisticMaxAggregateInputType
  }

  export type GetLandStatisticAggregateType<T extends LandStatisticAggregateArgs> = {
        [P in keyof T & keyof AggregateLandStatistic]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLandStatistic[P]>
      : GetScalarType<T[P], AggregateLandStatistic[P]>
  }




  export type LandStatisticGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LandStatisticWhereInput
    orderBy?: LandStatisticOrderByWithAggregationInput | LandStatisticOrderByWithAggregationInput[]
    by: LandStatisticScalarFieldEnum[] | LandStatisticScalarFieldEnum
    having?: LandStatisticScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LandStatisticCountAggregateInputType | true
    _avg?: LandStatisticAvgAggregateInputType
    _sum?: LandStatisticSumAggregateInputType
    _min?: LandStatisticMinAggregateInputType
    _max?: LandStatisticMaxAggregateInputType
  }

  export type LandStatisticGroupByOutputType = {
    land_stat_id: string
    land_use: number
    human_coverage: number
    water_availability: number
    distribution_optimality: number
    total_profit: number
    land_id: string
    _count: LandStatisticCountAggregateOutputType | null
    _avg: LandStatisticAvgAggregateOutputType | null
    _sum: LandStatisticSumAggregateOutputType | null
    _min: LandStatisticMinAggregateOutputType | null
    _max: LandStatisticMaxAggregateOutputType | null
  }

  type GetLandStatisticGroupByPayload<T extends LandStatisticGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LandStatisticGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LandStatisticGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LandStatisticGroupByOutputType[P]>
            : GetScalarType<T[P], LandStatisticGroupByOutputType[P]>
        }
      >
    >


  export type LandStatisticSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    land_stat_id?: boolean
    land_use?: boolean
    human_coverage?: boolean
    water_availability?: boolean
    distribution_optimality?: boolean
    total_profit?: boolean
    land_id?: boolean
    land?: boolean | LandDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["landStatistic"]>

  export type LandStatisticSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    land_stat_id?: boolean
    land_use?: boolean
    human_coverage?: boolean
    water_availability?: boolean
    distribution_optimality?: boolean
    total_profit?: boolean
    land_id?: boolean
    land?: boolean | LandDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["landStatistic"]>

  export type LandStatisticSelectScalar = {
    land_stat_id?: boolean
    land_use?: boolean
    human_coverage?: boolean
    water_availability?: boolean
    distribution_optimality?: boolean
    total_profit?: boolean
    land_id?: boolean
  }

  export type LandStatisticInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    land?: boolean | LandDefaultArgs<ExtArgs>
  }
  export type LandStatisticIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    land?: boolean | LandDefaultArgs<ExtArgs>
  }

  export type $LandStatisticPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "LandStatistic"
    objects: {
      land: Prisma.$LandPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      land_stat_id: string
      land_use: number
      human_coverage: number
      water_availability: number
      distribution_optimality: number
      total_profit: number
      land_id: string
    }, ExtArgs["result"]["landStatistic"]>
    composites: {}
  }

  type LandStatisticGetPayload<S extends boolean | null | undefined | LandStatisticDefaultArgs> = $Result.GetResult<Prisma.$LandStatisticPayload, S>

  type LandStatisticCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<LandStatisticFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: LandStatisticCountAggregateInputType | true
    }

  export interface LandStatisticDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['LandStatistic'], meta: { name: 'LandStatistic' } }
    /**
     * Find zero or one LandStatistic that matches the filter.
     * @param {LandStatisticFindUniqueArgs} args - Arguments to find a LandStatistic
     * @example
     * // Get one LandStatistic
     * const landStatistic = await prisma.landStatistic.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LandStatisticFindUniqueArgs>(args: SelectSubset<T, LandStatisticFindUniqueArgs<ExtArgs>>): Prisma__LandStatisticClient<$Result.GetResult<Prisma.$LandStatisticPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one LandStatistic that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {LandStatisticFindUniqueOrThrowArgs} args - Arguments to find a LandStatistic
     * @example
     * // Get one LandStatistic
     * const landStatistic = await prisma.landStatistic.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LandStatisticFindUniqueOrThrowArgs>(args: SelectSubset<T, LandStatisticFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LandStatisticClient<$Result.GetResult<Prisma.$LandStatisticPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first LandStatistic that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LandStatisticFindFirstArgs} args - Arguments to find a LandStatistic
     * @example
     * // Get one LandStatistic
     * const landStatistic = await prisma.landStatistic.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LandStatisticFindFirstArgs>(args?: SelectSubset<T, LandStatisticFindFirstArgs<ExtArgs>>): Prisma__LandStatisticClient<$Result.GetResult<Prisma.$LandStatisticPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first LandStatistic that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LandStatisticFindFirstOrThrowArgs} args - Arguments to find a LandStatistic
     * @example
     * // Get one LandStatistic
     * const landStatistic = await prisma.landStatistic.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LandStatisticFindFirstOrThrowArgs>(args?: SelectSubset<T, LandStatisticFindFirstOrThrowArgs<ExtArgs>>): Prisma__LandStatisticClient<$Result.GetResult<Prisma.$LandStatisticPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more LandStatistics that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LandStatisticFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all LandStatistics
     * const landStatistics = await prisma.landStatistic.findMany()
     * 
     * // Get first 10 LandStatistics
     * const landStatistics = await prisma.landStatistic.findMany({ take: 10 })
     * 
     * // Only select the `land_stat_id`
     * const landStatisticWithLand_stat_idOnly = await prisma.landStatistic.findMany({ select: { land_stat_id: true } })
     * 
     */
    findMany<T extends LandStatisticFindManyArgs>(args?: SelectSubset<T, LandStatisticFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LandStatisticPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a LandStatistic.
     * @param {LandStatisticCreateArgs} args - Arguments to create a LandStatistic.
     * @example
     * // Create one LandStatistic
     * const LandStatistic = await prisma.landStatistic.create({
     *   data: {
     *     // ... data to create a LandStatistic
     *   }
     * })
     * 
     */
    create<T extends LandStatisticCreateArgs>(args: SelectSubset<T, LandStatisticCreateArgs<ExtArgs>>): Prisma__LandStatisticClient<$Result.GetResult<Prisma.$LandStatisticPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many LandStatistics.
     * @param {LandStatisticCreateManyArgs} args - Arguments to create many LandStatistics.
     * @example
     * // Create many LandStatistics
     * const landStatistic = await prisma.landStatistic.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LandStatisticCreateManyArgs>(args?: SelectSubset<T, LandStatisticCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many LandStatistics and returns the data saved in the database.
     * @param {LandStatisticCreateManyAndReturnArgs} args - Arguments to create many LandStatistics.
     * @example
     * // Create many LandStatistics
     * const landStatistic = await prisma.landStatistic.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many LandStatistics and only return the `land_stat_id`
     * const landStatisticWithLand_stat_idOnly = await prisma.landStatistic.createManyAndReturn({ 
     *   select: { land_stat_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends LandStatisticCreateManyAndReturnArgs>(args?: SelectSubset<T, LandStatisticCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LandStatisticPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a LandStatistic.
     * @param {LandStatisticDeleteArgs} args - Arguments to delete one LandStatistic.
     * @example
     * // Delete one LandStatistic
     * const LandStatistic = await prisma.landStatistic.delete({
     *   where: {
     *     // ... filter to delete one LandStatistic
     *   }
     * })
     * 
     */
    delete<T extends LandStatisticDeleteArgs>(args: SelectSubset<T, LandStatisticDeleteArgs<ExtArgs>>): Prisma__LandStatisticClient<$Result.GetResult<Prisma.$LandStatisticPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one LandStatistic.
     * @param {LandStatisticUpdateArgs} args - Arguments to update one LandStatistic.
     * @example
     * // Update one LandStatistic
     * const landStatistic = await prisma.landStatistic.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LandStatisticUpdateArgs>(args: SelectSubset<T, LandStatisticUpdateArgs<ExtArgs>>): Prisma__LandStatisticClient<$Result.GetResult<Prisma.$LandStatisticPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more LandStatistics.
     * @param {LandStatisticDeleteManyArgs} args - Arguments to filter LandStatistics to delete.
     * @example
     * // Delete a few LandStatistics
     * const { count } = await prisma.landStatistic.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LandStatisticDeleteManyArgs>(args?: SelectSubset<T, LandStatisticDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more LandStatistics.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LandStatisticUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many LandStatistics
     * const landStatistic = await prisma.landStatistic.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LandStatisticUpdateManyArgs>(args: SelectSubset<T, LandStatisticUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one LandStatistic.
     * @param {LandStatisticUpsertArgs} args - Arguments to update or create a LandStatistic.
     * @example
     * // Update or create a LandStatistic
     * const landStatistic = await prisma.landStatistic.upsert({
     *   create: {
     *     // ... data to create a LandStatistic
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the LandStatistic we want to update
     *   }
     * })
     */
    upsert<T extends LandStatisticUpsertArgs>(args: SelectSubset<T, LandStatisticUpsertArgs<ExtArgs>>): Prisma__LandStatisticClient<$Result.GetResult<Prisma.$LandStatisticPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of LandStatistics.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LandStatisticCountArgs} args - Arguments to filter LandStatistics to count.
     * @example
     * // Count the number of LandStatistics
     * const count = await prisma.landStatistic.count({
     *   where: {
     *     // ... the filter for the LandStatistics we want to count
     *   }
     * })
    **/
    count<T extends LandStatisticCountArgs>(
      args?: Subset<T, LandStatisticCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LandStatisticCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a LandStatistic.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LandStatisticAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends LandStatisticAggregateArgs>(args: Subset<T, LandStatisticAggregateArgs>): Prisma.PrismaPromise<GetLandStatisticAggregateType<T>>

    /**
     * Group by LandStatistic.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LandStatisticGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends LandStatisticGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LandStatisticGroupByArgs['orderBy'] }
        : { orderBy?: LandStatisticGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, LandStatisticGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLandStatisticGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the LandStatistic model
   */
  readonly fields: LandStatisticFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for LandStatistic.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LandStatisticClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    land<T extends LandDefaultArgs<ExtArgs> = {}>(args?: Subset<T, LandDefaultArgs<ExtArgs>>): Prisma__LandClient<$Result.GetResult<Prisma.$LandPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the LandStatistic model
   */ 
  interface LandStatisticFieldRefs {
    readonly land_stat_id: FieldRef<"LandStatistic", 'String'>
    readonly land_use: FieldRef<"LandStatistic", 'Float'>
    readonly human_coverage: FieldRef<"LandStatistic", 'Float'>
    readonly water_availability: FieldRef<"LandStatistic", 'Float'>
    readonly distribution_optimality: FieldRef<"LandStatistic", 'Float'>
    readonly total_profit: FieldRef<"LandStatistic", 'Float'>
    readonly land_id: FieldRef<"LandStatistic", 'String'>
  }
    

  // Custom InputTypes
  /**
   * LandStatistic findUnique
   */
  export type LandStatisticFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LandStatistic
     */
    select?: LandStatisticSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LandStatisticInclude<ExtArgs> | null
    /**
     * Filter, which LandStatistic to fetch.
     */
    where: LandStatisticWhereUniqueInput
  }

  /**
   * LandStatistic findUniqueOrThrow
   */
  export type LandStatisticFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LandStatistic
     */
    select?: LandStatisticSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LandStatisticInclude<ExtArgs> | null
    /**
     * Filter, which LandStatistic to fetch.
     */
    where: LandStatisticWhereUniqueInput
  }

  /**
   * LandStatistic findFirst
   */
  export type LandStatisticFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LandStatistic
     */
    select?: LandStatisticSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LandStatisticInclude<ExtArgs> | null
    /**
     * Filter, which LandStatistic to fetch.
     */
    where?: LandStatisticWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LandStatistics to fetch.
     */
    orderBy?: LandStatisticOrderByWithRelationInput | LandStatisticOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LandStatistics.
     */
    cursor?: LandStatisticWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LandStatistics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LandStatistics.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LandStatistics.
     */
    distinct?: LandStatisticScalarFieldEnum | LandStatisticScalarFieldEnum[]
  }

  /**
   * LandStatistic findFirstOrThrow
   */
  export type LandStatisticFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LandStatistic
     */
    select?: LandStatisticSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LandStatisticInclude<ExtArgs> | null
    /**
     * Filter, which LandStatistic to fetch.
     */
    where?: LandStatisticWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LandStatistics to fetch.
     */
    orderBy?: LandStatisticOrderByWithRelationInput | LandStatisticOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LandStatistics.
     */
    cursor?: LandStatisticWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LandStatistics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LandStatistics.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LandStatistics.
     */
    distinct?: LandStatisticScalarFieldEnum | LandStatisticScalarFieldEnum[]
  }

  /**
   * LandStatistic findMany
   */
  export type LandStatisticFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LandStatistic
     */
    select?: LandStatisticSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LandStatisticInclude<ExtArgs> | null
    /**
     * Filter, which LandStatistics to fetch.
     */
    where?: LandStatisticWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LandStatistics to fetch.
     */
    orderBy?: LandStatisticOrderByWithRelationInput | LandStatisticOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing LandStatistics.
     */
    cursor?: LandStatisticWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LandStatistics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LandStatistics.
     */
    skip?: number
    distinct?: LandStatisticScalarFieldEnum | LandStatisticScalarFieldEnum[]
  }

  /**
   * LandStatistic create
   */
  export type LandStatisticCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LandStatistic
     */
    select?: LandStatisticSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LandStatisticInclude<ExtArgs> | null
    /**
     * The data needed to create a LandStatistic.
     */
    data: XOR<LandStatisticCreateInput, LandStatisticUncheckedCreateInput>
  }

  /**
   * LandStatistic createMany
   */
  export type LandStatisticCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many LandStatistics.
     */
    data: LandStatisticCreateManyInput | LandStatisticCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * LandStatistic createManyAndReturn
   */
  export type LandStatisticCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LandStatistic
     */
    select?: LandStatisticSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many LandStatistics.
     */
    data: LandStatisticCreateManyInput | LandStatisticCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LandStatisticIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * LandStatistic update
   */
  export type LandStatisticUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LandStatistic
     */
    select?: LandStatisticSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LandStatisticInclude<ExtArgs> | null
    /**
     * The data needed to update a LandStatistic.
     */
    data: XOR<LandStatisticUpdateInput, LandStatisticUncheckedUpdateInput>
    /**
     * Choose, which LandStatistic to update.
     */
    where: LandStatisticWhereUniqueInput
  }

  /**
   * LandStatistic updateMany
   */
  export type LandStatisticUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update LandStatistics.
     */
    data: XOR<LandStatisticUpdateManyMutationInput, LandStatisticUncheckedUpdateManyInput>
    /**
     * Filter which LandStatistics to update
     */
    where?: LandStatisticWhereInput
  }

  /**
   * LandStatistic upsert
   */
  export type LandStatisticUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LandStatistic
     */
    select?: LandStatisticSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LandStatisticInclude<ExtArgs> | null
    /**
     * The filter to search for the LandStatistic to update in case it exists.
     */
    where: LandStatisticWhereUniqueInput
    /**
     * In case the LandStatistic found by the `where` argument doesn't exist, create a new LandStatistic with this data.
     */
    create: XOR<LandStatisticCreateInput, LandStatisticUncheckedCreateInput>
    /**
     * In case the LandStatistic was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LandStatisticUpdateInput, LandStatisticUncheckedUpdateInput>
  }

  /**
   * LandStatistic delete
   */
  export type LandStatisticDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LandStatistic
     */
    select?: LandStatisticSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LandStatisticInclude<ExtArgs> | null
    /**
     * Filter which LandStatistic to delete.
     */
    where: LandStatisticWhereUniqueInput
  }

  /**
   * LandStatistic deleteMany
   */
  export type LandStatisticDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LandStatistics to delete
     */
    where?: LandStatisticWhereInput
  }

  /**
   * LandStatistic without action
   */
  export type LandStatisticDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LandStatistic
     */
    select?: LandStatisticSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LandStatisticInclude<ExtArgs> | null
  }


  /**
   * Model Crop
   */

  export type AggregateCrop = {
    _count: CropCountAggregateOutputType | null
    _avg: CropAvgAggregateOutputType | null
    _sum: CropSumAggregateOutputType | null
    _min: CropMinAggregateOutputType | null
    _max: CropMaxAggregateOutputType | null
  }

  export type CropAvgAggregateOutputType = {
    crop_area: number | null
    crop_investment: number | null
    expected_money_return: number | null
    expected_weight_return: number | null
  }

  export type CropSumAggregateOutputType = {
    crop_area: number | null
    crop_investment: number | null
    expected_money_return: number | null
    expected_weight_return: number | null
  }

  export type CropMinAggregateOutputType = {
    crop_id: string | null
    crop_name: string | null
    crop_area: number | null
    crop_investment: number | null
    expected_money_return: number | null
    expected_weight_return: number | null
    land_id: string | null
  }

  export type CropMaxAggregateOutputType = {
    crop_id: string | null
    crop_name: string | null
    crop_area: number | null
    crop_investment: number | null
    expected_money_return: number | null
    expected_weight_return: number | null
    land_id: string | null
  }

  export type CropCountAggregateOutputType = {
    crop_id: number
    crop_name: number
    crop_area: number
    crop_investment: number
    expected_money_return: number
    expected_weight_return: number
    land_id: number
    _all: number
  }


  export type CropAvgAggregateInputType = {
    crop_area?: true
    crop_investment?: true
    expected_money_return?: true
    expected_weight_return?: true
  }

  export type CropSumAggregateInputType = {
    crop_area?: true
    crop_investment?: true
    expected_money_return?: true
    expected_weight_return?: true
  }

  export type CropMinAggregateInputType = {
    crop_id?: true
    crop_name?: true
    crop_area?: true
    crop_investment?: true
    expected_money_return?: true
    expected_weight_return?: true
    land_id?: true
  }

  export type CropMaxAggregateInputType = {
    crop_id?: true
    crop_name?: true
    crop_area?: true
    crop_investment?: true
    expected_money_return?: true
    expected_weight_return?: true
    land_id?: true
  }

  export type CropCountAggregateInputType = {
    crop_id?: true
    crop_name?: true
    crop_area?: true
    crop_investment?: true
    expected_money_return?: true
    expected_weight_return?: true
    land_id?: true
    _all?: true
  }

  export type CropAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Crop to aggregate.
     */
    where?: CropWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Crops to fetch.
     */
    orderBy?: CropOrderByWithRelationInput | CropOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CropWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Crops from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Crops.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Crops
    **/
    _count?: true | CropCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CropAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CropSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CropMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CropMaxAggregateInputType
  }

  export type GetCropAggregateType<T extends CropAggregateArgs> = {
        [P in keyof T & keyof AggregateCrop]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCrop[P]>
      : GetScalarType<T[P], AggregateCrop[P]>
  }




  export type CropGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CropWhereInput
    orderBy?: CropOrderByWithAggregationInput | CropOrderByWithAggregationInput[]
    by: CropScalarFieldEnum[] | CropScalarFieldEnum
    having?: CropScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CropCountAggregateInputType | true
    _avg?: CropAvgAggregateInputType
    _sum?: CropSumAggregateInputType
    _min?: CropMinAggregateInputType
    _max?: CropMaxAggregateInputType
  }

  export type CropGroupByOutputType = {
    crop_id: string
    crop_name: string
    crop_area: number
    crop_investment: number
    expected_money_return: number
    expected_weight_return: number
    land_id: string
    _count: CropCountAggregateOutputType | null
    _avg: CropAvgAggregateOutputType | null
    _sum: CropSumAggregateOutputType | null
    _min: CropMinAggregateOutputType | null
    _max: CropMaxAggregateOutputType | null
  }

  type GetCropGroupByPayload<T extends CropGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CropGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CropGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CropGroupByOutputType[P]>
            : GetScalarType<T[P], CropGroupByOutputType[P]>
        }
      >
    >


  export type CropSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    crop_id?: boolean
    crop_name?: boolean
    crop_area?: boolean
    crop_investment?: boolean
    expected_money_return?: boolean
    expected_weight_return?: boolean
    land_id?: boolean
    land?: boolean | LandDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["crop"]>

  export type CropSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    crop_id?: boolean
    crop_name?: boolean
    crop_area?: boolean
    crop_investment?: boolean
    expected_money_return?: boolean
    expected_weight_return?: boolean
    land_id?: boolean
    land?: boolean | LandDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["crop"]>

  export type CropSelectScalar = {
    crop_id?: boolean
    crop_name?: boolean
    crop_area?: boolean
    crop_investment?: boolean
    expected_money_return?: boolean
    expected_weight_return?: boolean
    land_id?: boolean
  }

  export type CropInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    land?: boolean | LandDefaultArgs<ExtArgs>
  }
  export type CropIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    land?: boolean | LandDefaultArgs<ExtArgs>
  }

  export type $CropPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Crop"
    objects: {
      land: Prisma.$LandPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      crop_id: string
      crop_name: string
      crop_area: number
      crop_investment: number
      expected_money_return: number
      expected_weight_return: number
      land_id: string
    }, ExtArgs["result"]["crop"]>
    composites: {}
  }

  type CropGetPayload<S extends boolean | null | undefined | CropDefaultArgs> = $Result.GetResult<Prisma.$CropPayload, S>

  type CropCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<CropFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: CropCountAggregateInputType | true
    }

  export interface CropDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Crop'], meta: { name: 'Crop' } }
    /**
     * Find zero or one Crop that matches the filter.
     * @param {CropFindUniqueArgs} args - Arguments to find a Crop
     * @example
     * // Get one Crop
     * const crop = await prisma.crop.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CropFindUniqueArgs>(args: SelectSubset<T, CropFindUniqueArgs<ExtArgs>>): Prisma__CropClient<$Result.GetResult<Prisma.$CropPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Crop that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {CropFindUniqueOrThrowArgs} args - Arguments to find a Crop
     * @example
     * // Get one Crop
     * const crop = await prisma.crop.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CropFindUniqueOrThrowArgs>(args: SelectSubset<T, CropFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CropClient<$Result.GetResult<Prisma.$CropPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Crop that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CropFindFirstArgs} args - Arguments to find a Crop
     * @example
     * // Get one Crop
     * const crop = await prisma.crop.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CropFindFirstArgs>(args?: SelectSubset<T, CropFindFirstArgs<ExtArgs>>): Prisma__CropClient<$Result.GetResult<Prisma.$CropPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Crop that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CropFindFirstOrThrowArgs} args - Arguments to find a Crop
     * @example
     * // Get one Crop
     * const crop = await prisma.crop.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CropFindFirstOrThrowArgs>(args?: SelectSubset<T, CropFindFirstOrThrowArgs<ExtArgs>>): Prisma__CropClient<$Result.GetResult<Prisma.$CropPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Crops that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CropFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Crops
     * const crops = await prisma.crop.findMany()
     * 
     * // Get first 10 Crops
     * const crops = await prisma.crop.findMany({ take: 10 })
     * 
     * // Only select the `crop_id`
     * const cropWithCrop_idOnly = await prisma.crop.findMany({ select: { crop_id: true } })
     * 
     */
    findMany<T extends CropFindManyArgs>(args?: SelectSubset<T, CropFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CropPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Crop.
     * @param {CropCreateArgs} args - Arguments to create a Crop.
     * @example
     * // Create one Crop
     * const Crop = await prisma.crop.create({
     *   data: {
     *     // ... data to create a Crop
     *   }
     * })
     * 
     */
    create<T extends CropCreateArgs>(args: SelectSubset<T, CropCreateArgs<ExtArgs>>): Prisma__CropClient<$Result.GetResult<Prisma.$CropPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Crops.
     * @param {CropCreateManyArgs} args - Arguments to create many Crops.
     * @example
     * // Create many Crops
     * const crop = await prisma.crop.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CropCreateManyArgs>(args?: SelectSubset<T, CropCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Crops and returns the data saved in the database.
     * @param {CropCreateManyAndReturnArgs} args - Arguments to create many Crops.
     * @example
     * // Create many Crops
     * const crop = await prisma.crop.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Crops and only return the `crop_id`
     * const cropWithCrop_idOnly = await prisma.crop.createManyAndReturn({ 
     *   select: { crop_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CropCreateManyAndReturnArgs>(args?: SelectSubset<T, CropCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CropPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Crop.
     * @param {CropDeleteArgs} args - Arguments to delete one Crop.
     * @example
     * // Delete one Crop
     * const Crop = await prisma.crop.delete({
     *   where: {
     *     // ... filter to delete one Crop
     *   }
     * })
     * 
     */
    delete<T extends CropDeleteArgs>(args: SelectSubset<T, CropDeleteArgs<ExtArgs>>): Prisma__CropClient<$Result.GetResult<Prisma.$CropPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Crop.
     * @param {CropUpdateArgs} args - Arguments to update one Crop.
     * @example
     * // Update one Crop
     * const crop = await prisma.crop.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CropUpdateArgs>(args: SelectSubset<T, CropUpdateArgs<ExtArgs>>): Prisma__CropClient<$Result.GetResult<Prisma.$CropPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Crops.
     * @param {CropDeleteManyArgs} args - Arguments to filter Crops to delete.
     * @example
     * // Delete a few Crops
     * const { count } = await prisma.crop.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CropDeleteManyArgs>(args?: SelectSubset<T, CropDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Crops.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CropUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Crops
     * const crop = await prisma.crop.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CropUpdateManyArgs>(args: SelectSubset<T, CropUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Crop.
     * @param {CropUpsertArgs} args - Arguments to update or create a Crop.
     * @example
     * // Update or create a Crop
     * const crop = await prisma.crop.upsert({
     *   create: {
     *     // ... data to create a Crop
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Crop we want to update
     *   }
     * })
     */
    upsert<T extends CropUpsertArgs>(args: SelectSubset<T, CropUpsertArgs<ExtArgs>>): Prisma__CropClient<$Result.GetResult<Prisma.$CropPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Crops.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CropCountArgs} args - Arguments to filter Crops to count.
     * @example
     * // Count the number of Crops
     * const count = await prisma.crop.count({
     *   where: {
     *     // ... the filter for the Crops we want to count
     *   }
     * })
    **/
    count<T extends CropCountArgs>(
      args?: Subset<T, CropCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CropCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Crop.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CropAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CropAggregateArgs>(args: Subset<T, CropAggregateArgs>): Prisma.PrismaPromise<GetCropAggregateType<T>>

    /**
     * Group by Crop.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CropGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CropGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CropGroupByArgs['orderBy'] }
        : { orderBy?: CropGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CropGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCropGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Crop model
   */
  readonly fields: CropFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Crop.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CropClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    land<T extends LandDefaultArgs<ExtArgs> = {}>(args?: Subset<T, LandDefaultArgs<ExtArgs>>): Prisma__LandClient<$Result.GetResult<Prisma.$LandPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Crop model
   */ 
  interface CropFieldRefs {
    readonly crop_id: FieldRef<"Crop", 'String'>
    readonly crop_name: FieldRef<"Crop", 'String'>
    readonly crop_area: FieldRef<"Crop", 'Float'>
    readonly crop_investment: FieldRef<"Crop", 'Float'>
    readonly expected_money_return: FieldRef<"Crop", 'Float'>
    readonly expected_weight_return: FieldRef<"Crop", 'Float'>
    readonly land_id: FieldRef<"Crop", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Crop findUnique
   */
  export type CropFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Crop
     */
    select?: CropSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CropInclude<ExtArgs> | null
    /**
     * Filter, which Crop to fetch.
     */
    where: CropWhereUniqueInput
  }

  /**
   * Crop findUniqueOrThrow
   */
  export type CropFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Crop
     */
    select?: CropSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CropInclude<ExtArgs> | null
    /**
     * Filter, which Crop to fetch.
     */
    where: CropWhereUniqueInput
  }

  /**
   * Crop findFirst
   */
  export type CropFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Crop
     */
    select?: CropSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CropInclude<ExtArgs> | null
    /**
     * Filter, which Crop to fetch.
     */
    where?: CropWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Crops to fetch.
     */
    orderBy?: CropOrderByWithRelationInput | CropOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Crops.
     */
    cursor?: CropWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Crops from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Crops.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Crops.
     */
    distinct?: CropScalarFieldEnum | CropScalarFieldEnum[]
  }

  /**
   * Crop findFirstOrThrow
   */
  export type CropFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Crop
     */
    select?: CropSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CropInclude<ExtArgs> | null
    /**
     * Filter, which Crop to fetch.
     */
    where?: CropWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Crops to fetch.
     */
    orderBy?: CropOrderByWithRelationInput | CropOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Crops.
     */
    cursor?: CropWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Crops from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Crops.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Crops.
     */
    distinct?: CropScalarFieldEnum | CropScalarFieldEnum[]
  }

  /**
   * Crop findMany
   */
  export type CropFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Crop
     */
    select?: CropSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CropInclude<ExtArgs> | null
    /**
     * Filter, which Crops to fetch.
     */
    where?: CropWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Crops to fetch.
     */
    orderBy?: CropOrderByWithRelationInput | CropOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Crops.
     */
    cursor?: CropWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Crops from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Crops.
     */
    skip?: number
    distinct?: CropScalarFieldEnum | CropScalarFieldEnum[]
  }

  /**
   * Crop create
   */
  export type CropCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Crop
     */
    select?: CropSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CropInclude<ExtArgs> | null
    /**
     * The data needed to create a Crop.
     */
    data: XOR<CropCreateInput, CropUncheckedCreateInput>
  }

  /**
   * Crop createMany
   */
  export type CropCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Crops.
     */
    data: CropCreateManyInput | CropCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Crop createManyAndReturn
   */
  export type CropCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Crop
     */
    select?: CropSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Crops.
     */
    data: CropCreateManyInput | CropCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CropIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Crop update
   */
  export type CropUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Crop
     */
    select?: CropSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CropInclude<ExtArgs> | null
    /**
     * The data needed to update a Crop.
     */
    data: XOR<CropUpdateInput, CropUncheckedUpdateInput>
    /**
     * Choose, which Crop to update.
     */
    where: CropWhereUniqueInput
  }

  /**
   * Crop updateMany
   */
  export type CropUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Crops.
     */
    data: XOR<CropUpdateManyMutationInput, CropUncheckedUpdateManyInput>
    /**
     * Filter which Crops to update
     */
    where?: CropWhereInput
  }

  /**
   * Crop upsert
   */
  export type CropUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Crop
     */
    select?: CropSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CropInclude<ExtArgs> | null
    /**
     * The filter to search for the Crop to update in case it exists.
     */
    where: CropWhereUniqueInput
    /**
     * In case the Crop found by the `where` argument doesn't exist, create a new Crop with this data.
     */
    create: XOR<CropCreateInput, CropUncheckedCreateInput>
    /**
     * In case the Crop was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CropUpdateInput, CropUncheckedUpdateInput>
  }

  /**
   * Crop delete
   */
  export type CropDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Crop
     */
    select?: CropSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CropInclude<ExtArgs> | null
    /**
     * Filter which Crop to delete.
     */
    where: CropWhereUniqueInput
  }

  /**
   * Crop deleteMany
   */
  export type CropDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Crops to delete
     */
    where?: CropWhereInput
  }

  /**
   * Crop without action
   */
  export type CropDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Crop
     */
    select?: CropSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CropInclude<ExtArgs> | null
  }


  /**
   * Model CropMaintenance
   */

  export type AggregateCropMaintenance = {
    _count: CropMaintenanceCountAggregateOutputType | null
    _avg: CropMaintenanceAvgAggregateOutputType | null
    _sum: CropMaintenanceSumAggregateOutputType | null
    _min: CropMaintenanceMinAggregateOutputType | null
    _max: CropMaintenanceMaxAggregateOutputType | null
  }

  export type CropMaintenanceAvgAggregateOutputType = {
    pesticide_level: number | null
    water_sufficienty: number | null
  }

  export type CropMaintenanceSumAggregateOutputType = {
    pesticide_level: number | null
    water_sufficienty: number | null
  }

  export type CropMaintenanceMinAggregateOutputType = {
    maintenance_id: string | null
    pesticide_level: number | null
    water_sufficienty: number | null
    land_id: string | null
  }

  export type CropMaintenanceMaxAggregateOutputType = {
    maintenance_id: string | null
    pesticide_level: number | null
    water_sufficienty: number | null
    land_id: string | null
  }

  export type CropMaintenanceCountAggregateOutputType = {
    maintenance_id: number
    pesticide_level: number
    water_sufficienty: number
    land_id: number
    _all: number
  }


  export type CropMaintenanceAvgAggregateInputType = {
    pesticide_level?: true
    water_sufficienty?: true
  }

  export type CropMaintenanceSumAggregateInputType = {
    pesticide_level?: true
    water_sufficienty?: true
  }

  export type CropMaintenanceMinAggregateInputType = {
    maintenance_id?: true
    pesticide_level?: true
    water_sufficienty?: true
    land_id?: true
  }

  export type CropMaintenanceMaxAggregateInputType = {
    maintenance_id?: true
    pesticide_level?: true
    water_sufficienty?: true
    land_id?: true
  }

  export type CropMaintenanceCountAggregateInputType = {
    maintenance_id?: true
    pesticide_level?: true
    water_sufficienty?: true
    land_id?: true
    _all?: true
  }

  export type CropMaintenanceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CropMaintenance to aggregate.
     */
    where?: CropMaintenanceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CropMaintenances to fetch.
     */
    orderBy?: CropMaintenanceOrderByWithRelationInput | CropMaintenanceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CropMaintenanceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CropMaintenances from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CropMaintenances.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CropMaintenances
    **/
    _count?: true | CropMaintenanceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CropMaintenanceAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CropMaintenanceSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CropMaintenanceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CropMaintenanceMaxAggregateInputType
  }

  export type GetCropMaintenanceAggregateType<T extends CropMaintenanceAggregateArgs> = {
        [P in keyof T & keyof AggregateCropMaintenance]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCropMaintenance[P]>
      : GetScalarType<T[P], AggregateCropMaintenance[P]>
  }




  export type CropMaintenanceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CropMaintenanceWhereInput
    orderBy?: CropMaintenanceOrderByWithAggregationInput | CropMaintenanceOrderByWithAggregationInput[]
    by: CropMaintenanceScalarFieldEnum[] | CropMaintenanceScalarFieldEnum
    having?: CropMaintenanceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CropMaintenanceCountAggregateInputType | true
    _avg?: CropMaintenanceAvgAggregateInputType
    _sum?: CropMaintenanceSumAggregateInputType
    _min?: CropMaintenanceMinAggregateInputType
    _max?: CropMaintenanceMaxAggregateInputType
  }

  export type CropMaintenanceGroupByOutputType = {
    maintenance_id: string
    pesticide_level: number
    water_sufficienty: number
    land_id: string
    _count: CropMaintenanceCountAggregateOutputType | null
    _avg: CropMaintenanceAvgAggregateOutputType | null
    _sum: CropMaintenanceSumAggregateOutputType | null
    _min: CropMaintenanceMinAggregateOutputType | null
    _max: CropMaintenanceMaxAggregateOutputType | null
  }

  type GetCropMaintenanceGroupByPayload<T extends CropMaintenanceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CropMaintenanceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CropMaintenanceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CropMaintenanceGroupByOutputType[P]>
            : GetScalarType<T[P], CropMaintenanceGroupByOutputType[P]>
        }
      >
    >


  export type CropMaintenanceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    maintenance_id?: boolean
    pesticide_level?: boolean
    water_sufficienty?: boolean
    land_id?: boolean
    land?: boolean | LandDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cropMaintenance"]>

  export type CropMaintenanceSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    maintenance_id?: boolean
    pesticide_level?: boolean
    water_sufficienty?: boolean
    land_id?: boolean
    land?: boolean | LandDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cropMaintenance"]>

  export type CropMaintenanceSelectScalar = {
    maintenance_id?: boolean
    pesticide_level?: boolean
    water_sufficienty?: boolean
    land_id?: boolean
  }

  export type CropMaintenanceInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    land?: boolean | LandDefaultArgs<ExtArgs>
  }
  export type CropMaintenanceIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    land?: boolean | LandDefaultArgs<ExtArgs>
  }

  export type $CropMaintenancePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CropMaintenance"
    objects: {
      land: Prisma.$LandPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      maintenance_id: string
      pesticide_level: number
      water_sufficienty: number
      land_id: string
    }, ExtArgs["result"]["cropMaintenance"]>
    composites: {}
  }

  type CropMaintenanceGetPayload<S extends boolean | null | undefined | CropMaintenanceDefaultArgs> = $Result.GetResult<Prisma.$CropMaintenancePayload, S>

  type CropMaintenanceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<CropMaintenanceFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: CropMaintenanceCountAggregateInputType | true
    }

  export interface CropMaintenanceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CropMaintenance'], meta: { name: 'CropMaintenance' } }
    /**
     * Find zero or one CropMaintenance that matches the filter.
     * @param {CropMaintenanceFindUniqueArgs} args - Arguments to find a CropMaintenance
     * @example
     * // Get one CropMaintenance
     * const cropMaintenance = await prisma.cropMaintenance.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CropMaintenanceFindUniqueArgs>(args: SelectSubset<T, CropMaintenanceFindUniqueArgs<ExtArgs>>): Prisma__CropMaintenanceClient<$Result.GetResult<Prisma.$CropMaintenancePayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one CropMaintenance that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {CropMaintenanceFindUniqueOrThrowArgs} args - Arguments to find a CropMaintenance
     * @example
     * // Get one CropMaintenance
     * const cropMaintenance = await prisma.cropMaintenance.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CropMaintenanceFindUniqueOrThrowArgs>(args: SelectSubset<T, CropMaintenanceFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CropMaintenanceClient<$Result.GetResult<Prisma.$CropMaintenancePayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first CropMaintenance that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CropMaintenanceFindFirstArgs} args - Arguments to find a CropMaintenance
     * @example
     * // Get one CropMaintenance
     * const cropMaintenance = await prisma.cropMaintenance.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CropMaintenanceFindFirstArgs>(args?: SelectSubset<T, CropMaintenanceFindFirstArgs<ExtArgs>>): Prisma__CropMaintenanceClient<$Result.GetResult<Prisma.$CropMaintenancePayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first CropMaintenance that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CropMaintenanceFindFirstOrThrowArgs} args - Arguments to find a CropMaintenance
     * @example
     * // Get one CropMaintenance
     * const cropMaintenance = await prisma.cropMaintenance.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CropMaintenanceFindFirstOrThrowArgs>(args?: SelectSubset<T, CropMaintenanceFindFirstOrThrowArgs<ExtArgs>>): Prisma__CropMaintenanceClient<$Result.GetResult<Prisma.$CropMaintenancePayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more CropMaintenances that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CropMaintenanceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CropMaintenances
     * const cropMaintenances = await prisma.cropMaintenance.findMany()
     * 
     * // Get first 10 CropMaintenances
     * const cropMaintenances = await prisma.cropMaintenance.findMany({ take: 10 })
     * 
     * // Only select the `maintenance_id`
     * const cropMaintenanceWithMaintenance_idOnly = await prisma.cropMaintenance.findMany({ select: { maintenance_id: true } })
     * 
     */
    findMany<T extends CropMaintenanceFindManyArgs>(args?: SelectSubset<T, CropMaintenanceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CropMaintenancePayload<ExtArgs>, T, "findMany">>

    /**
     * Create a CropMaintenance.
     * @param {CropMaintenanceCreateArgs} args - Arguments to create a CropMaintenance.
     * @example
     * // Create one CropMaintenance
     * const CropMaintenance = await prisma.cropMaintenance.create({
     *   data: {
     *     // ... data to create a CropMaintenance
     *   }
     * })
     * 
     */
    create<T extends CropMaintenanceCreateArgs>(args: SelectSubset<T, CropMaintenanceCreateArgs<ExtArgs>>): Prisma__CropMaintenanceClient<$Result.GetResult<Prisma.$CropMaintenancePayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many CropMaintenances.
     * @param {CropMaintenanceCreateManyArgs} args - Arguments to create many CropMaintenances.
     * @example
     * // Create many CropMaintenances
     * const cropMaintenance = await prisma.cropMaintenance.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CropMaintenanceCreateManyArgs>(args?: SelectSubset<T, CropMaintenanceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many CropMaintenances and returns the data saved in the database.
     * @param {CropMaintenanceCreateManyAndReturnArgs} args - Arguments to create many CropMaintenances.
     * @example
     * // Create many CropMaintenances
     * const cropMaintenance = await prisma.cropMaintenance.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many CropMaintenances and only return the `maintenance_id`
     * const cropMaintenanceWithMaintenance_idOnly = await prisma.cropMaintenance.createManyAndReturn({ 
     *   select: { maintenance_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CropMaintenanceCreateManyAndReturnArgs>(args?: SelectSubset<T, CropMaintenanceCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CropMaintenancePayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a CropMaintenance.
     * @param {CropMaintenanceDeleteArgs} args - Arguments to delete one CropMaintenance.
     * @example
     * // Delete one CropMaintenance
     * const CropMaintenance = await prisma.cropMaintenance.delete({
     *   where: {
     *     // ... filter to delete one CropMaintenance
     *   }
     * })
     * 
     */
    delete<T extends CropMaintenanceDeleteArgs>(args: SelectSubset<T, CropMaintenanceDeleteArgs<ExtArgs>>): Prisma__CropMaintenanceClient<$Result.GetResult<Prisma.$CropMaintenancePayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one CropMaintenance.
     * @param {CropMaintenanceUpdateArgs} args - Arguments to update one CropMaintenance.
     * @example
     * // Update one CropMaintenance
     * const cropMaintenance = await prisma.cropMaintenance.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CropMaintenanceUpdateArgs>(args: SelectSubset<T, CropMaintenanceUpdateArgs<ExtArgs>>): Prisma__CropMaintenanceClient<$Result.GetResult<Prisma.$CropMaintenancePayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more CropMaintenances.
     * @param {CropMaintenanceDeleteManyArgs} args - Arguments to filter CropMaintenances to delete.
     * @example
     * // Delete a few CropMaintenances
     * const { count } = await prisma.cropMaintenance.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CropMaintenanceDeleteManyArgs>(args?: SelectSubset<T, CropMaintenanceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CropMaintenances.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CropMaintenanceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CropMaintenances
     * const cropMaintenance = await prisma.cropMaintenance.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CropMaintenanceUpdateManyArgs>(args: SelectSubset<T, CropMaintenanceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one CropMaintenance.
     * @param {CropMaintenanceUpsertArgs} args - Arguments to update or create a CropMaintenance.
     * @example
     * // Update or create a CropMaintenance
     * const cropMaintenance = await prisma.cropMaintenance.upsert({
     *   create: {
     *     // ... data to create a CropMaintenance
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CropMaintenance we want to update
     *   }
     * })
     */
    upsert<T extends CropMaintenanceUpsertArgs>(args: SelectSubset<T, CropMaintenanceUpsertArgs<ExtArgs>>): Prisma__CropMaintenanceClient<$Result.GetResult<Prisma.$CropMaintenancePayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of CropMaintenances.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CropMaintenanceCountArgs} args - Arguments to filter CropMaintenances to count.
     * @example
     * // Count the number of CropMaintenances
     * const count = await prisma.cropMaintenance.count({
     *   where: {
     *     // ... the filter for the CropMaintenances we want to count
     *   }
     * })
    **/
    count<T extends CropMaintenanceCountArgs>(
      args?: Subset<T, CropMaintenanceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CropMaintenanceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CropMaintenance.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CropMaintenanceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CropMaintenanceAggregateArgs>(args: Subset<T, CropMaintenanceAggregateArgs>): Prisma.PrismaPromise<GetCropMaintenanceAggregateType<T>>

    /**
     * Group by CropMaintenance.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CropMaintenanceGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CropMaintenanceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CropMaintenanceGroupByArgs['orderBy'] }
        : { orderBy?: CropMaintenanceGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CropMaintenanceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCropMaintenanceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CropMaintenance model
   */
  readonly fields: CropMaintenanceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CropMaintenance.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CropMaintenanceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    land<T extends LandDefaultArgs<ExtArgs> = {}>(args?: Subset<T, LandDefaultArgs<ExtArgs>>): Prisma__LandClient<$Result.GetResult<Prisma.$LandPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the CropMaintenance model
   */ 
  interface CropMaintenanceFieldRefs {
    readonly maintenance_id: FieldRef<"CropMaintenance", 'String'>
    readonly pesticide_level: FieldRef<"CropMaintenance", 'Float'>
    readonly water_sufficienty: FieldRef<"CropMaintenance", 'Float'>
    readonly land_id: FieldRef<"CropMaintenance", 'String'>
  }
    

  // Custom InputTypes
  /**
   * CropMaintenance findUnique
   */
  export type CropMaintenanceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CropMaintenance
     */
    select?: CropMaintenanceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CropMaintenanceInclude<ExtArgs> | null
    /**
     * Filter, which CropMaintenance to fetch.
     */
    where: CropMaintenanceWhereUniqueInput
  }

  /**
   * CropMaintenance findUniqueOrThrow
   */
  export type CropMaintenanceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CropMaintenance
     */
    select?: CropMaintenanceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CropMaintenanceInclude<ExtArgs> | null
    /**
     * Filter, which CropMaintenance to fetch.
     */
    where: CropMaintenanceWhereUniqueInput
  }

  /**
   * CropMaintenance findFirst
   */
  export type CropMaintenanceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CropMaintenance
     */
    select?: CropMaintenanceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CropMaintenanceInclude<ExtArgs> | null
    /**
     * Filter, which CropMaintenance to fetch.
     */
    where?: CropMaintenanceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CropMaintenances to fetch.
     */
    orderBy?: CropMaintenanceOrderByWithRelationInput | CropMaintenanceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CropMaintenances.
     */
    cursor?: CropMaintenanceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CropMaintenances from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CropMaintenances.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CropMaintenances.
     */
    distinct?: CropMaintenanceScalarFieldEnum | CropMaintenanceScalarFieldEnum[]
  }

  /**
   * CropMaintenance findFirstOrThrow
   */
  export type CropMaintenanceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CropMaintenance
     */
    select?: CropMaintenanceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CropMaintenanceInclude<ExtArgs> | null
    /**
     * Filter, which CropMaintenance to fetch.
     */
    where?: CropMaintenanceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CropMaintenances to fetch.
     */
    orderBy?: CropMaintenanceOrderByWithRelationInput | CropMaintenanceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CropMaintenances.
     */
    cursor?: CropMaintenanceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CropMaintenances from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CropMaintenances.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CropMaintenances.
     */
    distinct?: CropMaintenanceScalarFieldEnum | CropMaintenanceScalarFieldEnum[]
  }

  /**
   * CropMaintenance findMany
   */
  export type CropMaintenanceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CropMaintenance
     */
    select?: CropMaintenanceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CropMaintenanceInclude<ExtArgs> | null
    /**
     * Filter, which CropMaintenances to fetch.
     */
    where?: CropMaintenanceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CropMaintenances to fetch.
     */
    orderBy?: CropMaintenanceOrderByWithRelationInput | CropMaintenanceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CropMaintenances.
     */
    cursor?: CropMaintenanceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CropMaintenances from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CropMaintenances.
     */
    skip?: number
    distinct?: CropMaintenanceScalarFieldEnum | CropMaintenanceScalarFieldEnum[]
  }

  /**
   * CropMaintenance create
   */
  export type CropMaintenanceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CropMaintenance
     */
    select?: CropMaintenanceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CropMaintenanceInclude<ExtArgs> | null
    /**
     * The data needed to create a CropMaintenance.
     */
    data: XOR<CropMaintenanceCreateInput, CropMaintenanceUncheckedCreateInput>
  }

  /**
   * CropMaintenance createMany
   */
  export type CropMaintenanceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CropMaintenances.
     */
    data: CropMaintenanceCreateManyInput | CropMaintenanceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CropMaintenance createManyAndReturn
   */
  export type CropMaintenanceCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CropMaintenance
     */
    select?: CropMaintenanceSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many CropMaintenances.
     */
    data: CropMaintenanceCreateManyInput | CropMaintenanceCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CropMaintenanceIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * CropMaintenance update
   */
  export type CropMaintenanceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CropMaintenance
     */
    select?: CropMaintenanceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CropMaintenanceInclude<ExtArgs> | null
    /**
     * The data needed to update a CropMaintenance.
     */
    data: XOR<CropMaintenanceUpdateInput, CropMaintenanceUncheckedUpdateInput>
    /**
     * Choose, which CropMaintenance to update.
     */
    where: CropMaintenanceWhereUniqueInput
  }

  /**
   * CropMaintenance updateMany
   */
  export type CropMaintenanceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CropMaintenances.
     */
    data: XOR<CropMaintenanceUpdateManyMutationInput, CropMaintenanceUncheckedUpdateManyInput>
    /**
     * Filter which CropMaintenances to update
     */
    where?: CropMaintenanceWhereInput
  }

  /**
   * CropMaintenance upsert
   */
  export type CropMaintenanceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CropMaintenance
     */
    select?: CropMaintenanceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CropMaintenanceInclude<ExtArgs> | null
    /**
     * The filter to search for the CropMaintenance to update in case it exists.
     */
    where: CropMaintenanceWhereUniqueInput
    /**
     * In case the CropMaintenance found by the `where` argument doesn't exist, create a new CropMaintenance with this data.
     */
    create: XOR<CropMaintenanceCreateInput, CropMaintenanceUncheckedCreateInput>
    /**
     * In case the CropMaintenance was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CropMaintenanceUpdateInput, CropMaintenanceUncheckedUpdateInput>
  }

  /**
   * CropMaintenance delete
   */
  export type CropMaintenanceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CropMaintenance
     */
    select?: CropMaintenanceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CropMaintenanceInclude<ExtArgs> | null
    /**
     * Filter which CropMaintenance to delete.
     */
    where: CropMaintenanceWhereUniqueInput
  }

  /**
   * CropMaintenance deleteMany
   */
  export type CropMaintenanceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CropMaintenances to delete
     */
    where?: CropMaintenanceWhereInput
  }

  /**
   * CropMaintenance without action
   */
  export type CropMaintenanceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CropMaintenance
     */
    select?: CropMaintenanceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CropMaintenanceInclude<ExtArgs> | null
  }


  /**
   * Model Finance
   */

  export type AggregateFinance = {
    _count: FinanceCountAggregateOutputType | null
    _avg: FinanceAvgAggregateOutputType | null
    _sum: FinanceSumAggregateOutputType | null
    _min: FinanceMinAggregateOutputType | null
    _max: FinanceMaxAggregateOutputType | null
  }

  export type FinanceAvgAggregateOutputType = {
    investment_amount: number | null
    expected_revenue: number | null
  }

  export type FinanceSumAggregateOutputType = {
    investment_amount: number | null
    expected_revenue: number | null
  }

  export type FinanceMinAggregateOutputType = {
    financial_id: string | null
    investment_amount: number | null
    expected_revenue: number | null
    land_id: string | null
  }

  export type FinanceMaxAggregateOutputType = {
    financial_id: string | null
    investment_amount: number | null
    expected_revenue: number | null
    land_id: string | null
  }

  export type FinanceCountAggregateOutputType = {
    financial_id: number
    investment_amount: number
    expected_revenue: number
    land_id: number
    _all: number
  }


  export type FinanceAvgAggregateInputType = {
    investment_amount?: true
    expected_revenue?: true
  }

  export type FinanceSumAggregateInputType = {
    investment_amount?: true
    expected_revenue?: true
  }

  export type FinanceMinAggregateInputType = {
    financial_id?: true
    investment_amount?: true
    expected_revenue?: true
    land_id?: true
  }

  export type FinanceMaxAggregateInputType = {
    financial_id?: true
    investment_amount?: true
    expected_revenue?: true
    land_id?: true
  }

  export type FinanceCountAggregateInputType = {
    financial_id?: true
    investment_amount?: true
    expected_revenue?: true
    land_id?: true
    _all?: true
  }

  export type FinanceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Finance to aggregate.
     */
    where?: FinanceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Finances to fetch.
     */
    orderBy?: FinanceOrderByWithRelationInput | FinanceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FinanceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Finances from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Finances.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Finances
    **/
    _count?: true | FinanceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FinanceAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FinanceSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FinanceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FinanceMaxAggregateInputType
  }

  export type GetFinanceAggregateType<T extends FinanceAggregateArgs> = {
        [P in keyof T & keyof AggregateFinance]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFinance[P]>
      : GetScalarType<T[P], AggregateFinance[P]>
  }




  export type FinanceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FinanceWhereInput
    orderBy?: FinanceOrderByWithAggregationInput | FinanceOrderByWithAggregationInput[]
    by: FinanceScalarFieldEnum[] | FinanceScalarFieldEnum
    having?: FinanceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FinanceCountAggregateInputType | true
    _avg?: FinanceAvgAggregateInputType
    _sum?: FinanceSumAggregateInputType
    _min?: FinanceMinAggregateInputType
    _max?: FinanceMaxAggregateInputType
  }

  export type FinanceGroupByOutputType = {
    financial_id: string
    investment_amount: number | null
    expected_revenue: number | null
    land_id: string | null
    _count: FinanceCountAggregateOutputType | null
    _avg: FinanceAvgAggregateOutputType | null
    _sum: FinanceSumAggregateOutputType | null
    _min: FinanceMinAggregateOutputType | null
    _max: FinanceMaxAggregateOutputType | null
  }

  type GetFinanceGroupByPayload<T extends FinanceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FinanceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FinanceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FinanceGroupByOutputType[P]>
            : GetScalarType<T[P], FinanceGroupByOutputType[P]>
        }
      >
    >


  export type FinanceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    financial_id?: boolean
    investment_amount?: boolean
    expected_revenue?: boolean
    land_id?: boolean
    land?: boolean | Finance$landArgs<ExtArgs>
  }, ExtArgs["result"]["finance"]>

  export type FinanceSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    financial_id?: boolean
    investment_amount?: boolean
    expected_revenue?: boolean
    land_id?: boolean
    land?: boolean | Finance$landArgs<ExtArgs>
  }, ExtArgs["result"]["finance"]>

  export type FinanceSelectScalar = {
    financial_id?: boolean
    investment_amount?: boolean
    expected_revenue?: boolean
    land_id?: boolean
  }

  export type FinanceInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    land?: boolean | Finance$landArgs<ExtArgs>
  }
  export type FinanceIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    land?: boolean | Finance$landArgs<ExtArgs>
  }

  export type $FinancePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Finance"
    objects: {
      land: Prisma.$LandPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      financial_id: string
      investment_amount: number | null
      expected_revenue: number | null
      land_id: string | null
    }, ExtArgs["result"]["finance"]>
    composites: {}
  }

  type FinanceGetPayload<S extends boolean | null | undefined | FinanceDefaultArgs> = $Result.GetResult<Prisma.$FinancePayload, S>

  type FinanceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<FinanceFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: FinanceCountAggregateInputType | true
    }

  export interface FinanceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Finance'], meta: { name: 'Finance' } }
    /**
     * Find zero or one Finance that matches the filter.
     * @param {FinanceFindUniqueArgs} args - Arguments to find a Finance
     * @example
     * // Get one Finance
     * const finance = await prisma.finance.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FinanceFindUniqueArgs>(args: SelectSubset<T, FinanceFindUniqueArgs<ExtArgs>>): Prisma__FinanceClient<$Result.GetResult<Prisma.$FinancePayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Finance that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {FinanceFindUniqueOrThrowArgs} args - Arguments to find a Finance
     * @example
     * // Get one Finance
     * const finance = await prisma.finance.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FinanceFindUniqueOrThrowArgs>(args: SelectSubset<T, FinanceFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FinanceClient<$Result.GetResult<Prisma.$FinancePayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Finance that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FinanceFindFirstArgs} args - Arguments to find a Finance
     * @example
     * // Get one Finance
     * const finance = await prisma.finance.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FinanceFindFirstArgs>(args?: SelectSubset<T, FinanceFindFirstArgs<ExtArgs>>): Prisma__FinanceClient<$Result.GetResult<Prisma.$FinancePayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Finance that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FinanceFindFirstOrThrowArgs} args - Arguments to find a Finance
     * @example
     * // Get one Finance
     * const finance = await prisma.finance.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FinanceFindFirstOrThrowArgs>(args?: SelectSubset<T, FinanceFindFirstOrThrowArgs<ExtArgs>>): Prisma__FinanceClient<$Result.GetResult<Prisma.$FinancePayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Finances that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FinanceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Finances
     * const finances = await prisma.finance.findMany()
     * 
     * // Get first 10 Finances
     * const finances = await prisma.finance.findMany({ take: 10 })
     * 
     * // Only select the `financial_id`
     * const financeWithFinancial_idOnly = await prisma.finance.findMany({ select: { financial_id: true } })
     * 
     */
    findMany<T extends FinanceFindManyArgs>(args?: SelectSubset<T, FinanceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FinancePayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Finance.
     * @param {FinanceCreateArgs} args - Arguments to create a Finance.
     * @example
     * // Create one Finance
     * const Finance = await prisma.finance.create({
     *   data: {
     *     // ... data to create a Finance
     *   }
     * })
     * 
     */
    create<T extends FinanceCreateArgs>(args: SelectSubset<T, FinanceCreateArgs<ExtArgs>>): Prisma__FinanceClient<$Result.GetResult<Prisma.$FinancePayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Finances.
     * @param {FinanceCreateManyArgs} args - Arguments to create many Finances.
     * @example
     * // Create many Finances
     * const finance = await prisma.finance.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FinanceCreateManyArgs>(args?: SelectSubset<T, FinanceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Finances and returns the data saved in the database.
     * @param {FinanceCreateManyAndReturnArgs} args - Arguments to create many Finances.
     * @example
     * // Create many Finances
     * const finance = await prisma.finance.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Finances and only return the `financial_id`
     * const financeWithFinancial_idOnly = await prisma.finance.createManyAndReturn({ 
     *   select: { financial_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends FinanceCreateManyAndReturnArgs>(args?: SelectSubset<T, FinanceCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FinancePayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Finance.
     * @param {FinanceDeleteArgs} args - Arguments to delete one Finance.
     * @example
     * // Delete one Finance
     * const Finance = await prisma.finance.delete({
     *   where: {
     *     // ... filter to delete one Finance
     *   }
     * })
     * 
     */
    delete<T extends FinanceDeleteArgs>(args: SelectSubset<T, FinanceDeleteArgs<ExtArgs>>): Prisma__FinanceClient<$Result.GetResult<Prisma.$FinancePayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Finance.
     * @param {FinanceUpdateArgs} args - Arguments to update one Finance.
     * @example
     * // Update one Finance
     * const finance = await prisma.finance.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FinanceUpdateArgs>(args: SelectSubset<T, FinanceUpdateArgs<ExtArgs>>): Prisma__FinanceClient<$Result.GetResult<Prisma.$FinancePayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Finances.
     * @param {FinanceDeleteManyArgs} args - Arguments to filter Finances to delete.
     * @example
     * // Delete a few Finances
     * const { count } = await prisma.finance.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FinanceDeleteManyArgs>(args?: SelectSubset<T, FinanceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Finances.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FinanceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Finances
     * const finance = await prisma.finance.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FinanceUpdateManyArgs>(args: SelectSubset<T, FinanceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Finance.
     * @param {FinanceUpsertArgs} args - Arguments to update or create a Finance.
     * @example
     * // Update or create a Finance
     * const finance = await prisma.finance.upsert({
     *   create: {
     *     // ... data to create a Finance
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Finance we want to update
     *   }
     * })
     */
    upsert<T extends FinanceUpsertArgs>(args: SelectSubset<T, FinanceUpsertArgs<ExtArgs>>): Prisma__FinanceClient<$Result.GetResult<Prisma.$FinancePayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Finances.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FinanceCountArgs} args - Arguments to filter Finances to count.
     * @example
     * // Count the number of Finances
     * const count = await prisma.finance.count({
     *   where: {
     *     // ... the filter for the Finances we want to count
     *   }
     * })
    **/
    count<T extends FinanceCountArgs>(
      args?: Subset<T, FinanceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FinanceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Finance.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FinanceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends FinanceAggregateArgs>(args: Subset<T, FinanceAggregateArgs>): Prisma.PrismaPromise<GetFinanceAggregateType<T>>

    /**
     * Group by Finance.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FinanceGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends FinanceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FinanceGroupByArgs['orderBy'] }
        : { orderBy?: FinanceGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, FinanceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFinanceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Finance model
   */
  readonly fields: FinanceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Finance.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FinanceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    land<T extends Finance$landArgs<ExtArgs> = {}>(args?: Subset<T, Finance$landArgs<ExtArgs>>): Prisma__LandClient<$Result.GetResult<Prisma.$LandPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Finance model
   */ 
  interface FinanceFieldRefs {
    readonly financial_id: FieldRef<"Finance", 'String'>
    readonly investment_amount: FieldRef<"Finance", 'Float'>
    readonly expected_revenue: FieldRef<"Finance", 'Float'>
    readonly land_id: FieldRef<"Finance", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Finance findUnique
   */
  export type FinanceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Finance
     */
    select?: FinanceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FinanceInclude<ExtArgs> | null
    /**
     * Filter, which Finance to fetch.
     */
    where: FinanceWhereUniqueInput
  }

  /**
   * Finance findUniqueOrThrow
   */
  export type FinanceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Finance
     */
    select?: FinanceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FinanceInclude<ExtArgs> | null
    /**
     * Filter, which Finance to fetch.
     */
    where: FinanceWhereUniqueInput
  }

  /**
   * Finance findFirst
   */
  export type FinanceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Finance
     */
    select?: FinanceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FinanceInclude<ExtArgs> | null
    /**
     * Filter, which Finance to fetch.
     */
    where?: FinanceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Finances to fetch.
     */
    orderBy?: FinanceOrderByWithRelationInput | FinanceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Finances.
     */
    cursor?: FinanceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Finances from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Finances.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Finances.
     */
    distinct?: FinanceScalarFieldEnum | FinanceScalarFieldEnum[]
  }

  /**
   * Finance findFirstOrThrow
   */
  export type FinanceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Finance
     */
    select?: FinanceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FinanceInclude<ExtArgs> | null
    /**
     * Filter, which Finance to fetch.
     */
    where?: FinanceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Finances to fetch.
     */
    orderBy?: FinanceOrderByWithRelationInput | FinanceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Finances.
     */
    cursor?: FinanceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Finances from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Finances.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Finances.
     */
    distinct?: FinanceScalarFieldEnum | FinanceScalarFieldEnum[]
  }

  /**
   * Finance findMany
   */
  export type FinanceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Finance
     */
    select?: FinanceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FinanceInclude<ExtArgs> | null
    /**
     * Filter, which Finances to fetch.
     */
    where?: FinanceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Finances to fetch.
     */
    orderBy?: FinanceOrderByWithRelationInput | FinanceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Finances.
     */
    cursor?: FinanceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Finances from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Finances.
     */
    skip?: number
    distinct?: FinanceScalarFieldEnum | FinanceScalarFieldEnum[]
  }

  /**
   * Finance create
   */
  export type FinanceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Finance
     */
    select?: FinanceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FinanceInclude<ExtArgs> | null
    /**
     * The data needed to create a Finance.
     */
    data?: XOR<FinanceCreateInput, FinanceUncheckedCreateInput>
  }

  /**
   * Finance createMany
   */
  export type FinanceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Finances.
     */
    data: FinanceCreateManyInput | FinanceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Finance createManyAndReturn
   */
  export type FinanceCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Finance
     */
    select?: FinanceSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Finances.
     */
    data: FinanceCreateManyInput | FinanceCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FinanceIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Finance update
   */
  export type FinanceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Finance
     */
    select?: FinanceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FinanceInclude<ExtArgs> | null
    /**
     * The data needed to update a Finance.
     */
    data: XOR<FinanceUpdateInput, FinanceUncheckedUpdateInput>
    /**
     * Choose, which Finance to update.
     */
    where: FinanceWhereUniqueInput
  }

  /**
   * Finance updateMany
   */
  export type FinanceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Finances.
     */
    data: XOR<FinanceUpdateManyMutationInput, FinanceUncheckedUpdateManyInput>
    /**
     * Filter which Finances to update
     */
    where?: FinanceWhereInput
  }

  /**
   * Finance upsert
   */
  export type FinanceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Finance
     */
    select?: FinanceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FinanceInclude<ExtArgs> | null
    /**
     * The filter to search for the Finance to update in case it exists.
     */
    where: FinanceWhereUniqueInput
    /**
     * In case the Finance found by the `where` argument doesn't exist, create a new Finance with this data.
     */
    create: XOR<FinanceCreateInput, FinanceUncheckedCreateInput>
    /**
     * In case the Finance was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FinanceUpdateInput, FinanceUncheckedUpdateInput>
  }

  /**
   * Finance delete
   */
  export type FinanceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Finance
     */
    select?: FinanceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FinanceInclude<ExtArgs> | null
    /**
     * Filter which Finance to delete.
     */
    where: FinanceWhereUniqueInput
  }

  /**
   * Finance deleteMany
   */
  export type FinanceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Finances to delete
     */
    where?: FinanceWhereInput
  }

  /**
   * Finance.land
   */
  export type Finance$landArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Land
     */
    select?: LandSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LandInclude<ExtArgs> | null
    where?: LandWhereInput
  }

  /**
   * Finance without action
   */
  export type FinanceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Finance
     */
    select?: FinanceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FinanceInclude<ExtArgs> | null
  }


  /**
   * Model Weather
   */

  export type AggregateWeather = {
    _count: WeatherCountAggregateOutputType | null
    _avg: WeatherAvgAggregateOutputType | null
    _sum: WeatherSumAggregateOutputType | null
    _min: WeatherMinAggregateOutputType | null
    _max: WeatherMaxAggregateOutputType | null
  }

  export type WeatherAvgAggregateOutputType = {
    temperature: number | null
    humidity: number | null
    rainfall: number | null
    sunlight: number | null
  }

  export type WeatherSumAggregateOutputType = {
    temperature: number | null
    humidity: number | null
    rainfall: number | null
    sunlight: number | null
  }

  export type WeatherMinAggregateOutputType = {
    weather_id: string | null
    temperature: number | null
    humidity: number | null
    rainfall: number | null
    sunlight: number | null
    land_id: string | null
  }

  export type WeatherMaxAggregateOutputType = {
    weather_id: string | null
    temperature: number | null
    humidity: number | null
    rainfall: number | null
    sunlight: number | null
    land_id: string | null
  }

  export type WeatherCountAggregateOutputType = {
    weather_id: number
    temperature: number
    humidity: number
    rainfall: number
    sunlight: number
    land_id: number
    _all: number
  }


  export type WeatherAvgAggregateInputType = {
    temperature?: true
    humidity?: true
    rainfall?: true
    sunlight?: true
  }

  export type WeatherSumAggregateInputType = {
    temperature?: true
    humidity?: true
    rainfall?: true
    sunlight?: true
  }

  export type WeatherMinAggregateInputType = {
    weather_id?: true
    temperature?: true
    humidity?: true
    rainfall?: true
    sunlight?: true
    land_id?: true
  }

  export type WeatherMaxAggregateInputType = {
    weather_id?: true
    temperature?: true
    humidity?: true
    rainfall?: true
    sunlight?: true
    land_id?: true
  }

  export type WeatherCountAggregateInputType = {
    weather_id?: true
    temperature?: true
    humidity?: true
    rainfall?: true
    sunlight?: true
    land_id?: true
    _all?: true
  }

  export type WeatherAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Weather to aggregate.
     */
    where?: WeatherWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Weathers to fetch.
     */
    orderBy?: WeatherOrderByWithRelationInput | WeatherOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: WeatherWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Weathers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Weathers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Weathers
    **/
    _count?: true | WeatherCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: WeatherAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: WeatherSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: WeatherMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: WeatherMaxAggregateInputType
  }

  export type GetWeatherAggregateType<T extends WeatherAggregateArgs> = {
        [P in keyof T & keyof AggregateWeather]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWeather[P]>
      : GetScalarType<T[P], AggregateWeather[P]>
  }




  export type WeatherGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WeatherWhereInput
    orderBy?: WeatherOrderByWithAggregationInput | WeatherOrderByWithAggregationInput[]
    by: WeatherScalarFieldEnum[] | WeatherScalarFieldEnum
    having?: WeatherScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: WeatherCountAggregateInputType | true
    _avg?: WeatherAvgAggregateInputType
    _sum?: WeatherSumAggregateInputType
    _min?: WeatherMinAggregateInputType
    _max?: WeatherMaxAggregateInputType
  }

  export type WeatherGroupByOutputType = {
    weather_id: string
    temperature: number
    humidity: number
    rainfall: number
    sunlight: number
    land_id: string | null
    _count: WeatherCountAggregateOutputType | null
    _avg: WeatherAvgAggregateOutputType | null
    _sum: WeatherSumAggregateOutputType | null
    _min: WeatherMinAggregateOutputType | null
    _max: WeatherMaxAggregateOutputType | null
  }

  type GetWeatherGroupByPayload<T extends WeatherGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<WeatherGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof WeatherGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], WeatherGroupByOutputType[P]>
            : GetScalarType<T[P], WeatherGroupByOutputType[P]>
        }
      >
    >


  export type WeatherSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    weather_id?: boolean
    temperature?: boolean
    humidity?: boolean
    rainfall?: boolean
    sunlight?: boolean
    land_id?: boolean
    land?: boolean | Weather$landArgs<ExtArgs>
  }, ExtArgs["result"]["weather"]>

  export type WeatherSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    weather_id?: boolean
    temperature?: boolean
    humidity?: boolean
    rainfall?: boolean
    sunlight?: boolean
    land_id?: boolean
    land?: boolean | Weather$landArgs<ExtArgs>
  }, ExtArgs["result"]["weather"]>

  export type WeatherSelectScalar = {
    weather_id?: boolean
    temperature?: boolean
    humidity?: boolean
    rainfall?: boolean
    sunlight?: boolean
    land_id?: boolean
  }

  export type WeatherInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    land?: boolean | Weather$landArgs<ExtArgs>
  }
  export type WeatherIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    land?: boolean | Weather$landArgs<ExtArgs>
  }

  export type $WeatherPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Weather"
    objects: {
      land: Prisma.$LandPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      weather_id: string
      temperature: number
      humidity: number
      rainfall: number
      sunlight: number
      land_id: string | null
    }, ExtArgs["result"]["weather"]>
    composites: {}
  }

  type WeatherGetPayload<S extends boolean | null | undefined | WeatherDefaultArgs> = $Result.GetResult<Prisma.$WeatherPayload, S>

  type WeatherCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<WeatherFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: WeatherCountAggregateInputType | true
    }

  export interface WeatherDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Weather'], meta: { name: 'Weather' } }
    /**
     * Find zero or one Weather that matches the filter.
     * @param {WeatherFindUniqueArgs} args - Arguments to find a Weather
     * @example
     * // Get one Weather
     * const weather = await prisma.weather.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends WeatherFindUniqueArgs>(args: SelectSubset<T, WeatherFindUniqueArgs<ExtArgs>>): Prisma__WeatherClient<$Result.GetResult<Prisma.$WeatherPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Weather that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {WeatherFindUniqueOrThrowArgs} args - Arguments to find a Weather
     * @example
     * // Get one Weather
     * const weather = await prisma.weather.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends WeatherFindUniqueOrThrowArgs>(args: SelectSubset<T, WeatherFindUniqueOrThrowArgs<ExtArgs>>): Prisma__WeatherClient<$Result.GetResult<Prisma.$WeatherPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Weather that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WeatherFindFirstArgs} args - Arguments to find a Weather
     * @example
     * // Get one Weather
     * const weather = await prisma.weather.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends WeatherFindFirstArgs>(args?: SelectSubset<T, WeatherFindFirstArgs<ExtArgs>>): Prisma__WeatherClient<$Result.GetResult<Prisma.$WeatherPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Weather that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WeatherFindFirstOrThrowArgs} args - Arguments to find a Weather
     * @example
     * // Get one Weather
     * const weather = await prisma.weather.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends WeatherFindFirstOrThrowArgs>(args?: SelectSubset<T, WeatherFindFirstOrThrowArgs<ExtArgs>>): Prisma__WeatherClient<$Result.GetResult<Prisma.$WeatherPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Weathers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WeatherFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Weathers
     * const weathers = await prisma.weather.findMany()
     * 
     * // Get first 10 Weathers
     * const weathers = await prisma.weather.findMany({ take: 10 })
     * 
     * // Only select the `weather_id`
     * const weatherWithWeather_idOnly = await prisma.weather.findMany({ select: { weather_id: true } })
     * 
     */
    findMany<T extends WeatherFindManyArgs>(args?: SelectSubset<T, WeatherFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WeatherPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Weather.
     * @param {WeatherCreateArgs} args - Arguments to create a Weather.
     * @example
     * // Create one Weather
     * const Weather = await prisma.weather.create({
     *   data: {
     *     // ... data to create a Weather
     *   }
     * })
     * 
     */
    create<T extends WeatherCreateArgs>(args: SelectSubset<T, WeatherCreateArgs<ExtArgs>>): Prisma__WeatherClient<$Result.GetResult<Prisma.$WeatherPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Weathers.
     * @param {WeatherCreateManyArgs} args - Arguments to create many Weathers.
     * @example
     * // Create many Weathers
     * const weather = await prisma.weather.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends WeatherCreateManyArgs>(args?: SelectSubset<T, WeatherCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Weathers and returns the data saved in the database.
     * @param {WeatherCreateManyAndReturnArgs} args - Arguments to create many Weathers.
     * @example
     * // Create many Weathers
     * const weather = await prisma.weather.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Weathers and only return the `weather_id`
     * const weatherWithWeather_idOnly = await prisma.weather.createManyAndReturn({ 
     *   select: { weather_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends WeatherCreateManyAndReturnArgs>(args?: SelectSubset<T, WeatherCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WeatherPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Weather.
     * @param {WeatherDeleteArgs} args - Arguments to delete one Weather.
     * @example
     * // Delete one Weather
     * const Weather = await prisma.weather.delete({
     *   where: {
     *     // ... filter to delete one Weather
     *   }
     * })
     * 
     */
    delete<T extends WeatherDeleteArgs>(args: SelectSubset<T, WeatherDeleteArgs<ExtArgs>>): Prisma__WeatherClient<$Result.GetResult<Prisma.$WeatherPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Weather.
     * @param {WeatherUpdateArgs} args - Arguments to update one Weather.
     * @example
     * // Update one Weather
     * const weather = await prisma.weather.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends WeatherUpdateArgs>(args: SelectSubset<T, WeatherUpdateArgs<ExtArgs>>): Prisma__WeatherClient<$Result.GetResult<Prisma.$WeatherPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Weathers.
     * @param {WeatherDeleteManyArgs} args - Arguments to filter Weathers to delete.
     * @example
     * // Delete a few Weathers
     * const { count } = await prisma.weather.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends WeatherDeleteManyArgs>(args?: SelectSubset<T, WeatherDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Weathers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WeatherUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Weathers
     * const weather = await prisma.weather.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends WeatherUpdateManyArgs>(args: SelectSubset<T, WeatherUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Weather.
     * @param {WeatherUpsertArgs} args - Arguments to update or create a Weather.
     * @example
     * // Update or create a Weather
     * const weather = await prisma.weather.upsert({
     *   create: {
     *     // ... data to create a Weather
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Weather we want to update
     *   }
     * })
     */
    upsert<T extends WeatherUpsertArgs>(args: SelectSubset<T, WeatherUpsertArgs<ExtArgs>>): Prisma__WeatherClient<$Result.GetResult<Prisma.$WeatherPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Weathers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WeatherCountArgs} args - Arguments to filter Weathers to count.
     * @example
     * // Count the number of Weathers
     * const count = await prisma.weather.count({
     *   where: {
     *     // ... the filter for the Weathers we want to count
     *   }
     * })
    **/
    count<T extends WeatherCountArgs>(
      args?: Subset<T, WeatherCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WeatherCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Weather.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WeatherAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends WeatherAggregateArgs>(args: Subset<T, WeatherAggregateArgs>): Prisma.PrismaPromise<GetWeatherAggregateType<T>>

    /**
     * Group by Weather.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WeatherGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends WeatherGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: WeatherGroupByArgs['orderBy'] }
        : { orderBy?: WeatherGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, WeatherGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWeatherGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Weather model
   */
  readonly fields: WeatherFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Weather.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__WeatherClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    land<T extends Weather$landArgs<ExtArgs> = {}>(args?: Subset<T, Weather$landArgs<ExtArgs>>): Prisma__LandClient<$Result.GetResult<Prisma.$LandPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Weather model
   */ 
  interface WeatherFieldRefs {
    readonly weather_id: FieldRef<"Weather", 'String'>
    readonly temperature: FieldRef<"Weather", 'Float'>
    readonly humidity: FieldRef<"Weather", 'Float'>
    readonly rainfall: FieldRef<"Weather", 'Float'>
    readonly sunlight: FieldRef<"Weather", 'Float'>
    readonly land_id: FieldRef<"Weather", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Weather findUnique
   */
  export type WeatherFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Weather
     */
    select?: WeatherSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WeatherInclude<ExtArgs> | null
    /**
     * Filter, which Weather to fetch.
     */
    where: WeatherWhereUniqueInput
  }

  /**
   * Weather findUniqueOrThrow
   */
  export type WeatherFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Weather
     */
    select?: WeatherSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WeatherInclude<ExtArgs> | null
    /**
     * Filter, which Weather to fetch.
     */
    where: WeatherWhereUniqueInput
  }

  /**
   * Weather findFirst
   */
  export type WeatherFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Weather
     */
    select?: WeatherSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WeatherInclude<ExtArgs> | null
    /**
     * Filter, which Weather to fetch.
     */
    where?: WeatherWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Weathers to fetch.
     */
    orderBy?: WeatherOrderByWithRelationInput | WeatherOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Weathers.
     */
    cursor?: WeatherWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Weathers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Weathers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Weathers.
     */
    distinct?: WeatherScalarFieldEnum | WeatherScalarFieldEnum[]
  }

  /**
   * Weather findFirstOrThrow
   */
  export type WeatherFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Weather
     */
    select?: WeatherSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WeatherInclude<ExtArgs> | null
    /**
     * Filter, which Weather to fetch.
     */
    where?: WeatherWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Weathers to fetch.
     */
    orderBy?: WeatherOrderByWithRelationInput | WeatherOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Weathers.
     */
    cursor?: WeatherWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Weathers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Weathers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Weathers.
     */
    distinct?: WeatherScalarFieldEnum | WeatherScalarFieldEnum[]
  }

  /**
   * Weather findMany
   */
  export type WeatherFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Weather
     */
    select?: WeatherSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WeatherInclude<ExtArgs> | null
    /**
     * Filter, which Weathers to fetch.
     */
    where?: WeatherWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Weathers to fetch.
     */
    orderBy?: WeatherOrderByWithRelationInput | WeatherOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Weathers.
     */
    cursor?: WeatherWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Weathers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Weathers.
     */
    skip?: number
    distinct?: WeatherScalarFieldEnum | WeatherScalarFieldEnum[]
  }

  /**
   * Weather create
   */
  export type WeatherCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Weather
     */
    select?: WeatherSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WeatherInclude<ExtArgs> | null
    /**
     * The data needed to create a Weather.
     */
    data: XOR<WeatherCreateInput, WeatherUncheckedCreateInput>
  }

  /**
   * Weather createMany
   */
  export type WeatherCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Weathers.
     */
    data: WeatherCreateManyInput | WeatherCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Weather createManyAndReturn
   */
  export type WeatherCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Weather
     */
    select?: WeatherSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Weathers.
     */
    data: WeatherCreateManyInput | WeatherCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WeatherIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Weather update
   */
  export type WeatherUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Weather
     */
    select?: WeatherSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WeatherInclude<ExtArgs> | null
    /**
     * The data needed to update a Weather.
     */
    data: XOR<WeatherUpdateInput, WeatherUncheckedUpdateInput>
    /**
     * Choose, which Weather to update.
     */
    where: WeatherWhereUniqueInput
  }

  /**
   * Weather updateMany
   */
  export type WeatherUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Weathers.
     */
    data: XOR<WeatherUpdateManyMutationInput, WeatherUncheckedUpdateManyInput>
    /**
     * Filter which Weathers to update
     */
    where?: WeatherWhereInput
  }

  /**
   * Weather upsert
   */
  export type WeatherUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Weather
     */
    select?: WeatherSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WeatherInclude<ExtArgs> | null
    /**
     * The filter to search for the Weather to update in case it exists.
     */
    where: WeatherWhereUniqueInput
    /**
     * In case the Weather found by the `where` argument doesn't exist, create a new Weather with this data.
     */
    create: XOR<WeatherCreateInput, WeatherUncheckedCreateInput>
    /**
     * In case the Weather was found with the provided `where` argument, update it with this data.
     */
    update: XOR<WeatherUpdateInput, WeatherUncheckedUpdateInput>
  }

  /**
   * Weather delete
   */
  export type WeatherDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Weather
     */
    select?: WeatherSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WeatherInclude<ExtArgs> | null
    /**
     * Filter which Weather to delete.
     */
    where: WeatherWhereUniqueInput
  }

  /**
   * Weather deleteMany
   */
  export type WeatherDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Weathers to delete
     */
    where?: WeatherWhereInput
  }

  /**
   * Weather.land
   */
  export type Weather$landArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Land
     */
    select?: LandSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LandInclude<ExtArgs> | null
    where?: LandWhereInput
  }

  /**
   * Weather without action
   */
  export type WeatherDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Weather
     */
    select?: WeatherSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WeatherInclude<ExtArgs> | null
  }


  /**
   * Model BusinessPlan
   */

  export type AggregateBusinessPlan = {
    _count: BusinessPlanCountAggregateOutputType | null
    _min: BusinessPlanMinAggregateOutputType | null
    _max: BusinessPlanMaxAggregateOutputType | null
  }

  export type BusinessPlanMinAggregateOutputType = {
    business_plan_id: string | null
    executive_summary: string | null
    resources: string | null
    crops: string | null
    weather_considerations: string | null
    soil_maintenance: string | null
    profit_estimations: string | null
    other_recommendations: string | null
    land_id: string | null
  }

  export type BusinessPlanMaxAggregateOutputType = {
    business_plan_id: string | null
    executive_summary: string | null
    resources: string | null
    crops: string | null
    weather_considerations: string | null
    soil_maintenance: string | null
    profit_estimations: string | null
    other_recommendations: string | null
    land_id: string | null
  }

  export type BusinessPlanCountAggregateOutputType = {
    business_plan_id: number
    executive_summary: number
    resources: number
    crops: number
    weather_considerations: number
    soil_maintenance: number
    profit_estimations: number
    other_recommendations: number
    land_id: number
    _all: number
  }


  export type BusinessPlanMinAggregateInputType = {
    business_plan_id?: true
    executive_summary?: true
    resources?: true
    crops?: true
    weather_considerations?: true
    soil_maintenance?: true
    profit_estimations?: true
    other_recommendations?: true
    land_id?: true
  }

  export type BusinessPlanMaxAggregateInputType = {
    business_plan_id?: true
    executive_summary?: true
    resources?: true
    crops?: true
    weather_considerations?: true
    soil_maintenance?: true
    profit_estimations?: true
    other_recommendations?: true
    land_id?: true
  }

  export type BusinessPlanCountAggregateInputType = {
    business_plan_id?: true
    executive_summary?: true
    resources?: true
    crops?: true
    weather_considerations?: true
    soil_maintenance?: true
    profit_estimations?: true
    other_recommendations?: true
    land_id?: true
    _all?: true
  }

  export type BusinessPlanAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BusinessPlan to aggregate.
     */
    where?: BusinessPlanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BusinessPlans to fetch.
     */
    orderBy?: BusinessPlanOrderByWithRelationInput | BusinessPlanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BusinessPlanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BusinessPlans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BusinessPlans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned BusinessPlans
    **/
    _count?: true | BusinessPlanCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BusinessPlanMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BusinessPlanMaxAggregateInputType
  }

  export type GetBusinessPlanAggregateType<T extends BusinessPlanAggregateArgs> = {
        [P in keyof T & keyof AggregateBusinessPlan]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBusinessPlan[P]>
      : GetScalarType<T[P], AggregateBusinessPlan[P]>
  }




  export type BusinessPlanGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BusinessPlanWhereInput
    orderBy?: BusinessPlanOrderByWithAggregationInput | BusinessPlanOrderByWithAggregationInput[]
    by: BusinessPlanScalarFieldEnum[] | BusinessPlanScalarFieldEnum
    having?: BusinessPlanScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BusinessPlanCountAggregateInputType | true
    _min?: BusinessPlanMinAggregateInputType
    _max?: BusinessPlanMaxAggregateInputType
  }

  export type BusinessPlanGroupByOutputType = {
    business_plan_id: string
    executive_summary: string
    resources: string
    crops: string
    weather_considerations: string
    soil_maintenance: string
    profit_estimations: string
    other_recommendations: string
    land_id: string
    _count: BusinessPlanCountAggregateOutputType | null
    _min: BusinessPlanMinAggregateOutputType | null
    _max: BusinessPlanMaxAggregateOutputType | null
  }

  type GetBusinessPlanGroupByPayload<T extends BusinessPlanGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BusinessPlanGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BusinessPlanGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BusinessPlanGroupByOutputType[P]>
            : GetScalarType<T[P], BusinessPlanGroupByOutputType[P]>
        }
      >
    >


  export type BusinessPlanSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    business_plan_id?: boolean
    executive_summary?: boolean
    resources?: boolean
    crops?: boolean
    weather_considerations?: boolean
    soil_maintenance?: boolean
    profit_estimations?: boolean
    other_recommendations?: boolean
    land_id?: boolean
    land?: boolean | LandDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["businessPlan"]>

  export type BusinessPlanSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    business_plan_id?: boolean
    executive_summary?: boolean
    resources?: boolean
    crops?: boolean
    weather_considerations?: boolean
    soil_maintenance?: boolean
    profit_estimations?: boolean
    other_recommendations?: boolean
    land_id?: boolean
    land?: boolean | LandDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["businessPlan"]>

  export type BusinessPlanSelectScalar = {
    business_plan_id?: boolean
    executive_summary?: boolean
    resources?: boolean
    crops?: boolean
    weather_considerations?: boolean
    soil_maintenance?: boolean
    profit_estimations?: boolean
    other_recommendations?: boolean
    land_id?: boolean
  }

  export type BusinessPlanInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    land?: boolean | LandDefaultArgs<ExtArgs>
  }
  export type BusinessPlanIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    land?: boolean | LandDefaultArgs<ExtArgs>
  }

  export type $BusinessPlanPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "BusinessPlan"
    objects: {
      land: Prisma.$LandPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      business_plan_id: string
      executive_summary: string
      resources: string
      crops: string
      weather_considerations: string
      soil_maintenance: string
      profit_estimations: string
      other_recommendations: string
      land_id: string
    }, ExtArgs["result"]["businessPlan"]>
    composites: {}
  }

  type BusinessPlanGetPayload<S extends boolean | null | undefined | BusinessPlanDefaultArgs> = $Result.GetResult<Prisma.$BusinessPlanPayload, S>

  type BusinessPlanCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<BusinessPlanFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: BusinessPlanCountAggregateInputType | true
    }

  export interface BusinessPlanDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['BusinessPlan'], meta: { name: 'BusinessPlan' } }
    /**
     * Find zero or one BusinessPlan that matches the filter.
     * @param {BusinessPlanFindUniqueArgs} args - Arguments to find a BusinessPlan
     * @example
     * // Get one BusinessPlan
     * const businessPlan = await prisma.businessPlan.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BusinessPlanFindUniqueArgs>(args: SelectSubset<T, BusinessPlanFindUniqueArgs<ExtArgs>>): Prisma__BusinessPlanClient<$Result.GetResult<Prisma.$BusinessPlanPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one BusinessPlan that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {BusinessPlanFindUniqueOrThrowArgs} args - Arguments to find a BusinessPlan
     * @example
     * // Get one BusinessPlan
     * const businessPlan = await prisma.businessPlan.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BusinessPlanFindUniqueOrThrowArgs>(args: SelectSubset<T, BusinessPlanFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BusinessPlanClient<$Result.GetResult<Prisma.$BusinessPlanPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first BusinessPlan that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BusinessPlanFindFirstArgs} args - Arguments to find a BusinessPlan
     * @example
     * // Get one BusinessPlan
     * const businessPlan = await prisma.businessPlan.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BusinessPlanFindFirstArgs>(args?: SelectSubset<T, BusinessPlanFindFirstArgs<ExtArgs>>): Prisma__BusinessPlanClient<$Result.GetResult<Prisma.$BusinessPlanPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first BusinessPlan that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BusinessPlanFindFirstOrThrowArgs} args - Arguments to find a BusinessPlan
     * @example
     * // Get one BusinessPlan
     * const businessPlan = await prisma.businessPlan.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BusinessPlanFindFirstOrThrowArgs>(args?: SelectSubset<T, BusinessPlanFindFirstOrThrowArgs<ExtArgs>>): Prisma__BusinessPlanClient<$Result.GetResult<Prisma.$BusinessPlanPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more BusinessPlans that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BusinessPlanFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all BusinessPlans
     * const businessPlans = await prisma.businessPlan.findMany()
     * 
     * // Get first 10 BusinessPlans
     * const businessPlans = await prisma.businessPlan.findMany({ take: 10 })
     * 
     * // Only select the `business_plan_id`
     * const businessPlanWithBusiness_plan_idOnly = await prisma.businessPlan.findMany({ select: { business_plan_id: true } })
     * 
     */
    findMany<T extends BusinessPlanFindManyArgs>(args?: SelectSubset<T, BusinessPlanFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BusinessPlanPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a BusinessPlan.
     * @param {BusinessPlanCreateArgs} args - Arguments to create a BusinessPlan.
     * @example
     * // Create one BusinessPlan
     * const BusinessPlan = await prisma.businessPlan.create({
     *   data: {
     *     // ... data to create a BusinessPlan
     *   }
     * })
     * 
     */
    create<T extends BusinessPlanCreateArgs>(args: SelectSubset<T, BusinessPlanCreateArgs<ExtArgs>>): Prisma__BusinessPlanClient<$Result.GetResult<Prisma.$BusinessPlanPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many BusinessPlans.
     * @param {BusinessPlanCreateManyArgs} args - Arguments to create many BusinessPlans.
     * @example
     * // Create many BusinessPlans
     * const businessPlan = await prisma.businessPlan.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BusinessPlanCreateManyArgs>(args?: SelectSubset<T, BusinessPlanCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many BusinessPlans and returns the data saved in the database.
     * @param {BusinessPlanCreateManyAndReturnArgs} args - Arguments to create many BusinessPlans.
     * @example
     * // Create many BusinessPlans
     * const businessPlan = await prisma.businessPlan.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many BusinessPlans and only return the `business_plan_id`
     * const businessPlanWithBusiness_plan_idOnly = await prisma.businessPlan.createManyAndReturn({ 
     *   select: { business_plan_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BusinessPlanCreateManyAndReturnArgs>(args?: SelectSubset<T, BusinessPlanCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BusinessPlanPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a BusinessPlan.
     * @param {BusinessPlanDeleteArgs} args - Arguments to delete one BusinessPlan.
     * @example
     * // Delete one BusinessPlan
     * const BusinessPlan = await prisma.businessPlan.delete({
     *   where: {
     *     // ... filter to delete one BusinessPlan
     *   }
     * })
     * 
     */
    delete<T extends BusinessPlanDeleteArgs>(args: SelectSubset<T, BusinessPlanDeleteArgs<ExtArgs>>): Prisma__BusinessPlanClient<$Result.GetResult<Prisma.$BusinessPlanPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one BusinessPlan.
     * @param {BusinessPlanUpdateArgs} args - Arguments to update one BusinessPlan.
     * @example
     * // Update one BusinessPlan
     * const businessPlan = await prisma.businessPlan.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BusinessPlanUpdateArgs>(args: SelectSubset<T, BusinessPlanUpdateArgs<ExtArgs>>): Prisma__BusinessPlanClient<$Result.GetResult<Prisma.$BusinessPlanPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more BusinessPlans.
     * @param {BusinessPlanDeleteManyArgs} args - Arguments to filter BusinessPlans to delete.
     * @example
     * // Delete a few BusinessPlans
     * const { count } = await prisma.businessPlan.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BusinessPlanDeleteManyArgs>(args?: SelectSubset<T, BusinessPlanDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BusinessPlans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BusinessPlanUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many BusinessPlans
     * const businessPlan = await prisma.businessPlan.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BusinessPlanUpdateManyArgs>(args: SelectSubset<T, BusinessPlanUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one BusinessPlan.
     * @param {BusinessPlanUpsertArgs} args - Arguments to update or create a BusinessPlan.
     * @example
     * // Update or create a BusinessPlan
     * const businessPlan = await prisma.businessPlan.upsert({
     *   create: {
     *     // ... data to create a BusinessPlan
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the BusinessPlan we want to update
     *   }
     * })
     */
    upsert<T extends BusinessPlanUpsertArgs>(args: SelectSubset<T, BusinessPlanUpsertArgs<ExtArgs>>): Prisma__BusinessPlanClient<$Result.GetResult<Prisma.$BusinessPlanPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of BusinessPlans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BusinessPlanCountArgs} args - Arguments to filter BusinessPlans to count.
     * @example
     * // Count the number of BusinessPlans
     * const count = await prisma.businessPlan.count({
     *   where: {
     *     // ... the filter for the BusinessPlans we want to count
     *   }
     * })
    **/
    count<T extends BusinessPlanCountArgs>(
      args?: Subset<T, BusinessPlanCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BusinessPlanCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a BusinessPlan.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BusinessPlanAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends BusinessPlanAggregateArgs>(args: Subset<T, BusinessPlanAggregateArgs>): Prisma.PrismaPromise<GetBusinessPlanAggregateType<T>>

    /**
     * Group by BusinessPlan.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BusinessPlanGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends BusinessPlanGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BusinessPlanGroupByArgs['orderBy'] }
        : { orderBy?: BusinessPlanGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, BusinessPlanGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBusinessPlanGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the BusinessPlan model
   */
  readonly fields: BusinessPlanFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for BusinessPlan.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BusinessPlanClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    land<T extends LandDefaultArgs<ExtArgs> = {}>(args?: Subset<T, LandDefaultArgs<ExtArgs>>): Prisma__LandClient<$Result.GetResult<Prisma.$LandPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the BusinessPlan model
   */ 
  interface BusinessPlanFieldRefs {
    readonly business_plan_id: FieldRef<"BusinessPlan", 'String'>
    readonly executive_summary: FieldRef<"BusinessPlan", 'String'>
    readonly resources: FieldRef<"BusinessPlan", 'String'>
    readonly crops: FieldRef<"BusinessPlan", 'String'>
    readonly weather_considerations: FieldRef<"BusinessPlan", 'String'>
    readonly soil_maintenance: FieldRef<"BusinessPlan", 'String'>
    readonly profit_estimations: FieldRef<"BusinessPlan", 'String'>
    readonly other_recommendations: FieldRef<"BusinessPlan", 'String'>
    readonly land_id: FieldRef<"BusinessPlan", 'String'>
  }
    

  // Custom InputTypes
  /**
   * BusinessPlan findUnique
   */
  export type BusinessPlanFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BusinessPlan
     */
    select?: BusinessPlanSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BusinessPlanInclude<ExtArgs> | null
    /**
     * Filter, which BusinessPlan to fetch.
     */
    where: BusinessPlanWhereUniqueInput
  }

  /**
   * BusinessPlan findUniqueOrThrow
   */
  export type BusinessPlanFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BusinessPlan
     */
    select?: BusinessPlanSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BusinessPlanInclude<ExtArgs> | null
    /**
     * Filter, which BusinessPlan to fetch.
     */
    where: BusinessPlanWhereUniqueInput
  }

  /**
   * BusinessPlan findFirst
   */
  export type BusinessPlanFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BusinessPlan
     */
    select?: BusinessPlanSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BusinessPlanInclude<ExtArgs> | null
    /**
     * Filter, which BusinessPlan to fetch.
     */
    where?: BusinessPlanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BusinessPlans to fetch.
     */
    orderBy?: BusinessPlanOrderByWithRelationInput | BusinessPlanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BusinessPlans.
     */
    cursor?: BusinessPlanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BusinessPlans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BusinessPlans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BusinessPlans.
     */
    distinct?: BusinessPlanScalarFieldEnum | BusinessPlanScalarFieldEnum[]
  }

  /**
   * BusinessPlan findFirstOrThrow
   */
  export type BusinessPlanFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BusinessPlan
     */
    select?: BusinessPlanSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BusinessPlanInclude<ExtArgs> | null
    /**
     * Filter, which BusinessPlan to fetch.
     */
    where?: BusinessPlanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BusinessPlans to fetch.
     */
    orderBy?: BusinessPlanOrderByWithRelationInput | BusinessPlanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BusinessPlans.
     */
    cursor?: BusinessPlanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BusinessPlans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BusinessPlans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BusinessPlans.
     */
    distinct?: BusinessPlanScalarFieldEnum | BusinessPlanScalarFieldEnum[]
  }

  /**
   * BusinessPlan findMany
   */
  export type BusinessPlanFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BusinessPlan
     */
    select?: BusinessPlanSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BusinessPlanInclude<ExtArgs> | null
    /**
     * Filter, which BusinessPlans to fetch.
     */
    where?: BusinessPlanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BusinessPlans to fetch.
     */
    orderBy?: BusinessPlanOrderByWithRelationInput | BusinessPlanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing BusinessPlans.
     */
    cursor?: BusinessPlanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BusinessPlans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BusinessPlans.
     */
    skip?: number
    distinct?: BusinessPlanScalarFieldEnum | BusinessPlanScalarFieldEnum[]
  }

  /**
   * BusinessPlan create
   */
  export type BusinessPlanCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BusinessPlan
     */
    select?: BusinessPlanSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BusinessPlanInclude<ExtArgs> | null
    /**
     * The data needed to create a BusinessPlan.
     */
    data: XOR<BusinessPlanCreateInput, BusinessPlanUncheckedCreateInput>
  }

  /**
   * BusinessPlan createMany
   */
  export type BusinessPlanCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many BusinessPlans.
     */
    data: BusinessPlanCreateManyInput | BusinessPlanCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * BusinessPlan createManyAndReturn
   */
  export type BusinessPlanCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BusinessPlan
     */
    select?: BusinessPlanSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many BusinessPlans.
     */
    data: BusinessPlanCreateManyInput | BusinessPlanCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BusinessPlanIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * BusinessPlan update
   */
  export type BusinessPlanUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BusinessPlan
     */
    select?: BusinessPlanSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BusinessPlanInclude<ExtArgs> | null
    /**
     * The data needed to update a BusinessPlan.
     */
    data: XOR<BusinessPlanUpdateInput, BusinessPlanUncheckedUpdateInput>
    /**
     * Choose, which BusinessPlan to update.
     */
    where: BusinessPlanWhereUniqueInput
  }

  /**
   * BusinessPlan updateMany
   */
  export type BusinessPlanUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update BusinessPlans.
     */
    data: XOR<BusinessPlanUpdateManyMutationInput, BusinessPlanUncheckedUpdateManyInput>
    /**
     * Filter which BusinessPlans to update
     */
    where?: BusinessPlanWhereInput
  }

  /**
   * BusinessPlan upsert
   */
  export type BusinessPlanUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BusinessPlan
     */
    select?: BusinessPlanSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BusinessPlanInclude<ExtArgs> | null
    /**
     * The filter to search for the BusinessPlan to update in case it exists.
     */
    where: BusinessPlanWhereUniqueInput
    /**
     * In case the BusinessPlan found by the `where` argument doesn't exist, create a new BusinessPlan with this data.
     */
    create: XOR<BusinessPlanCreateInput, BusinessPlanUncheckedCreateInput>
    /**
     * In case the BusinessPlan was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BusinessPlanUpdateInput, BusinessPlanUncheckedUpdateInput>
  }

  /**
   * BusinessPlan delete
   */
  export type BusinessPlanDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BusinessPlan
     */
    select?: BusinessPlanSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BusinessPlanInclude<ExtArgs> | null
    /**
     * Filter which BusinessPlan to delete.
     */
    where: BusinessPlanWhereUniqueInput
  }

  /**
   * BusinessPlan deleteMany
   */
  export type BusinessPlanDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BusinessPlans to delete
     */
    where?: BusinessPlanWhereInput
  }

  /**
   * BusinessPlan without action
   */
  export type BusinessPlanDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BusinessPlan
     */
    select?: BusinessPlanSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BusinessPlanInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    user_id: 'user_id'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const LandScalarFieldEnum: {
    land_id: 'land_id',
    latitude: 'latitude',
    longitude: 'longitude',
    land_size: 'land_size',
    land_name: 'land_name',
    land_image: 'land_image',
    ph_level: 'ph_level',
    phosphorus: 'phosphorus',
    potassium: 'potassium',
    oxygen_level: 'oxygen_level',
    nitrogen: 'nitrogen',
    user_id: 'user_id'
  };

  export type LandScalarFieldEnum = (typeof LandScalarFieldEnum)[keyof typeof LandScalarFieldEnum]


  export const LandStatisticScalarFieldEnum: {
    land_stat_id: 'land_stat_id',
    land_use: 'land_use',
    human_coverage: 'human_coverage',
    water_availability: 'water_availability',
    distribution_optimality: 'distribution_optimality',
    total_profit: 'total_profit',
    land_id: 'land_id'
  };

  export type LandStatisticScalarFieldEnum = (typeof LandStatisticScalarFieldEnum)[keyof typeof LandStatisticScalarFieldEnum]


  export const CropScalarFieldEnum: {
    crop_id: 'crop_id',
    crop_name: 'crop_name',
    crop_area: 'crop_area',
    crop_investment: 'crop_investment',
    expected_money_return: 'expected_money_return',
    expected_weight_return: 'expected_weight_return',
    land_id: 'land_id'
  };

  export type CropScalarFieldEnum = (typeof CropScalarFieldEnum)[keyof typeof CropScalarFieldEnum]


  export const CropMaintenanceScalarFieldEnum: {
    maintenance_id: 'maintenance_id',
    pesticide_level: 'pesticide_level',
    water_sufficienty: 'water_sufficienty',
    land_id: 'land_id'
  };

  export type CropMaintenanceScalarFieldEnum = (typeof CropMaintenanceScalarFieldEnum)[keyof typeof CropMaintenanceScalarFieldEnum]


  export const FinanceScalarFieldEnum: {
    financial_id: 'financial_id',
    investment_amount: 'investment_amount',
    expected_revenue: 'expected_revenue',
    land_id: 'land_id'
  };

  export type FinanceScalarFieldEnum = (typeof FinanceScalarFieldEnum)[keyof typeof FinanceScalarFieldEnum]


  export const WeatherScalarFieldEnum: {
    weather_id: 'weather_id',
    temperature: 'temperature',
    humidity: 'humidity',
    rainfall: 'rainfall',
    sunlight: 'sunlight',
    land_id: 'land_id'
  };

  export type WeatherScalarFieldEnum = (typeof WeatherScalarFieldEnum)[keyof typeof WeatherScalarFieldEnum]


  export const BusinessPlanScalarFieldEnum: {
    business_plan_id: 'business_plan_id',
    executive_summary: 'executive_summary',
    resources: 'resources',
    crops: 'crops',
    weather_considerations: 'weather_considerations',
    soil_maintenance: 'soil_maintenance',
    profit_estimations: 'profit_estimations',
    other_recommendations: 'other_recommendations',
    land_id: 'land_id'
  };

  export type BusinessPlanScalarFieldEnum = (typeof BusinessPlanScalarFieldEnum)[keyof typeof BusinessPlanScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    user_id?: UuidFilter<"User"> | string
    lands?: LandListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    user_id?: SortOrder
    lands?: LandOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    user_id?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    lands?: LandListRelationFilter
  }, "user_id">

  export type UserOrderByWithAggregationInput = {
    user_id?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    user_id?: UuidWithAggregatesFilter<"User"> | string
  }

  export type LandWhereInput = {
    AND?: LandWhereInput | LandWhereInput[]
    OR?: LandWhereInput[]
    NOT?: LandWhereInput | LandWhereInput[]
    land_id?: UuidFilter<"Land"> | string
    latitude?: FloatFilter<"Land"> | number
    longitude?: FloatFilter<"Land"> | number
    land_size?: FloatFilter<"Land"> | number
    land_name?: StringNullableFilter<"Land"> | string | null
    land_image?: StringNullableFilter<"Land"> | string | null
    ph_level?: FloatFilter<"Land"> | number
    phosphorus?: FloatFilter<"Land"> | number
    potassium?: FloatFilter<"Land"> | number
    oxygen_level?: FloatFilter<"Land"> | number
    nitrogen?: FloatFilter<"Land"> | number
    user_id?: UuidFilter<"Land"> | string
    user?: XOR<UserRelationFilter, UserWhereInput>
    statistics?: LandStatisticListRelationFilter
    crops?: CropListRelationFilter
    maintenances?: CropMaintenanceListRelationFilter
    finances?: FinanceListRelationFilter
    weather_data?: WeatherListRelationFilter
    business_plans?: BusinessPlanListRelationFilter
  }

  export type LandOrderByWithRelationInput = {
    land_id?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    land_size?: SortOrder
    land_name?: SortOrderInput | SortOrder
    land_image?: SortOrderInput | SortOrder
    ph_level?: SortOrder
    phosphorus?: SortOrder
    potassium?: SortOrder
    oxygen_level?: SortOrder
    nitrogen?: SortOrder
    user_id?: SortOrder
    user?: UserOrderByWithRelationInput
    statistics?: LandStatisticOrderByRelationAggregateInput
    crops?: CropOrderByRelationAggregateInput
    maintenances?: CropMaintenanceOrderByRelationAggregateInput
    finances?: FinanceOrderByRelationAggregateInput
    weather_data?: WeatherOrderByRelationAggregateInput
    business_plans?: BusinessPlanOrderByRelationAggregateInput
  }

  export type LandWhereUniqueInput = Prisma.AtLeast<{
    land_id?: string
    latitude_longitude?: LandLatitudeLongitudeCompoundUniqueInput
    AND?: LandWhereInput | LandWhereInput[]
    OR?: LandWhereInput[]
    NOT?: LandWhereInput | LandWhereInput[]
    latitude?: FloatFilter<"Land"> | number
    longitude?: FloatFilter<"Land"> | number
    land_size?: FloatFilter<"Land"> | number
    land_name?: StringNullableFilter<"Land"> | string | null
    land_image?: StringNullableFilter<"Land"> | string | null
    ph_level?: FloatFilter<"Land"> | number
    phosphorus?: FloatFilter<"Land"> | number
    potassium?: FloatFilter<"Land"> | number
    oxygen_level?: FloatFilter<"Land"> | number
    nitrogen?: FloatFilter<"Land"> | number
    user_id?: UuidFilter<"Land"> | string
    user?: XOR<UserRelationFilter, UserWhereInput>
    statistics?: LandStatisticListRelationFilter
    crops?: CropListRelationFilter
    maintenances?: CropMaintenanceListRelationFilter
    finances?: FinanceListRelationFilter
    weather_data?: WeatherListRelationFilter
    business_plans?: BusinessPlanListRelationFilter
  }, "land_id" | "latitude_longitude">

  export type LandOrderByWithAggregationInput = {
    land_id?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    land_size?: SortOrder
    land_name?: SortOrderInput | SortOrder
    land_image?: SortOrderInput | SortOrder
    ph_level?: SortOrder
    phosphorus?: SortOrder
    potassium?: SortOrder
    oxygen_level?: SortOrder
    nitrogen?: SortOrder
    user_id?: SortOrder
    _count?: LandCountOrderByAggregateInput
    _avg?: LandAvgOrderByAggregateInput
    _max?: LandMaxOrderByAggregateInput
    _min?: LandMinOrderByAggregateInput
    _sum?: LandSumOrderByAggregateInput
  }

  export type LandScalarWhereWithAggregatesInput = {
    AND?: LandScalarWhereWithAggregatesInput | LandScalarWhereWithAggregatesInput[]
    OR?: LandScalarWhereWithAggregatesInput[]
    NOT?: LandScalarWhereWithAggregatesInput | LandScalarWhereWithAggregatesInput[]
    land_id?: UuidWithAggregatesFilter<"Land"> | string
    latitude?: FloatWithAggregatesFilter<"Land"> | number
    longitude?: FloatWithAggregatesFilter<"Land"> | number
    land_size?: FloatWithAggregatesFilter<"Land"> | number
    land_name?: StringNullableWithAggregatesFilter<"Land"> | string | null
    land_image?: StringNullableWithAggregatesFilter<"Land"> | string | null
    ph_level?: FloatWithAggregatesFilter<"Land"> | number
    phosphorus?: FloatWithAggregatesFilter<"Land"> | number
    potassium?: FloatWithAggregatesFilter<"Land"> | number
    oxygen_level?: FloatWithAggregatesFilter<"Land"> | number
    nitrogen?: FloatWithAggregatesFilter<"Land"> | number
    user_id?: UuidWithAggregatesFilter<"Land"> | string
  }

  export type LandStatisticWhereInput = {
    AND?: LandStatisticWhereInput | LandStatisticWhereInput[]
    OR?: LandStatisticWhereInput[]
    NOT?: LandStatisticWhereInput | LandStatisticWhereInput[]
    land_stat_id?: UuidFilter<"LandStatistic"> | string
    land_use?: FloatFilter<"LandStatistic"> | number
    human_coverage?: FloatFilter<"LandStatistic"> | number
    water_availability?: FloatFilter<"LandStatistic"> | number
    distribution_optimality?: FloatFilter<"LandStatistic"> | number
    total_profit?: FloatFilter<"LandStatistic"> | number
    land_id?: UuidFilter<"LandStatistic"> | string
    land?: XOR<LandRelationFilter, LandWhereInput>
  }

  export type LandStatisticOrderByWithRelationInput = {
    land_stat_id?: SortOrder
    land_use?: SortOrder
    human_coverage?: SortOrder
    water_availability?: SortOrder
    distribution_optimality?: SortOrder
    total_profit?: SortOrder
    land_id?: SortOrder
    land?: LandOrderByWithRelationInput
  }

  export type LandStatisticWhereUniqueInput = Prisma.AtLeast<{
    land_stat_id?: string
    land_id?: string
    AND?: LandStatisticWhereInput | LandStatisticWhereInput[]
    OR?: LandStatisticWhereInput[]
    NOT?: LandStatisticWhereInput | LandStatisticWhereInput[]
    land_use?: FloatFilter<"LandStatistic"> | number
    human_coverage?: FloatFilter<"LandStatistic"> | number
    water_availability?: FloatFilter<"LandStatistic"> | number
    distribution_optimality?: FloatFilter<"LandStatistic"> | number
    total_profit?: FloatFilter<"LandStatistic"> | number
    land?: XOR<LandRelationFilter, LandWhereInput>
  }, "land_stat_id" | "land_id">

  export type LandStatisticOrderByWithAggregationInput = {
    land_stat_id?: SortOrder
    land_use?: SortOrder
    human_coverage?: SortOrder
    water_availability?: SortOrder
    distribution_optimality?: SortOrder
    total_profit?: SortOrder
    land_id?: SortOrder
    _count?: LandStatisticCountOrderByAggregateInput
    _avg?: LandStatisticAvgOrderByAggregateInput
    _max?: LandStatisticMaxOrderByAggregateInput
    _min?: LandStatisticMinOrderByAggregateInput
    _sum?: LandStatisticSumOrderByAggregateInput
  }

  export type LandStatisticScalarWhereWithAggregatesInput = {
    AND?: LandStatisticScalarWhereWithAggregatesInput | LandStatisticScalarWhereWithAggregatesInput[]
    OR?: LandStatisticScalarWhereWithAggregatesInput[]
    NOT?: LandStatisticScalarWhereWithAggregatesInput | LandStatisticScalarWhereWithAggregatesInput[]
    land_stat_id?: UuidWithAggregatesFilter<"LandStatistic"> | string
    land_use?: FloatWithAggregatesFilter<"LandStatistic"> | number
    human_coverage?: FloatWithAggregatesFilter<"LandStatistic"> | number
    water_availability?: FloatWithAggregatesFilter<"LandStatistic"> | number
    distribution_optimality?: FloatWithAggregatesFilter<"LandStatistic"> | number
    total_profit?: FloatWithAggregatesFilter<"LandStatistic"> | number
    land_id?: UuidWithAggregatesFilter<"LandStatistic"> | string
  }

  export type CropWhereInput = {
    AND?: CropWhereInput | CropWhereInput[]
    OR?: CropWhereInput[]
    NOT?: CropWhereInput | CropWhereInput[]
    crop_id?: UuidFilter<"Crop"> | string
    crop_name?: StringFilter<"Crop"> | string
    crop_area?: FloatFilter<"Crop"> | number
    crop_investment?: FloatFilter<"Crop"> | number
    expected_money_return?: FloatFilter<"Crop"> | number
    expected_weight_return?: FloatFilter<"Crop"> | number
    land_id?: UuidFilter<"Crop"> | string
    land?: XOR<LandRelationFilter, LandWhereInput>
  }

  export type CropOrderByWithRelationInput = {
    crop_id?: SortOrder
    crop_name?: SortOrder
    crop_area?: SortOrder
    crop_investment?: SortOrder
    expected_money_return?: SortOrder
    expected_weight_return?: SortOrder
    land_id?: SortOrder
    land?: LandOrderByWithRelationInput
  }

  export type CropWhereUniqueInput = Prisma.AtLeast<{
    crop_id?: string
    AND?: CropWhereInput | CropWhereInput[]
    OR?: CropWhereInput[]
    NOT?: CropWhereInput | CropWhereInput[]
    crop_name?: StringFilter<"Crop"> | string
    crop_area?: FloatFilter<"Crop"> | number
    crop_investment?: FloatFilter<"Crop"> | number
    expected_money_return?: FloatFilter<"Crop"> | number
    expected_weight_return?: FloatFilter<"Crop"> | number
    land_id?: UuidFilter<"Crop"> | string
    land?: XOR<LandRelationFilter, LandWhereInput>
  }, "crop_id">

  export type CropOrderByWithAggregationInput = {
    crop_id?: SortOrder
    crop_name?: SortOrder
    crop_area?: SortOrder
    crop_investment?: SortOrder
    expected_money_return?: SortOrder
    expected_weight_return?: SortOrder
    land_id?: SortOrder
    _count?: CropCountOrderByAggregateInput
    _avg?: CropAvgOrderByAggregateInput
    _max?: CropMaxOrderByAggregateInput
    _min?: CropMinOrderByAggregateInput
    _sum?: CropSumOrderByAggregateInput
  }

  export type CropScalarWhereWithAggregatesInput = {
    AND?: CropScalarWhereWithAggregatesInput | CropScalarWhereWithAggregatesInput[]
    OR?: CropScalarWhereWithAggregatesInput[]
    NOT?: CropScalarWhereWithAggregatesInput | CropScalarWhereWithAggregatesInput[]
    crop_id?: UuidWithAggregatesFilter<"Crop"> | string
    crop_name?: StringWithAggregatesFilter<"Crop"> | string
    crop_area?: FloatWithAggregatesFilter<"Crop"> | number
    crop_investment?: FloatWithAggregatesFilter<"Crop"> | number
    expected_money_return?: FloatWithAggregatesFilter<"Crop"> | number
    expected_weight_return?: FloatWithAggregatesFilter<"Crop"> | number
    land_id?: UuidWithAggregatesFilter<"Crop"> | string
  }

  export type CropMaintenanceWhereInput = {
    AND?: CropMaintenanceWhereInput | CropMaintenanceWhereInput[]
    OR?: CropMaintenanceWhereInput[]
    NOT?: CropMaintenanceWhereInput | CropMaintenanceWhereInput[]
    maintenance_id?: UuidFilter<"CropMaintenance"> | string
    pesticide_level?: FloatFilter<"CropMaintenance"> | number
    water_sufficienty?: FloatFilter<"CropMaintenance"> | number
    land_id?: UuidFilter<"CropMaintenance"> | string
    land?: XOR<LandRelationFilter, LandWhereInput>
  }

  export type CropMaintenanceOrderByWithRelationInput = {
    maintenance_id?: SortOrder
    pesticide_level?: SortOrder
    water_sufficienty?: SortOrder
    land_id?: SortOrder
    land?: LandOrderByWithRelationInput
  }

  export type CropMaintenanceWhereUniqueInput = Prisma.AtLeast<{
    maintenance_id?: string
    land_id?: string
    AND?: CropMaintenanceWhereInput | CropMaintenanceWhereInput[]
    OR?: CropMaintenanceWhereInput[]
    NOT?: CropMaintenanceWhereInput | CropMaintenanceWhereInput[]
    pesticide_level?: FloatFilter<"CropMaintenance"> | number
    water_sufficienty?: FloatFilter<"CropMaintenance"> | number
    land?: XOR<LandRelationFilter, LandWhereInput>
  }, "maintenance_id" | "land_id">

  export type CropMaintenanceOrderByWithAggregationInput = {
    maintenance_id?: SortOrder
    pesticide_level?: SortOrder
    water_sufficienty?: SortOrder
    land_id?: SortOrder
    _count?: CropMaintenanceCountOrderByAggregateInput
    _avg?: CropMaintenanceAvgOrderByAggregateInput
    _max?: CropMaintenanceMaxOrderByAggregateInput
    _min?: CropMaintenanceMinOrderByAggregateInput
    _sum?: CropMaintenanceSumOrderByAggregateInput
  }

  export type CropMaintenanceScalarWhereWithAggregatesInput = {
    AND?: CropMaintenanceScalarWhereWithAggregatesInput | CropMaintenanceScalarWhereWithAggregatesInput[]
    OR?: CropMaintenanceScalarWhereWithAggregatesInput[]
    NOT?: CropMaintenanceScalarWhereWithAggregatesInput | CropMaintenanceScalarWhereWithAggregatesInput[]
    maintenance_id?: UuidWithAggregatesFilter<"CropMaintenance"> | string
    pesticide_level?: FloatWithAggregatesFilter<"CropMaintenance"> | number
    water_sufficienty?: FloatWithAggregatesFilter<"CropMaintenance"> | number
    land_id?: UuidWithAggregatesFilter<"CropMaintenance"> | string
  }

  export type FinanceWhereInput = {
    AND?: FinanceWhereInput | FinanceWhereInput[]
    OR?: FinanceWhereInput[]
    NOT?: FinanceWhereInput | FinanceWhereInput[]
    financial_id?: UuidFilter<"Finance"> | string
    investment_amount?: FloatNullableFilter<"Finance"> | number | null
    expected_revenue?: FloatNullableFilter<"Finance"> | number | null
    land_id?: UuidNullableFilter<"Finance"> | string | null
    land?: XOR<LandNullableRelationFilter, LandWhereInput> | null
  }

  export type FinanceOrderByWithRelationInput = {
    financial_id?: SortOrder
    investment_amount?: SortOrderInput | SortOrder
    expected_revenue?: SortOrderInput | SortOrder
    land_id?: SortOrderInput | SortOrder
    land?: LandOrderByWithRelationInput
  }

  export type FinanceWhereUniqueInput = Prisma.AtLeast<{
    financial_id?: string
    land_id?: string
    AND?: FinanceWhereInput | FinanceWhereInput[]
    OR?: FinanceWhereInput[]
    NOT?: FinanceWhereInput | FinanceWhereInput[]
    investment_amount?: FloatNullableFilter<"Finance"> | number | null
    expected_revenue?: FloatNullableFilter<"Finance"> | number | null
    land?: XOR<LandNullableRelationFilter, LandWhereInput> | null
  }, "financial_id" | "land_id">

  export type FinanceOrderByWithAggregationInput = {
    financial_id?: SortOrder
    investment_amount?: SortOrderInput | SortOrder
    expected_revenue?: SortOrderInput | SortOrder
    land_id?: SortOrderInput | SortOrder
    _count?: FinanceCountOrderByAggregateInput
    _avg?: FinanceAvgOrderByAggregateInput
    _max?: FinanceMaxOrderByAggregateInput
    _min?: FinanceMinOrderByAggregateInput
    _sum?: FinanceSumOrderByAggregateInput
  }

  export type FinanceScalarWhereWithAggregatesInput = {
    AND?: FinanceScalarWhereWithAggregatesInput | FinanceScalarWhereWithAggregatesInput[]
    OR?: FinanceScalarWhereWithAggregatesInput[]
    NOT?: FinanceScalarWhereWithAggregatesInput | FinanceScalarWhereWithAggregatesInput[]
    financial_id?: UuidWithAggregatesFilter<"Finance"> | string
    investment_amount?: FloatNullableWithAggregatesFilter<"Finance"> | number | null
    expected_revenue?: FloatNullableWithAggregatesFilter<"Finance"> | number | null
    land_id?: UuidNullableWithAggregatesFilter<"Finance"> | string | null
  }

  export type WeatherWhereInput = {
    AND?: WeatherWhereInput | WeatherWhereInput[]
    OR?: WeatherWhereInput[]
    NOT?: WeatherWhereInput | WeatherWhereInput[]
    weather_id?: UuidFilter<"Weather"> | string
    temperature?: FloatFilter<"Weather"> | number
    humidity?: FloatFilter<"Weather"> | number
    rainfall?: FloatFilter<"Weather"> | number
    sunlight?: FloatFilter<"Weather"> | number
    land_id?: UuidNullableFilter<"Weather"> | string | null
    land?: XOR<LandNullableRelationFilter, LandWhereInput> | null
  }

  export type WeatherOrderByWithRelationInput = {
    weather_id?: SortOrder
    temperature?: SortOrder
    humidity?: SortOrder
    rainfall?: SortOrder
    sunlight?: SortOrder
    land_id?: SortOrderInput | SortOrder
    land?: LandOrderByWithRelationInput
  }

  export type WeatherWhereUniqueInput = Prisma.AtLeast<{
    weather_id?: string
    land_id?: string
    AND?: WeatherWhereInput | WeatherWhereInput[]
    OR?: WeatherWhereInput[]
    NOT?: WeatherWhereInput | WeatherWhereInput[]
    temperature?: FloatFilter<"Weather"> | number
    humidity?: FloatFilter<"Weather"> | number
    rainfall?: FloatFilter<"Weather"> | number
    sunlight?: FloatFilter<"Weather"> | number
    land?: XOR<LandNullableRelationFilter, LandWhereInput> | null
  }, "weather_id" | "land_id">

  export type WeatherOrderByWithAggregationInput = {
    weather_id?: SortOrder
    temperature?: SortOrder
    humidity?: SortOrder
    rainfall?: SortOrder
    sunlight?: SortOrder
    land_id?: SortOrderInput | SortOrder
    _count?: WeatherCountOrderByAggregateInput
    _avg?: WeatherAvgOrderByAggregateInput
    _max?: WeatherMaxOrderByAggregateInput
    _min?: WeatherMinOrderByAggregateInput
    _sum?: WeatherSumOrderByAggregateInput
  }

  export type WeatherScalarWhereWithAggregatesInput = {
    AND?: WeatherScalarWhereWithAggregatesInput | WeatherScalarWhereWithAggregatesInput[]
    OR?: WeatherScalarWhereWithAggregatesInput[]
    NOT?: WeatherScalarWhereWithAggregatesInput | WeatherScalarWhereWithAggregatesInput[]
    weather_id?: UuidWithAggregatesFilter<"Weather"> | string
    temperature?: FloatWithAggregatesFilter<"Weather"> | number
    humidity?: FloatWithAggregatesFilter<"Weather"> | number
    rainfall?: FloatWithAggregatesFilter<"Weather"> | number
    sunlight?: FloatWithAggregatesFilter<"Weather"> | number
    land_id?: UuidNullableWithAggregatesFilter<"Weather"> | string | null
  }

  export type BusinessPlanWhereInput = {
    AND?: BusinessPlanWhereInput | BusinessPlanWhereInput[]
    OR?: BusinessPlanWhereInput[]
    NOT?: BusinessPlanWhereInput | BusinessPlanWhereInput[]
    business_plan_id?: UuidFilter<"BusinessPlan"> | string
    executive_summary?: StringFilter<"BusinessPlan"> | string
    resources?: StringFilter<"BusinessPlan"> | string
    crops?: StringFilter<"BusinessPlan"> | string
    weather_considerations?: StringFilter<"BusinessPlan"> | string
    soil_maintenance?: StringFilter<"BusinessPlan"> | string
    profit_estimations?: StringFilter<"BusinessPlan"> | string
    other_recommendations?: StringFilter<"BusinessPlan"> | string
    land_id?: UuidFilter<"BusinessPlan"> | string
    land?: XOR<LandRelationFilter, LandWhereInput>
  }

  export type BusinessPlanOrderByWithRelationInput = {
    business_plan_id?: SortOrder
    executive_summary?: SortOrder
    resources?: SortOrder
    crops?: SortOrder
    weather_considerations?: SortOrder
    soil_maintenance?: SortOrder
    profit_estimations?: SortOrder
    other_recommendations?: SortOrder
    land_id?: SortOrder
    land?: LandOrderByWithRelationInput
  }

  export type BusinessPlanWhereUniqueInput = Prisma.AtLeast<{
    business_plan_id?: string
    land_id?: string
    AND?: BusinessPlanWhereInput | BusinessPlanWhereInput[]
    OR?: BusinessPlanWhereInput[]
    NOT?: BusinessPlanWhereInput | BusinessPlanWhereInput[]
    executive_summary?: StringFilter<"BusinessPlan"> | string
    resources?: StringFilter<"BusinessPlan"> | string
    crops?: StringFilter<"BusinessPlan"> | string
    weather_considerations?: StringFilter<"BusinessPlan"> | string
    soil_maintenance?: StringFilter<"BusinessPlan"> | string
    profit_estimations?: StringFilter<"BusinessPlan"> | string
    other_recommendations?: StringFilter<"BusinessPlan"> | string
    land?: XOR<LandRelationFilter, LandWhereInput>
  }, "business_plan_id" | "land_id">

  export type BusinessPlanOrderByWithAggregationInput = {
    business_plan_id?: SortOrder
    executive_summary?: SortOrder
    resources?: SortOrder
    crops?: SortOrder
    weather_considerations?: SortOrder
    soil_maintenance?: SortOrder
    profit_estimations?: SortOrder
    other_recommendations?: SortOrder
    land_id?: SortOrder
    _count?: BusinessPlanCountOrderByAggregateInput
    _max?: BusinessPlanMaxOrderByAggregateInput
    _min?: BusinessPlanMinOrderByAggregateInput
  }

  export type BusinessPlanScalarWhereWithAggregatesInput = {
    AND?: BusinessPlanScalarWhereWithAggregatesInput | BusinessPlanScalarWhereWithAggregatesInput[]
    OR?: BusinessPlanScalarWhereWithAggregatesInput[]
    NOT?: BusinessPlanScalarWhereWithAggregatesInput | BusinessPlanScalarWhereWithAggregatesInput[]
    business_plan_id?: UuidWithAggregatesFilter<"BusinessPlan"> | string
    executive_summary?: StringWithAggregatesFilter<"BusinessPlan"> | string
    resources?: StringWithAggregatesFilter<"BusinessPlan"> | string
    crops?: StringWithAggregatesFilter<"BusinessPlan"> | string
    weather_considerations?: StringWithAggregatesFilter<"BusinessPlan"> | string
    soil_maintenance?: StringWithAggregatesFilter<"BusinessPlan"> | string
    profit_estimations?: StringWithAggregatesFilter<"BusinessPlan"> | string
    other_recommendations?: StringWithAggregatesFilter<"BusinessPlan"> | string
    land_id?: UuidWithAggregatesFilter<"BusinessPlan"> | string
  }

  export type UserCreateInput = {
    user_id?: string
    lands?: LandCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    user_id?: string
    lands?: LandUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    user_id?: StringFieldUpdateOperationsInput | string
    lands?: LandUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    user_id?: StringFieldUpdateOperationsInput | string
    lands?: LandUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    user_id?: string
  }

  export type UserUpdateManyMutationInput = {
    user_id?: StringFieldUpdateOperationsInput | string
  }

  export type UserUncheckedUpdateManyInput = {
    user_id?: StringFieldUpdateOperationsInput | string
  }

  export type LandCreateInput = {
    land_id?: string
    latitude: number
    longitude: number
    land_size: number
    land_name?: string | null
    land_image?: string | null
    ph_level: number
    phosphorus: number
    potassium: number
    oxygen_level: number
    nitrogen: number
    user: UserCreateNestedOneWithoutLandsInput
    statistics?: LandStatisticCreateNestedManyWithoutLandInput
    crops?: CropCreateNestedManyWithoutLandInput
    maintenances?: CropMaintenanceCreateNestedManyWithoutLandInput
    finances?: FinanceCreateNestedManyWithoutLandInput
    weather_data?: WeatherCreateNestedManyWithoutLandInput
    business_plans?: BusinessPlanCreateNestedManyWithoutLandInput
  }

  export type LandUncheckedCreateInput = {
    land_id?: string
    latitude: number
    longitude: number
    land_size: number
    land_name?: string | null
    land_image?: string | null
    ph_level: number
    phosphorus: number
    potassium: number
    oxygen_level: number
    nitrogen: number
    user_id: string
    statistics?: LandStatisticUncheckedCreateNestedManyWithoutLandInput
    crops?: CropUncheckedCreateNestedManyWithoutLandInput
    maintenances?: CropMaintenanceUncheckedCreateNestedManyWithoutLandInput
    finances?: FinanceUncheckedCreateNestedManyWithoutLandInput
    weather_data?: WeatherUncheckedCreateNestedManyWithoutLandInput
    business_plans?: BusinessPlanUncheckedCreateNestedManyWithoutLandInput
  }

  export type LandUpdateInput = {
    land_id?: StringFieldUpdateOperationsInput | string
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    land_size?: FloatFieldUpdateOperationsInput | number
    land_name?: NullableStringFieldUpdateOperationsInput | string | null
    land_image?: NullableStringFieldUpdateOperationsInput | string | null
    ph_level?: FloatFieldUpdateOperationsInput | number
    phosphorus?: FloatFieldUpdateOperationsInput | number
    potassium?: FloatFieldUpdateOperationsInput | number
    oxygen_level?: FloatFieldUpdateOperationsInput | number
    nitrogen?: FloatFieldUpdateOperationsInput | number
    user?: UserUpdateOneRequiredWithoutLandsNestedInput
    statistics?: LandStatisticUpdateManyWithoutLandNestedInput
    crops?: CropUpdateManyWithoutLandNestedInput
    maintenances?: CropMaintenanceUpdateManyWithoutLandNestedInput
    finances?: FinanceUpdateManyWithoutLandNestedInput
    weather_data?: WeatherUpdateManyWithoutLandNestedInput
    business_plans?: BusinessPlanUpdateManyWithoutLandNestedInput
  }

  export type LandUncheckedUpdateInput = {
    land_id?: StringFieldUpdateOperationsInput | string
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    land_size?: FloatFieldUpdateOperationsInput | number
    land_name?: NullableStringFieldUpdateOperationsInput | string | null
    land_image?: NullableStringFieldUpdateOperationsInput | string | null
    ph_level?: FloatFieldUpdateOperationsInput | number
    phosphorus?: FloatFieldUpdateOperationsInput | number
    potassium?: FloatFieldUpdateOperationsInput | number
    oxygen_level?: FloatFieldUpdateOperationsInput | number
    nitrogen?: FloatFieldUpdateOperationsInput | number
    user_id?: StringFieldUpdateOperationsInput | string
    statistics?: LandStatisticUncheckedUpdateManyWithoutLandNestedInput
    crops?: CropUncheckedUpdateManyWithoutLandNestedInput
    maintenances?: CropMaintenanceUncheckedUpdateManyWithoutLandNestedInput
    finances?: FinanceUncheckedUpdateManyWithoutLandNestedInput
    weather_data?: WeatherUncheckedUpdateManyWithoutLandNestedInput
    business_plans?: BusinessPlanUncheckedUpdateManyWithoutLandNestedInput
  }

  export type LandCreateManyInput = {
    land_id?: string
    latitude: number
    longitude: number
    land_size: number
    land_name?: string | null
    land_image?: string | null
    ph_level: number
    phosphorus: number
    potassium: number
    oxygen_level: number
    nitrogen: number
    user_id: string
  }

  export type LandUpdateManyMutationInput = {
    land_id?: StringFieldUpdateOperationsInput | string
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    land_size?: FloatFieldUpdateOperationsInput | number
    land_name?: NullableStringFieldUpdateOperationsInput | string | null
    land_image?: NullableStringFieldUpdateOperationsInput | string | null
    ph_level?: FloatFieldUpdateOperationsInput | number
    phosphorus?: FloatFieldUpdateOperationsInput | number
    potassium?: FloatFieldUpdateOperationsInput | number
    oxygen_level?: FloatFieldUpdateOperationsInput | number
    nitrogen?: FloatFieldUpdateOperationsInput | number
  }

  export type LandUncheckedUpdateManyInput = {
    land_id?: StringFieldUpdateOperationsInput | string
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    land_size?: FloatFieldUpdateOperationsInput | number
    land_name?: NullableStringFieldUpdateOperationsInput | string | null
    land_image?: NullableStringFieldUpdateOperationsInput | string | null
    ph_level?: FloatFieldUpdateOperationsInput | number
    phosphorus?: FloatFieldUpdateOperationsInput | number
    potassium?: FloatFieldUpdateOperationsInput | number
    oxygen_level?: FloatFieldUpdateOperationsInput | number
    nitrogen?: FloatFieldUpdateOperationsInput | number
    user_id?: StringFieldUpdateOperationsInput | string
  }

  export type LandStatisticCreateInput = {
    land_stat_id?: string
    land_use: number
    human_coverage: number
    water_availability: number
    distribution_optimality: number
    total_profit?: number
    land: LandCreateNestedOneWithoutStatisticsInput
  }

  export type LandStatisticUncheckedCreateInput = {
    land_stat_id?: string
    land_use: number
    human_coverage: number
    water_availability: number
    distribution_optimality: number
    total_profit?: number
    land_id: string
  }

  export type LandStatisticUpdateInput = {
    land_stat_id?: StringFieldUpdateOperationsInput | string
    land_use?: FloatFieldUpdateOperationsInput | number
    human_coverage?: FloatFieldUpdateOperationsInput | number
    water_availability?: FloatFieldUpdateOperationsInput | number
    distribution_optimality?: FloatFieldUpdateOperationsInput | number
    total_profit?: FloatFieldUpdateOperationsInput | number
    land?: LandUpdateOneRequiredWithoutStatisticsNestedInput
  }

  export type LandStatisticUncheckedUpdateInput = {
    land_stat_id?: StringFieldUpdateOperationsInput | string
    land_use?: FloatFieldUpdateOperationsInput | number
    human_coverage?: FloatFieldUpdateOperationsInput | number
    water_availability?: FloatFieldUpdateOperationsInput | number
    distribution_optimality?: FloatFieldUpdateOperationsInput | number
    total_profit?: FloatFieldUpdateOperationsInput | number
    land_id?: StringFieldUpdateOperationsInput | string
  }

  export type LandStatisticCreateManyInput = {
    land_stat_id?: string
    land_use: number
    human_coverage: number
    water_availability: number
    distribution_optimality: number
    total_profit?: number
    land_id: string
  }

  export type LandStatisticUpdateManyMutationInput = {
    land_stat_id?: StringFieldUpdateOperationsInput | string
    land_use?: FloatFieldUpdateOperationsInput | number
    human_coverage?: FloatFieldUpdateOperationsInput | number
    water_availability?: FloatFieldUpdateOperationsInput | number
    distribution_optimality?: FloatFieldUpdateOperationsInput | number
    total_profit?: FloatFieldUpdateOperationsInput | number
  }

  export type LandStatisticUncheckedUpdateManyInput = {
    land_stat_id?: StringFieldUpdateOperationsInput | string
    land_use?: FloatFieldUpdateOperationsInput | number
    human_coverage?: FloatFieldUpdateOperationsInput | number
    water_availability?: FloatFieldUpdateOperationsInput | number
    distribution_optimality?: FloatFieldUpdateOperationsInput | number
    total_profit?: FloatFieldUpdateOperationsInput | number
    land_id?: StringFieldUpdateOperationsInput | string
  }

  export type CropCreateInput = {
    crop_id?: string
    crop_name: string
    crop_area: number
    crop_investment: number
    expected_money_return: number
    expected_weight_return: number
    land: LandCreateNestedOneWithoutCropsInput
  }

  export type CropUncheckedCreateInput = {
    crop_id?: string
    crop_name: string
    crop_area: number
    crop_investment: number
    expected_money_return: number
    expected_weight_return: number
    land_id: string
  }

  export type CropUpdateInput = {
    crop_id?: StringFieldUpdateOperationsInput | string
    crop_name?: StringFieldUpdateOperationsInput | string
    crop_area?: FloatFieldUpdateOperationsInput | number
    crop_investment?: FloatFieldUpdateOperationsInput | number
    expected_money_return?: FloatFieldUpdateOperationsInput | number
    expected_weight_return?: FloatFieldUpdateOperationsInput | number
    land?: LandUpdateOneRequiredWithoutCropsNestedInput
  }

  export type CropUncheckedUpdateInput = {
    crop_id?: StringFieldUpdateOperationsInput | string
    crop_name?: StringFieldUpdateOperationsInput | string
    crop_area?: FloatFieldUpdateOperationsInput | number
    crop_investment?: FloatFieldUpdateOperationsInput | number
    expected_money_return?: FloatFieldUpdateOperationsInput | number
    expected_weight_return?: FloatFieldUpdateOperationsInput | number
    land_id?: StringFieldUpdateOperationsInput | string
  }

  export type CropCreateManyInput = {
    crop_id?: string
    crop_name: string
    crop_area: number
    crop_investment: number
    expected_money_return: number
    expected_weight_return: number
    land_id: string
  }

  export type CropUpdateManyMutationInput = {
    crop_id?: StringFieldUpdateOperationsInput | string
    crop_name?: StringFieldUpdateOperationsInput | string
    crop_area?: FloatFieldUpdateOperationsInput | number
    crop_investment?: FloatFieldUpdateOperationsInput | number
    expected_money_return?: FloatFieldUpdateOperationsInput | number
    expected_weight_return?: FloatFieldUpdateOperationsInput | number
  }

  export type CropUncheckedUpdateManyInput = {
    crop_id?: StringFieldUpdateOperationsInput | string
    crop_name?: StringFieldUpdateOperationsInput | string
    crop_area?: FloatFieldUpdateOperationsInput | number
    crop_investment?: FloatFieldUpdateOperationsInput | number
    expected_money_return?: FloatFieldUpdateOperationsInput | number
    expected_weight_return?: FloatFieldUpdateOperationsInput | number
    land_id?: StringFieldUpdateOperationsInput | string
  }

  export type CropMaintenanceCreateInput = {
    maintenance_id?: string
    pesticide_level: number
    water_sufficienty: number
    land: LandCreateNestedOneWithoutMaintenancesInput
  }

  export type CropMaintenanceUncheckedCreateInput = {
    maintenance_id?: string
    pesticide_level: number
    water_sufficienty: number
    land_id: string
  }

  export type CropMaintenanceUpdateInput = {
    maintenance_id?: StringFieldUpdateOperationsInput | string
    pesticide_level?: FloatFieldUpdateOperationsInput | number
    water_sufficienty?: FloatFieldUpdateOperationsInput | number
    land?: LandUpdateOneRequiredWithoutMaintenancesNestedInput
  }

  export type CropMaintenanceUncheckedUpdateInput = {
    maintenance_id?: StringFieldUpdateOperationsInput | string
    pesticide_level?: FloatFieldUpdateOperationsInput | number
    water_sufficienty?: FloatFieldUpdateOperationsInput | number
    land_id?: StringFieldUpdateOperationsInput | string
  }

  export type CropMaintenanceCreateManyInput = {
    maintenance_id?: string
    pesticide_level: number
    water_sufficienty: number
    land_id: string
  }

  export type CropMaintenanceUpdateManyMutationInput = {
    maintenance_id?: StringFieldUpdateOperationsInput | string
    pesticide_level?: FloatFieldUpdateOperationsInput | number
    water_sufficienty?: FloatFieldUpdateOperationsInput | number
  }

  export type CropMaintenanceUncheckedUpdateManyInput = {
    maintenance_id?: StringFieldUpdateOperationsInput | string
    pesticide_level?: FloatFieldUpdateOperationsInput | number
    water_sufficienty?: FloatFieldUpdateOperationsInput | number
    land_id?: StringFieldUpdateOperationsInput | string
  }

  export type FinanceCreateInput = {
    financial_id?: string
    investment_amount?: number | null
    expected_revenue?: number | null
    land?: LandCreateNestedOneWithoutFinancesInput
  }

  export type FinanceUncheckedCreateInput = {
    financial_id?: string
    investment_amount?: number | null
    expected_revenue?: number | null
    land_id?: string | null
  }

  export type FinanceUpdateInput = {
    financial_id?: StringFieldUpdateOperationsInput | string
    investment_amount?: NullableFloatFieldUpdateOperationsInput | number | null
    expected_revenue?: NullableFloatFieldUpdateOperationsInput | number | null
    land?: LandUpdateOneWithoutFinancesNestedInput
  }

  export type FinanceUncheckedUpdateInput = {
    financial_id?: StringFieldUpdateOperationsInput | string
    investment_amount?: NullableFloatFieldUpdateOperationsInput | number | null
    expected_revenue?: NullableFloatFieldUpdateOperationsInput | number | null
    land_id?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type FinanceCreateManyInput = {
    financial_id?: string
    investment_amount?: number | null
    expected_revenue?: number | null
    land_id?: string | null
  }

  export type FinanceUpdateManyMutationInput = {
    financial_id?: StringFieldUpdateOperationsInput | string
    investment_amount?: NullableFloatFieldUpdateOperationsInput | number | null
    expected_revenue?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type FinanceUncheckedUpdateManyInput = {
    financial_id?: StringFieldUpdateOperationsInput | string
    investment_amount?: NullableFloatFieldUpdateOperationsInput | number | null
    expected_revenue?: NullableFloatFieldUpdateOperationsInput | number | null
    land_id?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type WeatherCreateInput = {
    weather_id?: string
    temperature: number
    humidity: number
    rainfall: number
    sunlight: number
    land?: LandCreateNestedOneWithoutWeather_dataInput
  }

  export type WeatherUncheckedCreateInput = {
    weather_id?: string
    temperature: number
    humidity: number
    rainfall: number
    sunlight: number
    land_id?: string | null
  }

  export type WeatherUpdateInput = {
    weather_id?: StringFieldUpdateOperationsInput | string
    temperature?: FloatFieldUpdateOperationsInput | number
    humidity?: FloatFieldUpdateOperationsInput | number
    rainfall?: FloatFieldUpdateOperationsInput | number
    sunlight?: FloatFieldUpdateOperationsInput | number
    land?: LandUpdateOneWithoutWeather_dataNestedInput
  }

  export type WeatherUncheckedUpdateInput = {
    weather_id?: StringFieldUpdateOperationsInput | string
    temperature?: FloatFieldUpdateOperationsInput | number
    humidity?: FloatFieldUpdateOperationsInput | number
    rainfall?: FloatFieldUpdateOperationsInput | number
    sunlight?: FloatFieldUpdateOperationsInput | number
    land_id?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type WeatherCreateManyInput = {
    weather_id?: string
    temperature: number
    humidity: number
    rainfall: number
    sunlight: number
    land_id?: string | null
  }

  export type WeatherUpdateManyMutationInput = {
    weather_id?: StringFieldUpdateOperationsInput | string
    temperature?: FloatFieldUpdateOperationsInput | number
    humidity?: FloatFieldUpdateOperationsInput | number
    rainfall?: FloatFieldUpdateOperationsInput | number
    sunlight?: FloatFieldUpdateOperationsInput | number
  }

  export type WeatherUncheckedUpdateManyInput = {
    weather_id?: StringFieldUpdateOperationsInput | string
    temperature?: FloatFieldUpdateOperationsInput | number
    humidity?: FloatFieldUpdateOperationsInput | number
    rainfall?: FloatFieldUpdateOperationsInput | number
    sunlight?: FloatFieldUpdateOperationsInput | number
    land_id?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type BusinessPlanCreateInput = {
    business_plan_id?: string
    executive_summary: string
    resources: string
    crops: string
    weather_considerations: string
    soil_maintenance: string
    profit_estimations: string
    other_recommendations: string
    land: LandCreateNestedOneWithoutBusiness_plansInput
  }

  export type BusinessPlanUncheckedCreateInput = {
    business_plan_id?: string
    executive_summary: string
    resources: string
    crops: string
    weather_considerations: string
    soil_maintenance: string
    profit_estimations: string
    other_recommendations: string
    land_id: string
  }

  export type BusinessPlanUpdateInput = {
    business_plan_id?: StringFieldUpdateOperationsInput | string
    executive_summary?: StringFieldUpdateOperationsInput | string
    resources?: StringFieldUpdateOperationsInput | string
    crops?: StringFieldUpdateOperationsInput | string
    weather_considerations?: StringFieldUpdateOperationsInput | string
    soil_maintenance?: StringFieldUpdateOperationsInput | string
    profit_estimations?: StringFieldUpdateOperationsInput | string
    other_recommendations?: StringFieldUpdateOperationsInput | string
    land?: LandUpdateOneRequiredWithoutBusiness_plansNestedInput
  }

  export type BusinessPlanUncheckedUpdateInput = {
    business_plan_id?: StringFieldUpdateOperationsInput | string
    executive_summary?: StringFieldUpdateOperationsInput | string
    resources?: StringFieldUpdateOperationsInput | string
    crops?: StringFieldUpdateOperationsInput | string
    weather_considerations?: StringFieldUpdateOperationsInput | string
    soil_maintenance?: StringFieldUpdateOperationsInput | string
    profit_estimations?: StringFieldUpdateOperationsInput | string
    other_recommendations?: StringFieldUpdateOperationsInput | string
    land_id?: StringFieldUpdateOperationsInput | string
  }

  export type BusinessPlanCreateManyInput = {
    business_plan_id?: string
    executive_summary: string
    resources: string
    crops: string
    weather_considerations: string
    soil_maintenance: string
    profit_estimations: string
    other_recommendations: string
    land_id: string
  }

  export type BusinessPlanUpdateManyMutationInput = {
    business_plan_id?: StringFieldUpdateOperationsInput | string
    executive_summary?: StringFieldUpdateOperationsInput | string
    resources?: StringFieldUpdateOperationsInput | string
    crops?: StringFieldUpdateOperationsInput | string
    weather_considerations?: StringFieldUpdateOperationsInput | string
    soil_maintenance?: StringFieldUpdateOperationsInput | string
    profit_estimations?: StringFieldUpdateOperationsInput | string
    other_recommendations?: StringFieldUpdateOperationsInput | string
  }

  export type BusinessPlanUncheckedUpdateManyInput = {
    business_plan_id?: StringFieldUpdateOperationsInput | string
    executive_summary?: StringFieldUpdateOperationsInput | string
    resources?: StringFieldUpdateOperationsInput | string
    crops?: StringFieldUpdateOperationsInput | string
    weather_considerations?: StringFieldUpdateOperationsInput | string
    soil_maintenance?: StringFieldUpdateOperationsInput | string
    profit_estimations?: StringFieldUpdateOperationsInput | string
    other_recommendations?: StringFieldUpdateOperationsInput | string
    land_id?: StringFieldUpdateOperationsInput | string
  }

  export type UuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidFilter<$PrismaModel> | string
  }

  export type LandListRelationFilter = {
    every?: LandWhereInput
    some?: LandWhereInput
    none?: LandWhereInput
  }

  export type LandOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    user_id?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    user_id?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    user_id?: SortOrder
  }

  export type UuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type UserRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type LandStatisticListRelationFilter = {
    every?: LandStatisticWhereInput
    some?: LandStatisticWhereInput
    none?: LandStatisticWhereInput
  }

  export type CropListRelationFilter = {
    every?: CropWhereInput
    some?: CropWhereInput
    none?: CropWhereInput
  }

  export type CropMaintenanceListRelationFilter = {
    every?: CropMaintenanceWhereInput
    some?: CropMaintenanceWhereInput
    none?: CropMaintenanceWhereInput
  }

  export type FinanceListRelationFilter = {
    every?: FinanceWhereInput
    some?: FinanceWhereInput
    none?: FinanceWhereInput
  }

  export type WeatherListRelationFilter = {
    every?: WeatherWhereInput
    some?: WeatherWhereInput
    none?: WeatherWhereInput
  }

  export type BusinessPlanListRelationFilter = {
    every?: BusinessPlanWhereInput
    some?: BusinessPlanWhereInput
    none?: BusinessPlanWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type LandStatisticOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CropOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CropMaintenanceOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type FinanceOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type WeatherOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type BusinessPlanOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type LandLatitudeLongitudeCompoundUniqueInput = {
    latitude: number
    longitude: number
  }

  export type LandCountOrderByAggregateInput = {
    land_id?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    land_size?: SortOrder
    land_name?: SortOrder
    land_image?: SortOrder
    ph_level?: SortOrder
    phosphorus?: SortOrder
    potassium?: SortOrder
    oxygen_level?: SortOrder
    nitrogen?: SortOrder
    user_id?: SortOrder
  }

  export type LandAvgOrderByAggregateInput = {
    latitude?: SortOrder
    longitude?: SortOrder
    land_size?: SortOrder
    ph_level?: SortOrder
    phosphorus?: SortOrder
    potassium?: SortOrder
    oxygen_level?: SortOrder
    nitrogen?: SortOrder
  }

  export type LandMaxOrderByAggregateInput = {
    land_id?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    land_size?: SortOrder
    land_name?: SortOrder
    land_image?: SortOrder
    ph_level?: SortOrder
    phosphorus?: SortOrder
    potassium?: SortOrder
    oxygen_level?: SortOrder
    nitrogen?: SortOrder
    user_id?: SortOrder
  }

  export type LandMinOrderByAggregateInput = {
    land_id?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    land_size?: SortOrder
    land_name?: SortOrder
    land_image?: SortOrder
    ph_level?: SortOrder
    phosphorus?: SortOrder
    potassium?: SortOrder
    oxygen_level?: SortOrder
    nitrogen?: SortOrder
    user_id?: SortOrder
  }

  export type LandSumOrderByAggregateInput = {
    latitude?: SortOrder
    longitude?: SortOrder
    land_size?: SortOrder
    ph_level?: SortOrder
    phosphorus?: SortOrder
    potassium?: SortOrder
    oxygen_level?: SortOrder
    nitrogen?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type LandRelationFilter = {
    is?: LandWhereInput
    isNot?: LandWhereInput
  }

  export type LandStatisticCountOrderByAggregateInput = {
    land_stat_id?: SortOrder
    land_use?: SortOrder
    human_coverage?: SortOrder
    water_availability?: SortOrder
    distribution_optimality?: SortOrder
    total_profit?: SortOrder
    land_id?: SortOrder
  }

  export type LandStatisticAvgOrderByAggregateInput = {
    land_use?: SortOrder
    human_coverage?: SortOrder
    water_availability?: SortOrder
    distribution_optimality?: SortOrder
    total_profit?: SortOrder
  }

  export type LandStatisticMaxOrderByAggregateInput = {
    land_stat_id?: SortOrder
    land_use?: SortOrder
    human_coverage?: SortOrder
    water_availability?: SortOrder
    distribution_optimality?: SortOrder
    total_profit?: SortOrder
    land_id?: SortOrder
  }

  export type LandStatisticMinOrderByAggregateInput = {
    land_stat_id?: SortOrder
    land_use?: SortOrder
    human_coverage?: SortOrder
    water_availability?: SortOrder
    distribution_optimality?: SortOrder
    total_profit?: SortOrder
    land_id?: SortOrder
  }

  export type LandStatisticSumOrderByAggregateInput = {
    land_use?: SortOrder
    human_coverage?: SortOrder
    water_availability?: SortOrder
    distribution_optimality?: SortOrder
    total_profit?: SortOrder
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type CropCountOrderByAggregateInput = {
    crop_id?: SortOrder
    crop_name?: SortOrder
    crop_area?: SortOrder
    crop_investment?: SortOrder
    expected_money_return?: SortOrder
    expected_weight_return?: SortOrder
    land_id?: SortOrder
  }

  export type CropAvgOrderByAggregateInput = {
    crop_area?: SortOrder
    crop_investment?: SortOrder
    expected_money_return?: SortOrder
    expected_weight_return?: SortOrder
  }

  export type CropMaxOrderByAggregateInput = {
    crop_id?: SortOrder
    crop_name?: SortOrder
    crop_area?: SortOrder
    crop_investment?: SortOrder
    expected_money_return?: SortOrder
    expected_weight_return?: SortOrder
    land_id?: SortOrder
  }

  export type CropMinOrderByAggregateInput = {
    crop_id?: SortOrder
    crop_name?: SortOrder
    crop_area?: SortOrder
    crop_investment?: SortOrder
    expected_money_return?: SortOrder
    expected_weight_return?: SortOrder
    land_id?: SortOrder
  }

  export type CropSumOrderByAggregateInput = {
    crop_area?: SortOrder
    crop_investment?: SortOrder
    expected_money_return?: SortOrder
    expected_weight_return?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type CropMaintenanceCountOrderByAggregateInput = {
    maintenance_id?: SortOrder
    pesticide_level?: SortOrder
    water_sufficienty?: SortOrder
    land_id?: SortOrder
  }

  export type CropMaintenanceAvgOrderByAggregateInput = {
    pesticide_level?: SortOrder
    water_sufficienty?: SortOrder
  }

  export type CropMaintenanceMaxOrderByAggregateInput = {
    maintenance_id?: SortOrder
    pesticide_level?: SortOrder
    water_sufficienty?: SortOrder
    land_id?: SortOrder
  }

  export type CropMaintenanceMinOrderByAggregateInput = {
    maintenance_id?: SortOrder
    pesticide_level?: SortOrder
    water_sufficienty?: SortOrder
    land_id?: SortOrder
  }

  export type CropMaintenanceSumOrderByAggregateInput = {
    pesticide_level?: SortOrder
    water_sufficienty?: SortOrder
  }

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type UuidNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidNullableFilter<$PrismaModel> | string | null
  }

  export type LandNullableRelationFilter = {
    is?: LandWhereInput | null
    isNot?: LandWhereInput | null
  }

  export type FinanceCountOrderByAggregateInput = {
    financial_id?: SortOrder
    investment_amount?: SortOrder
    expected_revenue?: SortOrder
    land_id?: SortOrder
  }

  export type FinanceAvgOrderByAggregateInput = {
    investment_amount?: SortOrder
    expected_revenue?: SortOrder
  }

  export type FinanceMaxOrderByAggregateInput = {
    financial_id?: SortOrder
    investment_amount?: SortOrder
    expected_revenue?: SortOrder
    land_id?: SortOrder
  }

  export type FinanceMinOrderByAggregateInput = {
    financial_id?: SortOrder
    investment_amount?: SortOrder
    expected_revenue?: SortOrder
    land_id?: SortOrder
  }

  export type FinanceSumOrderByAggregateInput = {
    investment_amount?: SortOrder
    expected_revenue?: SortOrder
  }

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type UuidNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type WeatherCountOrderByAggregateInput = {
    weather_id?: SortOrder
    temperature?: SortOrder
    humidity?: SortOrder
    rainfall?: SortOrder
    sunlight?: SortOrder
    land_id?: SortOrder
  }

  export type WeatherAvgOrderByAggregateInput = {
    temperature?: SortOrder
    humidity?: SortOrder
    rainfall?: SortOrder
    sunlight?: SortOrder
  }

  export type WeatherMaxOrderByAggregateInput = {
    weather_id?: SortOrder
    temperature?: SortOrder
    humidity?: SortOrder
    rainfall?: SortOrder
    sunlight?: SortOrder
    land_id?: SortOrder
  }

  export type WeatherMinOrderByAggregateInput = {
    weather_id?: SortOrder
    temperature?: SortOrder
    humidity?: SortOrder
    rainfall?: SortOrder
    sunlight?: SortOrder
    land_id?: SortOrder
  }

  export type WeatherSumOrderByAggregateInput = {
    temperature?: SortOrder
    humidity?: SortOrder
    rainfall?: SortOrder
    sunlight?: SortOrder
  }

  export type BusinessPlanCountOrderByAggregateInput = {
    business_plan_id?: SortOrder
    executive_summary?: SortOrder
    resources?: SortOrder
    crops?: SortOrder
    weather_considerations?: SortOrder
    soil_maintenance?: SortOrder
    profit_estimations?: SortOrder
    other_recommendations?: SortOrder
    land_id?: SortOrder
  }

  export type BusinessPlanMaxOrderByAggregateInput = {
    business_plan_id?: SortOrder
    executive_summary?: SortOrder
    resources?: SortOrder
    crops?: SortOrder
    weather_considerations?: SortOrder
    soil_maintenance?: SortOrder
    profit_estimations?: SortOrder
    other_recommendations?: SortOrder
    land_id?: SortOrder
  }

  export type BusinessPlanMinOrderByAggregateInput = {
    business_plan_id?: SortOrder
    executive_summary?: SortOrder
    resources?: SortOrder
    crops?: SortOrder
    weather_considerations?: SortOrder
    soil_maintenance?: SortOrder
    profit_estimations?: SortOrder
    other_recommendations?: SortOrder
    land_id?: SortOrder
  }

  export type LandCreateNestedManyWithoutUserInput = {
    create?: XOR<LandCreateWithoutUserInput, LandUncheckedCreateWithoutUserInput> | LandCreateWithoutUserInput[] | LandUncheckedCreateWithoutUserInput[]
    connectOrCreate?: LandCreateOrConnectWithoutUserInput | LandCreateOrConnectWithoutUserInput[]
    createMany?: LandCreateManyUserInputEnvelope
    connect?: LandWhereUniqueInput | LandWhereUniqueInput[]
  }

  export type LandUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<LandCreateWithoutUserInput, LandUncheckedCreateWithoutUserInput> | LandCreateWithoutUserInput[] | LandUncheckedCreateWithoutUserInput[]
    connectOrCreate?: LandCreateOrConnectWithoutUserInput | LandCreateOrConnectWithoutUserInput[]
    createMany?: LandCreateManyUserInputEnvelope
    connect?: LandWhereUniqueInput | LandWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type LandUpdateManyWithoutUserNestedInput = {
    create?: XOR<LandCreateWithoutUserInput, LandUncheckedCreateWithoutUserInput> | LandCreateWithoutUserInput[] | LandUncheckedCreateWithoutUserInput[]
    connectOrCreate?: LandCreateOrConnectWithoutUserInput | LandCreateOrConnectWithoutUserInput[]
    upsert?: LandUpsertWithWhereUniqueWithoutUserInput | LandUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: LandCreateManyUserInputEnvelope
    set?: LandWhereUniqueInput | LandWhereUniqueInput[]
    disconnect?: LandWhereUniqueInput | LandWhereUniqueInput[]
    delete?: LandWhereUniqueInput | LandWhereUniqueInput[]
    connect?: LandWhereUniqueInput | LandWhereUniqueInput[]
    update?: LandUpdateWithWhereUniqueWithoutUserInput | LandUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: LandUpdateManyWithWhereWithoutUserInput | LandUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: LandScalarWhereInput | LandScalarWhereInput[]
  }

  export type LandUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<LandCreateWithoutUserInput, LandUncheckedCreateWithoutUserInput> | LandCreateWithoutUserInput[] | LandUncheckedCreateWithoutUserInput[]
    connectOrCreate?: LandCreateOrConnectWithoutUserInput | LandCreateOrConnectWithoutUserInput[]
    upsert?: LandUpsertWithWhereUniqueWithoutUserInput | LandUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: LandCreateManyUserInputEnvelope
    set?: LandWhereUniqueInput | LandWhereUniqueInput[]
    disconnect?: LandWhereUniqueInput | LandWhereUniqueInput[]
    delete?: LandWhereUniqueInput | LandWhereUniqueInput[]
    connect?: LandWhereUniqueInput | LandWhereUniqueInput[]
    update?: LandUpdateWithWhereUniqueWithoutUserInput | LandUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: LandUpdateManyWithWhereWithoutUserInput | LandUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: LandScalarWhereInput | LandScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutLandsInput = {
    create?: XOR<UserCreateWithoutLandsInput, UserUncheckedCreateWithoutLandsInput>
    connectOrCreate?: UserCreateOrConnectWithoutLandsInput
    connect?: UserWhereUniqueInput
  }

  export type LandStatisticCreateNestedManyWithoutLandInput = {
    create?: XOR<LandStatisticCreateWithoutLandInput, LandStatisticUncheckedCreateWithoutLandInput> | LandStatisticCreateWithoutLandInput[] | LandStatisticUncheckedCreateWithoutLandInput[]
    connectOrCreate?: LandStatisticCreateOrConnectWithoutLandInput | LandStatisticCreateOrConnectWithoutLandInput[]
    createMany?: LandStatisticCreateManyLandInputEnvelope
    connect?: LandStatisticWhereUniqueInput | LandStatisticWhereUniqueInput[]
  }

  export type CropCreateNestedManyWithoutLandInput = {
    create?: XOR<CropCreateWithoutLandInput, CropUncheckedCreateWithoutLandInput> | CropCreateWithoutLandInput[] | CropUncheckedCreateWithoutLandInput[]
    connectOrCreate?: CropCreateOrConnectWithoutLandInput | CropCreateOrConnectWithoutLandInput[]
    createMany?: CropCreateManyLandInputEnvelope
    connect?: CropWhereUniqueInput | CropWhereUniqueInput[]
  }

  export type CropMaintenanceCreateNestedManyWithoutLandInput = {
    create?: XOR<CropMaintenanceCreateWithoutLandInput, CropMaintenanceUncheckedCreateWithoutLandInput> | CropMaintenanceCreateWithoutLandInput[] | CropMaintenanceUncheckedCreateWithoutLandInput[]
    connectOrCreate?: CropMaintenanceCreateOrConnectWithoutLandInput | CropMaintenanceCreateOrConnectWithoutLandInput[]
    createMany?: CropMaintenanceCreateManyLandInputEnvelope
    connect?: CropMaintenanceWhereUniqueInput | CropMaintenanceWhereUniqueInput[]
  }

  export type FinanceCreateNestedManyWithoutLandInput = {
    create?: XOR<FinanceCreateWithoutLandInput, FinanceUncheckedCreateWithoutLandInput> | FinanceCreateWithoutLandInput[] | FinanceUncheckedCreateWithoutLandInput[]
    connectOrCreate?: FinanceCreateOrConnectWithoutLandInput | FinanceCreateOrConnectWithoutLandInput[]
    createMany?: FinanceCreateManyLandInputEnvelope
    connect?: FinanceWhereUniqueInput | FinanceWhereUniqueInput[]
  }

  export type WeatherCreateNestedManyWithoutLandInput = {
    create?: XOR<WeatherCreateWithoutLandInput, WeatherUncheckedCreateWithoutLandInput> | WeatherCreateWithoutLandInput[] | WeatherUncheckedCreateWithoutLandInput[]
    connectOrCreate?: WeatherCreateOrConnectWithoutLandInput | WeatherCreateOrConnectWithoutLandInput[]
    createMany?: WeatherCreateManyLandInputEnvelope
    connect?: WeatherWhereUniqueInput | WeatherWhereUniqueInput[]
  }

  export type BusinessPlanCreateNestedManyWithoutLandInput = {
    create?: XOR<BusinessPlanCreateWithoutLandInput, BusinessPlanUncheckedCreateWithoutLandInput> | BusinessPlanCreateWithoutLandInput[] | BusinessPlanUncheckedCreateWithoutLandInput[]
    connectOrCreate?: BusinessPlanCreateOrConnectWithoutLandInput | BusinessPlanCreateOrConnectWithoutLandInput[]
    createMany?: BusinessPlanCreateManyLandInputEnvelope
    connect?: BusinessPlanWhereUniqueInput | BusinessPlanWhereUniqueInput[]
  }

  export type LandStatisticUncheckedCreateNestedManyWithoutLandInput = {
    create?: XOR<LandStatisticCreateWithoutLandInput, LandStatisticUncheckedCreateWithoutLandInput> | LandStatisticCreateWithoutLandInput[] | LandStatisticUncheckedCreateWithoutLandInput[]
    connectOrCreate?: LandStatisticCreateOrConnectWithoutLandInput | LandStatisticCreateOrConnectWithoutLandInput[]
    createMany?: LandStatisticCreateManyLandInputEnvelope
    connect?: LandStatisticWhereUniqueInput | LandStatisticWhereUniqueInput[]
  }

  export type CropUncheckedCreateNestedManyWithoutLandInput = {
    create?: XOR<CropCreateWithoutLandInput, CropUncheckedCreateWithoutLandInput> | CropCreateWithoutLandInput[] | CropUncheckedCreateWithoutLandInput[]
    connectOrCreate?: CropCreateOrConnectWithoutLandInput | CropCreateOrConnectWithoutLandInput[]
    createMany?: CropCreateManyLandInputEnvelope
    connect?: CropWhereUniqueInput | CropWhereUniqueInput[]
  }

  export type CropMaintenanceUncheckedCreateNestedManyWithoutLandInput = {
    create?: XOR<CropMaintenanceCreateWithoutLandInput, CropMaintenanceUncheckedCreateWithoutLandInput> | CropMaintenanceCreateWithoutLandInput[] | CropMaintenanceUncheckedCreateWithoutLandInput[]
    connectOrCreate?: CropMaintenanceCreateOrConnectWithoutLandInput | CropMaintenanceCreateOrConnectWithoutLandInput[]
    createMany?: CropMaintenanceCreateManyLandInputEnvelope
    connect?: CropMaintenanceWhereUniqueInput | CropMaintenanceWhereUniqueInput[]
  }

  export type FinanceUncheckedCreateNestedManyWithoutLandInput = {
    create?: XOR<FinanceCreateWithoutLandInput, FinanceUncheckedCreateWithoutLandInput> | FinanceCreateWithoutLandInput[] | FinanceUncheckedCreateWithoutLandInput[]
    connectOrCreate?: FinanceCreateOrConnectWithoutLandInput | FinanceCreateOrConnectWithoutLandInput[]
    createMany?: FinanceCreateManyLandInputEnvelope
    connect?: FinanceWhereUniqueInput | FinanceWhereUniqueInput[]
  }

  export type WeatherUncheckedCreateNestedManyWithoutLandInput = {
    create?: XOR<WeatherCreateWithoutLandInput, WeatherUncheckedCreateWithoutLandInput> | WeatherCreateWithoutLandInput[] | WeatherUncheckedCreateWithoutLandInput[]
    connectOrCreate?: WeatherCreateOrConnectWithoutLandInput | WeatherCreateOrConnectWithoutLandInput[]
    createMany?: WeatherCreateManyLandInputEnvelope
    connect?: WeatherWhereUniqueInput | WeatherWhereUniqueInput[]
  }

  export type BusinessPlanUncheckedCreateNestedManyWithoutLandInput = {
    create?: XOR<BusinessPlanCreateWithoutLandInput, BusinessPlanUncheckedCreateWithoutLandInput> | BusinessPlanCreateWithoutLandInput[] | BusinessPlanUncheckedCreateWithoutLandInput[]
    connectOrCreate?: BusinessPlanCreateOrConnectWithoutLandInput | BusinessPlanCreateOrConnectWithoutLandInput[]
    createMany?: BusinessPlanCreateManyLandInputEnvelope
    connect?: BusinessPlanWhereUniqueInput | BusinessPlanWhereUniqueInput[]
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type UserUpdateOneRequiredWithoutLandsNestedInput = {
    create?: XOR<UserCreateWithoutLandsInput, UserUncheckedCreateWithoutLandsInput>
    connectOrCreate?: UserCreateOrConnectWithoutLandsInput
    upsert?: UserUpsertWithoutLandsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutLandsInput, UserUpdateWithoutLandsInput>, UserUncheckedUpdateWithoutLandsInput>
  }

  export type LandStatisticUpdateManyWithoutLandNestedInput = {
    create?: XOR<LandStatisticCreateWithoutLandInput, LandStatisticUncheckedCreateWithoutLandInput> | LandStatisticCreateWithoutLandInput[] | LandStatisticUncheckedCreateWithoutLandInput[]
    connectOrCreate?: LandStatisticCreateOrConnectWithoutLandInput | LandStatisticCreateOrConnectWithoutLandInput[]
    upsert?: LandStatisticUpsertWithWhereUniqueWithoutLandInput | LandStatisticUpsertWithWhereUniqueWithoutLandInput[]
    createMany?: LandStatisticCreateManyLandInputEnvelope
    set?: LandStatisticWhereUniqueInput | LandStatisticWhereUniqueInput[]
    disconnect?: LandStatisticWhereUniqueInput | LandStatisticWhereUniqueInput[]
    delete?: LandStatisticWhereUniqueInput | LandStatisticWhereUniqueInput[]
    connect?: LandStatisticWhereUniqueInput | LandStatisticWhereUniqueInput[]
    update?: LandStatisticUpdateWithWhereUniqueWithoutLandInput | LandStatisticUpdateWithWhereUniqueWithoutLandInput[]
    updateMany?: LandStatisticUpdateManyWithWhereWithoutLandInput | LandStatisticUpdateManyWithWhereWithoutLandInput[]
    deleteMany?: LandStatisticScalarWhereInput | LandStatisticScalarWhereInput[]
  }

  export type CropUpdateManyWithoutLandNestedInput = {
    create?: XOR<CropCreateWithoutLandInput, CropUncheckedCreateWithoutLandInput> | CropCreateWithoutLandInput[] | CropUncheckedCreateWithoutLandInput[]
    connectOrCreate?: CropCreateOrConnectWithoutLandInput | CropCreateOrConnectWithoutLandInput[]
    upsert?: CropUpsertWithWhereUniqueWithoutLandInput | CropUpsertWithWhereUniqueWithoutLandInput[]
    createMany?: CropCreateManyLandInputEnvelope
    set?: CropWhereUniqueInput | CropWhereUniqueInput[]
    disconnect?: CropWhereUniqueInput | CropWhereUniqueInput[]
    delete?: CropWhereUniqueInput | CropWhereUniqueInput[]
    connect?: CropWhereUniqueInput | CropWhereUniqueInput[]
    update?: CropUpdateWithWhereUniqueWithoutLandInput | CropUpdateWithWhereUniqueWithoutLandInput[]
    updateMany?: CropUpdateManyWithWhereWithoutLandInput | CropUpdateManyWithWhereWithoutLandInput[]
    deleteMany?: CropScalarWhereInput | CropScalarWhereInput[]
  }

  export type CropMaintenanceUpdateManyWithoutLandNestedInput = {
    create?: XOR<CropMaintenanceCreateWithoutLandInput, CropMaintenanceUncheckedCreateWithoutLandInput> | CropMaintenanceCreateWithoutLandInput[] | CropMaintenanceUncheckedCreateWithoutLandInput[]
    connectOrCreate?: CropMaintenanceCreateOrConnectWithoutLandInput | CropMaintenanceCreateOrConnectWithoutLandInput[]
    upsert?: CropMaintenanceUpsertWithWhereUniqueWithoutLandInput | CropMaintenanceUpsertWithWhereUniqueWithoutLandInput[]
    createMany?: CropMaintenanceCreateManyLandInputEnvelope
    set?: CropMaintenanceWhereUniqueInput | CropMaintenanceWhereUniqueInput[]
    disconnect?: CropMaintenanceWhereUniqueInput | CropMaintenanceWhereUniqueInput[]
    delete?: CropMaintenanceWhereUniqueInput | CropMaintenanceWhereUniqueInput[]
    connect?: CropMaintenanceWhereUniqueInput | CropMaintenanceWhereUniqueInput[]
    update?: CropMaintenanceUpdateWithWhereUniqueWithoutLandInput | CropMaintenanceUpdateWithWhereUniqueWithoutLandInput[]
    updateMany?: CropMaintenanceUpdateManyWithWhereWithoutLandInput | CropMaintenanceUpdateManyWithWhereWithoutLandInput[]
    deleteMany?: CropMaintenanceScalarWhereInput | CropMaintenanceScalarWhereInput[]
  }

  export type FinanceUpdateManyWithoutLandNestedInput = {
    create?: XOR<FinanceCreateWithoutLandInput, FinanceUncheckedCreateWithoutLandInput> | FinanceCreateWithoutLandInput[] | FinanceUncheckedCreateWithoutLandInput[]
    connectOrCreate?: FinanceCreateOrConnectWithoutLandInput | FinanceCreateOrConnectWithoutLandInput[]
    upsert?: FinanceUpsertWithWhereUniqueWithoutLandInput | FinanceUpsertWithWhereUniqueWithoutLandInput[]
    createMany?: FinanceCreateManyLandInputEnvelope
    set?: FinanceWhereUniqueInput | FinanceWhereUniqueInput[]
    disconnect?: FinanceWhereUniqueInput | FinanceWhereUniqueInput[]
    delete?: FinanceWhereUniqueInput | FinanceWhereUniqueInput[]
    connect?: FinanceWhereUniqueInput | FinanceWhereUniqueInput[]
    update?: FinanceUpdateWithWhereUniqueWithoutLandInput | FinanceUpdateWithWhereUniqueWithoutLandInput[]
    updateMany?: FinanceUpdateManyWithWhereWithoutLandInput | FinanceUpdateManyWithWhereWithoutLandInput[]
    deleteMany?: FinanceScalarWhereInput | FinanceScalarWhereInput[]
  }

  export type WeatherUpdateManyWithoutLandNestedInput = {
    create?: XOR<WeatherCreateWithoutLandInput, WeatherUncheckedCreateWithoutLandInput> | WeatherCreateWithoutLandInput[] | WeatherUncheckedCreateWithoutLandInput[]
    connectOrCreate?: WeatherCreateOrConnectWithoutLandInput | WeatherCreateOrConnectWithoutLandInput[]
    upsert?: WeatherUpsertWithWhereUniqueWithoutLandInput | WeatherUpsertWithWhereUniqueWithoutLandInput[]
    createMany?: WeatherCreateManyLandInputEnvelope
    set?: WeatherWhereUniqueInput | WeatherWhereUniqueInput[]
    disconnect?: WeatherWhereUniqueInput | WeatherWhereUniqueInput[]
    delete?: WeatherWhereUniqueInput | WeatherWhereUniqueInput[]
    connect?: WeatherWhereUniqueInput | WeatherWhereUniqueInput[]
    update?: WeatherUpdateWithWhereUniqueWithoutLandInput | WeatherUpdateWithWhereUniqueWithoutLandInput[]
    updateMany?: WeatherUpdateManyWithWhereWithoutLandInput | WeatherUpdateManyWithWhereWithoutLandInput[]
    deleteMany?: WeatherScalarWhereInput | WeatherScalarWhereInput[]
  }

  export type BusinessPlanUpdateManyWithoutLandNestedInput = {
    create?: XOR<BusinessPlanCreateWithoutLandInput, BusinessPlanUncheckedCreateWithoutLandInput> | BusinessPlanCreateWithoutLandInput[] | BusinessPlanUncheckedCreateWithoutLandInput[]
    connectOrCreate?: BusinessPlanCreateOrConnectWithoutLandInput | BusinessPlanCreateOrConnectWithoutLandInput[]
    upsert?: BusinessPlanUpsertWithWhereUniqueWithoutLandInput | BusinessPlanUpsertWithWhereUniqueWithoutLandInput[]
    createMany?: BusinessPlanCreateManyLandInputEnvelope
    set?: BusinessPlanWhereUniqueInput | BusinessPlanWhereUniqueInput[]
    disconnect?: BusinessPlanWhereUniqueInput | BusinessPlanWhereUniqueInput[]
    delete?: BusinessPlanWhereUniqueInput | BusinessPlanWhereUniqueInput[]
    connect?: BusinessPlanWhereUniqueInput | BusinessPlanWhereUniqueInput[]
    update?: BusinessPlanUpdateWithWhereUniqueWithoutLandInput | BusinessPlanUpdateWithWhereUniqueWithoutLandInput[]
    updateMany?: BusinessPlanUpdateManyWithWhereWithoutLandInput | BusinessPlanUpdateManyWithWhereWithoutLandInput[]
    deleteMany?: BusinessPlanScalarWhereInput | BusinessPlanScalarWhereInput[]
  }

  export type LandStatisticUncheckedUpdateManyWithoutLandNestedInput = {
    create?: XOR<LandStatisticCreateWithoutLandInput, LandStatisticUncheckedCreateWithoutLandInput> | LandStatisticCreateWithoutLandInput[] | LandStatisticUncheckedCreateWithoutLandInput[]
    connectOrCreate?: LandStatisticCreateOrConnectWithoutLandInput | LandStatisticCreateOrConnectWithoutLandInput[]
    upsert?: LandStatisticUpsertWithWhereUniqueWithoutLandInput | LandStatisticUpsertWithWhereUniqueWithoutLandInput[]
    createMany?: LandStatisticCreateManyLandInputEnvelope
    set?: LandStatisticWhereUniqueInput | LandStatisticWhereUniqueInput[]
    disconnect?: LandStatisticWhereUniqueInput | LandStatisticWhereUniqueInput[]
    delete?: LandStatisticWhereUniqueInput | LandStatisticWhereUniqueInput[]
    connect?: LandStatisticWhereUniqueInput | LandStatisticWhereUniqueInput[]
    update?: LandStatisticUpdateWithWhereUniqueWithoutLandInput | LandStatisticUpdateWithWhereUniqueWithoutLandInput[]
    updateMany?: LandStatisticUpdateManyWithWhereWithoutLandInput | LandStatisticUpdateManyWithWhereWithoutLandInput[]
    deleteMany?: LandStatisticScalarWhereInput | LandStatisticScalarWhereInput[]
  }

  export type CropUncheckedUpdateManyWithoutLandNestedInput = {
    create?: XOR<CropCreateWithoutLandInput, CropUncheckedCreateWithoutLandInput> | CropCreateWithoutLandInput[] | CropUncheckedCreateWithoutLandInput[]
    connectOrCreate?: CropCreateOrConnectWithoutLandInput | CropCreateOrConnectWithoutLandInput[]
    upsert?: CropUpsertWithWhereUniqueWithoutLandInput | CropUpsertWithWhereUniqueWithoutLandInput[]
    createMany?: CropCreateManyLandInputEnvelope
    set?: CropWhereUniqueInput | CropWhereUniqueInput[]
    disconnect?: CropWhereUniqueInput | CropWhereUniqueInput[]
    delete?: CropWhereUniqueInput | CropWhereUniqueInput[]
    connect?: CropWhereUniqueInput | CropWhereUniqueInput[]
    update?: CropUpdateWithWhereUniqueWithoutLandInput | CropUpdateWithWhereUniqueWithoutLandInput[]
    updateMany?: CropUpdateManyWithWhereWithoutLandInput | CropUpdateManyWithWhereWithoutLandInput[]
    deleteMany?: CropScalarWhereInput | CropScalarWhereInput[]
  }

  export type CropMaintenanceUncheckedUpdateManyWithoutLandNestedInput = {
    create?: XOR<CropMaintenanceCreateWithoutLandInput, CropMaintenanceUncheckedCreateWithoutLandInput> | CropMaintenanceCreateWithoutLandInput[] | CropMaintenanceUncheckedCreateWithoutLandInput[]
    connectOrCreate?: CropMaintenanceCreateOrConnectWithoutLandInput | CropMaintenanceCreateOrConnectWithoutLandInput[]
    upsert?: CropMaintenanceUpsertWithWhereUniqueWithoutLandInput | CropMaintenanceUpsertWithWhereUniqueWithoutLandInput[]
    createMany?: CropMaintenanceCreateManyLandInputEnvelope
    set?: CropMaintenanceWhereUniqueInput | CropMaintenanceWhereUniqueInput[]
    disconnect?: CropMaintenanceWhereUniqueInput | CropMaintenanceWhereUniqueInput[]
    delete?: CropMaintenanceWhereUniqueInput | CropMaintenanceWhereUniqueInput[]
    connect?: CropMaintenanceWhereUniqueInput | CropMaintenanceWhereUniqueInput[]
    update?: CropMaintenanceUpdateWithWhereUniqueWithoutLandInput | CropMaintenanceUpdateWithWhereUniqueWithoutLandInput[]
    updateMany?: CropMaintenanceUpdateManyWithWhereWithoutLandInput | CropMaintenanceUpdateManyWithWhereWithoutLandInput[]
    deleteMany?: CropMaintenanceScalarWhereInput | CropMaintenanceScalarWhereInput[]
  }

  export type FinanceUncheckedUpdateManyWithoutLandNestedInput = {
    create?: XOR<FinanceCreateWithoutLandInput, FinanceUncheckedCreateWithoutLandInput> | FinanceCreateWithoutLandInput[] | FinanceUncheckedCreateWithoutLandInput[]
    connectOrCreate?: FinanceCreateOrConnectWithoutLandInput | FinanceCreateOrConnectWithoutLandInput[]
    upsert?: FinanceUpsertWithWhereUniqueWithoutLandInput | FinanceUpsertWithWhereUniqueWithoutLandInput[]
    createMany?: FinanceCreateManyLandInputEnvelope
    set?: FinanceWhereUniqueInput | FinanceWhereUniqueInput[]
    disconnect?: FinanceWhereUniqueInput | FinanceWhereUniqueInput[]
    delete?: FinanceWhereUniqueInput | FinanceWhereUniqueInput[]
    connect?: FinanceWhereUniqueInput | FinanceWhereUniqueInput[]
    update?: FinanceUpdateWithWhereUniqueWithoutLandInput | FinanceUpdateWithWhereUniqueWithoutLandInput[]
    updateMany?: FinanceUpdateManyWithWhereWithoutLandInput | FinanceUpdateManyWithWhereWithoutLandInput[]
    deleteMany?: FinanceScalarWhereInput | FinanceScalarWhereInput[]
  }

  export type WeatherUncheckedUpdateManyWithoutLandNestedInput = {
    create?: XOR<WeatherCreateWithoutLandInput, WeatherUncheckedCreateWithoutLandInput> | WeatherCreateWithoutLandInput[] | WeatherUncheckedCreateWithoutLandInput[]
    connectOrCreate?: WeatherCreateOrConnectWithoutLandInput | WeatherCreateOrConnectWithoutLandInput[]
    upsert?: WeatherUpsertWithWhereUniqueWithoutLandInput | WeatherUpsertWithWhereUniqueWithoutLandInput[]
    createMany?: WeatherCreateManyLandInputEnvelope
    set?: WeatherWhereUniqueInput | WeatherWhereUniqueInput[]
    disconnect?: WeatherWhereUniqueInput | WeatherWhereUniqueInput[]
    delete?: WeatherWhereUniqueInput | WeatherWhereUniqueInput[]
    connect?: WeatherWhereUniqueInput | WeatherWhereUniqueInput[]
    update?: WeatherUpdateWithWhereUniqueWithoutLandInput | WeatherUpdateWithWhereUniqueWithoutLandInput[]
    updateMany?: WeatherUpdateManyWithWhereWithoutLandInput | WeatherUpdateManyWithWhereWithoutLandInput[]
    deleteMany?: WeatherScalarWhereInput | WeatherScalarWhereInput[]
  }

  export type BusinessPlanUncheckedUpdateManyWithoutLandNestedInput = {
    create?: XOR<BusinessPlanCreateWithoutLandInput, BusinessPlanUncheckedCreateWithoutLandInput> | BusinessPlanCreateWithoutLandInput[] | BusinessPlanUncheckedCreateWithoutLandInput[]
    connectOrCreate?: BusinessPlanCreateOrConnectWithoutLandInput | BusinessPlanCreateOrConnectWithoutLandInput[]
    upsert?: BusinessPlanUpsertWithWhereUniqueWithoutLandInput | BusinessPlanUpsertWithWhereUniqueWithoutLandInput[]
    createMany?: BusinessPlanCreateManyLandInputEnvelope
    set?: BusinessPlanWhereUniqueInput | BusinessPlanWhereUniqueInput[]
    disconnect?: BusinessPlanWhereUniqueInput | BusinessPlanWhereUniqueInput[]
    delete?: BusinessPlanWhereUniqueInput | BusinessPlanWhereUniqueInput[]
    connect?: BusinessPlanWhereUniqueInput | BusinessPlanWhereUniqueInput[]
    update?: BusinessPlanUpdateWithWhereUniqueWithoutLandInput | BusinessPlanUpdateWithWhereUniqueWithoutLandInput[]
    updateMany?: BusinessPlanUpdateManyWithWhereWithoutLandInput | BusinessPlanUpdateManyWithWhereWithoutLandInput[]
    deleteMany?: BusinessPlanScalarWhereInput | BusinessPlanScalarWhereInput[]
  }

  export type LandCreateNestedOneWithoutStatisticsInput = {
    create?: XOR<LandCreateWithoutStatisticsInput, LandUncheckedCreateWithoutStatisticsInput>
    connectOrCreate?: LandCreateOrConnectWithoutStatisticsInput
    connect?: LandWhereUniqueInput
  }

  export type LandUpdateOneRequiredWithoutStatisticsNestedInput = {
    create?: XOR<LandCreateWithoutStatisticsInput, LandUncheckedCreateWithoutStatisticsInput>
    connectOrCreate?: LandCreateOrConnectWithoutStatisticsInput
    upsert?: LandUpsertWithoutStatisticsInput
    connect?: LandWhereUniqueInput
    update?: XOR<XOR<LandUpdateToOneWithWhereWithoutStatisticsInput, LandUpdateWithoutStatisticsInput>, LandUncheckedUpdateWithoutStatisticsInput>
  }

  export type LandCreateNestedOneWithoutCropsInput = {
    create?: XOR<LandCreateWithoutCropsInput, LandUncheckedCreateWithoutCropsInput>
    connectOrCreate?: LandCreateOrConnectWithoutCropsInput
    connect?: LandWhereUniqueInput
  }

  export type LandUpdateOneRequiredWithoutCropsNestedInput = {
    create?: XOR<LandCreateWithoutCropsInput, LandUncheckedCreateWithoutCropsInput>
    connectOrCreate?: LandCreateOrConnectWithoutCropsInput
    upsert?: LandUpsertWithoutCropsInput
    connect?: LandWhereUniqueInput
    update?: XOR<XOR<LandUpdateToOneWithWhereWithoutCropsInput, LandUpdateWithoutCropsInput>, LandUncheckedUpdateWithoutCropsInput>
  }

  export type LandCreateNestedOneWithoutMaintenancesInput = {
    create?: XOR<LandCreateWithoutMaintenancesInput, LandUncheckedCreateWithoutMaintenancesInput>
    connectOrCreate?: LandCreateOrConnectWithoutMaintenancesInput
    connect?: LandWhereUniqueInput
  }

  export type LandUpdateOneRequiredWithoutMaintenancesNestedInput = {
    create?: XOR<LandCreateWithoutMaintenancesInput, LandUncheckedCreateWithoutMaintenancesInput>
    connectOrCreate?: LandCreateOrConnectWithoutMaintenancesInput
    upsert?: LandUpsertWithoutMaintenancesInput
    connect?: LandWhereUniqueInput
    update?: XOR<XOR<LandUpdateToOneWithWhereWithoutMaintenancesInput, LandUpdateWithoutMaintenancesInput>, LandUncheckedUpdateWithoutMaintenancesInput>
  }

  export type LandCreateNestedOneWithoutFinancesInput = {
    create?: XOR<LandCreateWithoutFinancesInput, LandUncheckedCreateWithoutFinancesInput>
    connectOrCreate?: LandCreateOrConnectWithoutFinancesInput
    connect?: LandWhereUniqueInput
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type LandUpdateOneWithoutFinancesNestedInput = {
    create?: XOR<LandCreateWithoutFinancesInput, LandUncheckedCreateWithoutFinancesInput>
    connectOrCreate?: LandCreateOrConnectWithoutFinancesInput
    upsert?: LandUpsertWithoutFinancesInput
    disconnect?: LandWhereInput | boolean
    delete?: LandWhereInput | boolean
    connect?: LandWhereUniqueInput
    update?: XOR<XOR<LandUpdateToOneWithWhereWithoutFinancesInput, LandUpdateWithoutFinancesInput>, LandUncheckedUpdateWithoutFinancesInput>
  }

  export type LandCreateNestedOneWithoutWeather_dataInput = {
    create?: XOR<LandCreateWithoutWeather_dataInput, LandUncheckedCreateWithoutWeather_dataInput>
    connectOrCreate?: LandCreateOrConnectWithoutWeather_dataInput
    connect?: LandWhereUniqueInput
  }

  export type LandUpdateOneWithoutWeather_dataNestedInput = {
    create?: XOR<LandCreateWithoutWeather_dataInput, LandUncheckedCreateWithoutWeather_dataInput>
    connectOrCreate?: LandCreateOrConnectWithoutWeather_dataInput
    upsert?: LandUpsertWithoutWeather_dataInput
    disconnect?: LandWhereInput | boolean
    delete?: LandWhereInput | boolean
    connect?: LandWhereUniqueInput
    update?: XOR<XOR<LandUpdateToOneWithWhereWithoutWeather_dataInput, LandUpdateWithoutWeather_dataInput>, LandUncheckedUpdateWithoutWeather_dataInput>
  }

  export type LandCreateNestedOneWithoutBusiness_plansInput = {
    create?: XOR<LandCreateWithoutBusiness_plansInput, LandUncheckedCreateWithoutBusiness_plansInput>
    connectOrCreate?: LandCreateOrConnectWithoutBusiness_plansInput
    connect?: LandWhereUniqueInput
  }

  export type LandUpdateOneRequiredWithoutBusiness_plansNestedInput = {
    create?: XOR<LandCreateWithoutBusiness_plansInput, LandUncheckedCreateWithoutBusiness_plansInput>
    connectOrCreate?: LandCreateOrConnectWithoutBusiness_plansInput
    upsert?: LandUpsertWithoutBusiness_plansInput
    connect?: LandWhereUniqueInput
    update?: XOR<XOR<LandUpdateToOneWithWhereWithoutBusiness_plansInput, LandUpdateWithoutBusiness_plansInput>, LandUncheckedUpdateWithoutBusiness_plansInput>
  }

  export type NestedUuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidFilter<$PrismaModel> | string
  }

  export type NestedUuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedUuidNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidNullableFilter<$PrismaModel> | string | null
  }

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type NestedUuidNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type LandCreateWithoutUserInput = {
    land_id?: string
    latitude: number
    longitude: number
    land_size: number
    land_name?: string | null
    land_image?: string | null
    ph_level: number
    phosphorus: number
    potassium: number
    oxygen_level: number
    nitrogen: number
    statistics?: LandStatisticCreateNestedManyWithoutLandInput
    crops?: CropCreateNestedManyWithoutLandInput
    maintenances?: CropMaintenanceCreateNestedManyWithoutLandInput
    finances?: FinanceCreateNestedManyWithoutLandInput
    weather_data?: WeatherCreateNestedManyWithoutLandInput
    business_plans?: BusinessPlanCreateNestedManyWithoutLandInput
  }

  export type LandUncheckedCreateWithoutUserInput = {
    land_id?: string
    latitude: number
    longitude: number
    land_size: number
    land_name?: string | null
    land_image?: string | null
    ph_level: number
    phosphorus: number
    potassium: number
    oxygen_level: number
    nitrogen: number
    statistics?: LandStatisticUncheckedCreateNestedManyWithoutLandInput
    crops?: CropUncheckedCreateNestedManyWithoutLandInput
    maintenances?: CropMaintenanceUncheckedCreateNestedManyWithoutLandInput
    finances?: FinanceUncheckedCreateNestedManyWithoutLandInput
    weather_data?: WeatherUncheckedCreateNestedManyWithoutLandInput
    business_plans?: BusinessPlanUncheckedCreateNestedManyWithoutLandInput
  }

  export type LandCreateOrConnectWithoutUserInput = {
    where: LandWhereUniqueInput
    create: XOR<LandCreateWithoutUserInput, LandUncheckedCreateWithoutUserInput>
  }

  export type LandCreateManyUserInputEnvelope = {
    data: LandCreateManyUserInput | LandCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type LandUpsertWithWhereUniqueWithoutUserInput = {
    where: LandWhereUniqueInput
    update: XOR<LandUpdateWithoutUserInput, LandUncheckedUpdateWithoutUserInput>
    create: XOR<LandCreateWithoutUserInput, LandUncheckedCreateWithoutUserInput>
  }

  export type LandUpdateWithWhereUniqueWithoutUserInput = {
    where: LandWhereUniqueInput
    data: XOR<LandUpdateWithoutUserInput, LandUncheckedUpdateWithoutUserInput>
  }

  export type LandUpdateManyWithWhereWithoutUserInput = {
    where: LandScalarWhereInput
    data: XOR<LandUpdateManyMutationInput, LandUncheckedUpdateManyWithoutUserInput>
  }

  export type LandScalarWhereInput = {
    AND?: LandScalarWhereInput | LandScalarWhereInput[]
    OR?: LandScalarWhereInput[]
    NOT?: LandScalarWhereInput | LandScalarWhereInput[]
    land_id?: UuidFilter<"Land"> | string
    latitude?: FloatFilter<"Land"> | number
    longitude?: FloatFilter<"Land"> | number
    land_size?: FloatFilter<"Land"> | number
    land_name?: StringNullableFilter<"Land"> | string | null
    land_image?: StringNullableFilter<"Land"> | string | null
    ph_level?: FloatFilter<"Land"> | number
    phosphorus?: FloatFilter<"Land"> | number
    potassium?: FloatFilter<"Land"> | number
    oxygen_level?: FloatFilter<"Land"> | number
    nitrogen?: FloatFilter<"Land"> | number
    user_id?: UuidFilter<"Land"> | string
  }

  export type UserCreateWithoutLandsInput = {
    user_id?: string
  }

  export type UserUncheckedCreateWithoutLandsInput = {
    user_id?: string
  }

  export type UserCreateOrConnectWithoutLandsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutLandsInput, UserUncheckedCreateWithoutLandsInput>
  }

  export type LandStatisticCreateWithoutLandInput = {
    land_stat_id?: string
    land_use: number
    human_coverage: number
    water_availability: number
    distribution_optimality: number
    total_profit?: number
  }

  export type LandStatisticUncheckedCreateWithoutLandInput = {
    land_stat_id?: string
    land_use: number
    human_coverage: number
    water_availability: number
    distribution_optimality: number
    total_profit?: number
  }

  export type LandStatisticCreateOrConnectWithoutLandInput = {
    where: LandStatisticWhereUniqueInput
    create: XOR<LandStatisticCreateWithoutLandInput, LandStatisticUncheckedCreateWithoutLandInput>
  }

  export type LandStatisticCreateManyLandInputEnvelope = {
    data: LandStatisticCreateManyLandInput | LandStatisticCreateManyLandInput[]
    skipDuplicates?: boolean
  }

  export type CropCreateWithoutLandInput = {
    crop_id?: string
    crop_name: string
    crop_area: number
    crop_investment: number
    expected_money_return: number
    expected_weight_return: number
  }

  export type CropUncheckedCreateWithoutLandInput = {
    crop_id?: string
    crop_name: string
    crop_area: number
    crop_investment: number
    expected_money_return: number
    expected_weight_return: number
  }

  export type CropCreateOrConnectWithoutLandInput = {
    where: CropWhereUniqueInput
    create: XOR<CropCreateWithoutLandInput, CropUncheckedCreateWithoutLandInput>
  }

  export type CropCreateManyLandInputEnvelope = {
    data: CropCreateManyLandInput | CropCreateManyLandInput[]
    skipDuplicates?: boolean
  }

  export type CropMaintenanceCreateWithoutLandInput = {
    maintenance_id?: string
    pesticide_level: number
    water_sufficienty: number
  }

  export type CropMaintenanceUncheckedCreateWithoutLandInput = {
    maintenance_id?: string
    pesticide_level: number
    water_sufficienty: number
  }

  export type CropMaintenanceCreateOrConnectWithoutLandInput = {
    where: CropMaintenanceWhereUniqueInput
    create: XOR<CropMaintenanceCreateWithoutLandInput, CropMaintenanceUncheckedCreateWithoutLandInput>
  }

  export type CropMaintenanceCreateManyLandInputEnvelope = {
    data: CropMaintenanceCreateManyLandInput | CropMaintenanceCreateManyLandInput[]
    skipDuplicates?: boolean
  }

  export type FinanceCreateWithoutLandInput = {
    financial_id?: string
    investment_amount?: number | null
    expected_revenue?: number | null
  }

  export type FinanceUncheckedCreateWithoutLandInput = {
    financial_id?: string
    investment_amount?: number | null
    expected_revenue?: number | null
  }

  export type FinanceCreateOrConnectWithoutLandInput = {
    where: FinanceWhereUniqueInput
    create: XOR<FinanceCreateWithoutLandInput, FinanceUncheckedCreateWithoutLandInput>
  }

  export type FinanceCreateManyLandInputEnvelope = {
    data: FinanceCreateManyLandInput | FinanceCreateManyLandInput[]
    skipDuplicates?: boolean
  }

  export type WeatherCreateWithoutLandInput = {
    weather_id?: string
    temperature: number
    humidity: number
    rainfall: number
    sunlight: number
  }

  export type WeatherUncheckedCreateWithoutLandInput = {
    weather_id?: string
    temperature: number
    humidity: number
    rainfall: number
    sunlight: number
  }

  export type WeatherCreateOrConnectWithoutLandInput = {
    where: WeatherWhereUniqueInput
    create: XOR<WeatherCreateWithoutLandInput, WeatherUncheckedCreateWithoutLandInput>
  }

  export type WeatherCreateManyLandInputEnvelope = {
    data: WeatherCreateManyLandInput | WeatherCreateManyLandInput[]
    skipDuplicates?: boolean
  }

  export type BusinessPlanCreateWithoutLandInput = {
    business_plan_id?: string
    executive_summary: string
    resources: string
    crops: string
    weather_considerations: string
    soil_maintenance: string
    profit_estimations: string
    other_recommendations: string
  }

  export type BusinessPlanUncheckedCreateWithoutLandInput = {
    business_plan_id?: string
    executive_summary: string
    resources: string
    crops: string
    weather_considerations: string
    soil_maintenance: string
    profit_estimations: string
    other_recommendations: string
  }

  export type BusinessPlanCreateOrConnectWithoutLandInput = {
    where: BusinessPlanWhereUniqueInput
    create: XOR<BusinessPlanCreateWithoutLandInput, BusinessPlanUncheckedCreateWithoutLandInput>
  }

  export type BusinessPlanCreateManyLandInputEnvelope = {
    data: BusinessPlanCreateManyLandInput | BusinessPlanCreateManyLandInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutLandsInput = {
    update: XOR<UserUpdateWithoutLandsInput, UserUncheckedUpdateWithoutLandsInput>
    create: XOR<UserCreateWithoutLandsInput, UserUncheckedCreateWithoutLandsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutLandsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutLandsInput, UserUncheckedUpdateWithoutLandsInput>
  }

  export type UserUpdateWithoutLandsInput = {
    user_id?: StringFieldUpdateOperationsInput | string
  }

  export type UserUncheckedUpdateWithoutLandsInput = {
    user_id?: StringFieldUpdateOperationsInput | string
  }

  export type LandStatisticUpsertWithWhereUniqueWithoutLandInput = {
    where: LandStatisticWhereUniqueInput
    update: XOR<LandStatisticUpdateWithoutLandInput, LandStatisticUncheckedUpdateWithoutLandInput>
    create: XOR<LandStatisticCreateWithoutLandInput, LandStatisticUncheckedCreateWithoutLandInput>
  }

  export type LandStatisticUpdateWithWhereUniqueWithoutLandInput = {
    where: LandStatisticWhereUniqueInput
    data: XOR<LandStatisticUpdateWithoutLandInput, LandStatisticUncheckedUpdateWithoutLandInput>
  }

  export type LandStatisticUpdateManyWithWhereWithoutLandInput = {
    where: LandStatisticScalarWhereInput
    data: XOR<LandStatisticUpdateManyMutationInput, LandStatisticUncheckedUpdateManyWithoutLandInput>
  }

  export type LandStatisticScalarWhereInput = {
    AND?: LandStatisticScalarWhereInput | LandStatisticScalarWhereInput[]
    OR?: LandStatisticScalarWhereInput[]
    NOT?: LandStatisticScalarWhereInput | LandStatisticScalarWhereInput[]
    land_stat_id?: UuidFilter<"LandStatistic"> | string
    land_use?: FloatFilter<"LandStatistic"> | number
    human_coverage?: FloatFilter<"LandStatistic"> | number
    water_availability?: FloatFilter<"LandStatistic"> | number
    distribution_optimality?: FloatFilter<"LandStatistic"> | number
    total_profit?: FloatFilter<"LandStatistic"> | number
    land_id?: UuidFilter<"LandStatistic"> | string
  }

  export type CropUpsertWithWhereUniqueWithoutLandInput = {
    where: CropWhereUniqueInput
    update: XOR<CropUpdateWithoutLandInput, CropUncheckedUpdateWithoutLandInput>
    create: XOR<CropCreateWithoutLandInput, CropUncheckedCreateWithoutLandInput>
  }

  export type CropUpdateWithWhereUniqueWithoutLandInput = {
    where: CropWhereUniqueInput
    data: XOR<CropUpdateWithoutLandInput, CropUncheckedUpdateWithoutLandInput>
  }

  export type CropUpdateManyWithWhereWithoutLandInput = {
    where: CropScalarWhereInput
    data: XOR<CropUpdateManyMutationInput, CropUncheckedUpdateManyWithoutLandInput>
  }

  export type CropScalarWhereInput = {
    AND?: CropScalarWhereInput | CropScalarWhereInput[]
    OR?: CropScalarWhereInput[]
    NOT?: CropScalarWhereInput | CropScalarWhereInput[]
    crop_id?: UuidFilter<"Crop"> | string
    crop_name?: StringFilter<"Crop"> | string
    crop_area?: FloatFilter<"Crop"> | number
    crop_investment?: FloatFilter<"Crop"> | number
    expected_money_return?: FloatFilter<"Crop"> | number
    expected_weight_return?: FloatFilter<"Crop"> | number
    land_id?: UuidFilter<"Crop"> | string
  }

  export type CropMaintenanceUpsertWithWhereUniqueWithoutLandInput = {
    where: CropMaintenanceWhereUniqueInput
    update: XOR<CropMaintenanceUpdateWithoutLandInput, CropMaintenanceUncheckedUpdateWithoutLandInput>
    create: XOR<CropMaintenanceCreateWithoutLandInput, CropMaintenanceUncheckedCreateWithoutLandInput>
  }

  export type CropMaintenanceUpdateWithWhereUniqueWithoutLandInput = {
    where: CropMaintenanceWhereUniqueInput
    data: XOR<CropMaintenanceUpdateWithoutLandInput, CropMaintenanceUncheckedUpdateWithoutLandInput>
  }

  export type CropMaintenanceUpdateManyWithWhereWithoutLandInput = {
    where: CropMaintenanceScalarWhereInput
    data: XOR<CropMaintenanceUpdateManyMutationInput, CropMaintenanceUncheckedUpdateManyWithoutLandInput>
  }

  export type CropMaintenanceScalarWhereInput = {
    AND?: CropMaintenanceScalarWhereInput | CropMaintenanceScalarWhereInput[]
    OR?: CropMaintenanceScalarWhereInput[]
    NOT?: CropMaintenanceScalarWhereInput | CropMaintenanceScalarWhereInput[]
    maintenance_id?: UuidFilter<"CropMaintenance"> | string
    pesticide_level?: FloatFilter<"CropMaintenance"> | number
    water_sufficienty?: FloatFilter<"CropMaintenance"> | number
    land_id?: UuidFilter<"CropMaintenance"> | string
  }

  export type FinanceUpsertWithWhereUniqueWithoutLandInput = {
    where: FinanceWhereUniqueInput
    update: XOR<FinanceUpdateWithoutLandInput, FinanceUncheckedUpdateWithoutLandInput>
    create: XOR<FinanceCreateWithoutLandInput, FinanceUncheckedCreateWithoutLandInput>
  }

  export type FinanceUpdateWithWhereUniqueWithoutLandInput = {
    where: FinanceWhereUniqueInput
    data: XOR<FinanceUpdateWithoutLandInput, FinanceUncheckedUpdateWithoutLandInput>
  }

  export type FinanceUpdateManyWithWhereWithoutLandInput = {
    where: FinanceScalarWhereInput
    data: XOR<FinanceUpdateManyMutationInput, FinanceUncheckedUpdateManyWithoutLandInput>
  }

  export type FinanceScalarWhereInput = {
    AND?: FinanceScalarWhereInput | FinanceScalarWhereInput[]
    OR?: FinanceScalarWhereInput[]
    NOT?: FinanceScalarWhereInput | FinanceScalarWhereInput[]
    financial_id?: UuidFilter<"Finance"> | string
    investment_amount?: FloatNullableFilter<"Finance"> | number | null
    expected_revenue?: FloatNullableFilter<"Finance"> | number | null
    land_id?: UuidNullableFilter<"Finance"> | string | null
  }

  export type WeatherUpsertWithWhereUniqueWithoutLandInput = {
    where: WeatherWhereUniqueInput
    update: XOR<WeatherUpdateWithoutLandInput, WeatherUncheckedUpdateWithoutLandInput>
    create: XOR<WeatherCreateWithoutLandInput, WeatherUncheckedCreateWithoutLandInput>
  }

  export type WeatherUpdateWithWhereUniqueWithoutLandInput = {
    where: WeatherWhereUniqueInput
    data: XOR<WeatherUpdateWithoutLandInput, WeatherUncheckedUpdateWithoutLandInput>
  }

  export type WeatherUpdateManyWithWhereWithoutLandInput = {
    where: WeatherScalarWhereInput
    data: XOR<WeatherUpdateManyMutationInput, WeatherUncheckedUpdateManyWithoutLandInput>
  }

  export type WeatherScalarWhereInput = {
    AND?: WeatherScalarWhereInput | WeatherScalarWhereInput[]
    OR?: WeatherScalarWhereInput[]
    NOT?: WeatherScalarWhereInput | WeatherScalarWhereInput[]
    weather_id?: UuidFilter<"Weather"> | string
    temperature?: FloatFilter<"Weather"> | number
    humidity?: FloatFilter<"Weather"> | number
    rainfall?: FloatFilter<"Weather"> | number
    sunlight?: FloatFilter<"Weather"> | number
    land_id?: UuidNullableFilter<"Weather"> | string | null
  }

  export type BusinessPlanUpsertWithWhereUniqueWithoutLandInput = {
    where: BusinessPlanWhereUniqueInput
    update: XOR<BusinessPlanUpdateWithoutLandInput, BusinessPlanUncheckedUpdateWithoutLandInput>
    create: XOR<BusinessPlanCreateWithoutLandInput, BusinessPlanUncheckedCreateWithoutLandInput>
  }

  export type BusinessPlanUpdateWithWhereUniqueWithoutLandInput = {
    where: BusinessPlanWhereUniqueInput
    data: XOR<BusinessPlanUpdateWithoutLandInput, BusinessPlanUncheckedUpdateWithoutLandInput>
  }

  export type BusinessPlanUpdateManyWithWhereWithoutLandInput = {
    where: BusinessPlanScalarWhereInput
    data: XOR<BusinessPlanUpdateManyMutationInput, BusinessPlanUncheckedUpdateManyWithoutLandInput>
  }

  export type BusinessPlanScalarWhereInput = {
    AND?: BusinessPlanScalarWhereInput | BusinessPlanScalarWhereInput[]
    OR?: BusinessPlanScalarWhereInput[]
    NOT?: BusinessPlanScalarWhereInput | BusinessPlanScalarWhereInput[]
    business_plan_id?: UuidFilter<"BusinessPlan"> | string
    executive_summary?: StringFilter<"BusinessPlan"> | string
    resources?: StringFilter<"BusinessPlan"> | string
    crops?: StringFilter<"BusinessPlan"> | string
    weather_considerations?: StringFilter<"BusinessPlan"> | string
    soil_maintenance?: StringFilter<"BusinessPlan"> | string
    profit_estimations?: StringFilter<"BusinessPlan"> | string
    other_recommendations?: StringFilter<"BusinessPlan"> | string
    land_id?: UuidFilter<"BusinessPlan"> | string
  }

  export type LandCreateWithoutStatisticsInput = {
    land_id?: string
    latitude: number
    longitude: number
    land_size: number
    land_name?: string | null
    land_image?: string | null
    ph_level: number
    phosphorus: number
    potassium: number
    oxygen_level: number
    nitrogen: number
    user: UserCreateNestedOneWithoutLandsInput
    crops?: CropCreateNestedManyWithoutLandInput
    maintenances?: CropMaintenanceCreateNestedManyWithoutLandInput
    finances?: FinanceCreateNestedManyWithoutLandInput
    weather_data?: WeatherCreateNestedManyWithoutLandInput
    business_plans?: BusinessPlanCreateNestedManyWithoutLandInput
  }

  export type LandUncheckedCreateWithoutStatisticsInput = {
    land_id?: string
    latitude: number
    longitude: number
    land_size: number
    land_name?: string | null
    land_image?: string | null
    ph_level: number
    phosphorus: number
    potassium: number
    oxygen_level: number
    nitrogen: number
    user_id: string
    crops?: CropUncheckedCreateNestedManyWithoutLandInput
    maintenances?: CropMaintenanceUncheckedCreateNestedManyWithoutLandInput
    finances?: FinanceUncheckedCreateNestedManyWithoutLandInput
    weather_data?: WeatherUncheckedCreateNestedManyWithoutLandInput
    business_plans?: BusinessPlanUncheckedCreateNestedManyWithoutLandInput
  }

  export type LandCreateOrConnectWithoutStatisticsInput = {
    where: LandWhereUniqueInput
    create: XOR<LandCreateWithoutStatisticsInput, LandUncheckedCreateWithoutStatisticsInput>
  }

  export type LandUpsertWithoutStatisticsInput = {
    update: XOR<LandUpdateWithoutStatisticsInput, LandUncheckedUpdateWithoutStatisticsInput>
    create: XOR<LandCreateWithoutStatisticsInput, LandUncheckedCreateWithoutStatisticsInput>
    where?: LandWhereInput
  }

  export type LandUpdateToOneWithWhereWithoutStatisticsInput = {
    where?: LandWhereInput
    data: XOR<LandUpdateWithoutStatisticsInput, LandUncheckedUpdateWithoutStatisticsInput>
  }

  export type LandUpdateWithoutStatisticsInput = {
    land_id?: StringFieldUpdateOperationsInput | string
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    land_size?: FloatFieldUpdateOperationsInput | number
    land_name?: NullableStringFieldUpdateOperationsInput | string | null
    land_image?: NullableStringFieldUpdateOperationsInput | string | null
    ph_level?: FloatFieldUpdateOperationsInput | number
    phosphorus?: FloatFieldUpdateOperationsInput | number
    potassium?: FloatFieldUpdateOperationsInput | number
    oxygen_level?: FloatFieldUpdateOperationsInput | number
    nitrogen?: FloatFieldUpdateOperationsInput | number
    user?: UserUpdateOneRequiredWithoutLandsNestedInput
    crops?: CropUpdateManyWithoutLandNestedInput
    maintenances?: CropMaintenanceUpdateManyWithoutLandNestedInput
    finances?: FinanceUpdateManyWithoutLandNestedInput
    weather_data?: WeatherUpdateManyWithoutLandNestedInput
    business_plans?: BusinessPlanUpdateManyWithoutLandNestedInput
  }

  export type LandUncheckedUpdateWithoutStatisticsInput = {
    land_id?: StringFieldUpdateOperationsInput | string
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    land_size?: FloatFieldUpdateOperationsInput | number
    land_name?: NullableStringFieldUpdateOperationsInput | string | null
    land_image?: NullableStringFieldUpdateOperationsInput | string | null
    ph_level?: FloatFieldUpdateOperationsInput | number
    phosphorus?: FloatFieldUpdateOperationsInput | number
    potassium?: FloatFieldUpdateOperationsInput | number
    oxygen_level?: FloatFieldUpdateOperationsInput | number
    nitrogen?: FloatFieldUpdateOperationsInput | number
    user_id?: StringFieldUpdateOperationsInput | string
    crops?: CropUncheckedUpdateManyWithoutLandNestedInput
    maintenances?: CropMaintenanceUncheckedUpdateManyWithoutLandNestedInput
    finances?: FinanceUncheckedUpdateManyWithoutLandNestedInput
    weather_data?: WeatherUncheckedUpdateManyWithoutLandNestedInput
    business_plans?: BusinessPlanUncheckedUpdateManyWithoutLandNestedInput
  }

  export type LandCreateWithoutCropsInput = {
    land_id?: string
    latitude: number
    longitude: number
    land_size: number
    land_name?: string | null
    land_image?: string | null
    ph_level: number
    phosphorus: number
    potassium: number
    oxygen_level: number
    nitrogen: number
    user: UserCreateNestedOneWithoutLandsInput
    statistics?: LandStatisticCreateNestedManyWithoutLandInput
    maintenances?: CropMaintenanceCreateNestedManyWithoutLandInput
    finances?: FinanceCreateNestedManyWithoutLandInput
    weather_data?: WeatherCreateNestedManyWithoutLandInput
    business_plans?: BusinessPlanCreateNestedManyWithoutLandInput
  }

  export type LandUncheckedCreateWithoutCropsInput = {
    land_id?: string
    latitude: number
    longitude: number
    land_size: number
    land_name?: string | null
    land_image?: string | null
    ph_level: number
    phosphorus: number
    potassium: number
    oxygen_level: number
    nitrogen: number
    user_id: string
    statistics?: LandStatisticUncheckedCreateNestedManyWithoutLandInput
    maintenances?: CropMaintenanceUncheckedCreateNestedManyWithoutLandInput
    finances?: FinanceUncheckedCreateNestedManyWithoutLandInput
    weather_data?: WeatherUncheckedCreateNestedManyWithoutLandInput
    business_plans?: BusinessPlanUncheckedCreateNestedManyWithoutLandInput
  }

  export type LandCreateOrConnectWithoutCropsInput = {
    where: LandWhereUniqueInput
    create: XOR<LandCreateWithoutCropsInput, LandUncheckedCreateWithoutCropsInput>
  }

  export type LandUpsertWithoutCropsInput = {
    update: XOR<LandUpdateWithoutCropsInput, LandUncheckedUpdateWithoutCropsInput>
    create: XOR<LandCreateWithoutCropsInput, LandUncheckedCreateWithoutCropsInput>
    where?: LandWhereInput
  }

  export type LandUpdateToOneWithWhereWithoutCropsInput = {
    where?: LandWhereInput
    data: XOR<LandUpdateWithoutCropsInput, LandUncheckedUpdateWithoutCropsInput>
  }

  export type LandUpdateWithoutCropsInput = {
    land_id?: StringFieldUpdateOperationsInput | string
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    land_size?: FloatFieldUpdateOperationsInput | number
    land_name?: NullableStringFieldUpdateOperationsInput | string | null
    land_image?: NullableStringFieldUpdateOperationsInput | string | null
    ph_level?: FloatFieldUpdateOperationsInput | number
    phosphorus?: FloatFieldUpdateOperationsInput | number
    potassium?: FloatFieldUpdateOperationsInput | number
    oxygen_level?: FloatFieldUpdateOperationsInput | number
    nitrogen?: FloatFieldUpdateOperationsInput | number
    user?: UserUpdateOneRequiredWithoutLandsNestedInput
    statistics?: LandStatisticUpdateManyWithoutLandNestedInput
    maintenances?: CropMaintenanceUpdateManyWithoutLandNestedInput
    finances?: FinanceUpdateManyWithoutLandNestedInput
    weather_data?: WeatherUpdateManyWithoutLandNestedInput
    business_plans?: BusinessPlanUpdateManyWithoutLandNestedInput
  }

  export type LandUncheckedUpdateWithoutCropsInput = {
    land_id?: StringFieldUpdateOperationsInput | string
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    land_size?: FloatFieldUpdateOperationsInput | number
    land_name?: NullableStringFieldUpdateOperationsInput | string | null
    land_image?: NullableStringFieldUpdateOperationsInput | string | null
    ph_level?: FloatFieldUpdateOperationsInput | number
    phosphorus?: FloatFieldUpdateOperationsInput | number
    potassium?: FloatFieldUpdateOperationsInput | number
    oxygen_level?: FloatFieldUpdateOperationsInput | number
    nitrogen?: FloatFieldUpdateOperationsInput | number
    user_id?: StringFieldUpdateOperationsInput | string
    statistics?: LandStatisticUncheckedUpdateManyWithoutLandNestedInput
    maintenances?: CropMaintenanceUncheckedUpdateManyWithoutLandNestedInput
    finances?: FinanceUncheckedUpdateManyWithoutLandNestedInput
    weather_data?: WeatherUncheckedUpdateManyWithoutLandNestedInput
    business_plans?: BusinessPlanUncheckedUpdateManyWithoutLandNestedInput
  }

  export type LandCreateWithoutMaintenancesInput = {
    land_id?: string
    latitude: number
    longitude: number
    land_size: number
    land_name?: string | null
    land_image?: string | null
    ph_level: number
    phosphorus: number
    potassium: number
    oxygen_level: number
    nitrogen: number
    user: UserCreateNestedOneWithoutLandsInput
    statistics?: LandStatisticCreateNestedManyWithoutLandInput
    crops?: CropCreateNestedManyWithoutLandInput
    finances?: FinanceCreateNestedManyWithoutLandInput
    weather_data?: WeatherCreateNestedManyWithoutLandInput
    business_plans?: BusinessPlanCreateNestedManyWithoutLandInput
  }

  export type LandUncheckedCreateWithoutMaintenancesInput = {
    land_id?: string
    latitude: number
    longitude: number
    land_size: number
    land_name?: string | null
    land_image?: string | null
    ph_level: number
    phosphorus: number
    potassium: number
    oxygen_level: number
    nitrogen: number
    user_id: string
    statistics?: LandStatisticUncheckedCreateNestedManyWithoutLandInput
    crops?: CropUncheckedCreateNestedManyWithoutLandInput
    finances?: FinanceUncheckedCreateNestedManyWithoutLandInput
    weather_data?: WeatherUncheckedCreateNestedManyWithoutLandInput
    business_plans?: BusinessPlanUncheckedCreateNestedManyWithoutLandInput
  }

  export type LandCreateOrConnectWithoutMaintenancesInput = {
    where: LandWhereUniqueInput
    create: XOR<LandCreateWithoutMaintenancesInput, LandUncheckedCreateWithoutMaintenancesInput>
  }

  export type LandUpsertWithoutMaintenancesInput = {
    update: XOR<LandUpdateWithoutMaintenancesInput, LandUncheckedUpdateWithoutMaintenancesInput>
    create: XOR<LandCreateWithoutMaintenancesInput, LandUncheckedCreateWithoutMaintenancesInput>
    where?: LandWhereInput
  }

  export type LandUpdateToOneWithWhereWithoutMaintenancesInput = {
    where?: LandWhereInput
    data: XOR<LandUpdateWithoutMaintenancesInput, LandUncheckedUpdateWithoutMaintenancesInput>
  }

  export type LandUpdateWithoutMaintenancesInput = {
    land_id?: StringFieldUpdateOperationsInput | string
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    land_size?: FloatFieldUpdateOperationsInput | number
    land_name?: NullableStringFieldUpdateOperationsInput | string | null
    land_image?: NullableStringFieldUpdateOperationsInput | string | null
    ph_level?: FloatFieldUpdateOperationsInput | number
    phosphorus?: FloatFieldUpdateOperationsInput | number
    potassium?: FloatFieldUpdateOperationsInput | number
    oxygen_level?: FloatFieldUpdateOperationsInput | number
    nitrogen?: FloatFieldUpdateOperationsInput | number
    user?: UserUpdateOneRequiredWithoutLandsNestedInput
    statistics?: LandStatisticUpdateManyWithoutLandNestedInput
    crops?: CropUpdateManyWithoutLandNestedInput
    finances?: FinanceUpdateManyWithoutLandNestedInput
    weather_data?: WeatherUpdateManyWithoutLandNestedInput
    business_plans?: BusinessPlanUpdateManyWithoutLandNestedInput
  }

  export type LandUncheckedUpdateWithoutMaintenancesInput = {
    land_id?: StringFieldUpdateOperationsInput | string
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    land_size?: FloatFieldUpdateOperationsInput | number
    land_name?: NullableStringFieldUpdateOperationsInput | string | null
    land_image?: NullableStringFieldUpdateOperationsInput | string | null
    ph_level?: FloatFieldUpdateOperationsInput | number
    phosphorus?: FloatFieldUpdateOperationsInput | number
    potassium?: FloatFieldUpdateOperationsInput | number
    oxygen_level?: FloatFieldUpdateOperationsInput | number
    nitrogen?: FloatFieldUpdateOperationsInput | number
    user_id?: StringFieldUpdateOperationsInput | string
    statistics?: LandStatisticUncheckedUpdateManyWithoutLandNestedInput
    crops?: CropUncheckedUpdateManyWithoutLandNestedInput
    finances?: FinanceUncheckedUpdateManyWithoutLandNestedInput
    weather_data?: WeatherUncheckedUpdateManyWithoutLandNestedInput
    business_plans?: BusinessPlanUncheckedUpdateManyWithoutLandNestedInput
  }

  export type LandCreateWithoutFinancesInput = {
    land_id?: string
    latitude: number
    longitude: number
    land_size: number
    land_name?: string | null
    land_image?: string | null
    ph_level: number
    phosphorus: number
    potassium: number
    oxygen_level: number
    nitrogen: number
    user: UserCreateNestedOneWithoutLandsInput
    statistics?: LandStatisticCreateNestedManyWithoutLandInput
    crops?: CropCreateNestedManyWithoutLandInput
    maintenances?: CropMaintenanceCreateNestedManyWithoutLandInput
    weather_data?: WeatherCreateNestedManyWithoutLandInput
    business_plans?: BusinessPlanCreateNestedManyWithoutLandInput
  }

  export type LandUncheckedCreateWithoutFinancesInput = {
    land_id?: string
    latitude: number
    longitude: number
    land_size: number
    land_name?: string | null
    land_image?: string | null
    ph_level: number
    phosphorus: number
    potassium: number
    oxygen_level: number
    nitrogen: number
    user_id: string
    statistics?: LandStatisticUncheckedCreateNestedManyWithoutLandInput
    crops?: CropUncheckedCreateNestedManyWithoutLandInput
    maintenances?: CropMaintenanceUncheckedCreateNestedManyWithoutLandInput
    weather_data?: WeatherUncheckedCreateNestedManyWithoutLandInput
    business_plans?: BusinessPlanUncheckedCreateNestedManyWithoutLandInput
  }

  export type LandCreateOrConnectWithoutFinancesInput = {
    where: LandWhereUniqueInput
    create: XOR<LandCreateWithoutFinancesInput, LandUncheckedCreateWithoutFinancesInput>
  }

  export type LandUpsertWithoutFinancesInput = {
    update: XOR<LandUpdateWithoutFinancesInput, LandUncheckedUpdateWithoutFinancesInput>
    create: XOR<LandCreateWithoutFinancesInput, LandUncheckedCreateWithoutFinancesInput>
    where?: LandWhereInput
  }

  export type LandUpdateToOneWithWhereWithoutFinancesInput = {
    where?: LandWhereInput
    data: XOR<LandUpdateWithoutFinancesInput, LandUncheckedUpdateWithoutFinancesInput>
  }

  export type LandUpdateWithoutFinancesInput = {
    land_id?: StringFieldUpdateOperationsInput | string
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    land_size?: FloatFieldUpdateOperationsInput | number
    land_name?: NullableStringFieldUpdateOperationsInput | string | null
    land_image?: NullableStringFieldUpdateOperationsInput | string | null
    ph_level?: FloatFieldUpdateOperationsInput | number
    phosphorus?: FloatFieldUpdateOperationsInput | number
    potassium?: FloatFieldUpdateOperationsInput | number
    oxygen_level?: FloatFieldUpdateOperationsInput | number
    nitrogen?: FloatFieldUpdateOperationsInput | number
    user?: UserUpdateOneRequiredWithoutLandsNestedInput
    statistics?: LandStatisticUpdateManyWithoutLandNestedInput
    crops?: CropUpdateManyWithoutLandNestedInput
    maintenances?: CropMaintenanceUpdateManyWithoutLandNestedInput
    weather_data?: WeatherUpdateManyWithoutLandNestedInput
    business_plans?: BusinessPlanUpdateManyWithoutLandNestedInput
  }

  export type LandUncheckedUpdateWithoutFinancesInput = {
    land_id?: StringFieldUpdateOperationsInput | string
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    land_size?: FloatFieldUpdateOperationsInput | number
    land_name?: NullableStringFieldUpdateOperationsInput | string | null
    land_image?: NullableStringFieldUpdateOperationsInput | string | null
    ph_level?: FloatFieldUpdateOperationsInput | number
    phosphorus?: FloatFieldUpdateOperationsInput | number
    potassium?: FloatFieldUpdateOperationsInput | number
    oxygen_level?: FloatFieldUpdateOperationsInput | number
    nitrogen?: FloatFieldUpdateOperationsInput | number
    user_id?: StringFieldUpdateOperationsInput | string
    statistics?: LandStatisticUncheckedUpdateManyWithoutLandNestedInput
    crops?: CropUncheckedUpdateManyWithoutLandNestedInput
    maintenances?: CropMaintenanceUncheckedUpdateManyWithoutLandNestedInput
    weather_data?: WeatherUncheckedUpdateManyWithoutLandNestedInput
    business_plans?: BusinessPlanUncheckedUpdateManyWithoutLandNestedInput
  }

  export type LandCreateWithoutWeather_dataInput = {
    land_id?: string
    latitude: number
    longitude: number
    land_size: number
    land_name?: string | null
    land_image?: string | null
    ph_level: number
    phosphorus: number
    potassium: number
    oxygen_level: number
    nitrogen: number
    user: UserCreateNestedOneWithoutLandsInput
    statistics?: LandStatisticCreateNestedManyWithoutLandInput
    crops?: CropCreateNestedManyWithoutLandInput
    maintenances?: CropMaintenanceCreateNestedManyWithoutLandInput
    finances?: FinanceCreateNestedManyWithoutLandInput
    business_plans?: BusinessPlanCreateNestedManyWithoutLandInput
  }

  export type LandUncheckedCreateWithoutWeather_dataInput = {
    land_id?: string
    latitude: number
    longitude: number
    land_size: number
    land_name?: string | null
    land_image?: string | null
    ph_level: number
    phosphorus: number
    potassium: number
    oxygen_level: number
    nitrogen: number
    user_id: string
    statistics?: LandStatisticUncheckedCreateNestedManyWithoutLandInput
    crops?: CropUncheckedCreateNestedManyWithoutLandInput
    maintenances?: CropMaintenanceUncheckedCreateNestedManyWithoutLandInput
    finances?: FinanceUncheckedCreateNestedManyWithoutLandInput
    business_plans?: BusinessPlanUncheckedCreateNestedManyWithoutLandInput
  }

  export type LandCreateOrConnectWithoutWeather_dataInput = {
    where: LandWhereUniqueInput
    create: XOR<LandCreateWithoutWeather_dataInput, LandUncheckedCreateWithoutWeather_dataInput>
  }

  export type LandUpsertWithoutWeather_dataInput = {
    update: XOR<LandUpdateWithoutWeather_dataInput, LandUncheckedUpdateWithoutWeather_dataInput>
    create: XOR<LandCreateWithoutWeather_dataInput, LandUncheckedCreateWithoutWeather_dataInput>
    where?: LandWhereInput
  }

  export type LandUpdateToOneWithWhereWithoutWeather_dataInput = {
    where?: LandWhereInput
    data: XOR<LandUpdateWithoutWeather_dataInput, LandUncheckedUpdateWithoutWeather_dataInput>
  }

  export type LandUpdateWithoutWeather_dataInput = {
    land_id?: StringFieldUpdateOperationsInput | string
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    land_size?: FloatFieldUpdateOperationsInput | number
    land_name?: NullableStringFieldUpdateOperationsInput | string | null
    land_image?: NullableStringFieldUpdateOperationsInput | string | null
    ph_level?: FloatFieldUpdateOperationsInput | number
    phosphorus?: FloatFieldUpdateOperationsInput | number
    potassium?: FloatFieldUpdateOperationsInput | number
    oxygen_level?: FloatFieldUpdateOperationsInput | number
    nitrogen?: FloatFieldUpdateOperationsInput | number
    user?: UserUpdateOneRequiredWithoutLandsNestedInput
    statistics?: LandStatisticUpdateManyWithoutLandNestedInput
    crops?: CropUpdateManyWithoutLandNestedInput
    maintenances?: CropMaintenanceUpdateManyWithoutLandNestedInput
    finances?: FinanceUpdateManyWithoutLandNestedInput
    business_plans?: BusinessPlanUpdateManyWithoutLandNestedInput
  }

  export type LandUncheckedUpdateWithoutWeather_dataInput = {
    land_id?: StringFieldUpdateOperationsInput | string
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    land_size?: FloatFieldUpdateOperationsInput | number
    land_name?: NullableStringFieldUpdateOperationsInput | string | null
    land_image?: NullableStringFieldUpdateOperationsInput | string | null
    ph_level?: FloatFieldUpdateOperationsInput | number
    phosphorus?: FloatFieldUpdateOperationsInput | number
    potassium?: FloatFieldUpdateOperationsInput | number
    oxygen_level?: FloatFieldUpdateOperationsInput | number
    nitrogen?: FloatFieldUpdateOperationsInput | number
    user_id?: StringFieldUpdateOperationsInput | string
    statistics?: LandStatisticUncheckedUpdateManyWithoutLandNestedInput
    crops?: CropUncheckedUpdateManyWithoutLandNestedInput
    maintenances?: CropMaintenanceUncheckedUpdateManyWithoutLandNestedInput
    finances?: FinanceUncheckedUpdateManyWithoutLandNestedInput
    business_plans?: BusinessPlanUncheckedUpdateManyWithoutLandNestedInput
  }

  export type LandCreateWithoutBusiness_plansInput = {
    land_id?: string
    latitude: number
    longitude: number
    land_size: number
    land_name?: string | null
    land_image?: string | null
    ph_level: number
    phosphorus: number
    potassium: number
    oxygen_level: number
    nitrogen: number
    user: UserCreateNestedOneWithoutLandsInput
    statistics?: LandStatisticCreateNestedManyWithoutLandInput
    crops?: CropCreateNestedManyWithoutLandInput
    maintenances?: CropMaintenanceCreateNestedManyWithoutLandInput
    finances?: FinanceCreateNestedManyWithoutLandInput
    weather_data?: WeatherCreateNestedManyWithoutLandInput
  }

  export type LandUncheckedCreateWithoutBusiness_plansInput = {
    land_id?: string
    latitude: number
    longitude: number
    land_size: number
    land_name?: string | null
    land_image?: string | null
    ph_level: number
    phosphorus: number
    potassium: number
    oxygen_level: number
    nitrogen: number
    user_id: string
    statistics?: LandStatisticUncheckedCreateNestedManyWithoutLandInput
    crops?: CropUncheckedCreateNestedManyWithoutLandInput
    maintenances?: CropMaintenanceUncheckedCreateNestedManyWithoutLandInput
    finances?: FinanceUncheckedCreateNestedManyWithoutLandInput
    weather_data?: WeatherUncheckedCreateNestedManyWithoutLandInput
  }

  export type LandCreateOrConnectWithoutBusiness_plansInput = {
    where: LandWhereUniqueInput
    create: XOR<LandCreateWithoutBusiness_plansInput, LandUncheckedCreateWithoutBusiness_plansInput>
  }

  export type LandUpsertWithoutBusiness_plansInput = {
    update: XOR<LandUpdateWithoutBusiness_plansInput, LandUncheckedUpdateWithoutBusiness_plansInput>
    create: XOR<LandCreateWithoutBusiness_plansInput, LandUncheckedCreateWithoutBusiness_plansInput>
    where?: LandWhereInput
  }

  export type LandUpdateToOneWithWhereWithoutBusiness_plansInput = {
    where?: LandWhereInput
    data: XOR<LandUpdateWithoutBusiness_plansInput, LandUncheckedUpdateWithoutBusiness_plansInput>
  }

  export type LandUpdateWithoutBusiness_plansInput = {
    land_id?: StringFieldUpdateOperationsInput | string
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    land_size?: FloatFieldUpdateOperationsInput | number
    land_name?: NullableStringFieldUpdateOperationsInput | string | null
    land_image?: NullableStringFieldUpdateOperationsInput | string | null
    ph_level?: FloatFieldUpdateOperationsInput | number
    phosphorus?: FloatFieldUpdateOperationsInput | number
    potassium?: FloatFieldUpdateOperationsInput | number
    oxygen_level?: FloatFieldUpdateOperationsInput | number
    nitrogen?: FloatFieldUpdateOperationsInput | number
    user?: UserUpdateOneRequiredWithoutLandsNestedInput
    statistics?: LandStatisticUpdateManyWithoutLandNestedInput
    crops?: CropUpdateManyWithoutLandNestedInput
    maintenances?: CropMaintenanceUpdateManyWithoutLandNestedInput
    finances?: FinanceUpdateManyWithoutLandNestedInput
    weather_data?: WeatherUpdateManyWithoutLandNestedInput
  }

  export type LandUncheckedUpdateWithoutBusiness_plansInput = {
    land_id?: StringFieldUpdateOperationsInput | string
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    land_size?: FloatFieldUpdateOperationsInput | number
    land_name?: NullableStringFieldUpdateOperationsInput | string | null
    land_image?: NullableStringFieldUpdateOperationsInput | string | null
    ph_level?: FloatFieldUpdateOperationsInput | number
    phosphorus?: FloatFieldUpdateOperationsInput | number
    potassium?: FloatFieldUpdateOperationsInput | number
    oxygen_level?: FloatFieldUpdateOperationsInput | number
    nitrogen?: FloatFieldUpdateOperationsInput | number
    user_id?: StringFieldUpdateOperationsInput | string
    statistics?: LandStatisticUncheckedUpdateManyWithoutLandNestedInput
    crops?: CropUncheckedUpdateManyWithoutLandNestedInput
    maintenances?: CropMaintenanceUncheckedUpdateManyWithoutLandNestedInput
    finances?: FinanceUncheckedUpdateManyWithoutLandNestedInput
    weather_data?: WeatherUncheckedUpdateManyWithoutLandNestedInput
  }

  export type LandCreateManyUserInput = {
    land_id?: string
    latitude: number
    longitude: number
    land_size: number
    land_name?: string | null
    land_image?: string | null
    ph_level: number
    phosphorus: number
    potassium: number
    oxygen_level: number
    nitrogen: number
  }

  export type LandUpdateWithoutUserInput = {
    land_id?: StringFieldUpdateOperationsInput | string
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    land_size?: FloatFieldUpdateOperationsInput | number
    land_name?: NullableStringFieldUpdateOperationsInput | string | null
    land_image?: NullableStringFieldUpdateOperationsInput | string | null
    ph_level?: FloatFieldUpdateOperationsInput | number
    phosphorus?: FloatFieldUpdateOperationsInput | number
    potassium?: FloatFieldUpdateOperationsInput | number
    oxygen_level?: FloatFieldUpdateOperationsInput | number
    nitrogen?: FloatFieldUpdateOperationsInput | number
    statistics?: LandStatisticUpdateManyWithoutLandNestedInput
    crops?: CropUpdateManyWithoutLandNestedInput
    maintenances?: CropMaintenanceUpdateManyWithoutLandNestedInput
    finances?: FinanceUpdateManyWithoutLandNestedInput
    weather_data?: WeatherUpdateManyWithoutLandNestedInput
    business_plans?: BusinessPlanUpdateManyWithoutLandNestedInput
  }

  export type LandUncheckedUpdateWithoutUserInput = {
    land_id?: StringFieldUpdateOperationsInput | string
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    land_size?: FloatFieldUpdateOperationsInput | number
    land_name?: NullableStringFieldUpdateOperationsInput | string | null
    land_image?: NullableStringFieldUpdateOperationsInput | string | null
    ph_level?: FloatFieldUpdateOperationsInput | number
    phosphorus?: FloatFieldUpdateOperationsInput | number
    potassium?: FloatFieldUpdateOperationsInput | number
    oxygen_level?: FloatFieldUpdateOperationsInput | number
    nitrogen?: FloatFieldUpdateOperationsInput | number
    statistics?: LandStatisticUncheckedUpdateManyWithoutLandNestedInput
    crops?: CropUncheckedUpdateManyWithoutLandNestedInput
    maintenances?: CropMaintenanceUncheckedUpdateManyWithoutLandNestedInput
    finances?: FinanceUncheckedUpdateManyWithoutLandNestedInput
    weather_data?: WeatherUncheckedUpdateManyWithoutLandNestedInput
    business_plans?: BusinessPlanUncheckedUpdateManyWithoutLandNestedInput
  }

  export type LandUncheckedUpdateManyWithoutUserInput = {
    land_id?: StringFieldUpdateOperationsInput | string
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    land_size?: FloatFieldUpdateOperationsInput | number
    land_name?: NullableStringFieldUpdateOperationsInput | string | null
    land_image?: NullableStringFieldUpdateOperationsInput | string | null
    ph_level?: FloatFieldUpdateOperationsInput | number
    phosphorus?: FloatFieldUpdateOperationsInput | number
    potassium?: FloatFieldUpdateOperationsInput | number
    oxygen_level?: FloatFieldUpdateOperationsInput | number
    nitrogen?: FloatFieldUpdateOperationsInput | number
  }

  export type LandStatisticCreateManyLandInput = {
    land_stat_id?: string
    land_use: number
    human_coverage: number
    water_availability: number
    distribution_optimality: number
    total_profit?: number
  }

  export type CropCreateManyLandInput = {
    crop_id?: string
    crop_name: string
    crop_area: number
    crop_investment: number
    expected_money_return: number
    expected_weight_return: number
  }

  export type CropMaintenanceCreateManyLandInput = {
    maintenance_id?: string
    pesticide_level: number
    water_sufficienty: number
  }

  export type FinanceCreateManyLandInput = {
    financial_id?: string
    investment_amount?: number | null
    expected_revenue?: number | null
  }

  export type WeatherCreateManyLandInput = {
    weather_id?: string
    temperature: number
    humidity: number
    rainfall: number
    sunlight: number
  }

  export type BusinessPlanCreateManyLandInput = {
    business_plan_id?: string
    executive_summary: string
    resources: string
    crops: string
    weather_considerations: string
    soil_maintenance: string
    profit_estimations: string
    other_recommendations: string
  }

  export type LandStatisticUpdateWithoutLandInput = {
    land_stat_id?: StringFieldUpdateOperationsInput | string
    land_use?: FloatFieldUpdateOperationsInput | number
    human_coverage?: FloatFieldUpdateOperationsInput | number
    water_availability?: FloatFieldUpdateOperationsInput | number
    distribution_optimality?: FloatFieldUpdateOperationsInput | number
    total_profit?: FloatFieldUpdateOperationsInput | number
  }

  export type LandStatisticUncheckedUpdateWithoutLandInput = {
    land_stat_id?: StringFieldUpdateOperationsInput | string
    land_use?: FloatFieldUpdateOperationsInput | number
    human_coverage?: FloatFieldUpdateOperationsInput | number
    water_availability?: FloatFieldUpdateOperationsInput | number
    distribution_optimality?: FloatFieldUpdateOperationsInput | number
    total_profit?: FloatFieldUpdateOperationsInput | number
  }

  export type LandStatisticUncheckedUpdateManyWithoutLandInput = {
    land_stat_id?: StringFieldUpdateOperationsInput | string
    land_use?: FloatFieldUpdateOperationsInput | number
    human_coverage?: FloatFieldUpdateOperationsInput | number
    water_availability?: FloatFieldUpdateOperationsInput | number
    distribution_optimality?: FloatFieldUpdateOperationsInput | number
    total_profit?: FloatFieldUpdateOperationsInput | number
  }

  export type CropUpdateWithoutLandInput = {
    crop_id?: StringFieldUpdateOperationsInput | string
    crop_name?: StringFieldUpdateOperationsInput | string
    crop_area?: FloatFieldUpdateOperationsInput | number
    crop_investment?: FloatFieldUpdateOperationsInput | number
    expected_money_return?: FloatFieldUpdateOperationsInput | number
    expected_weight_return?: FloatFieldUpdateOperationsInput | number
  }

  export type CropUncheckedUpdateWithoutLandInput = {
    crop_id?: StringFieldUpdateOperationsInput | string
    crop_name?: StringFieldUpdateOperationsInput | string
    crop_area?: FloatFieldUpdateOperationsInput | number
    crop_investment?: FloatFieldUpdateOperationsInput | number
    expected_money_return?: FloatFieldUpdateOperationsInput | number
    expected_weight_return?: FloatFieldUpdateOperationsInput | number
  }

  export type CropUncheckedUpdateManyWithoutLandInput = {
    crop_id?: StringFieldUpdateOperationsInput | string
    crop_name?: StringFieldUpdateOperationsInput | string
    crop_area?: FloatFieldUpdateOperationsInput | number
    crop_investment?: FloatFieldUpdateOperationsInput | number
    expected_money_return?: FloatFieldUpdateOperationsInput | number
    expected_weight_return?: FloatFieldUpdateOperationsInput | number
  }

  export type CropMaintenanceUpdateWithoutLandInput = {
    maintenance_id?: StringFieldUpdateOperationsInput | string
    pesticide_level?: FloatFieldUpdateOperationsInput | number
    water_sufficienty?: FloatFieldUpdateOperationsInput | number
  }

  export type CropMaintenanceUncheckedUpdateWithoutLandInput = {
    maintenance_id?: StringFieldUpdateOperationsInput | string
    pesticide_level?: FloatFieldUpdateOperationsInput | number
    water_sufficienty?: FloatFieldUpdateOperationsInput | number
  }

  export type CropMaintenanceUncheckedUpdateManyWithoutLandInput = {
    maintenance_id?: StringFieldUpdateOperationsInput | string
    pesticide_level?: FloatFieldUpdateOperationsInput | number
    water_sufficienty?: FloatFieldUpdateOperationsInput | number
  }

  export type FinanceUpdateWithoutLandInput = {
    financial_id?: StringFieldUpdateOperationsInput | string
    investment_amount?: NullableFloatFieldUpdateOperationsInput | number | null
    expected_revenue?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type FinanceUncheckedUpdateWithoutLandInput = {
    financial_id?: StringFieldUpdateOperationsInput | string
    investment_amount?: NullableFloatFieldUpdateOperationsInput | number | null
    expected_revenue?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type FinanceUncheckedUpdateManyWithoutLandInput = {
    financial_id?: StringFieldUpdateOperationsInput | string
    investment_amount?: NullableFloatFieldUpdateOperationsInput | number | null
    expected_revenue?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type WeatherUpdateWithoutLandInput = {
    weather_id?: StringFieldUpdateOperationsInput | string
    temperature?: FloatFieldUpdateOperationsInput | number
    humidity?: FloatFieldUpdateOperationsInput | number
    rainfall?: FloatFieldUpdateOperationsInput | number
    sunlight?: FloatFieldUpdateOperationsInput | number
  }

  export type WeatherUncheckedUpdateWithoutLandInput = {
    weather_id?: StringFieldUpdateOperationsInput | string
    temperature?: FloatFieldUpdateOperationsInput | number
    humidity?: FloatFieldUpdateOperationsInput | number
    rainfall?: FloatFieldUpdateOperationsInput | number
    sunlight?: FloatFieldUpdateOperationsInput | number
  }

  export type WeatherUncheckedUpdateManyWithoutLandInput = {
    weather_id?: StringFieldUpdateOperationsInput | string
    temperature?: FloatFieldUpdateOperationsInput | number
    humidity?: FloatFieldUpdateOperationsInput | number
    rainfall?: FloatFieldUpdateOperationsInput | number
    sunlight?: FloatFieldUpdateOperationsInput | number
  }

  export type BusinessPlanUpdateWithoutLandInput = {
    business_plan_id?: StringFieldUpdateOperationsInput | string
    executive_summary?: StringFieldUpdateOperationsInput | string
    resources?: StringFieldUpdateOperationsInput | string
    crops?: StringFieldUpdateOperationsInput | string
    weather_considerations?: StringFieldUpdateOperationsInput | string
    soil_maintenance?: StringFieldUpdateOperationsInput | string
    profit_estimations?: StringFieldUpdateOperationsInput | string
    other_recommendations?: StringFieldUpdateOperationsInput | string
  }

  export type BusinessPlanUncheckedUpdateWithoutLandInput = {
    business_plan_id?: StringFieldUpdateOperationsInput | string
    executive_summary?: StringFieldUpdateOperationsInput | string
    resources?: StringFieldUpdateOperationsInput | string
    crops?: StringFieldUpdateOperationsInput | string
    weather_considerations?: StringFieldUpdateOperationsInput | string
    soil_maintenance?: StringFieldUpdateOperationsInput | string
    profit_estimations?: StringFieldUpdateOperationsInput | string
    other_recommendations?: StringFieldUpdateOperationsInput | string
  }

  export type BusinessPlanUncheckedUpdateManyWithoutLandInput = {
    business_plan_id?: StringFieldUpdateOperationsInput | string
    executive_summary?: StringFieldUpdateOperationsInput | string
    resources?: StringFieldUpdateOperationsInput | string
    crops?: StringFieldUpdateOperationsInput | string
    weather_considerations?: StringFieldUpdateOperationsInput | string
    soil_maintenance?: StringFieldUpdateOperationsInput | string
    profit_estimations?: StringFieldUpdateOperationsInput | string
    other_recommendations?: StringFieldUpdateOperationsInput | string
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use UserCountOutputTypeDefaultArgs instead
     */
    export type UserCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use LandCountOutputTypeDefaultArgs instead
     */
    export type LandCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = LandCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UserDefaultArgs instead
     */
    export type UserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserDefaultArgs<ExtArgs>
    /**
     * @deprecated Use LandDefaultArgs instead
     */
    export type LandArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = LandDefaultArgs<ExtArgs>
    /**
     * @deprecated Use LandStatisticDefaultArgs instead
     */
    export type LandStatisticArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = LandStatisticDefaultArgs<ExtArgs>
    /**
     * @deprecated Use CropDefaultArgs instead
     */
    export type CropArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = CropDefaultArgs<ExtArgs>
    /**
     * @deprecated Use CropMaintenanceDefaultArgs instead
     */
    export type CropMaintenanceArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = CropMaintenanceDefaultArgs<ExtArgs>
    /**
     * @deprecated Use FinanceDefaultArgs instead
     */
    export type FinanceArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = FinanceDefaultArgs<ExtArgs>
    /**
     * @deprecated Use WeatherDefaultArgs instead
     */
    export type WeatherArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = WeatherDefaultArgs<ExtArgs>
    /**
     * @deprecated Use BusinessPlanDefaultArgs instead
     */
    export type BusinessPlanArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = BusinessPlanDefaultArgs<ExtArgs>

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}