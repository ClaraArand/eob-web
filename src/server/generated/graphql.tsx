export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** A date string, such as 2007-12-03 (YYYY-MM-DD), compliant with ISO 8601 standard for representation of dates using the Gregorian calendar. */
  Date: any;
  /** A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the date-timeformat outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representationof dates and times using the Gregorian calendar. */
  DateTime: any;
  Hex: any;
  /** Raw JSON value */
  Json: any;
  /** The Long scalar type represents non-fractional signed whole numeric values. Long can represent values between -(2^63) and 2^63 - 1. */
  Long: any;
  RGBAHue: any;
  RGBATransparency: any;
  /** Slate-compatible RichText AST */
  RichTextAST: any;
};





export type Aggregate = {
  __typename?: 'Aggregate';
  count: Scalars['Int'];
};

/** Asset system model */
export type Asset = Node & {
  __typename?: 'Asset';
  /** System stage field */
  stage: Stage;
  /** System Locale field */
  locale: Locale;
  /** Get the other localizations for this document */
  localizations: Array<Asset>;
  /** Get the document in other stages */
  documentInStages: Array<Asset>;
  /** The unique identifier */
  id: Scalars['ID'];
  /** The time the document was created */
  createdAt: Scalars['DateTime'];
  /** The time the document was updated */
  updatedAt: Scalars['DateTime'];
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** The file handle */
  handle: Scalars['String'];
  /** The file name */
  fileName: Scalars['String'];
  /** The height of the file */
  height?: Maybe<Scalars['Float']>;
  /** The file width */
  width?: Maybe<Scalars['Float']>;
  /** The file size */
  size?: Maybe<Scalars['Float']>;
  /** The mime type of the file */
  mimeType?: Maybe<Scalars['String']>;
  /** User that created this document */
  createdBy?: Maybe<User>;
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  picturePageSection: Array<PageSection>;
  pictureMember: Array<Member>;
  dataProtectionFormShop: Array<Shop>;
  pictureSupporter: Array<Supporter>;
  logoCityPartner: Array<CityPartner>;
  category?: Maybe<Category>;
  /** List of Asset versions */
  history: Array<Version>;
  /** Get the url for the asset with provided transformations applied. */
  url: Scalars['String'];
};


/** Asset system model */
export type AssetLocalizationsArgs = {
  locales?: Array<Locale>;
  includeCurrent?: Scalars['Boolean'];
};


/** Asset system model */
export type AssetDocumentInStagesArgs = {
  stages?: Array<Stage>;
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
};


/** Asset system model */
export type AssetCreatedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};


/** Asset system model */
export type AssetUpdatedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};


/** Asset system model */
export type AssetPublishedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};


/** Asset system model */
export type AssetCreatedByArgs = {
  locales?: Maybe<Array<Locale>>;
};


/** Asset system model */
export type AssetUpdatedByArgs = {
  locales?: Maybe<Array<Locale>>;
};


/** Asset system model */
export type AssetPublishedByArgs = {
  locales?: Maybe<Array<Locale>>;
};


/** Asset system model */
export type AssetPicturePageSectionArgs = {
  where?: Maybe<PageSectionWhereInput>;
  orderBy?: Maybe<PageSectionOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  locales?: Maybe<Array<Locale>>;
};


/** Asset system model */
export type AssetPictureMemberArgs = {
  where?: Maybe<MemberWhereInput>;
  orderBy?: Maybe<MemberOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  locales?: Maybe<Array<Locale>>;
};


/** Asset system model */
export type AssetDataProtectionFormShopArgs = {
  where?: Maybe<ShopWhereInput>;
  orderBy?: Maybe<ShopOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  locales?: Maybe<Array<Locale>>;
};


/** Asset system model */
export type AssetPictureSupporterArgs = {
  where?: Maybe<SupporterWhereInput>;
  orderBy?: Maybe<SupporterOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  locales?: Maybe<Array<Locale>>;
};


/** Asset system model */
export type AssetLogoCityPartnerArgs = {
  where?: Maybe<CityPartnerWhereInput>;
  orderBy?: Maybe<CityPartnerOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  locales?: Maybe<Array<Locale>>;
};


/** Asset system model */
export type AssetHistoryArgs = {
  limit?: Scalars['Int'];
  skip?: Scalars['Int'];
  stageOverride?: Maybe<Stage>;
};


/** Asset system model */
export type AssetUrlArgs = {
  transformation?: Maybe<AssetTransformationInput>;
};

export type AssetConnectInput = {
  /** Document to connect */
  where: AssetWhereUniqueInput;
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: Maybe<ConnectPositionInput>;
};

/** A connection to a list of items. */
export type AssetConnection = {
  __typename?: 'AssetConnection';
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** A list of edges. */
  edges: Array<AssetEdge>;
  aggregate: Aggregate;
};

export type AssetCreateInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  handle: Scalars['String'];
  fileName: Scalars['String'];
  height?: Maybe<Scalars['Float']>;
  width?: Maybe<Scalars['Float']>;
  size?: Maybe<Scalars['Float']>;
  mimeType?: Maybe<Scalars['String']>;
  picturePageSection?: Maybe<PageSectionCreateManyInlineInput>;
  pictureMember?: Maybe<MemberCreateManyInlineInput>;
  dataProtectionFormShop?: Maybe<ShopCreateManyInlineInput>;
  pictureSupporter?: Maybe<SupporterCreateManyInlineInput>;
  logoCityPartner?: Maybe<CityPartnerCreateManyInlineInput>;
  category?: Maybe<Category>;
  /** Inline mutations for managing document localizations excluding the default locale */
  localizations?: Maybe<AssetCreateLocalizationsInput>;
};

export type AssetCreateLocalizationDataInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  handle: Scalars['String'];
  fileName: Scalars['String'];
  height?: Maybe<Scalars['Float']>;
  width?: Maybe<Scalars['Float']>;
  size?: Maybe<Scalars['Float']>;
  mimeType?: Maybe<Scalars['String']>;
};

export type AssetCreateLocalizationInput = {
  /** Localization input */
  data: AssetCreateLocalizationDataInput;
  locale: Locale;
};

export type AssetCreateLocalizationsInput = {
  /** Create localizations for the newly-created document */
  create?: Maybe<Array<AssetCreateLocalizationInput>>;
};

export type AssetCreateManyInlineInput = {
  /** Create and connect multiple existing Asset documents */
  create?: Maybe<Array<AssetCreateInput>>;
  /** Connect multiple existing Asset documents */
  connect?: Maybe<Array<AssetWhereUniqueInput>>;
};

export type AssetCreateOneInlineInput = {
  /** Create and connect one Asset document */
  create?: Maybe<AssetCreateInput>;
  /** Connect one existing Asset document */
  connect?: Maybe<AssetWhereUniqueInput>;
};

/** An edge in a connection. */
export type AssetEdge = {
  __typename?: 'AssetEdge';
  /** The item at the end of the edge. */
  node: Asset;
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
};

/** Identifies documents */
export type AssetManyWhereInput = {
  /** Contains search across all appropriate fields. */
  _search?: Maybe<Scalars['String']>;
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<AssetWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<AssetWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<AssetWhereInput>>;
  id?: Maybe<Scalars['ID']>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: Maybe<Scalars['DateTime']>;
  createdBy?: Maybe<UserWhereInput>;
  updatedBy?: Maybe<UserWhereInput>;
  publishedBy?: Maybe<UserWhereInput>;
  picturePageSection_every?: Maybe<PageSectionWhereInput>;
  picturePageSection_some?: Maybe<PageSectionWhereInput>;
  picturePageSection_none?: Maybe<PageSectionWhereInput>;
  pictureMember_every?: Maybe<MemberWhereInput>;
  pictureMember_some?: Maybe<MemberWhereInput>;
  pictureMember_none?: Maybe<MemberWhereInput>;
  dataProtectionFormShop_every?: Maybe<ShopWhereInput>;
  dataProtectionFormShop_some?: Maybe<ShopWhereInput>;
  dataProtectionFormShop_none?: Maybe<ShopWhereInput>;
  pictureSupporter_every?: Maybe<SupporterWhereInput>;
  pictureSupporter_some?: Maybe<SupporterWhereInput>;
  pictureSupporter_none?: Maybe<SupporterWhereInput>;
  logoCityPartner_every?: Maybe<CityPartnerWhereInput>;
  logoCityPartner_some?: Maybe<CityPartnerWhereInput>;
  logoCityPartner_none?: Maybe<CityPartnerWhereInput>;
  category?: Maybe<Category>;
  /** All values that are not equal to given value. */
  category_not?: Maybe<Category>;
  /** All values that are contained in given list. */
  category_in?: Maybe<Array<Category>>;
  /** All values that are not contained in given list. */
  category_not_in?: Maybe<Array<Category>>;
};

export enum AssetOrderByInput {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  HandleAsc = 'handle_ASC',
  HandleDesc = 'handle_DESC',
  FileNameAsc = 'fileName_ASC',
  FileNameDesc = 'fileName_DESC',
  HeightAsc = 'height_ASC',
  HeightDesc = 'height_DESC',
  WidthAsc = 'width_ASC',
  WidthDesc = 'width_DESC',
  SizeAsc = 'size_ASC',
  SizeDesc = 'size_DESC',
  MimeTypeAsc = 'mimeType_ASC',
  MimeTypeDesc = 'mimeType_DESC',
  CategoryAsc = 'category_ASC',
  CategoryDesc = 'category_DESC'
}

/** Transformations for Assets */
export type AssetTransformationInput = {
  image?: Maybe<ImageTransformationInput>;
  document?: Maybe<DocumentTransformationInput>;
  /** Pass true if you want to validate the passed transformation parameters */
  validateOptions?: Maybe<Scalars['Boolean']>;
};

export type AssetUpdateInput = {
  handle?: Maybe<Scalars['String']>;
  fileName?: Maybe<Scalars['String']>;
  height?: Maybe<Scalars['Float']>;
  width?: Maybe<Scalars['Float']>;
  size?: Maybe<Scalars['Float']>;
  mimeType?: Maybe<Scalars['String']>;
  picturePageSection?: Maybe<PageSectionUpdateManyInlineInput>;
  pictureMember?: Maybe<MemberUpdateManyInlineInput>;
  dataProtectionFormShop?: Maybe<ShopUpdateManyInlineInput>;
  pictureSupporter?: Maybe<SupporterUpdateManyInlineInput>;
  logoCityPartner?: Maybe<CityPartnerUpdateManyInlineInput>;
  category?: Maybe<Category>;
  /** Manage document localizations */
  localizations?: Maybe<AssetUpdateLocalizationsInput>;
};

export type AssetUpdateLocalizationDataInput = {
  handle?: Maybe<Scalars['String']>;
  fileName?: Maybe<Scalars['String']>;
  height?: Maybe<Scalars['Float']>;
  width?: Maybe<Scalars['Float']>;
  size?: Maybe<Scalars['Float']>;
  mimeType?: Maybe<Scalars['String']>;
};

export type AssetUpdateLocalizationInput = {
  data: AssetUpdateLocalizationDataInput;
  locale: Locale;
};

export type AssetUpdateLocalizationsInput = {
  /** Localizations to create */
  create?: Maybe<Array<AssetCreateLocalizationInput>>;
  /** Localizations to update */
  update?: Maybe<Array<AssetUpdateLocalizationInput>>;
  upsert?: Maybe<Array<AssetUpsertLocalizationInput>>;
  /** Localizations to delete */
  delete?: Maybe<Array<Locale>>;
};

export type AssetUpdateManyInlineInput = {
  /** Create and connect multiple Asset documents */
  create?: Maybe<Array<AssetCreateInput>>;
  /** Connect multiple existing Asset documents */
  connect?: Maybe<Array<AssetConnectInput>>;
  /** Override currently-connected documents with multiple existing Asset documents */
  set?: Maybe<Array<AssetWhereUniqueInput>>;
  /** Update multiple Asset documents */
  update?: Maybe<Array<AssetUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple Asset documents */
  upsert?: Maybe<Array<AssetUpsertWithNestedWhereUniqueInput>>;
  /** Disconnect multiple Asset documents */
  disconnect?: Maybe<Array<AssetWhereUniqueInput>>;
  /** Delete multiple Asset documents */
  delete?: Maybe<Array<AssetWhereUniqueInput>>;
};

export type AssetUpdateManyInput = {
  fileName?: Maybe<Scalars['String']>;
  height?: Maybe<Scalars['Float']>;
  width?: Maybe<Scalars['Float']>;
  size?: Maybe<Scalars['Float']>;
  mimeType?: Maybe<Scalars['String']>;
  category?: Maybe<Category>;
  /** Optional updates to localizations */
  localizations?: Maybe<AssetUpdateManyLocalizationsInput>;
};

export type AssetUpdateManyLocalizationDataInput = {
  fileName?: Maybe<Scalars['String']>;
  height?: Maybe<Scalars['Float']>;
  width?: Maybe<Scalars['Float']>;
  size?: Maybe<Scalars['Float']>;
  mimeType?: Maybe<Scalars['String']>;
};

export type AssetUpdateManyLocalizationInput = {
  data: AssetUpdateManyLocalizationDataInput;
  locale: Locale;
};

export type AssetUpdateManyLocalizationsInput = {
  /** Localizations to update */
  update?: Maybe<Array<AssetUpdateManyLocalizationInput>>;
};

export type AssetUpdateManyWithNestedWhereInput = {
  /** Document search */
  where: AssetWhereInput;
  /** Update many input */
  data: AssetUpdateManyInput;
};

export type AssetUpdateOneInlineInput = {
  /** Create and connect one Asset document */
  create?: Maybe<AssetCreateInput>;
  /** Update single Asset document */
  update?: Maybe<AssetUpdateWithNestedWhereUniqueInput>;
  /** Upsert single Asset document */
  upsert?: Maybe<AssetUpsertWithNestedWhereUniqueInput>;
  /** Connect existing Asset document */
  connect?: Maybe<AssetWhereUniqueInput>;
  /** Disconnect currently connected Asset document */
  disconnect?: Maybe<Scalars['Boolean']>;
  /** Delete currently connected Asset document */
  delete?: Maybe<Scalars['Boolean']>;
};

export type AssetUpdateWithNestedWhereUniqueInput = {
  /** Unique document search */
  where: AssetWhereUniqueInput;
  /** Document to update */
  data: AssetUpdateInput;
};

export type AssetUpsertInput = {
  /** Create document if it didn't exist */
  create: AssetCreateInput;
  /** Update document if it exists */
  update: AssetUpdateInput;
};

export type AssetUpsertLocalizationInput = {
  update: AssetUpdateLocalizationDataInput;
  create: AssetCreateLocalizationDataInput;
  locale: Locale;
};

export type AssetUpsertWithNestedWhereUniqueInput = {
  /** Unique document search */
  where: AssetWhereUniqueInput;
  /** Upsert data */
  data: AssetUpsertInput;
};

/** Identifies documents */
export type AssetWhereInput = {
  /** Contains search across all appropriate fields. */
  _search?: Maybe<Scalars['String']>;
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<AssetWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<AssetWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<AssetWhereInput>>;
  id?: Maybe<Scalars['ID']>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: Maybe<Scalars['DateTime']>;
  handle?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  handle_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  handle_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  handle_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  handle_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  handle_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  handle_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  handle_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  handle_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  handle_not_ends_with?: Maybe<Scalars['String']>;
  fileName?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  fileName_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  fileName_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  fileName_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  fileName_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  fileName_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  fileName_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  fileName_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  fileName_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  fileName_not_ends_with?: Maybe<Scalars['String']>;
  height?: Maybe<Scalars['Float']>;
  /** All values that are not equal to given value. */
  height_not?: Maybe<Scalars['Float']>;
  /** All values that are contained in given list. */
  height_in?: Maybe<Array<Scalars['Float']>>;
  /** All values that are not contained in given list. */
  height_not_in?: Maybe<Array<Scalars['Float']>>;
  /** All values less than the given value. */
  height_lt?: Maybe<Scalars['Float']>;
  /** All values less than or equal the given value. */
  height_lte?: Maybe<Scalars['Float']>;
  /** All values greater than the given value. */
  height_gt?: Maybe<Scalars['Float']>;
  /** All values greater than or equal the given value. */
  height_gte?: Maybe<Scalars['Float']>;
  width?: Maybe<Scalars['Float']>;
  /** All values that are not equal to given value. */
  width_not?: Maybe<Scalars['Float']>;
  /** All values that are contained in given list. */
  width_in?: Maybe<Array<Scalars['Float']>>;
  /** All values that are not contained in given list. */
  width_not_in?: Maybe<Array<Scalars['Float']>>;
  /** All values less than the given value. */
  width_lt?: Maybe<Scalars['Float']>;
  /** All values less than or equal the given value. */
  width_lte?: Maybe<Scalars['Float']>;
  /** All values greater than the given value. */
  width_gt?: Maybe<Scalars['Float']>;
  /** All values greater than or equal the given value. */
  width_gte?: Maybe<Scalars['Float']>;
  size?: Maybe<Scalars['Float']>;
  /** All values that are not equal to given value. */
  size_not?: Maybe<Scalars['Float']>;
  /** All values that are contained in given list. */
  size_in?: Maybe<Array<Scalars['Float']>>;
  /** All values that are not contained in given list. */
  size_not_in?: Maybe<Array<Scalars['Float']>>;
  /** All values less than the given value. */
  size_lt?: Maybe<Scalars['Float']>;
  /** All values less than or equal the given value. */
  size_lte?: Maybe<Scalars['Float']>;
  /** All values greater than the given value. */
  size_gt?: Maybe<Scalars['Float']>;
  /** All values greater than or equal the given value. */
  size_gte?: Maybe<Scalars['Float']>;
  mimeType?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  mimeType_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  mimeType_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  mimeType_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  mimeType_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  mimeType_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  mimeType_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  mimeType_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  mimeType_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  mimeType_not_ends_with?: Maybe<Scalars['String']>;
  createdBy?: Maybe<UserWhereInput>;
  updatedBy?: Maybe<UserWhereInput>;
  publishedBy?: Maybe<UserWhereInput>;
  picturePageSection_every?: Maybe<PageSectionWhereInput>;
  picturePageSection_some?: Maybe<PageSectionWhereInput>;
  picturePageSection_none?: Maybe<PageSectionWhereInput>;
  pictureMember_every?: Maybe<MemberWhereInput>;
  pictureMember_some?: Maybe<MemberWhereInput>;
  pictureMember_none?: Maybe<MemberWhereInput>;
  dataProtectionFormShop_every?: Maybe<ShopWhereInput>;
  dataProtectionFormShop_some?: Maybe<ShopWhereInput>;
  dataProtectionFormShop_none?: Maybe<ShopWhereInput>;
  pictureSupporter_every?: Maybe<SupporterWhereInput>;
  pictureSupporter_some?: Maybe<SupporterWhereInput>;
  pictureSupporter_none?: Maybe<SupporterWhereInput>;
  logoCityPartner_every?: Maybe<CityPartnerWhereInput>;
  logoCityPartner_some?: Maybe<CityPartnerWhereInput>;
  logoCityPartner_none?: Maybe<CityPartnerWhereInput>;
  category?: Maybe<Category>;
  /** All values that are not equal to given value. */
  category_not?: Maybe<Category>;
  /** All values that are contained in given list. */
  category_in?: Maybe<Array<Category>>;
  /** All values that are not contained in given list. */
  category_not_in?: Maybe<Array<Category>>;
};

/** References Asset record uniquely */
export type AssetWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>;
};

export type BatchPayload = {
  __typename?: 'BatchPayload';
  /** The number of nodes that have been affected by the Batch operation. */
  count: Scalars['Long'];
};

export type Blog = Node & {
  __typename?: 'Blog';
  /** System stage field */
  stage: Stage;
  /** System Locale field */
  locale: Locale;
  /** Get the other localizations for this document */
  localizations: Array<Blog>;
  /** Get the document in other stages */
  documentInStages: Array<Blog>;
  /** The unique identifier */
  id: Scalars['ID'];
  /** The time the document was created */
  createdAt: Scalars['DateTime'];
  /** The time the document was updated */
  updatedAt: Scalars['DateTime'];
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']>;
  title: Scalars['String'];
  date?: Maybe<Scalars['Date']>;
  content?: Maybe<RichText>;
  slug?: Maybe<Scalars['String']>;
  abstract?: Maybe<Scalars['String']>;
  /** User that created this document */
  createdBy?: Maybe<User>;
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  /** List of Blog versions */
  history: Array<Version>;
};


export type BlogLocalizationsArgs = {
  locales?: Array<Locale>;
  includeCurrent?: Scalars['Boolean'];
};


export type BlogDocumentInStagesArgs = {
  stages?: Array<Stage>;
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
};


export type BlogCreatedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};


export type BlogUpdatedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};


export type BlogPublishedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};


export type BlogCreatedByArgs = {
  locales?: Maybe<Array<Locale>>;
};


export type BlogUpdatedByArgs = {
  locales?: Maybe<Array<Locale>>;
};


export type BlogPublishedByArgs = {
  locales?: Maybe<Array<Locale>>;
};


export type BlogHistoryArgs = {
  limit?: Scalars['Int'];
  skip?: Scalars['Int'];
  stageOverride?: Maybe<Stage>;
};

export type BlogConnectInput = {
  /** Document to connect */
  where: BlogWhereUniqueInput;
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: Maybe<ConnectPositionInput>;
};

/** A connection to a list of items. */
export type BlogConnection = {
  __typename?: 'BlogConnection';
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** A list of edges. */
  edges: Array<BlogEdge>;
  aggregate: Aggregate;
};

export type BlogCreateInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  /** title input for default locale (de) */
  title: Scalars['String'];
  date?: Maybe<Scalars['Date']>;
  /** content input for default locale (de) */
  content?: Maybe<Scalars['RichTextAST']>;
  slug?: Maybe<Scalars['String']>;
  /** abstract input for default locale (de) */
  abstract?: Maybe<Scalars['String']>;
  /** Inline mutations for managing document localizations excluding the default locale */
  localizations?: Maybe<BlogCreateLocalizationsInput>;
};

export type BlogCreateLocalizationDataInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  title: Scalars['String'];
  content?: Maybe<Scalars['RichTextAST']>;
  abstract?: Maybe<Scalars['String']>;
};

export type BlogCreateLocalizationInput = {
  /** Localization input */
  data: BlogCreateLocalizationDataInput;
  locale: Locale;
};

export type BlogCreateLocalizationsInput = {
  /** Create localizations for the newly-created document */
  create?: Maybe<Array<BlogCreateLocalizationInput>>;
};

export type BlogCreateManyInlineInput = {
  /** Create and connect multiple existing Blog documents */
  create?: Maybe<Array<BlogCreateInput>>;
  /** Connect multiple existing Blog documents */
  connect?: Maybe<Array<BlogWhereUniqueInput>>;
};

export type BlogCreateOneInlineInput = {
  /** Create and connect one Blog document */
  create?: Maybe<BlogCreateInput>;
  /** Connect one existing Blog document */
  connect?: Maybe<BlogWhereUniqueInput>;
};

/** An edge in a connection. */
export type BlogEdge = {
  __typename?: 'BlogEdge';
  /** The item at the end of the edge. */
  node: Blog;
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
};

/** Identifies documents */
export type BlogManyWhereInput = {
  /** Contains search across all appropriate fields. */
  _search?: Maybe<Scalars['String']>;
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<BlogWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<BlogWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<BlogWhereInput>>;
  id?: Maybe<Scalars['ID']>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: Maybe<Scalars['DateTime']>;
  date?: Maybe<Scalars['Date']>;
  /** All values that are not equal to given value. */
  date_not?: Maybe<Scalars['Date']>;
  /** All values that are contained in given list. */
  date_in?: Maybe<Array<Scalars['Date']>>;
  /** All values that are not contained in given list. */
  date_not_in?: Maybe<Array<Scalars['Date']>>;
  /** All values less than the given value. */
  date_lt?: Maybe<Scalars['Date']>;
  /** All values less than or equal the given value. */
  date_lte?: Maybe<Scalars['Date']>;
  /** All values greater than the given value. */
  date_gt?: Maybe<Scalars['Date']>;
  /** All values greater than or equal the given value. */
  date_gte?: Maybe<Scalars['Date']>;
  slug?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  slug_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  slug_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  slug_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  slug_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  slug_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  slug_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  slug_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  slug_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  slug_not_ends_with?: Maybe<Scalars['String']>;
  createdBy?: Maybe<UserWhereInput>;
  updatedBy?: Maybe<UserWhereInput>;
  publishedBy?: Maybe<UserWhereInput>;
};

export enum BlogOrderByInput {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  DateAsc = 'date_ASC',
  DateDesc = 'date_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  AbstractAsc = 'abstract_ASC',
  AbstractDesc = 'abstract_DESC'
}

export type BlogUpdateInput = {
  /** title input for default locale (de) */
  title?: Maybe<Scalars['String']>;
  date?: Maybe<Scalars['Date']>;
  /** content input for default locale (de) */
  content?: Maybe<Scalars['RichTextAST']>;
  slug?: Maybe<Scalars['String']>;
  /** abstract input for default locale (de) */
  abstract?: Maybe<Scalars['String']>;
  /** Manage document localizations */
  localizations?: Maybe<BlogUpdateLocalizationsInput>;
};

export type BlogUpdateLocalizationDataInput = {
  title?: Maybe<Scalars['String']>;
  content?: Maybe<Scalars['RichTextAST']>;
  abstract?: Maybe<Scalars['String']>;
};

export type BlogUpdateLocalizationInput = {
  data: BlogUpdateLocalizationDataInput;
  locale: Locale;
};

export type BlogUpdateLocalizationsInput = {
  /** Localizations to create */
  create?: Maybe<Array<BlogCreateLocalizationInput>>;
  /** Localizations to update */
  update?: Maybe<Array<BlogUpdateLocalizationInput>>;
  upsert?: Maybe<Array<BlogUpsertLocalizationInput>>;
  /** Localizations to delete */
  delete?: Maybe<Array<Locale>>;
};

export type BlogUpdateManyInlineInput = {
  /** Create and connect multiple Blog documents */
  create?: Maybe<Array<BlogCreateInput>>;
  /** Connect multiple existing Blog documents */
  connect?: Maybe<Array<BlogConnectInput>>;
  /** Override currently-connected documents with multiple existing Blog documents */
  set?: Maybe<Array<BlogWhereUniqueInput>>;
  /** Update multiple Blog documents */
  update?: Maybe<Array<BlogUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple Blog documents */
  upsert?: Maybe<Array<BlogUpsertWithNestedWhereUniqueInput>>;
  /** Disconnect multiple Blog documents */
  disconnect?: Maybe<Array<BlogWhereUniqueInput>>;
  /** Delete multiple Blog documents */
  delete?: Maybe<Array<BlogWhereUniqueInput>>;
};

export type BlogUpdateManyInput = {
  /** title input for default locale (de) */
  title?: Maybe<Scalars['String']>;
  date?: Maybe<Scalars['Date']>;
  /** content input for default locale (de) */
  content?: Maybe<Scalars['RichTextAST']>;
  /** abstract input for default locale (de) */
  abstract?: Maybe<Scalars['String']>;
  /** Optional updates to localizations */
  localizations?: Maybe<BlogUpdateManyLocalizationsInput>;
};

export type BlogUpdateManyLocalizationDataInput = {
  title?: Maybe<Scalars['String']>;
  content?: Maybe<Scalars['RichTextAST']>;
  abstract?: Maybe<Scalars['String']>;
};

export type BlogUpdateManyLocalizationInput = {
  data: BlogUpdateManyLocalizationDataInput;
  locale: Locale;
};

export type BlogUpdateManyLocalizationsInput = {
  /** Localizations to update */
  update?: Maybe<Array<BlogUpdateManyLocalizationInput>>;
};

export type BlogUpdateManyWithNestedWhereInput = {
  /** Document search */
  where: BlogWhereInput;
  /** Update many input */
  data: BlogUpdateManyInput;
};

export type BlogUpdateOneInlineInput = {
  /** Create and connect one Blog document */
  create?: Maybe<BlogCreateInput>;
  /** Update single Blog document */
  update?: Maybe<BlogUpdateWithNestedWhereUniqueInput>;
  /** Upsert single Blog document */
  upsert?: Maybe<BlogUpsertWithNestedWhereUniqueInput>;
  /** Connect existing Blog document */
  connect?: Maybe<BlogWhereUniqueInput>;
  /** Disconnect currently connected Blog document */
  disconnect?: Maybe<Scalars['Boolean']>;
  /** Delete currently connected Blog document */
  delete?: Maybe<Scalars['Boolean']>;
};

export type BlogUpdateWithNestedWhereUniqueInput = {
  /** Unique document search */
  where: BlogWhereUniqueInput;
  /** Document to update */
  data: BlogUpdateInput;
};

export type BlogUpsertInput = {
  /** Create document if it didn't exist */
  create: BlogCreateInput;
  /** Update document if it exists */
  update: BlogUpdateInput;
};

export type BlogUpsertLocalizationInput = {
  update: BlogUpdateLocalizationDataInput;
  create: BlogCreateLocalizationDataInput;
  locale: Locale;
};

export type BlogUpsertWithNestedWhereUniqueInput = {
  /** Unique document search */
  where: BlogWhereUniqueInput;
  /** Upsert data */
  data: BlogUpsertInput;
};

/** Identifies documents */
export type BlogWhereInput = {
  /** Contains search across all appropriate fields. */
  _search?: Maybe<Scalars['String']>;
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<BlogWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<BlogWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<BlogWhereInput>>;
  id?: Maybe<Scalars['ID']>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: Maybe<Scalars['DateTime']>;
  title?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  title_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  title_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  title_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  title_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  title_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  title_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  title_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  title_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  title_not_ends_with?: Maybe<Scalars['String']>;
  date?: Maybe<Scalars['Date']>;
  /** All values that are not equal to given value. */
  date_not?: Maybe<Scalars['Date']>;
  /** All values that are contained in given list. */
  date_in?: Maybe<Array<Scalars['Date']>>;
  /** All values that are not contained in given list. */
  date_not_in?: Maybe<Array<Scalars['Date']>>;
  /** All values less than the given value. */
  date_lt?: Maybe<Scalars['Date']>;
  /** All values less than or equal the given value. */
  date_lte?: Maybe<Scalars['Date']>;
  /** All values greater than the given value. */
  date_gt?: Maybe<Scalars['Date']>;
  /** All values greater than or equal the given value. */
  date_gte?: Maybe<Scalars['Date']>;
  slug?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  slug_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  slug_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  slug_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  slug_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  slug_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  slug_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  slug_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  slug_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  slug_not_ends_with?: Maybe<Scalars['String']>;
  abstract?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  abstract_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  abstract_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  abstract_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  abstract_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  abstract_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  abstract_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  abstract_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  abstract_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  abstract_not_ends_with?: Maybe<Scalars['String']>;
  createdBy?: Maybe<UserWhereInput>;
  updatedBy?: Maybe<UserWhereInput>;
  publishedBy?: Maybe<UserWhereInput>;
};

/** References Blog record uniquely */
export type BlogWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>;
  slug?: Maybe<Scalars['String']>;
};

export enum Category {
  Form = 'form',
  Members = 'members',
  Home = 'home',
  Docs = 'docs',
  Uberuns = 'uberuns',
  Header = 'header',
  Map = 'map',
  Cookies = 'cookies',
  Footer = 'footer',
  Download = 'download'
}

export type CityPartner = Node & {
  __typename?: 'CityPartner';
  /** System stage field */
  stage: Stage;
  /** System Locale field */
  locale: Locale;
  /** Get the other localizations for this document */
  localizations: Array<CityPartner>;
  /** Get the document in other stages */
  documentInStages: Array<CityPartner>;
  /** The unique identifier */
  id: Scalars['ID'];
  /** The time the document was created */
  createdAt: Scalars['DateTime'];
  /** The time the document was updated */
  updatedAt: Scalars['DateTime'];
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']>;
  name?: Maybe<Scalars['String']>;
  link?: Maybe<Scalars['String']>;
  /** User that created this document */
  createdBy?: Maybe<User>;
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  logo?: Maybe<Asset>;
  /** List of CityPartner versions */
  history: Array<Version>;
};


export type CityPartnerLocalizationsArgs = {
  locales?: Array<Locale>;
  includeCurrent?: Scalars['Boolean'];
};


export type CityPartnerDocumentInStagesArgs = {
  stages?: Array<Stage>;
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
};


export type CityPartnerCreatedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};


export type CityPartnerUpdatedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};


export type CityPartnerPublishedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};


export type CityPartnerCreatedByArgs = {
  locales?: Maybe<Array<Locale>>;
};


export type CityPartnerUpdatedByArgs = {
  locales?: Maybe<Array<Locale>>;
};


export type CityPartnerPublishedByArgs = {
  locales?: Maybe<Array<Locale>>;
};


export type CityPartnerLogoArgs = {
  locales?: Maybe<Array<Locale>>;
};


export type CityPartnerHistoryArgs = {
  limit?: Scalars['Int'];
  skip?: Scalars['Int'];
  stageOverride?: Maybe<Stage>;
};

export type CityPartnerConnectInput = {
  /** Document to connect */
  where: CityPartnerWhereUniqueInput;
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: Maybe<ConnectPositionInput>;
};

/** A connection to a list of items. */
export type CityPartnerConnection = {
  __typename?: 'CityPartnerConnection';
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** A list of edges. */
  edges: Array<CityPartnerEdge>;
  aggregate: Aggregate;
};

export type CityPartnerCreateInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  /** name input for default locale (de) */
  name?: Maybe<Scalars['String']>;
  link?: Maybe<Scalars['String']>;
  logo?: Maybe<AssetCreateOneInlineInput>;
  /** Inline mutations for managing document localizations excluding the default locale */
  localizations?: Maybe<CityPartnerCreateLocalizationsInput>;
};

export type CityPartnerCreateLocalizationDataInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  name?: Maybe<Scalars['String']>;
};

export type CityPartnerCreateLocalizationInput = {
  /** Localization input */
  data: CityPartnerCreateLocalizationDataInput;
  locale: Locale;
};

export type CityPartnerCreateLocalizationsInput = {
  /** Create localizations for the newly-created document */
  create?: Maybe<Array<CityPartnerCreateLocalizationInput>>;
};

export type CityPartnerCreateManyInlineInput = {
  /** Create and connect multiple existing CityPartner documents */
  create?: Maybe<Array<CityPartnerCreateInput>>;
  /** Connect multiple existing CityPartner documents */
  connect?: Maybe<Array<CityPartnerWhereUniqueInput>>;
};

export type CityPartnerCreateOneInlineInput = {
  /** Create and connect one CityPartner document */
  create?: Maybe<CityPartnerCreateInput>;
  /** Connect one existing CityPartner document */
  connect?: Maybe<CityPartnerWhereUniqueInput>;
};

/** An edge in a connection. */
export type CityPartnerEdge = {
  __typename?: 'CityPartnerEdge';
  /** The item at the end of the edge. */
  node: CityPartner;
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
};

/** Identifies documents */
export type CityPartnerManyWhereInput = {
  /** Contains search across all appropriate fields. */
  _search?: Maybe<Scalars['String']>;
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<CityPartnerWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<CityPartnerWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<CityPartnerWhereInput>>;
  id?: Maybe<Scalars['ID']>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: Maybe<Scalars['DateTime']>;
  link?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  link_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  link_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  link_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  link_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  link_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  link_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  link_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  link_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  link_not_ends_with?: Maybe<Scalars['String']>;
  createdBy?: Maybe<UserWhereInput>;
  updatedBy?: Maybe<UserWhereInput>;
  publishedBy?: Maybe<UserWhereInput>;
  logo?: Maybe<AssetWhereInput>;
};

export enum CityPartnerOrderByInput {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  LinkAsc = 'link_ASC',
  LinkDesc = 'link_DESC'
}

export type CityPartnerUpdateInput = {
  /** name input for default locale (de) */
  name?: Maybe<Scalars['String']>;
  link?: Maybe<Scalars['String']>;
  logo?: Maybe<AssetUpdateOneInlineInput>;
  /** Manage document localizations */
  localizations?: Maybe<CityPartnerUpdateLocalizationsInput>;
};

export type CityPartnerUpdateLocalizationDataInput = {
  name?: Maybe<Scalars['String']>;
};

export type CityPartnerUpdateLocalizationInput = {
  data: CityPartnerUpdateLocalizationDataInput;
  locale: Locale;
};

export type CityPartnerUpdateLocalizationsInput = {
  /** Localizations to create */
  create?: Maybe<Array<CityPartnerCreateLocalizationInput>>;
  /** Localizations to update */
  update?: Maybe<Array<CityPartnerUpdateLocalizationInput>>;
  upsert?: Maybe<Array<CityPartnerUpsertLocalizationInput>>;
  /** Localizations to delete */
  delete?: Maybe<Array<Locale>>;
};

export type CityPartnerUpdateManyInlineInput = {
  /** Create and connect multiple CityPartner documents */
  create?: Maybe<Array<CityPartnerCreateInput>>;
  /** Connect multiple existing CityPartner documents */
  connect?: Maybe<Array<CityPartnerConnectInput>>;
  /** Override currently-connected documents with multiple existing CityPartner documents */
  set?: Maybe<Array<CityPartnerWhereUniqueInput>>;
  /** Update multiple CityPartner documents */
  update?: Maybe<Array<CityPartnerUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple CityPartner documents */
  upsert?: Maybe<Array<CityPartnerUpsertWithNestedWhereUniqueInput>>;
  /** Disconnect multiple CityPartner documents */
  disconnect?: Maybe<Array<CityPartnerWhereUniqueInput>>;
  /** Delete multiple CityPartner documents */
  delete?: Maybe<Array<CityPartnerWhereUniqueInput>>;
};

export type CityPartnerUpdateManyInput = {
  /** name input for default locale (de) */
  name?: Maybe<Scalars['String']>;
  link?: Maybe<Scalars['String']>;
  /** Optional updates to localizations */
  localizations?: Maybe<CityPartnerUpdateManyLocalizationsInput>;
};

export type CityPartnerUpdateManyLocalizationDataInput = {
  name?: Maybe<Scalars['String']>;
};

export type CityPartnerUpdateManyLocalizationInput = {
  data: CityPartnerUpdateManyLocalizationDataInput;
  locale: Locale;
};

export type CityPartnerUpdateManyLocalizationsInput = {
  /** Localizations to update */
  update?: Maybe<Array<CityPartnerUpdateManyLocalizationInput>>;
};

export type CityPartnerUpdateManyWithNestedWhereInput = {
  /** Document search */
  where: CityPartnerWhereInput;
  /** Update many input */
  data: CityPartnerUpdateManyInput;
};

export type CityPartnerUpdateOneInlineInput = {
  /** Create and connect one CityPartner document */
  create?: Maybe<CityPartnerCreateInput>;
  /** Update single CityPartner document */
  update?: Maybe<CityPartnerUpdateWithNestedWhereUniqueInput>;
  /** Upsert single CityPartner document */
  upsert?: Maybe<CityPartnerUpsertWithNestedWhereUniqueInput>;
  /** Connect existing CityPartner document */
  connect?: Maybe<CityPartnerWhereUniqueInput>;
  /** Disconnect currently connected CityPartner document */
  disconnect?: Maybe<Scalars['Boolean']>;
  /** Delete currently connected CityPartner document */
  delete?: Maybe<Scalars['Boolean']>;
};

export type CityPartnerUpdateWithNestedWhereUniqueInput = {
  /** Unique document search */
  where: CityPartnerWhereUniqueInput;
  /** Document to update */
  data: CityPartnerUpdateInput;
};

export type CityPartnerUpsertInput = {
  /** Create document if it didn't exist */
  create: CityPartnerCreateInput;
  /** Update document if it exists */
  update: CityPartnerUpdateInput;
};

export type CityPartnerUpsertLocalizationInput = {
  update: CityPartnerUpdateLocalizationDataInput;
  create: CityPartnerCreateLocalizationDataInput;
  locale: Locale;
};

export type CityPartnerUpsertWithNestedWhereUniqueInput = {
  /** Unique document search */
  where: CityPartnerWhereUniqueInput;
  /** Upsert data */
  data: CityPartnerUpsertInput;
};

/** Identifies documents */
export type CityPartnerWhereInput = {
  /** Contains search across all appropriate fields. */
  _search?: Maybe<Scalars['String']>;
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<CityPartnerWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<CityPartnerWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<CityPartnerWhereInput>>;
  id?: Maybe<Scalars['ID']>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: Maybe<Scalars['DateTime']>;
  name?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  name_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  name_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  name_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  name_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  name_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  name_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  name_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  name_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  name_not_ends_with?: Maybe<Scalars['String']>;
  link?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  link_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  link_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  link_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  link_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  link_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  link_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  link_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  link_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  link_not_ends_with?: Maybe<Scalars['String']>;
  createdBy?: Maybe<UserWhereInput>;
  updatedBy?: Maybe<UserWhereInput>;
  publishedBy?: Maybe<UserWhereInput>;
  logo?: Maybe<AssetWhereInput>;
};

/** References CityPartner record uniquely */
export type CityPartnerWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>;
};

/** Representing a color value comprising of HEX, RGBA and css color values */
export type Color = {
  __typename?: 'Color';
  hex: Scalars['Hex'];
  rgba: Rgba;
  css: Scalars['String'];
};

/** Accepts either HEX or RGBA color value. At least one of hex or rgba value should be passed. If both are passed RGBA is used. */
export type ColorInput = {
  hex?: Maybe<Scalars['Hex']>;
  rgba?: Maybe<RgbaInput>;
};

export type ConnectPositionInput = {
  /** Connect document after specified document */
  after?: Maybe<Scalars['ID']>;
  /** Connect document before specified document */
  before?: Maybe<Scalars['ID']>;
  /** Connect document at first position */
  start?: Maybe<Scalars['Boolean']>;
  /** Connect document at last position */
  end?: Maybe<Scalars['Boolean']>;
};



export enum DocumentFileTypes {
  Jpg = 'jpg',
  Odp = 'odp',
  Ods = 'ods',
  Odt = 'odt',
  Png = 'png',
  Svg = 'svg',
  Txt = 'txt',
  Webp = 'webp',
  Docx = 'docx',
  Pdf = 'pdf',
  Html = 'html',
  Doc = 'doc',
  Xlsx = 'xlsx',
  Xls = 'xls',
  Pptx = 'pptx',
  Ppt = 'ppt'
}

export type DocumentOutputInput = {
  /**
   * Transforms a document into a desired file type.
   * See this matrix for format support:
   *
   * PDF:	jpg, odp, ods, odt, png, svg, txt, and webp
   * DOC:	docx, html, jpg, odt, pdf, png, svg, txt, and webp
   * DOCX:	doc, html, jpg, odt, pdf, png, svg, txt, and webp
   * ODT:	doc, docx, html, jpg, pdf, png, svg, txt, and webp
   * XLS:	jpg, pdf, ods, png, svg, xlsx, and webp
   * XLSX:	jpg, pdf, ods, png, svg, xls, and webp
   * ODS:	jpg, pdf, png, xls, svg, xlsx, and webp
   * PPT:	jpg, odp, pdf, png, svg, pptx, and webp
   * PPTX:	jpg, odp, pdf, png, svg, ppt, and webp
   * ODP:	jpg, pdf, png, ppt, svg, pptx, and webp
   * BMP:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * GIF:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * JPG:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * PNG:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * WEBP:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * TIFF:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * AI:	    jpg, odp, ods, odt, pdf, png, svg, and webp
   * PSD:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * SVG:	jpg, odp, ods, odt, pdf, png, and webp
   * HTML:	jpg, odt, pdf, svg, txt, and webp
   * TXT:	jpg, html, odt, pdf, svg, and webp
   */
  format?: Maybe<DocumentFileTypes>;
};

/** Transformations for Documents */
export type DocumentTransformationInput = {
  /** Changes the output for the file. */
  output?: Maybe<DocumentOutputInput>;
};

export type DocumentVersion = {
  __typename?: 'DocumentVersion';
  id: Scalars['ID'];
  stage: Stage;
  revision: Scalars['Int'];
  createdAt: Scalars['DateTime'];
  data?: Maybe<Scalars['Json']>;
};

export type Faq = Node & {
  __typename?: 'Faq';
  /** System stage field */
  stage: Stage;
  /** System Locale field */
  locale: Locale;
  /** Get the other localizations for this document */
  localizations: Array<Faq>;
  /** Get the document in other stages */
  documentInStages: Array<Faq>;
  /** The unique identifier */
  id: Scalars['ID'];
  /** The time the document was created */
  createdAt: Scalars['DateTime'];
  /** The time the document was updated */
  updatedAt: Scalars['DateTime'];
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']>;
  question: Scalars['String'];
  answer?: Maybe<RichText>;
  /** User that created this document */
  createdBy?: Maybe<User>;
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  /** List of Faq versions */
  history: Array<Version>;
};


export type FaqLocalizationsArgs = {
  locales?: Array<Locale>;
  includeCurrent?: Scalars['Boolean'];
};


export type FaqDocumentInStagesArgs = {
  stages?: Array<Stage>;
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
};


export type FaqCreatedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};


export type FaqUpdatedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};


export type FaqPublishedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};


export type FaqCreatedByArgs = {
  locales?: Maybe<Array<Locale>>;
};


export type FaqUpdatedByArgs = {
  locales?: Maybe<Array<Locale>>;
};


export type FaqPublishedByArgs = {
  locales?: Maybe<Array<Locale>>;
};


export type FaqHistoryArgs = {
  limit?: Scalars['Int'];
  skip?: Scalars['Int'];
  stageOverride?: Maybe<Stage>;
};

export type FaqConnectInput = {
  /** Document to connect */
  where: FaqWhereUniqueInput;
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: Maybe<ConnectPositionInput>;
};

/** A connection to a list of items. */
export type FaqConnection = {
  __typename?: 'FaqConnection';
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** A list of edges. */
  edges: Array<FaqEdge>;
  aggregate: Aggregate;
};

export type FaqCreateInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  /** question input for default locale (de) */
  question: Scalars['String'];
  /** answer input for default locale (de) */
  answer?: Maybe<Scalars['RichTextAST']>;
  /** Inline mutations for managing document localizations excluding the default locale */
  localizations?: Maybe<FaqCreateLocalizationsInput>;
};

export type FaqCreateLocalizationDataInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  question: Scalars['String'];
  answer?: Maybe<Scalars['RichTextAST']>;
};

export type FaqCreateLocalizationInput = {
  /** Localization input */
  data: FaqCreateLocalizationDataInput;
  locale: Locale;
};

export type FaqCreateLocalizationsInput = {
  /** Create localizations for the newly-created document */
  create?: Maybe<Array<FaqCreateLocalizationInput>>;
};

export type FaqCreateManyInlineInput = {
  /** Create and connect multiple existing Faq documents */
  create?: Maybe<Array<FaqCreateInput>>;
  /** Connect multiple existing Faq documents */
  connect?: Maybe<Array<FaqWhereUniqueInput>>;
};

export type FaqCreateOneInlineInput = {
  /** Create and connect one Faq document */
  create?: Maybe<FaqCreateInput>;
  /** Connect one existing Faq document */
  connect?: Maybe<FaqWhereUniqueInput>;
};

/** An edge in a connection. */
export type FaqEdge = {
  __typename?: 'FaqEdge';
  /** The item at the end of the edge. */
  node: Faq;
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
};

/** Identifies documents */
export type FaqManyWhereInput = {
  /** Contains search across all appropriate fields. */
  _search?: Maybe<Scalars['String']>;
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<FaqWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<FaqWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<FaqWhereInput>>;
  id?: Maybe<Scalars['ID']>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: Maybe<Scalars['DateTime']>;
  createdBy?: Maybe<UserWhereInput>;
  updatedBy?: Maybe<UserWhereInput>;
  publishedBy?: Maybe<UserWhereInput>;
};

export enum FaqOrderByInput {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  QuestionAsc = 'question_ASC',
  QuestionDesc = 'question_DESC'
}

export type FaqUpdateInput = {
  /** question input for default locale (de) */
  question?: Maybe<Scalars['String']>;
  /** answer input for default locale (de) */
  answer?: Maybe<Scalars['RichTextAST']>;
  /** Manage document localizations */
  localizations?: Maybe<FaqUpdateLocalizationsInput>;
};

export type FaqUpdateLocalizationDataInput = {
  question?: Maybe<Scalars['String']>;
  answer?: Maybe<Scalars['RichTextAST']>;
};

export type FaqUpdateLocalizationInput = {
  data: FaqUpdateLocalizationDataInput;
  locale: Locale;
};

export type FaqUpdateLocalizationsInput = {
  /** Localizations to create */
  create?: Maybe<Array<FaqCreateLocalizationInput>>;
  /** Localizations to update */
  update?: Maybe<Array<FaqUpdateLocalizationInput>>;
  upsert?: Maybe<Array<FaqUpsertLocalizationInput>>;
  /** Localizations to delete */
  delete?: Maybe<Array<Locale>>;
};

export type FaqUpdateManyInlineInput = {
  /** Create and connect multiple Faq documents */
  create?: Maybe<Array<FaqCreateInput>>;
  /** Connect multiple existing Faq documents */
  connect?: Maybe<Array<FaqConnectInput>>;
  /** Override currently-connected documents with multiple existing Faq documents */
  set?: Maybe<Array<FaqWhereUniqueInput>>;
  /** Update multiple Faq documents */
  update?: Maybe<Array<FaqUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple Faq documents */
  upsert?: Maybe<Array<FaqUpsertWithNestedWhereUniqueInput>>;
  /** Disconnect multiple Faq documents */
  disconnect?: Maybe<Array<FaqWhereUniqueInput>>;
  /** Delete multiple Faq documents */
  delete?: Maybe<Array<FaqWhereUniqueInput>>;
};

export type FaqUpdateManyInput = {
  /** question input for default locale (de) */
  question?: Maybe<Scalars['String']>;
  /** answer input for default locale (de) */
  answer?: Maybe<Scalars['RichTextAST']>;
  /** Optional updates to localizations */
  localizations?: Maybe<FaqUpdateManyLocalizationsInput>;
};

export type FaqUpdateManyLocalizationDataInput = {
  question?: Maybe<Scalars['String']>;
  answer?: Maybe<Scalars['RichTextAST']>;
};

export type FaqUpdateManyLocalizationInput = {
  data: FaqUpdateManyLocalizationDataInput;
  locale: Locale;
};

export type FaqUpdateManyLocalizationsInput = {
  /** Localizations to update */
  update?: Maybe<Array<FaqUpdateManyLocalizationInput>>;
};

export type FaqUpdateManyWithNestedWhereInput = {
  /** Document search */
  where: FaqWhereInput;
  /** Update many input */
  data: FaqUpdateManyInput;
};

export type FaqUpdateOneInlineInput = {
  /** Create and connect one Faq document */
  create?: Maybe<FaqCreateInput>;
  /** Update single Faq document */
  update?: Maybe<FaqUpdateWithNestedWhereUniqueInput>;
  /** Upsert single Faq document */
  upsert?: Maybe<FaqUpsertWithNestedWhereUniqueInput>;
  /** Connect existing Faq document */
  connect?: Maybe<FaqWhereUniqueInput>;
  /** Disconnect currently connected Faq document */
  disconnect?: Maybe<Scalars['Boolean']>;
  /** Delete currently connected Faq document */
  delete?: Maybe<Scalars['Boolean']>;
};

export type FaqUpdateWithNestedWhereUniqueInput = {
  /** Unique document search */
  where: FaqWhereUniqueInput;
  /** Document to update */
  data: FaqUpdateInput;
};

export type FaqUpsertInput = {
  /** Create document if it didn't exist */
  create: FaqCreateInput;
  /** Update document if it exists */
  update: FaqUpdateInput;
};

export type FaqUpsertLocalizationInput = {
  update: FaqUpdateLocalizationDataInput;
  create: FaqCreateLocalizationDataInput;
  locale: Locale;
};

export type FaqUpsertWithNestedWhereUniqueInput = {
  /** Unique document search */
  where: FaqWhereUniqueInput;
  /** Upsert data */
  data: FaqUpsertInput;
};

/** Identifies documents */
export type FaqWhereInput = {
  /** Contains search across all appropriate fields. */
  _search?: Maybe<Scalars['String']>;
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<FaqWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<FaqWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<FaqWhereInput>>;
  id?: Maybe<Scalars['ID']>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: Maybe<Scalars['DateTime']>;
  question?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  question_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  question_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  question_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  question_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  question_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  question_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  question_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  question_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  question_not_ends_with?: Maybe<Scalars['String']>;
  createdBy?: Maybe<UserWhereInput>;
  updatedBy?: Maybe<UserWhereInput>;
  publishedBy?: Maybe<UserWhereInput>;
};

/** References Faq record uniquely */
export type FaqWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>;
};


export enum ImageFit {
  /** Resizes the image to fit within the specified parameters without distorting, cropping, or changing the aspect ratio. */
  Clip = 'clip',
  /** Resizes the image to fit the specified parameters exactly by removing any parts of the image that don't fit within the boundaries. */
  Crop = 'crop',
  /** Resizes the image to fit the specified parameters exactly by scaling the image to the desired size. The aspect ratio of the image is not respected and the image can be distorted using this method. */
  Scale = 'scale',
  /** Resizes the image to fit within the parameters, but as opposed to 'fit:clip' will not scale the image if the image is smaller than the output size. */
  Max = 'max'
}

export type ImageResizeInput = {
  /** The width in pixels to resize the image to. The value must be an integer from 1 to 10000. */
  width?: Maybe<Scalars['Int']>;
  /** The height in pixels to resize the image to. The value must be an integer from 1 to 10000. */
  height?: Maybe<Scalars['Int']>;
  /** The default value for the fit parameter is fit:clip. */
  fit?: Maybe<ImageFit>;
};

/** Transformations for Images */
export type ImageTransformationInput = {
  /** Resizes the image */
  resize?: Maybe<ImageResizeInput>;
};


export type Kpi = Node & {
  __typename?: 'Kpi';
  /** System stage field */
  stage: Stage;
  /** System Locale field */
  locale: Locale;
  /** Get the other localizations for this document */
  localizations: Array<Kpi>;
  /** Get the document in other stages */
  documentInStages: Array<Kpi>;
  /** The unique identifier */
  id: Scalars['ID'];
  /** The time the document was created */
  createdAt: Scalars['DateTime'];
  /** The time the document was updated */
  updatedAt: Scalars['DateTime'];
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']>;
  text?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['Int']>;
  /** User that created this document */
  createdBy?: Maybe<User>;
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  /** List of Kpi versions */
  history: Array<Version>;
};


export type KpiLocalizationsArgs = {
  locales?: Array<Locale>;
  includeCurrent?: Scalars['Boolean'];
};


export type KpiDocumentInStagesArgs = {
  stages?: Array<Stage>;
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
};


export type KpiCreatedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};


export type KpiUpdatedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};


export type KpiPublishedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};


export type KpiCreatedByArgs = {
  locales?: Maybe<Array<Locale>>;
};


export type KpiUpdatedByArgs = {
  locales?: Maybe<Array<Locale>>;
};


export type KpiPublishedByArgs = {
  locales?: Maybe<Array<Locale>>;
};


export type KpiHistoryArgs = {
  limit?: Scalars['Int'];
  skip?: Scalars['Int'];
  stageOverride?: Maybe<Stage>;
};

export type KpiConnectInput = {
  /** Document to connect */
  where: KpiWhereUniqueInput;
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: Maybe<ConnectPositionInput>;
};

/** A connection to a list of items. */
export type KpiConnection = {
  __typename?: 'KpiConnection';
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** A list of edges. */
  edges: Array<KpiEdge>;
  aggregate: Aggregate;
};

export type KpiCreateInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  /** text input for default locale (de) */
  text?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['Int']>;
  /** Inline mutations for managing document localizations excluding the default locale */
  localizations?: Maybe<KpiCreateLocalizationsInput>;
};

export type KpiCreateLocalizationDataInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  text?: Maybe<Scalars['String']>;
};

export type KpiCreateLocalizationInput = {
  /** Localization input */
  data: KpiCreateLocalizationDataInput;
  locale: Locale;
};

export type KpiCreateLocalizationsInput = {
  /** Create localizations for the newly-created document */
  create?: Maybe<Array<KpiCreateLocalizationInput>>;
};

export type KpiCreateManyInlineInput = {
  /** Create and connect multiple existing Kpi documents */
  create?: Maybe<Array<KpiCreateInput>>;
  /** Connect multiple existing Kpi documents */
  connect?: Maybe<Array<KpiWhereUniqueInput>>;
};

export type KpiCreateOneInlineInput = {
  /** Create and connect one Kpi document */
  create?: Maybe<KpiCreateInput>;
  /** Connect one existing Kpi document */
  connect?: Maybe<KpiWhereUniqueInput>;
};

/** An edge in a connection. */
export type KpiEdge = {
  __typename?: 'KpiEdge';
  /** The item at the end of the edge. */
  node: Kpi;
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
};

/** Identifies documents */
export type KpiManyWhereInput = {
  /** Contains search across all appropriate fields. */
  _search?: Maybe<Scalars['String']>;
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<KpiWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<KpiWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<KpiWhereInput>>;
  id?: Maybe<Scalars['ID']>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: Maybe<Scalars['DateTime']>;
  value?: Maybe<Scalars['Int']>;
  /** All values that are not equal to given value. */
  value_not?: Maybe<Scalars['Int']>;
  /** All values that are contained in given list. */
  value_in?: Maybe<Array<Scalars['Int']>>;
  /** All values that are not contained in given list. */
  value_not_in?: Maybe<Array<Scalars['Int']>>;
  /** All values less than the given value. */
  value_lt?: Maybe<Scalars['Int']>;
  /** All values less than or equal the given value. */
  value_lte?: Maybe<Scalars['Int']>;
  /** All values greater than the given value. */
  value_gt?: Maybe<Scalars['Int']>;
  /** All values greater than or equal the given value. */
  value_gte?: Maybe<Scalars['Int']>;
  createdBy?: Maybe<UserWhereInput>;
  updatedBy?: Maybe<UserWhereInput>;
  publishedBy?: Maybe<UserWhereInput>;
};

export enum KpiOrderByInput {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  TextAsc = 'text_ASC',
  TextDesc = 'text_DESC',
  ValueAsc = 'value_ASC',
  ValueDesc = 'value_DESC'
}

export type KpiUpdateInput = {
  /** text input for default locale (de) */
  text?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['Int']>;
  /** Manage document localizations */
  localizations?: Maybe<KpiUpdateLocalizationsInput>;
};

export type KpiUpdateLocalizationDataInput = {
  text?: Maybe<Scalars['String']>;
};

export type KpiUpdateLocalizationInput = {
  data: KpiUpdateLocalizationDataInput;
  locale: Locale;
};

export type KpiUpdateLocalizationsInput = {
  /** Localizations to create */
  create?: Maybe<Array<KpiCreateLocalizationInput>>;
  /** Localizations to update */
  update?: Maybe<Array<KpiUpdateLocalizationInput>>;
  upsert?: Maybe<Array<KpiUpsertLocalizationInput>>;
  /** Localizations to delete */
  delete?: Maybe<Array<Locale>>;
};

export type KpiUpdateManyInlineInput = {
  /** Create and connect multiple Kpi documents */
  create?: Maybe<Array<KpiCreateInput>>;
  /** Connect multiple existing Kpi documents */
  connect?: Maybe<Array<KpiConnectInput>>;
  /** Override currently-connected documents with multiple existing Kpi documents */
  set?: Maybe<Array<KpiWhereUniqueInput>>;
  /** Update multiple Kpi documents */
  update?: Maybe<Array<KpiUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple Kpi documents */
  upsert?: Maybe<Array<KpiUpsertWithNestedWhereUniqueInput>>;
  /** Disconnect multiple Kpi documents */
  disconnect?: Maybe<Array<KpiWhereUniqueInput>>;
  /** Delete multiple Kpi documents */
  delete?: Maybe<Array<KpiWhereUniqueInput>>;
};

export type KpiUpdateManyInput = {
  /** text input for default locale (de) */
  text?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['Int']>;
  /** Optional updates to localizations */
  localizations?: Maybe<KpiUpdateManyLocalizationsInput>;
};

export type KpiUpdateManyLocalizationDataInput = {
  text?: Maybe<Scalars['String']>;
};

export type KpiUpdateManyLocalizationInput = {
  data: KpiUpdateManyLocalizationDataInput;
  locale: Locale;
};

export type KpiUpdateManyLocalizationsInput = {
  /** Localizations to update */
  update?: Maybe<Array<KpiUpdateManyLocalizationInput>>;
};

export type KpiUpdateManyWithNestedWhereInput = {
  /** Document search */
  where: KpiWhereInput;
  /** Update many input */
  data: KpiUpdateManyInput;
};

export type KpiUpdateOneInlineInput = {
  /** Create and connect one Kpi document */
  create?: Maybe<KpiCreateInput>;
  /** Update single Kpi document */
  update?: Maybe<KpiUpdateWithNestedWhereUniqueInput>;
  /** Upsert single Kpi document */
  upsert?: Maybe<KpiUpsertWithNestedWhereUniqueInput>;
  /** Connect existing Kpi document */
  connect?: Maybe<KpiWhereUniqueInput>;
  /** Disconnect currently connected Kpi document */
  disconnect?: Maybe<Scalars['Boolean']>;
  /** Delete currently connected Kpi document */
  delete?: Maybe<Scalars['Boolean']>;
};

export type KpiUpdateWithNestedWhereUniqueInput = {
  /** Unique document search */
  where: KpiWhereUniqueInput;
  /** Document to update */
  data: KpiUpdateInput;
};

export type KpiUpsertInput = {
  /** Create document if it didn't exist */
  create: KpiCreateInput;
  /** Update document if it exists */
  update: KpiUpdateInput;
};

export type KpiUpsertLocalizationInput = {
  update: KpiUpdateLocalizationDataInput;
  create: KpiCreateLocalizationDataInput;
  locale: Locale;
};

export type KpiUpsertWithNestedWhereUniqueInput = {
  /** Unique document search */
  where: KpiWhereUniqueInput;
  /** Upsert data */
  data: KpiUpsertInput;
};

/** Identifies documents */
export type KpiWhereInput = {
  /** Contains search across all appropriate fields. */
  _search?: Maybe<Scalars['String']>;
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<KpiWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<KpiWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<KpiWhereInput>>;
  id?: Maybe<Scalars['ID']>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: Maybe<Scalars['DateTime']>;
  text?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  text_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  text_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  text_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  text_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  text_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  text_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  text_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  text_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  text_not_ends_with?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['Int']>;
  /** All values that are not equal to given value. */
  value_not?: Maybe<Scalars['Int']>;
  /** All values that are contained in given list. */
  value_in?: Maybe<Array<Scalars['Int']>>;
  /** All values that are not contained in given list. */
  value_not_in?: Maybe<Array<Scalars['Int']>>;
  /** All values less than the given value. */
  value_lt?: Maybe<Scalars['Int']>;
  /** All values less than or equal the given value. */
  value_lte?: Maybe<Scalars['Int']>;
  /** All values greater than the given value. */
  value_gt?: Maybe<Scalars['Int']>;
  /** All values greater than or equal the given value. */
  value_gte?: Maybe<Scalars['Int']>;
  createdBy?: Maybe<UserWhereInput>;
  updatedBy?: Maybe<UserWhereInput>;
  publishedBy?: Maybe<UserWhereInput>;
};

/** References Kpi record uniquely */
export type KpiWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>;
};

/** Locale system enumeration */
export enum Locale {
  /** System locale */
  De = 'de',
  En = 'en'
}

/** Representing a geolocation point with latitude and longitude */
export type Location = {
  __typename?: 'Location';
  latitude: Scalars['Float'];
  longitude: Scalars['Float'];
  distance: Scalars['Float'];
};


/** Representing a geolocation point with latitude and longitude */
export type LocationDistanceArgs = {
  from: LocationInput;
};

/** Input for a geolocation point with latitude and longitude */
export type LocationInput = {
  latitude: Scalars['Float'];
  longitude: Scalars['Float'];
};


export type Member = Node & {
  __typename?: 'Member';
  /** System stage field */
  stage: Stage;
  /** System Locale field */
  locale: Locale;
  /** Get the other localizations for this document */
  localizations: Array<Member>;
  /** Get the document in other stages */
  documentInStages: Array<Member>;
  /** The unique identifier */
  id: Scalars['ID'];
  /** The time the document was created */
  createdAt: Scalars['DateTime'];
  /** The time the document was updated */
  updatedAt: Scalars['DateTime'];
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']>;
  name?: Maybe<Scalars['String']>;
  abstract?: Maybe<Scalars['String']>;
  bio?: Maybe<RichText>;
  slug?: Maybe<Scalars['String']>;
  order: Scalars['Int'];
  /** User that created this document */
  createdBy?: Maybe<User>;
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  picture?: Maybe<Asset>;
  /** List of Member versions */
  history: Array<Version>;
};


export type MemberLocalizationsArgs = {
  locales?: Array<Locale>;
  includeCurrent?: Scalars['Boolean'];
};


export type MemberDocumentInStagesArgs = {
  stages?: Array<Stage>;
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
};


export type MemberCreatedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};


export type MemberUpdatedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};


export type MemberPublishedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};


export type MemberCreatedByArgs = {
  locales?: Maybe<Array<Locale>>;
};


export type MemberUpdatedByArgs = {
  locales?: Maybe<Array<Locale>>;
};


export type MemberPublishedByArgs = {
  locales?: Maybe<Array<Locale>>;
};


export type MemberPictureArgs = {
  locales?: Maybe<Array<Locale>>;
};


export type MemberHistoryArgs = {
  limit?: Scalars['Int'];
  skip?: Scalars['Int'];
  stageOverride?: Maybe<Stage>;
};

export type MemberConnectInput = {
  /** Document to connect */
  where: MemberWhereUniqueInput;
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: Maybe<ConnectPositionInput>;
};

/** A connection to a list of items. */
export type MemberConnection = {
  __typename?: 'MemberConnection';
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** A list of edges. */
  edges: Array<MemberEdge>;
  aggregate: Aggregate;
};

export type MemberCreateInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  name?: Maybe<Scalars['String']>;
  /** abstract input for default locale (de) */
  abstract?: Maybe<Scalars['String']>;
  bio?: Maybe<Scalars['RichTextAST']>;
  slug?: Maybe<Scalars['String']>;
  order: Scalars['Int'];
  picture?: Maybe<AssetCreateOneInlineInput>;
  /** Inline mutations for managing document localizations excluding the default locale */
  localizations?: Maybe<MemberCreateLocalizationsInput>;
};

export type MemberCreateLocalizationDataInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  abstract?: Maybe<Scalars['String']>;
};

export type MemberCreateLocalizationInput = {
  /** Localization input */
  data: MemberCreateLocalizationDataInput;
  locale: Locale;
};

export type MemberCreateLocalizationsInput = {
  /** Create localizations for the newly-created document */
  create?: Maybe<Array<MemberCreateLocalizationInput>>;
};

export type MemberCreateManyInlineInput = {
  /** Create and connect multiple existing Member documents */
  create?: Maybe<Array<MemberCreateInput>>;
  /** Connect multiple existing Member documents */
  connect?: Maybe<Array<MemberWhereUniqueInput>>;
};

export type MemberCreateOneInlineInput = {
  /** Create and connect one Member document */
  create?: Maybe<MemberCreateInput>;
  /** Connect one existing Member document */
  connect?: Maybe<MemberWhereUniqueInput>;
};

/** An edge in a connection. */
export type MemberEdge = {
  __typename?: 'MemberEdge';
  /** The item at the end of the edge. */
  node: Member;
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
};

/** Identifies documents */
export type MemberManyWhereInput = {
  /** Contains search across all appropriate fields. */
  _search?: Maybe<Scalars['String']>;
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<MemberWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<MemberWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<MemberWhereInput>>;
  id?: Maybe<Scalars['ID']>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: Maybe<Scalars['DateTime']>;
  name?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  name_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  name_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  name_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  name_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  name_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  name_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  name_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  name_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  name_not_ends_with?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  slug_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  slug_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  slug_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  slug_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  slug_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  slug_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  slug_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  slug_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  slug_not_ends_with?: Maybe<Scalars['String']>;
  order?: Maybe<Scalars['Int']>;
  /** All values that are not equal to given value. */
  order_not?: Maybe<Scalars['Int']>;
  /** All values that are contained in given list. */
  order_in?: Maybe<Array<Scalars['Int']>>;
  /** All values that are not contained in given list. */
  order_not_in?: Maybe<Array<Scalars['Int']>>;
  /** All values less than the given value. */
  order_lt?: Maybe<Scalars['Int']>;
  /** All values less than or equal the given value. */
  order_lte?: Maybe<Scalars['Int']>;
  /** All values greater than the given value. */
  order_gt?: Maybe<Scalars['Int']>;
  /** All values greater than or equal the given value. */
  order_gte?: Maybe<Scalars['Int']>;
  createdBy?: Maybe<UserWhereInput>;
  updatedBy?: Maybe<UserWhereInput>;
  publishedBy?: Maybe<UserWhereInput>;
  picture?: Maybe<AssetWhereInput>;
};

export enum MemberOrderByInput {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  AbstractAsc = 'abstract_ASC',
  AbstractDesc = 'abstract_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  OrderAsc = 'order_ASC',
  OrderDesc = 'order_DESC'
}

export type MemberUpdateInput = {
  name?: Maybe<Scalars['String']>;
  /** abstract input for default locale (de) */
  abstract?: Maybe<Scalars['String']>;
  bio?: Maybe<Scalars['RichTextAST']>;
  slug?: Maybe<Scalars['String']>;
  order?: Maybe<Scalars['Int']>;
  picture?: Maybe<AssetUpdateOneInlineInput>;
  /** Manage document localizations */
  localizations?: Maybe<MemberUpdateLocalizationsInput>;
};

export type MemberUpdateLocalizationDataInput = {
  abstract?: Maybe<Scalars['String']>;
};

export type MemberUpdateLocalizationInput = {
  data: MemberUpdateLocalizationDataInput;
  locale: Locale;
};

export type MemberUpdateLocalizationsInput = {
  /** Localizations to create */
  create?: Maybe<Array<MemberCreateLocalizationInput>>;
  /** Localizations to update */
  update?: Maybe<Array<MemberUpdateLocalizationInput>>;
  upsert?: Maybe<Array<MemberUpsertLocalizationInput>>;
  /** Localizations to delete */
  delete?: Maybe<Array<Locale>>;
};

export type MemberUpdateManyInlineInput = {
  /** Create and connect multiple Member documents */
  create?: Maybe<Array<MemberCreateInput>>;
  /** Connect multiple existing Member documents */
  connect?: Maybe<Array<MemberConnectInput>>;
  /** Override currently-connected documents with multiple existing Member documents */
  set?: Maybe<Array<MemberWhereUniqueInput>>;
  /** Update multiple Member documents */
  update?: Maybe<Array<MemberUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple Member documents */
  upsert?: Maybe<Array<MemberUpsertWithNestedWhereUniqueInput>>;
  /** Disconnect multiple Member documents */
  disconnect?: Maybe<Array<MemberWhereUniqueInput>>;
  /** Delete multiple Member documents */
  delete?: Maybe<Array<MemberWhereUniqueInput>>;
};

export type MemberUpdateManyInput = {
  name?: Maybe<Scalars['String']>;
  /** abstract input for default locale (de) */
  abstract?: Maybe<Scalars['String']>;
  bio?: Maybe<Scalars['RichTextAST']>;
  /** Optional updates to localizations */
  localizations?: Maybe<MemberUpdateManyLocalizationsInput>;
};

export type MemberUpdateManyLocalizationDataInput = {
  abstract?: Maybe<Scalars['String']>;
};

export type MemberUpdateManyLocalizationInput = {
  data: MemberUpdateManyLocalizationDataInput;
  locale: Locale;
};

export type MemberUpdateManyLocalizationsInput = {
  /** Localizations to update */
  update?: Maybe<Array<MemberUpdateManyLocalizationInput>>;
};

export type MemberUpdateManyWithNestedWhereInput = {
  /** Document search */
  where: MemberWhereInput;
  /** Update many input */
  data: MemberUpdateManyInput;
};

export type MemberUpdateOneInlineInput = {
  /** Create and connect one Member document */
  create?: Maybe<MemberCreateInput>;
  /** Update single Member document */
  update?: Maybe<MemberUpdateWithNestedWhereUniqueInput>;
  /** Upsert single Member document */
  upsert?: Maybe<MemberUpsertWithNestedWhereUniqueInput>;
  /** Connect existing Member document */
  connect?: Maybe<MemberWhereUniqueInput>;
  /** Disconnect currently connected Member document */
  disconnect?: Maybe<Scalars['Boolean']>;
  /** Delete currently connected Member document */
  delete?: Maybe<Scalars['Boolean']>;
};

export type MemberUpdateWithNestedWhereUniqueInput = {
  /** Unique document search */
  where: MemberWhereUniqueInput;
  /** Document to update */
  data: MemberUpdateInput;
};

export type MemberUpsertInput = {
  /** Create document if it didn't exist */
  create: MemberCreateInput;
  /** Update document if it exists */
  update: MemberUpdateInput;
};

export type MemberUpsertLocalizationInput = {
  update: MemberUpdateLocalizationDataInput;
  create: MemberCreateLocalizationDataInput;
  locale: Locale;
};

export type MemberUpsertWithNestedWhereUniqueInput = {
  /** Unique document search */
  where: MemberWhereUniqueInput;
  /** Upsert data */
  data: MemberUpsertInput;
};

/** Identifies documents */
export type MemberWhereInput = {
  /** Contains search across all appropriate fields. */
  _search?: Maybe<Scalars['String']>;
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<MemberWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<MemberWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<MemberWhereInput>>;
  id?: Maybe<Scalars['ID']>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: Maybe<Scalars['DateTime']>;
  name?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  name_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  name_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  name_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  name_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  name_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  name_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  name_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  name_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  name_not_ends_with?: Maybe<Scalars['String']>;
  abstract?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  abstract_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  abstract_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  abstract_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  abstract_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  abstract_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  abstract_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  abstract_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  abstract_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  abstract_not_ends_with?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  slug_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  slug_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  slug_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  slug_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  slug_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  slug_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  slug_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  slug_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  slug_not_ends_with?: Maybe<Scalars['String']>;
  order?: Maybe<Scalars['Int']>;
  /** All values that are not equal to given value. */
  order_not?: Maybe<Scalars['Int']>;
  /** All values that are contained in given list. */
  order_in?: Maybe<Array<Scalars['Int']>>;
  /** All values that are not contained in given list. */
  order_not_in?: Maybe<Array<Scalars['Int']>>;
  /** All values less than the given value. */
  order_lt?: Maybe<Scalars['Int']>;
  /** All values less than or equal the given value. */
  order_lte?: Maybe<Scalars['Int']>;
  /** All values greater than the given value. */
  order_gt?: Maybe<Scalars['Int']>;
  /** All values greater than or equal the given value. */
  order_gte?: Maybe<Scalars['Int']>;
  createdBy?: Maybe<UserWhereInput>;
  updatedBy?: Maybe<UserWhereInput>;
  publishedBy?: Maybe<UserWhereInput>;
  picture?: Maybe<AssetWhereInput>;
};

/** References Member record uniquely */
export type MemberWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>;
  slug?: Maybe<Scalars['String']>;
  order?: Maybe<Scalars['Int']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  /** Create one supporter */
  createSupporter?: Maybe<Supporter>;
  /** Update one supporter */
  updateSupporter?: Maybe<Supporter>;
  /** Delete one supporter from _all_ existing stages. Returns deleted document. */
  deleteSupporter?: Maybe<Supporter>;
  /** Upsert one supporter */
  upsertSupporter?: Maybe<Supporter>;
  /** Publish one supporter */
  publishSupporter?: Maybe<Supporter>;
  /** Unpublish one supporter from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishSupporter?: Maybe<Supporter>;
  /** Update many Supporter documents */
  updateManySupportersConnection: SupporterConnection;
  /** Delete many Supporter documents, return deleted documents */
  deleteManySupportersConnection: SupporterConnection;
  /** Publish many Supporter documents */
  publishManySupportersConnection: SupporterConnection;
  /** Find many Supporter documents that match criteria in specified stage and unpublish from target stages */
  unpublishManySupportersConnection: SupporterConnection;
  /**
   * Update many supporters
   * @deprecated Please use the new paginated many mutation (updateManySupportersConnection)
   */
  updateManySupporters: BatchPayload;
  /**
   * Delete many Supporter documents
   * @deprecated Please use the new paginated many mutation (deleteManySupportersConnection)
   */
  deleteManySupporters: BatchPayload;
  /**
   * Publish many Supporter documents
   * @deprecated Please use the new paginated many mutation (publishManySupportersConnection)
   */
  publishManySupporters: BatchPayload;
  /**
   * Unpublish many Supporter documents
   * @deprecated Please use the new paginated many mutation (unpublishManySupportersConnection)
   */
  unpublishManySupporters: BatchPayload;
  /** Create one shopTown */
  createShopTown?: Maybe<ShopTown>;
  /** Update one shopTown */
  updateShopTown?: Maybe<ShopTown>;
  /** Delete one shopTown from _all_ existing stages. Returns deleted document. */
  deleteShopTown?: Maybe<ShopTown>;
  /** Upsert one shopTown */
  upsertShopTown?: Maybe<ShopTown>;
  /** Publish one shopTown */
  publishShopTown?: Maybe<ShopTown>;
  /** Unpublish one shopTown from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishShopTown?: Maybe<ShopTown>;
  /** Update many ShopTown documents */
  updateManyShopTownsConnection: ShopTownConnection;
  /** Delete many ShopTown documents, return deleted documents */
  deleteManyShopTownsConnection: ShopTownConnection;
  /** Publish many ShopTown documents */
  publishManyShopTownsConnection: ShopTownConnection;
  /** Find many ShopTown documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyShopTownsConnection: ShopTownConnection;
  /**
   * Update many shopTowns
   * @deprecated Please use the new paginated many mutation (updateManyShopTownsConnection)
   */
  updateManyShopTowns: BatchPayload;
  /**
   * Delete many ShopTown documents
   * @deprecated Please use the new paginated many mutation (deleteManyShopTownsConnection)
   */
  deleteManyShopTowns: BatchPayload;
  /**
   * Publish many ShopTown documents
   * @deprecated Please use the new paginated many mutation (publishManyShopTownsConnection)
   */
  publishManyShopTowns: BatchPayload;
  /**
   * Unpublish many ShopTown documents
   * @deprecated Please use the new paginated many mutation (unpublishManyShopTownsConnection)
   */
  unpublishManyShopTowns: BatchPayload;
  /** Create one shopType */
  createShopType?: Maybe<ShopType>;
  /** Update one shopType */
  updateShopType?: Maybe<ShopType>;
  /** Delete one shopType from _all_ existing stages. Returns deleted document. */
  deleteShopType?: Maybe<ShopType>;
  /** Upsert one shopType */
  upsertShopType?: Maybe<ShopType>;
  /** Publish one shopType */
  publishShopType?: Maybe<ShopType>;
  /** Unpublish one shopType from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishShopType?: Maybe<ShopType>;
  /** Update many ShopType documents */
  updateManyShopTypesConnection: ShopTypeConnection;
  /** Delete many ShopType documents, return deleted documents */
  deleteManyShopTypesConnection: ShopTypeConnection;
  /** Publish many ShopType documents */
  publishManyShopTypesConnection: ShopTypeConnection;
  /** Find many ShopType documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyShopTypesConnection: ShopTypeConnection;
  /**
   * Update many shopTypes
   * @deprecated Please use the new paginated many mutation (updateManyShopTypesConnection)
   */
  updateManyShopTypes: BatchPayload;
  /**
   * Delete many ShopType documents
   * @deprecated Please use the new paginated many mutation (deleteManyShopTypesConnection)
   */
  deleteManyShopTypes: BatchPayload;
  /**
   * Publish many ShopType documents
   * @deprecated Please use the new paginated many mutation (publishManyShopTypesConnection)
   */
  publishManyShopTypes: BatchPayload;
  /**
   * Unpublish many ShopType documents
   * @deprecated Please use the new paginated many mutation (unpublishManyShopTypesConnection)
   */
  unpublishManyShopTypes: BatchPayload;
  /** Create one shopCategory */
  createShopCategory?: Maybe<ShopCategory>;
  /** Update one shopCategory */
  updateShopCategory?: Maybe<ShopCategory>;
  /** Delete one shopCategory from _all_ existing stages. Returns deleted document. */
  deleteShopCategory?: Maybe<ShopCategory>;
  /** Upsert one shopCategory */
  upsertShopCategory?: Maybe<ShopCategory>;
  /** Publish one shopCategory */
  publishShopCategory?: Maybe<ShopCategory>;
  /** Unpublish one shopCategory from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishShopCategory?: Maybe<ShopCategory>;
  /** Update many ShopCategory documents */
  updateManyShopCategoriesConnection: ShopCategoryConnection;
  /** Delete many ShopCategory documents, return deleted documents */
  deleteManyShopCategoriesConnection: ShopCategoryConnection;
  /** Publish many ShopCategory documents */
  publishManyShopCategoriesConnection: ShopCategoryConnection;
  /** Find many ShopCategory documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyShopCategoriesConnection: ShopCategoryConnection;
  /**
   * Update many shopCategories
   * @deprecated Please use the new paginated many mutation (updateManyShopCategoriesConnection)
   */
  updateManyShopCategories: BatchPayload;
  /**
   * Delete many ShopCategory documents
   * @deprecated Please use the new paginated many mutation (deleteManyShopCategoriesConnection)
   */
  deleteManyShopCategories: BatchPayload;
  /**
   * Publish many ShopCategory documents
   * @deprecated Please use the new paginated many mutation (publishManyShopCategoriesConnection)
   */
  publishManyShopCategories: BatchPayload;
  /**
   * Unpublish many ShopCategory documents
   * @deprecated Please use the new paginated many mutation (unpublishManyShopCategoriesConnection)
   */
  unpublishManyShopCategories: BatchPayload;
  /**
   * Create one asset
   * @deprecated Asset mutations will be overhauled soon
   */
  createAsset?: Maybe<Asset>;
  /** Update one asset */
  updateAsset?: Maybe<Asset>;
  /** Delete one asset from _all_ existing stages. Returns deleted document. */
  deleteAsset?: Maybe<Asset>;
  /** Upsert one asset */
  upsertAsset?: Maybe<Asset>;
  /** Publish one asset */
  publishAsset?: Maybe<Asset>;
  /** Unpublish one asset from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishAsset?: Maybe<Asset>;
  /** Update many Asset documents */
  updateManyAssetsConnection: AssetConnection;
  /** Delete many Asset documents, return deleted documents */
  deleteManyAssetsConnection: AssetConnection;
  /** Publish many Asset documents */
  publishManyAssetsConnection: AssetConnection;
  /** Find many Asset documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyAssetsConnection: AssetConnection;
  /**
   * Update many assets
   * @deprecated Please use the new paginated many mutation (updateManyAssetsConnection)
   */
  updateManyAssets: BatchPayload;
  /**
   * Delete many Asset documents
   * @deprecated Please use the new paginated many mutation (deleteManyAssetsConnection)
   */
  deleteManyAssets: BatchPayload;
  /**
   * Publish many Asset documents
   * @deprecated Please use the new paginated many mutation (publishManyAssetsConnection)
   */
  publishManyAssets: BatchPayload;
  /**
   * Unpublish many Asset documents
   * @deprecated Please use the new paginated many mutation (unpublishManyAssetsConnection)
   */
  unpublishManyAssets: BatchPayload;
  /** Create one pageSection */
  createPageSection?: Maybe<PageSection>;
  /** Update one pageSection */
  updatePageSection?: Maybe<PageSection>;
  /** Delete one pageSection from _all_ existing stages. Returns deleted document. */
  deletePageSection?: Maybe<PageSection>;
  /** Upsert one pageSection */
  upsertPageSection?: Maybe<PageSection>;
  /** Publish one pageSection */
  publishPageSection?: Maybe<PageSection>;
  /** Unpublish one pageSection from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishPageSection?: Maybe<PageSection>;
  /** Update many PageSection documents */
  updateManyPageSectionsConnection: PageSectionConnection;
  /** Delete many PageSection documents, return deleted documents */
  deleteManyPageSectionsConnection: PageSectionConnection;
  /** Publish many PageSection documents */
  publishManyPageSectionsConnection: PageSectionConnection;
  /** Find many PageSection documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyPageSectionsConnection: PageSectionConnection;
  /**
   * Update many pageSections
   * @deprecated Please use the new paginated many mutation (updateManyPageSectionsConnection)
   */
  updateManyPageSections: BatchPayload;
  /**
   * Delete many PageSection documents
   * @deprecated Please use the new paginated many mutation (deleteManyPageSectionsConnection)
   */
  deleteManyPageSections: BatchPayload;
  /**
   * Publish many PageSection documents
   * @deprecated Please use the new paginated many mutation (publishManyPageSectionsConnection)
   */
  publishManyPageSections: BatchPayload;
  /**
   * Unpublish many PageSection documents
   * @deprecated Please use the new paginated many mutation (unpublishManyPageSectionsConnection)
   */
  unpublishManyPageSections: BatchPayload;
  /** Create one cityPartner */
  createCityPartner?: Maybe<CityPartner>;
  /** Update one cityPartner */
  updateCityPartner?: Maybe<CityPartner>;
  /** Delete one cityPartner from _all_ existing stages. Returns deleted document. */
  deleteCityPartner?: Maybe<CityPartner>;
  /** Upsert one cityPartner */
  upsertCityPartner?: Maybe<CityPartner>;
  /** Publish one cityPartner */
  publishCityPartner?: Maybe<CityPartner>;
  /** Unpublish one cityPartner from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishCityPartner?: Maybe<CityPartner>;
  /** Update many CityPartner documents */
  updateManyCityPartnersConnection: CityPartnerConnection;
  /** Delete many CityPartner documents, return deleted documents */
  deleteManyCityPartnersConnection: CityPartnerConnection;
  /** Publish many CityPartner documents */
  publishManyCityPartnersConnection: CityPartnerConnection;
  /** Find many CityPartner documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyCityPartnersConnection: CityPartnerConnection;
  /**
   * Update many cityPartners
   * @deprecated Please use the new paginated many mutation (updateManyCityPartnersConnection)
   */
  updateManyCityPartners: BatchPayload;
  /**
   * Delete many CityPartner documents
   * @deprecated Please use the new paginated many mutation (deleteManyCityPartnersConnection)
   */
  deleteManyCityPartners: BatchPayload;
  /**
   * Publish many CityPartner documents
   * @deprecated Please use the new paginated many mutation (publishManyCityPartnersConnection)
   */
  publishManyCityPartners: BatchPayload;
  /**
   * Unpublish many CityPartner documents
   * @deprecated Please use the new paginated many mutation (unpublishManyCityPartnersConnection)
   */
  unpublishManyCityPartners: BatchPayload;
  /** Create one shopBundesland */
  createShopBundesland?: Maybe<ShopBundesland>;
  /** Update one shopBundesland */
  updateShopBundesland?: Maybe<ShopBundesland>;
  /** Delete one shopBundesland from _all_ existing stages. Returns deleted document. */
  deleteShopBundesland?: Maybe<ShopBundesland>;
  /** Upsert one shopBundesland */
  upsertShopBundesland?: Maybe<ShopBundesland>;
  /** Publish one shopBundesland */
  publishShopBundesland?: Maybe<ShopBundesland>;
  /** Unpublish one shopBundesland from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishShopBundesland?: Maybe<ShopBundesland>;
  /** Update many ShopBundesland documents */
  updateManyShopBundeslandsConnection: ShopBundeslandConnection;
  /** Delete many ShopBundesland documents, return deleted documents */
  deleteManyShopBundeslandsConnection: ShopBundeslandConnection;
  /** Publish many ShopBundesland documents */
  publishManyShopBundeslandsConnection: ShopBundeslandConnection;
  /** Find many ShopBundesland documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyShopBundeslandsConnection: ShopBundeslandConnection;
  /**
   * Update many shopBundeslands
   * @deprecated Please use the new paginated many mutation (updateManyShopBundeslandsConnection)
   */
  updateManyShopBundeslands: BatchPayload;
  /**
   * Delete many ShopBundesland documents
   * @deprecated Please use the new paginated many mutation (deleteManyShopBundeslandsConnection)
   */
  deleteManyShopBundeslands: BatchPayload;
  /**
   * Publish many ShopBundesland documents
   * @deprecated Please use the new paginated many mutation (publishManyShopBundeslandsConnection)
   */
  publishManyShopBundeslands: BatchPayload;
  /**
   * Unpublish many ShopBundesland documents
   * @deprecated Please use the new paginated many mutation (unpublishManyShopBundeslandsConnection)
   */
  unpublishManyShopBundeslands: BatchPayload;
  /** Create one shopStatus */
  createShopStatus?: Maybe<ShopStatus>;
  /** Update one shopStatus */
  updateShopStatus?: Maybe<ShopStatus>;
  /** Delete one shopStatus from _all_ existing stages. Returns deleted document. */
  deleteShopStatus?: Maybe<ShopStatus>;
  /** Upsert one shopStatus */
  upsertShopStatus?: Maybe<ShopStatus>;
  /** Publish one shopStatus */
  publishShopStatus?: Maybe<ShopStatus>;
  /** Unpublish one shopStatus from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishShopStatus?: Maybe<ShopStatus>;
  /** Update many ShopStatus documents */
  updateManyShopStatusesConnection: ShopStatusConnection;
  /** Delete many ShopStatus documents, return deleted documents */
  deleteManyShopStatusesConnection: ShopStatusConnection;
  /** Publish many ShopStatus documents */
  publishManyShopStatusesConnection: ShopStatusConnection;
  /** Find many ShopStatus documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyShopStatusesConnection: ShopStatusConnection;
  /**
   * Update many shopStatuses
   * @deprecated Please use the new paginated many mutation (updateManyShopStatusesConnection)
   */
  updateManyShopStatuses: BatchPayload;
  /**
   * Delete many ShopStatus documents
   * @deprecated Please use the new paginated many mutation (deleteManyShopStatusesConnection)
   */
  deleteManyShopStatuses: BatchPayload;
  /**
   * Publish many ShopStatus documents
   * @deprecated Please use the new paginated many mutation (publishManyShopStatusesConnection)
   */
  publishManyShopStatuses: BatchPayload;
  /**
   * Unpublish many ShopStatus documents
   * @deprecated Please use the new paginated many mutation (unpublishManyShopStatusesConnection)
   */
  unpublishManyShopStatuses: BatchPayload;
  /** Create one translation */
  createTranslation?: Maybe<Translation>;
  /** Update one translation */
  updateTranslation?: Maybe<Translation>;
  /** Delete one translation from _all_ existing stages. Returns deleted document. */
  deleteTranslation?: Maybe<Translation>;
  /** Upsert one translation */
  upsertTranslation?: Maybe<Translation>;
  /** Publish one translation */
  publishTranslation?: Maybe<Translation>;
  /** Unpublish one translation from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishTranslation?: Maybe<Translation>;
  /** Update many Translation documents */
  updateManyTranslationsConnection: TranslationConnection;
  /** Delete many Translation documents, return deleted documents */
  deleteManyTranslationsConnection: TranslationConnection;
  /** Publish many Translation documents */
  publishManyTranslationsConnection: TranslationConnection;
  /** Find many Translation documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyTranslationsConnection: TranslationConnection;
  /**
   * Update many translations
   * @deprecated Please use the new paginated many mutation (updateManyTranslationsConnection)
   */
  updateManyTranslations: BatchPayload;
  /**
   * Delete many Translation documents
   * @deprecated Please use the new paginated many mutation (deleteManyTranslationsConnection)
   */
  deleteManyTranslations: BatchPayload;
  /**
   * Publish many Translation documents
   * @deprecated Please use the new paginated many mutation (publishManyTranslationsConnection)
   */
  publishManyTranslations: BatchPayload;
  /**
   * Unpublish many Translation documents
   * @deprecated Please use the new paginated many mutation (unpublishManyTranslationsConnection)
   */
  unpublishManyTranslations: BatchPayload;
  /** Create one faq */
  createFaq?: Maybe<Faq>;
  /** Update one faq */
  updateFaq?: Maybe<Faq>;
  /** Delete one faq from _all_ existing stages. Returns deleted document. */
  deleteFaq?: Maybe<Faq>;
  /** Upsert one faq */
  upsertFaq?: Maybe<Faq>;
  /** Publish one faq */
  publishFaq?: Maybe<Faq>;
  /** Unpublish one faq from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishFaq?: Maybe<Faq>;
  /** Update many Faq documents */
  updateManyFaqsConnection: FaqConnection;
  /** Delete many Faq documents, return deleted documents */
  deleteManyFaqsConnection: FaqConnection;
  /** Publish many Faq documents */
  publishManyFaqsConnection: FaqConnection;
  /** Find many Faq documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyFaqsConnection: FaqConnection;
  /**
   * Update many faqs
   * @deprecated Please use the new paginated many mutation (updateManyFaqsConnection)
   */
  updateManyFaqs: BatchPayload;
  /**
   * Delete many Faq documents
   * @deprecated Please use the new paginated many mutation (deleteManyFaqsConnection)
   */
  deleteManyFaqs: BatchPayload;
  /**
   * Publish many Faq documents
   * @deprecated Please use the new paginated many mutation (publishManyFaqsConnection)
   */
  publishManyFaqs: BatchPayload;
  /**
   * Unpublish many Faq documents
   * @deprecated Please use the new paginated many mutation (unpublishManyFaqsConnection)
   */
  unpublishManyFaqs: BatchPayload;
  /** Create one member */
  createMember?: Maybe<Member>;
  /** Update one member */
  updateMember?: Maybe<Member>;
  /** Delete one member from _all_ existing stages. Returns deleted document. */
  deleteMember?: Maybe<Member>;
  /** Upsert one member */
  upsertMember?: Maybe<Member>;
  /** Publish one member */
  publishMember?: Maybe<Member>;
  /** Unpublish one member from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishMember?: Maybe<Member>;
  /** Update many Member documents */
  updateManyMembersConnection: MemberConnection;
  /** Delete many Member documents, return deleted documents */
  deleteManyMembersConnection: MemberConnection;
  /** Publish many Member documents */
  publishManyMembersConnection: MemberConnection;
  /** Find many Member documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyMembersConnection: MemberConnection;
  /**
   * Update many members
   * @deprecated Please use the new paginated many mutation (updateManyMembersConnection)
   */
  updateManyMembers: BatchPayload;
  /**
   * Delete many Member documents
   * @deprecated Please use the new paginated many mutation (deleteManyMembersConnection)
   */
  deleteManyMembers: BatchPayload;
  /**
   * Publish many Member documents
   * @deprecated Please use the new paginated many mutation (publishManyMembersConnection)
   */
  publishManyMembers: BatchPayload;
  /**
   * Unpublish many Member documents
   * @deprecated Please use the new paginated many mutation (unpublishManyMembersConnection)
   */
  unpublishManyMembers: BatchPayload;
  /** Create one page */
  createPage?: Maybe<Page>;
  /** Update one page */
  updatePage?: Maybe<Page>;
  /** Delete one page from _all_ existing stages. Returns deleted document. */
  deletePage?: Maybe<Page>;
  /** Upsert one page */
  upsertPage?: Maybe<Page>;
  /** Publish one page */
  publishPage?: Maybe<Page>;
  /** Unpublish one page from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishPage?: Maybe<Page>;
  /** Update many Page documents */
  updateManyPagesConnection: PageConnection;
  /** Delete many Page documents, return deleted documents */
  deleteManyPagesConnection: PageConnection;
  /** Publish many Page documents */
  publishManyPagesConnection: PageConnection;
  /** Find many Page documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyPagesConnection: PageConnection;
  /**
   * Update many pages
   * @deprecated Please use the new paginated many mutation (updateManyPagesConnection)
   */
  updateManyPages: BatchPayload;
  /**
   * Delete many Page documents
   * @deprecated Please use the new paginated many mutation (deleteManyPagesConnection)
   */
  deleteManyPages: BatchPayload;
  /**
   * Publish many Page documents
   * @deprecated Please use the new paginated many mutation (publishManyPagesConnection)
   */
  publishManyPages: BatchPayload;
  /**
   * Unpublish many Page documents
   * @deprecated Please use the new paginated many mutation (unpublishManyPagesConnection)
   */
  unpublishManyPages: BatchPayload;
  /** Create one blog */
  createBlog?: Maybe<Blog>;
  /** Update one blog */
  updateBlog?: Maybe<Blog>;
  /** Delete one blog from _all_ existing stages. Returns deleted document. */
  deleteBlog?: Maybe<Blog>;
  /** Upsert one blog */
  upsertBlog?: Maybe<Blog>;
  /** Publish one blog */
  publishBlog?: Maybe<Blog>;
  /** Unpublish one blog from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishBlog?: Maybe<Blog>;
  /** Update many Blog documents */
  updateManyBlogsConnection: BlogConnection;
  /** Delete many Blog documents, return deleted documents */
  deleteManyBlogsConnection: BlogConnection;
  /** Publish many Blog documents */
  publishManyBlogsConnection: BlogConnection;
  /** Find many Blog documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyBlogsConnection: BlogConnection;
  /**
   * Update many blogs
   * @deprecated Please use the new paginated many mutation (updateManyBlogsConnection)
   */
  updateManyBlogs: BatchPayload;
  /**
   * Delete many Blog documents
   * @deprecated Please use the new paginated many mutation (deleteManyBlogsConnection)
   */
  deleteManyBlogs: BatchPayload;
  /**
   * Publish many Blog documents
   * @deprecated Please use the new paginated many mutation (publishManyBlogsConnection)
   */
  publishManyBlogs: BatchPayload;
  /**
   * Unpublish many Blog documents
   * @deprecated Please use the new paginated many mutation (unpublishManyBlogsConnection)
   */
  unpublishManyBlogs: BatchPayload;
  /** Create one shop */
  createShop?: Maybe<Shop>;
  /** Update one shop */
  updateShop?: Maybe<Shop>;
  /** Delete one shop from _all_ existing stages. Returns deleted document. */
  deleteShop?: Maybe<Shop>;
  /** Upsert one shop */
  upsertShop?: Maybe<Shop>;
  /** Publish one shop */
  publishShop?: Maybe<Shop>;
  /** Unpublish one shop from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishShop?: Maybe<Shop>;
  /** Update many Shop documents */
  updateManyShopsConnection: ShopConnection;
  /** Delete many Shop documents, return deleted documents */
  deleteManyShopsConnection: ShopConnection;
  /** Publish many Shop documents */
  publishManyShopsConnection: ShopConnection;
  /** Find many Shop documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyShopsConnection: ShopConnection;
  /**
   * Update many shops
   * @deprecated Please use the new paginated many mutation (updateManyShopsConnection)
   */
  updateManyShops: BatchPayload;
  /**
   * Delete many Shop documents
   * @deprecated Please use the new paginated many mutation (deleteManyShopsConnection)
   */
  deleteManyShops: BatchPayload;
  /**
   * Publish many Shop documents
   * @deprecated Please use the new paginated many mutation (publishManyShopsConnection)
   */
  publishManyShops: BatchPayload;
  /**
   * Unpublish many Shop documents
   * @deprecated Please use the new paginated many mutation (unpublishManyShopsConnection)
   */
  unpublishManyShops: BatchPayload;
  /** Create one kpi */
  createKpi?: Maybe<Kpi>;
  /** Update one kpi */
  updateKpi?: Maybe<Kpi>;
  /** Delete one kpi from _all_ existing stages. Returns deleted document. */
  deleteKpi?: Maybe<Kpi>;
  /** Upsert one kpi */
  upsertKpi?: Maybe<Kpi>;
  /** Publish one kpi */
  publishKpi?: Maybe<Kpi>;
  /** Unpublish one kpi from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishKpi?: Maybe<Kpi>;
  /** Update many Kpi documents */
  updateManyKpisConnection: KpiConnection;
  /** Delete many Kpi documents, return deleted documents */
  deleteManyKpisConnection: KpiConnection;
  /** Publish many Kpi documents */
  publishManyKpisConnection: KpiConnection;
  /** Find many Kpi documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyKpisConnection: KpiConnection;
  /**
   * Update many kpis
   * @deprecated Please use the new paginated many mutation (updateManyKpisConnection)
   */
  updateManyKpis: BatchPayload;
  /**
   * Delete many Kpi documents
   * @deprecated Please use the new paginated many mutation (deleteManyKpisConnection)
   */
  deleteManyKpis: BatchPayload;
  /**
   * Publish many Kpi documents
   * @deprecated Please use the new paginated many mutation (publishManyKpisConnection)
   */
  publishManyKpis: BatchPayload;
  /**
   * Unpublish many Kpi documents
   * @deprecated Please use the new paginated many mutation (unpublishManyKpisConnection)
   */
  unpublishManyKpis: BatchPayload;
};


export type MutationCreateSupporterArgs = {
  data: SupporterCreateInput;
};


export type MutationUpdateSupporterArgs = {
  where: SupporterWhereUniqueInput;
  data: SupporterUpdateInput;
};


export type MutationDeleteSupporterArgs = {
  where: SupporterWhereUniqueInput;
};


export type MutationUpsertSupporterArgs = {
  where: SupporterWhereUniqueInput;
  upsert: SupporterUpsertInput;
};


export type MutationPublishSupporterArgs = {
  where: SupporterWhereUniqueInput;
  locales?: Maybe<Array<Locale>>;
  publishBase?: Maybe<Scalars['Boolean']>;
  withDefaultLocale?: Maybe<Scalars['Boolean']>;
  to?: Array<Stage>;
};


export type MutationUnpublishSupporterArgs = {
  where: SupporterWhereUniqueInput;
  from?: Array<Stage>;
  locales?: Maybe<Array<Locale>>;
  unpublishBase?: Maybe<Scalars['Boolean']>;
};


export type MutationUpdateManySupportersConnectionArgs = {
  where?: Maybe<SupporterManyWhereInput>;
  data: SupporterUpdateManyInput;
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['ID']>;
  after?: Maybe<Scalars['ID']>;
};


export type MutationDeleteManySupportersConnectionArgs = {
  where?: Maybe<SupporterManyWhereInput>;
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['ID']>;
  after?: Maybe<Scalars['ID']>;
};


export type MutationPublishManySupportersConnectionArgs = {
  where?: Maybe<SupporterManyWhereInput>;
  from?: Maybe<Stage>;
  to?: Array<Stage>;
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['ID']>;
  after?: Maybe<Scalars['ID']>;
  locales?: Maybe<Array<Locale>>;
  publishBase?: Maybe<Scalars['Boolean']>;
  withDefaultLocale?: Maybe<Scalars['Boolean']>;
};


export type MutationUnpublishManySupportersConnectionArgs = {
  where?: Maybe<SupporterManyWhereInput>;
  stage?: Maybe<Stage>;
  from?: Array<Stage>;
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['ID']>;
  after?: Maybe<Scalars['ID']>;
  locales?: Maybe<Array<Locale>>;
  unpublishBase?: Maybe<Scalars['Boolean']>;
};


export type MutationUpdateManySupportersArgs = {
  where?: Maybe<SupporterManyWhereInput>;
  data: SupporterUpdateManyInput;
};


export type MutationDeleteManySupportersArgs = {
  where?: Maybe<SupporterManyWhereInput>;
};


export type MutationPublishManySupportersArgs = {
  where?: Maybe<SupporterManyWhereInput>;
  to?: Array<Stage>;
  locales?: Maybe<Array<Locale>>;
  publishBase?: Maybe<Scalars['Boolean']>;
  withDefaultLocale?: Maybe<Scalars['Boolean']>;
};


export type MutationUnpublishManySupportersArgs = {
  where?: Maybe<SupporterManyWhereInput>;
  from?: Array<Stage>;
  locales?: Maybe<Array<Locale>>;
  unpublishBase?: Maybe<Scalars['Boolean']>;
};


export type MutationCreateShopTownArgs = {
  data: ShopTownCreateInput;
};


export type MutationUpdateShopTownArgs = {
  where: ShopTownWhereUniqueInput;
  data: ShopTownUpdateInput;
};


export type MutationDeleteShopTownArgs = {
  where: ShopTownWhereUniqueInput;
};


export type MutationUpsertShopTownArgs = {
  where: ShopTownWhereUniqueInput;
  upsert: ShopTownUpsertInput;
};


export type MutationPublishShopTownArgs = {
  where: ShopTownWhereUniqueInput;
  to?: Array<Stage>;
};


export type MutationUnpublishShopTownArgs = {
  where: ShopTownWhereUniqueInput;
  from?: Array<Stage>;
};


export type MutationUpdateManyShopTownsConnectionArgs = {
  where?: Maybe<ShopTownManyWhereInput>;
  data: ShopTownUpdateManyInput;
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['ID']>;
  after?: Maybe<Scalars['ID']>;
};


export type MutationDeleteManyShopTownsConnectionArgs = {
  where?: Maybe<ShopTownManyWhereInput>;
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['ID']>;
  after?: Maybe<Scalars['ID']>;
};


export type MutationPublishManyShopTownsConnectionArgs = {
  where?: Maybe<ShopTownManyWhereInput>;
  from?: Maybe<Stage>;
  to?: Array<Stage>;
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['ID']>;
  after?: Maybe<Scalars['ID']>;
};


export type MutationUnpublishManyShopTownsConnectionArgs = {
  where?: Maybe<ShopTownManyWhereInput>;
  stage?: Maybe<Stage>;
  from?: Array<Stage>;
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['ID']>;
  after?: Maybe<Scalars['ID']>;
};


export type MutationUpdateManyShopTownsArgs = {
  where?: Maybe<ShopTownManyWhereInput>;
  data: ShopTownUpdateManyInput;
};


export type MutationDeleteManyShopTownsArgs = {
  where?: Maybe<ShopTownManyWhereInput>;
};


export type MutationPublishManyShopTownsArgs = {
  where?: Maybe<ShopTownManyWhereInput>;
  to?: Array<Stage>;
};


export type MutationUnpublishManyShopTownsArgs = {
  where?: Maybe<ShopTownManyWhereInput>;
  from?: Array<Stage>;
};


export type MutationCreateShopTypeArgs = {
  data: ShopTypeCreateInput;
};


export type MutationUpdateShopTypeArgs = {
  where: ShopTypeWhereUniqueInput;
  data: ShopTypeUpdateInput;
};


export type MutationDeleteShopTypeArgs = {
  where: ShopTypeWhereUniqueInput;
};


export type MutationUpsertShopTypeArgs = {
  where: ShopTypeWhereUniqueInput;
  upsert: ShopTypeUpsertInput;
};


export type MutationPublishShopTypeArgs = {
  where: ShopTypeWhereUniqueInput;
  to?: Array<Stage>;
};


export type MutationUnpublishShopTypeArgs = {
  where: ShopTypeWhereUniqueInput;
  from?: Array<Stage>;
};


export type MutationUpdateManyShopTypesConnectionArgs = {
  where?: Maybe<ShopTypeManyWhereInput>;
  data: ShopTypeUpdateManyInput;
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['ID']>;
  after?: Maybe<Scalars['ID']>;
};


export type MutationDeleteManyShopTypesConnectionArgs = {
  where?: Maybe<ShopTypeManyWhereInput>;
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['ID']>;
  after?: Maybe<Scalars['ID']>;
};


export type MutationPublishManyShopTypesConnectionArgs = {
  where?: Maybe<ShopTypeManyWhereInput>;
  from?: Maybe<Stage>;
  to?: Array<Stage>;
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['ID']>;
  after?: Maybe<Scalars['ID']>;
};


export type MutationUnpublishManyShopTypesConnectionArgs = {
  where?: Maybe<ShopTypeManyWhereInput>;
  stage?: Maybe<Stage>;
  from?: Array<Stage>;
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['ID']>;
  after?: Maybe<Scalars['ID']>;
};


export type MutationUpdateManyShopTypesArgs = {
  where?: Maybe<ShopTypeManyWhereInput>;
  data: ShopTypeUpdateManyInput;
};


export type MutationDeleteManyShopTypesArgs = {
  where?: Maybe<ShopTypeManyWhereInput>;
};


export type MutationPublishManyShopTypesArgs = {
  where?: Maybe<ShopTypeManyWhereInput>;
  to?: Array<Stage>;
};


export type MutationUnpublishManyShopTypesArgs = {
  where?: Maybe<ShopTypeManyWhereInput>;
  from?: Array<Stage>;
};


export type MutationCreateShopCategoryArgs = {
  data: ShopCategoryCreateInput;
};


export type MutationUpdateShopCategoryArgs = {
  where: ShopCategoryWhereUniqueInput;
  data: ShopCategoryUpdateInput;
};


export type MutationDeleteShopCategoryArgs = {
  where: ShopCategoryWhereUniqueInput;
};


export type MutationUpsertShopCategoryArgs = {
  where: ShopCategoryWhereUniqueInput;
  upsert: ShopCategoryUpsertInput;
};


export type MutationPublishShopCategoryArgs = {
  where: ShopCategoryWhereUniqueInput;
  to?: Array<Stage>;
};


export type MutationUnpublishShopCategoryArgs = {
  where: ShopCategoryWhereUniqueInput;
  from?: Array<Stage>;
};


export type MutationUpdateManyShopCategoriesConnectionArgs = {
  where?: Maybe<ShopCategoryManyWhereInput>;
  data: ShopCategoryUpdateManyInput;
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['ID']>;
  after?: Maybe<Scalars['ID']>;
};


export type MutationDeleteManyShopCategoriesConnectionArgs = {
  where?: Maybe<ShopCategoryManyWhereInput>;
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['ID']>;
  after?: Maybe<Scalars['ID']>;
};


export type MutationPublishManyShopCategoriesConnectionArgs = {
  where?: Maybe<ShopCategoryManyWhereInput>;
  from?: Maybe<Stage>;
  to?: Array<Stage>;
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['ID']>;
  after?: Maybe<Scalars['ID']>;
};


export type MutationUnpublishManyShopCategoriesConnectionArgs = {
  where?: Maybe<ShopCategoryManyWhereInput>;
  stage?: Maybe<Stage>;
  from?: Array<Stage>;
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['ID']>;
  after?: Maybe<Scalars['ID']>;
};


export type MutationUpdateManyShopCategoriesArgs = {
  where?: Maybe<ShopCategoryManyWhereInput>;
  data: ShopCategoryUpdateManyInput;
};


export type MutationDeleteManyShopCategoriesArgs = {
  where?: Maybe<ShopCategoryManyWhereInput>;
};


export type MutationPublishManyShopCategoriesArgs = {
  where?: Maybe<ShopCategoryManyWhereInput>;
  to?: Array<Stage>;
};


export type MutationUnpublishManyShopCategoriesArgs = {
  where?: Maybe<ShopCategoryManyWhereInput>;
  from?: Array<Stage>;
};


export type MutationCreateAssetArgs = {
  data: AssetCreateInput;
};


export type MutationUpdateAssetArgs = {
  where: AssetWhereUniqueInput;
  data: AssetUpdateInput;
};


export type MutationDeleteAssetArgs = {
  where: AssetWhereUniqueInput;
};


export type MutationUpsertAssetArgs = {
  where: AssetWhereUniqueInput;
  upsert: AssetUpsertInput;
};


export type MutationPublishAssetArgs = {
  where: AssetWhereUniqueInput;
  locales?: Maybe<Array<Locale>>;
  publishBase?: Maybe<Scalars['Boolean']>;
  withDefaultLocale?: Maybe<Scalars['Boolean']>;
  to?: Array<Stage>;
};


export type MutationUnpublishAssetArgs = {
  where: AssetWhereUniqueInput;
  from?: Array<Stage>;
  locales?: Maybe<Array<Locale>>;
  unpublishBase?: Maybe<Scalars['Boolean']>;
};


export type MutationUpdateManyAssetsConnectionArgs = {
  where?: Maybe<AssetManyWhereInput>;
  data: AssetUpdateManyInput;
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['ID']>;
  after?: Maybe<Scalars['ID']>;
};


export type MutationDeleteManyAssetsConnectionArgs = {
  where?: Maybe<AssetManyWhereInput>;
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['ID']>;
  after?: Maybe<Scalars['ID']>;
};


export type MutationPublishManyAssetsConnectionArgs = {
  where?: Maybe<AssetManyWhereInput>;
  from?: Maybe<Stage>;
  to?: Array<Stage>;
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['ID']>;
  after?: Maybe<Scalars['ID']>;
  locales?: Maybe<Array<Locale>>;
  publishBase?: Maybe<Scalars['Boolean']>;
  withDefaultLocale?: Maybe<Scalars['Boolean']>;
};


export type MutationUnpublishManyAssetsConnectionArgs = {
  where?: Maybe<AssetManyWhereInput>;
  stage?: Maybe<Stage>;
  from?: Array<Stage>;
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['ID']>;
  after?: Maybe<Scalars['ID']>;
  locales?: Maybe<Array<Locale>>;
  unpublishBase?: Maybe<Scalars['Boolean']>;
};


export type MutationUpdateManyAssetsArgs = {
  where?: Maybe<AssetManyWhereInput>;
  data: AssetUpdateManyInput;
};


export type MutationDeleteManyAssetsArgs = {
  where?: Maybe<AssetManyWhereInput>;
};


export type MutationPublishManyAssetsArgs = {
  where?: Maybe<AssetManyWhereInput>;
  to?: Array<Stage>;
  locales?: Maybe<Array<Locale>>;
  publishBase?: Maybe<Scalars['Boolean']>;
  withDefaultLocale?: Maybe<Scalars['Boolean']>;
};


export type MutationUnpublishManyAssetsArgs = {
  where?: Maybe<AssetManyWhereInput>;
  from?: Array<Stage>;
  locales?: Maybe<Array<Locale>>;
  unpublishBase?: Maybe<Scalars['Boolean']>;
};


export type MutationCreatePageSectionArgs = {
  data: PageSectionCreateInput;
};


export type MutationUpdatePageSectionArgs = {
  where: PageSectionWhereUniqueInput;
  data: PageSectionUpdateInput;
};


export type MutationDeletePageSectionArgs = {
  where: PageSectionWhereUniqueInput;
};


export type MutationUpsertPageSectionArgs = {
  where: PageSectionWhereUniqueInput;
  upsert: PageSectionUpsertInput;
};


export type MutationPublishPageSectionArgs = {
  where: PageSectionWhereUniqueInput;
  locales?: Maybe<Array<Locale>>;
  publishBase?: Maybe<Scalars['Boolean']>;
  withDefaultLocale?: Maybe<Scalars['Boolean']>;
  to?: Array<Stage>;
};


export type MutationUnpublishPageSectionArgs = {
  where: PageSectionWhereUniqueInput;
  from?: Array<Stage>;
  locales?: Maybe<Array<Locale>>;
  unpublishBase?: Maybe<Scalars['Boolean']>;
};


export type MutationUpdateManyPageSectionsConnectionArgs = {
  where?: Maybe<PageSectionManyWhereInput>;
  data: PageSectionUpdateManyInput;
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['ID']>;
  after?: Maybe<Scalars['ID']>;
};


export type MutationDeleteManyPageSectionsConnectionArgs = {
  where?: Maybe<PageSectionManyWhereInput>;
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['ID']>;
  after?: Maybe<Scalars['ID']>;
};


export type MutationPublishManyPageSectionsConnectionArgs = {
  where?: Maybe<PageSectionManyWhereInput>;
  from?: Maybe<Stage>;
  to?: Array<Stage>;
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['ID']>;
  after?: Maybe<Scalars['ID']>;
  locales?: Maybe<Array<Locale>>;
  publishBase?: Maybe<Scalars['Boolean']>;
  withDefaultLocale?: Maybe<Scalars['Boolean']>;
};


export type MutationUnpublishManyPageSectionsConnectionArgs = {
  where?: Maybe<PageSectionManyWhereInput>;
  stage?: Maybe<Stage>;
  from?: Array<Stage>;
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['ID']>;
  after?: Maybe<Scalars['ID']>;
  locales?: Maybe<Array<Locale>>;
  unpublishBase?: Maybe<Scalars['Boolean']>;
};


export type MutationUpdateManyPageSectionsArgs = {
  where?: Maybe<PageSectionManyWhereInput>;
  data: PageSectionUpdateManyInput;
};


export type MutationDeleteManyPageSectionsArgs = {
  where?: Maybe<PageSectionManyWhereInput>;
};


export type MutationPublishManyPageSectionsArgs = {
  where?: Maybe<PageSectionManyWhereInput>;
  to?: Array<Stage>;
  locales?: Maybe<Array<Locale>>;
  publishBase?: Maybe<Scalars['Boolean']>;
  withDefaultLocale?: Maybe<Scalars['Boolean']>;
};


export type MutationUnpublishManyPageSectionsArgs = {
  where?: Maybe<PageSectionManyWhereInput>;
  from?: Array<Stage>;
  locales?: Maybe<Array<Locale>>;
  unpublishBase?: Maybe<Scalars['Boolean']>;
};


export type MutationCreateCityPartnerArgs = {
  data: CityPartnerCreateInput;
};


export type MutationUpdateCityPartnerArgs = {
  where: CityPartnerWhereUniqueInput;
  data: CityPartnerUpdateInput;
};


export type MutationDeleteCityPartnerArgs = {
  where: CityPartnerWhereUniqueInput;
};


export type MutationUpsertCityPartnerArgs = {
  where: CityPartnerWhereUniqueInput;
  upsert: CityPartnerUpsertInput;
};


export type MutationPublishCityPartnerArgs = {
  where: CityPartnerWhereUniqueInput;
  locales?: Maybe<Array<Locale>>;
  publishBase?: Maybe<Scalars['Boolean']>;
  withDefaultLocale?: Maybe<Scalars['Boolean']>;
  to?: Array<Stage>;
};


export type MutationUnpublishCityPartnerArgs = {
  where: CityPartnerWhereUniqueInput;
  from?: Array<Stage>;
  locales?: Maybe<Array<Locale>>;
  unpublishBase?: Maybe<Scalars['Boolean']>;
};


export type MutationUpdateManyCityPartnersConnectionArgs = {
  where?: Maybe<CityPartnerManyWhereInput>;
  data: CityPartnerUpdateManyInput;
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['ID']>;
  after?: Maybe<Scalars['ID']>;
};


export type MutationDeleteManyCityPartnersConnectionArgs = {
  where?: Maybe<CityPartnerManyWhereInput>;
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['ID']>;
  after?: Maybe<Scalars['ID']>;
};


export type MutationPublishManyCityPartnersConnectionArgs = {
  where?: Maybe<CityPartnerManyWhereInput>;
  from?: Maybe<Stage>;
  to?: Array<Stage>;
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['ID']>;
  after?: Maybe<Scalars['ID']>;
  locales?: Maybe<Array<Locale>>;
  publishBase?: Maybe<Scalars['Boolean']>;
  withDefaultLocale?: Maybe<Scalars['Boolean']>;
};


export type MutationUnpublishManyCityPartnersConnectionArgs = {
  where?: Maybe<CityPartnerManyWhereInput>;
  stage?: Maybe<Stage>;
  from?: Array<Stage>;
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['ID']>;
  after?: Maybe<Scalars['ID']>;
  locales?: Maybe<Array<Locale>>;
  unpublishBase?: Maybe<Scalars['Boolean']>;
};


export type MutationUpdateManyCityPartnersArgs = {
  where?: Maybe<CityPartnerManyWhereInput>;
  data: CityPartnerUpdateManyInput;
};


export type MutationDeleteManyCityPartnersArgs = {
  where?: Maybe<CityPartnerManyWhereInput>;
};


export type MutationPublishManyCityPartnersArgs = {
  where?: Maybe<CityPartnerManyWhereInput>;
  to?: Array<Stage>;
  locales?: Maybe<Array<Locale>>;
  publishBase?: Maybe<Scalars['Boolean']>;
  withDefaultLocale?: Maybe<Scalars['Boolean']>;
};


export type MutationUnpublishManyCityPartnersArgs = {
  where?: Maybe<CityPartnerManyWhereInput>;
  from?: Array<Stage>;
  locales?: Maybe<Array<Locale>>;
  unpublishBase?: Maybe<Scalars['Boolean']>;
};


export type MutationCreateShopBundeslandArgs = {
  data: ShopBundeslandCreateInput;
};


export type MutationUpdateShopBundeslandArgs = {
  where: ShopBundeslandWhereUniqueInput;
  data: ShopBundeslandUpdateInput;
};


export type MutationDeleteShopBundeslandArgs = {
  where: ShopBundeslandWhereUniqueInput;
};


export type MutationUpsertShopBundeslandArgs = {
  where: ShopBundeslandWhereUniqueInput;
  upsert: ShopBundeslandUpsertInput;
};


export type MutationPublishShopBundeslandArgs = {
  where: ShopBundeslandWhereUniqueInput;
  to?: Array<Stage>;
};


export type MutationUnpublishShopBundeslandArgs = {
  where: ShopBundeslandWhereUniqueInput;
  from?: Array<Stage>;
};


export type MutationUpdateManyShopBundeslandsConnectionArgs = {
  where?: Maybe<ShopBundeslandManyWhereInput>;
  data: ShopBundeslandUpdateManyInput;
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['ID']>;
  after?: Maybe<Scalars['ID']>;
};


export type MutationDeleteManyShopBundeslandsConnectionArgs = {
  where?: Maybe<ShopBundeslandManyWhereInput>;
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['ID']>;
  after?: Maybe<Scalars['ID']>;
};


export type MutationPublishManyShopBundeslandsConnectionArgs = {
  where?: Maybe<ShopBundeslandManyWhereInput>;
  from?: Maybe<Stage>;
  to?: Array<Stage>;
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['ID']>;
  after?: Maybe<Scalars['ID']>;
};


export type MutationUnpublishManyShopBundeslandsConnectionArgs = {
  where?: Maybe<ShopBundeslandManyWhereInput>;
  stage?: Maybe<Stage>;
  from?: Array<Stage>;
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['ID']>;
  after?: Maybe<Scalars['ID']>;
};


export type MutationUpdateManyShopBundeslandsArgs = {
  where?: Maybe<ShopBundeslandManyWhereInput>;
  data: ShopBundeslandUpdateManyInput;
};


export type MutationDeleteManyShopBundeslandsArgs = {
  where?: Maybe<ShopBundeslandManyWhereInput>;
};


export type MutationPublishManyShopBundeslandsArgs = {
  where?: Maybe<ShopBundeslandManyWhereInput>;
  to?: Array<Stage>;
};


export type MutationUnpublishManyShopBundeslandsArgs = {
  where?: Maybe<ShopBundeslandManyWhereInput>;
  from?: Array<Stage>;
};


export type MutationCreateShopStatusArgs = {
  data: ShopStatusCreateInput;
};


export type MutationUpdateShopStatusArgs = {
  where: ShopStatusWhereUniqueInput;
  data: ShopStatusUpdateInput;
};


export type MutationDeleteShopStatusArgs = {
  where: ShopStatusWhereUniqueInput;
};


export type MutationUpsertShopStatusArgs = {
  where: ShopStatusWhereUniqueInput;
  upsert: ShopStatusUpsertInput;
};


export type MutationPublishShopStatusArgs = {
  where: ShopStatusWhereUniqueInput;
  to?: Array<Stage>;
};


export type MutationUnpublishShopStatusArgs = {
  where: ShopStatusWhereUniqueInput;
  from?: Array<Stage>;
};


export type MutationUpdateManyShopStatusesConnectionArgs = {
  where?: Maybe<ShopStatusManyWhereInput>;
  data: ShopStatusUpdateManyInput;
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['ID']>;
  after?: Maybe<Scalars['ID']>;
};


export type MutationDeleteManyShopStatusesConnectionArgs = {
  where?: Maybe<ShopStatusManyWhereInput>;
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['ID']>;
  after?: Maybe<Scalars['ID']>;
};


export type MutationPublishManyShopStatusesConnectionArgs = {
  where?: Maybe<ShopStatusManyWhereInput>;
  from?: Maybe<Stage>;
  to?: Array<Stage>;
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['ID']>;
  after?: Maybe<Scalars['ID']>;
};


export type MutationUnpublishManyShopStatusesConnectionArgs = {
  where?: Maybe<ShopStatusManyWhereInput>;
  stage?: Maybe<Stage>;
  from?: Array<Stage>;
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['ID']>;
  after?: Maybe<Scalars['ID']>;
};


export type MutationUpdateManyShopStatusesArgs = {
  where?: Maybe<ShopStatusManyWhereInput>;
  data: ShopStatusUpdateManyInput;
};


export type MutationDeleteManyShopStatusesArgs = {
  where?: Maybe<ShopStatusManyWhereInput>;
};


export type MutationPublishManyShopStatusesArgs = {
  where?: Maybe<ShopStatusManyWhereInput>;
  to?: Array<Stage>;
};


export type MutationUnpublishManyShopStatusesArgs = {
  where?: Maybe<ShopStatusManyWhereInput>;
  from?: Array<Stage>;
};


export type MutationCreateTranslationArgs = {
  data: TranslationCreateInput;
};


export type MutationUpdateTranslationArgs = {
  where: TranslationWhereUniqueInput;
  data: TranslationUpdateInput;
};


export type MutationDeleteTranslationArgs = {
  where: TranslationWhereUniqueInput;
};


export type MutationUpsertTranslationArgs = {
  where: TranslationWhereUniqueInput;
  upsert: TranslationUpsertInput;
};


export type MutationPublishTranslationArgs = {
  where: TranslationWhereUniqueInput;
  locales?: Maybe<Array<Locale>>;
  publishBase?: Maybe<Scalars['Boolean']>;
  withDefaultLocale?: Maybe<Scalars['Boolean']>;
  to?: Array<Stage>;
};


export type MutationUnpublishTranslationArgs = {
  where: TranslationWhereUniqueInput;
  from?: Array<Stage>;
  locales?: Maybe<Array<Locale>>;
  unpublishBase?: Maybe<Scalars['Boolean']>;
};


export type MutationUpdateManyTranslationsConnectionArgs = {
  where?: Maybe<TranslationManyWhereInput>;
  data: TranslationUpdateManyInput;
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['ID']>;
  after?: Maybe<Scalars['ID']>;
};


export type MutationDeleteManyTranslationsConnectionArgs = {
  where?: Maybe<TranslationManyWhereInput>;
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['ID']>;
  after?: Maybe<Scalars['ID']>;
};


export type MutationPublishManyTranslationsConnectionArgs = {
  where?: Maybe<TranslationManyWhereInput>;
  from?: Maybe<Stage>;
  to?: Array<Stage>;
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['ID']>;
  after?: Maybe<Scalars['ID']>;
  locales?: Maybe<Array<Locale>>;
  publishBase?: Maybe<Scalars['Boolean']>;
  withDefaultLocale?: Maybe<Scalars['Boolean']>;
};


export type MutationUnpublishManyTranslationsConnectionArgs = {
  where?: Maybe<TranslationManyWhereInput>;
  stage?: Maybe<Stage>;
  from?: Array<Stage>;
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['ID']>;
  after?: Maybe<Scalars['ID']>;
  locales?: Maybe<Array<Locale>>;
  unpublishBase?: Maybe<Scalars['Boolean']>;
};


export type MutationUpdateManyTranslationsArgs = {
  where?: Maybe<TranslationManyWhereInput>;
  data: TranslationUpdateManyInput;
};


export type MutationDeleteManyTranslationsArgs = {
  where?: Maybe<TranslationManyWhereInput>;
};


export type MutationPublishManyTranslationsArgs = {
  where?: Maybe<TranslationManyWhereInput>;
  to?: Array<Stage>;
  locales?: Maybe<Array<Locale>>;
  publishBase?: Maybe<Scalars['Boolean']>;
  withDefaultLocale?: Maybe<Scalars['Boolean']>;
};


export type MutationUnpublishManyTranslationsArgs = {
  where?: Maybe<TranslationManyWhereInput>;
  from?: Array<Stage>;
  locales?: Maybe<Array<Locale>>;
  unpublishBase?: Maybe<Scalars['Boolean']>;
};


export type MutationCreateFaqArgs = {
  data: FaqCreateInput;
};


export type MutationUpdateFaqArgs = {
  where: FaqWhereUniqueInput;
  data: FaqUpdateInput;
};


export type MutationDeleteFaqArgs = {
  where: FaqWhereUniqueInput;
};


export type MutationUpsertFaqArgs = {
  where: FaqWhereUniqueInput;
  upsert: FaqUpsertInput;
};


export type MutationPublishFaqArgs = {
  where: FaqWhereUniqueInput;
  locales?: Maybe<Array<Locale>>;
  publishBase?: Maybe<Scalars['Boolean']>;
  withDefaultLocale?: Maybe<Scalars['Boolean']>;
  to?: Array<Stage>;
};


export type MutationUnpublishFaqArgs = {
  where: FaqWhereUniqueInput;
  from?: Array<Stage>;
  locales?: Maybe<Array<Locale>>;
  unpublishBase?: Maybe<Scalars['Boolean']>;
};


export type MutationUpdateManyFaqsConnectionArgs = {
  where?: Maybe<FaqManyWhereInput>;
  data: FaqUpdateManyInput;
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['ID']>;
  after?: Maybe<Scalars['ID']>;
};


export type MutationDeleteManyFaqsConnectionArgs = {
  where?: Maybe<FaqManyWhereInput>;
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['ID']>;
  after?: Maybe<Scalars['ID']>;
};


export type MutationPublishManyFaqsConnectionArgs = {
  where?: Maybe<FaqManyWhereInput>;
  from?: Maybe<Stage>;
  to?: Array<Stage>;
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['ID']>;
  after?: Maybe<Scalars['ID']>;
  locales?: Maybe<Array<Locale>>;
  publishBase?: Maybe<Scalars['Boolean']>;
  withDefaultLocale?: Maybe<Scalars['Boolean']>;
};


export type MutationUnpublishManyFaqsConnectionArgs = {
  where?: Maybe<FaqManyWhereInput>;
  stage?: Maybe<Stage>;
  from?: Array<Stage>;
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['ID']>;
  after?: Maybe<Scalars['ID']>;
  locales?: Maybe<Array<Locale>>;
  unpublishBase?: Maybe<Scalars['Boolean']>;
};


export type MutationUpdateManyFaqsArgs = {
  where?: Maybe<FaqManyWhereInput>;
  data: FaqUpdateManyInput;
};


export type MutationDeleteManyFaqsArgs = {
  where?: Maybe<FaqManyWhereInput>;
};


export type MutationPublishManyFaqsArgs = {
  where?: Maybe<FaqManyWhereInput>;
  to?: Array<Stage>;
  locales?: Maybe<Array<Locale>>;
  publishBase?: Maybe<Scalars['Boolean']>;
  withDefaultLocale?: Maybe<Scalars['Boolean']>;
};


export type MutationUnpublishManyFaqsArgs = {
  where?: Maybe<FaqManyWhereInput>;
  from?: Array<Stage>;
  locales?: Maybe<Array<Locale>>;
  unpublishBase?: Maybe<Scalars['Boolean']>;
};


export type MutationCreateMemberArgs = {
  data: MemberCreateInput;
};


export type MutationUpdateMemberArgs = {
  where: MemberWhereUniqueInput;
  data: MemberUpdateInput;
};


export type MutationDeleteMemberArgs = {
  where: MemberWhereUniqueInput;
};


export type MutationUpsertMemberArgs = {
  where: MemberWhereUniqueInput;
  upsert: MemberUpsertInput;
};


export type MutationPublishMemberArgs = {
  where: MemberWhereUniqueInput;
  locales?: Maybe<Array<Locale>>;
  publishBase?: Maybe<Scalars['Boolean']>;
  withDefaultLocale?: Maybe<Scalars['Boolean']>;
  to?: Array<Stage>;
};


export type MutationUnpublishMemberArgs = {
  where: MemberWhereUniqueInput;
  from?: Array<Stage>;
  locales?: Maybe<Array<Locale>>;
  unpublishBase?: Maybe<Scalars['Boolean']>;
};


export type MutationUpdateManyMembersConnectionArgs = {
  where?: Maybe<MemberManyWhereInput>;
  data: MemberUpdateManyInput;
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['ID']>;
  after?: Maybe<Scalars['ID']>;
};


export type MutationDeleteManyMembersConnectionArgs = {
  where?: Maybe<MemberManyWhereInput>;
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['ID']>;
  after?: Maybe<Scalars['ID']>;
};


export type MutationPublishManyMembersConnectionArgs = {
  where?: Maybe<MemberManyWhereInput>;
  from?: Maybe<Stage>;
  to?: Array<Stage>;
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['ID']>;
  after?: Maybe<Scalars['ID']>;
  locales?: Maybe<Array<Locale>>;
  publishBase?: Maybe<Scalars['Boolean']>;
  withDefaultLocale?: Maybe<Scalars['Boolean']>;
};


export type MutationUnpublishManyMembersConnectionArgs = {
  where?: Maybe<MemberManyWhereInput>;
  stage?: Maybe<Stage>;
  from?: Array<Stage>;
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['ID']>;
  after?: Maybe<Scalars['ID']>;
  locales?: Maybe<Array<Locale>>;
  unpublishBase?: Maybe<Scalars['Boolean']>;
};


export type MutationUpdateManyMembersArgs = {
  where?: Maybe<MemberManyWhereInput>;
  data: MemberUpdateManyInput;
};


export type MutationDeleteManyMembersArgs = {
  where?: Maybe<MemberManyWhereInput>;
};


export type MutationPublishManyMembersArgs = {
  where?: Maybe<MemberManyWhereInput>;
  to?: Array<Stage>;
  locales?: Maybe<Array<Locale>>;
  publishBase?: Maybe<Scalars['Boolean']>;
  withDefaultLocale?: Maybe<Scalars['Boolean']>;
};


export type MutationUnpublishManyMembersArgs = {
  where?: Maybe<MemberManyWhereInput>;
  from?: Array<Stage>;
  locales?: Maybe<Array<Locale>>;
  unpublishBase?: Maybe<Scalars['Boolean']>;
};


export type MutationCreatePageArgs = {
  data: PageCreateInput;
};


export type MutationUpdatePageArgs = {
  where: PageWhereUniqueInput;
  data: PageUpdateInput;
};


export type MutationDeletePageArgs = {
  where: PageWhereUniqueInput;
};


export type MutationUpsertPageArgs = {
  where: PageWhereUniqueInput;
  upsert: PageUpsertInput;
};


export type MutationPublishPageArgs = {
  where: PageWhereUniqueInput;
  locales?: Maybe<Array<Locale>>;
  publishBase?: Maybe<Scalars['Boolean']>;
  withDefaultLocale?: Maybe<Scalars['Boolean']>;
  to?: Array<Stage>;
};


export type MutationUnpublishPageArgs = {
  where: PageWhereUniqueInput;
  from?: Array<Stage>;
  locales?: Maybe<Array<Locale>>;
  unpublishBase?: Maybe<Scalars['Boolean']>;
};


export type MutationUpdateManyPagesConnectionArgs = {
  where?: Maybe<PageManyWhereInput>;
  data: PageUpdateManyInput;
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['ID']>;
  after?: Maybe<Scalars['ID']>;
};


export type MutationDeleteManyPagesConnectionArgs = {
  where?: Maybe<PageManyWhereInput>;
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['ID']>;
  after?: Maybe<Scalars['ID']>;
};


export type MutationPublishManyPagesConnectionArgs = {
  where?: Maybe<PageManyWhereInput>;
  from?: Maybe<Stage>;
  to?: Array<Stage>;
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['ID']>;
  after?: Maybe<Scalars['ID']>;
  locales?: Maybe<Array<Locale>>;
  publishBase?: Maybe<Scalars['Boolean']>;
  withDefaultLocale?: Maybe<Scalars['Boolean']>;
};


export type MutationUnpublishManyPagesConnectionArgs = {
  where?: Maybe<PageManyWhereInput>;
  stage?: Maybe<Stage>;
  from?: Array<Stage>;
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['ID']>;
  after?: Maybe<Scalars['ID']>;
  locales?: Maybe<Array<Locale>>;
  unpublishBase?: Maybe<Scalars['Boolean']>;
};


export type MutationUpdateManyPagesArgs = {
  where?: Maybe<PageManyWhereInput>;
  data: PageUpdateManyInput;
};


export type MutationDeleteManyPagesArgs = {
  where?: Maybe<PageManyWhereInput>;
};


export type MutationPublishManyPagesArgs = {
  where?: Maybe<PageManyWhereInput>;
  to?: Array<Stage>;
  locales?: Maybe<Array<Locale>>;
  publishBase?: Maybe<Scalars['Boolean']>;
  withDefaultLocale?: Maybe<Scalars['Boolean']>;
};


export type MutationUnpublishManyPagesArgs = {
  where?: Maybe<PageManyWhereInput>;
  from?: Array<Stage>;
  locales?: Maybe<Array<Locale>>;
  unpublishBase?: Maybe<Scalars['Boolean']>;
};


export type MutationCreateBlogArgs = {
  data: BlogCreateInput;
};


export type MutationUpdateBlogArgs = {
  where: BlogWhereUniqueInput;
  data: BlogUpdateInput;
};


export type MutationDeleteBlogArgs = {
  where: BlogWhereUniqueInput;
};


export type MutationUpsertBlogArgs = {
  where: BlogWhereUniqueInput;
  upsert: BlogUpsertInput;
};


export type MutationPublishBlogArgs = {
  where: BlogWhereUniqueInput;
  locales?: Maybe<Array<Locale>>;
  publishBase?: Maybe<Scalars['Boolean']>;
  withDefaultLocale?: Maybe<Scalars['Boolean']>;
  to?: Array<Stage>;
};


export type MutationUnpublishBlogArgs = {
  where: BlogWhereUniqueInput;
  from?: Array<Stage>;
  locales?: Maybe<Array<Locale>>;
  unpublishBase?: Maybe<Scalars['Boolean']>;
};


export type MutationUpdateManyBlogsConnectionArgs = {
  where?: Maybe<BlogManyWhereInput>;
  data: BlogUpdateManyInput;
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['ID']>;
  after?: Maybe<Scalars['ID']>;
};


export type MutationDeleteManyBlogsConnectionArgs = {
  where?: Maybe<BlogManyWhereInput>;
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['ID']>;
  after?: Maybe<Scalars['ID']>;
};


export type MutationPublishManyBlogsConnectionArgs = {
  where?: Maybe<BlogManyWhereInput>;
  from?: Maybe<Stage>;
  to?: Array<Stage>;
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['ID']>;
  after?: Maybe<Scalars['ID']>;
  locales?: Maybe<Array<Locale>>;
  publishBase?: Maybe<Scalars['Boolean']>;
  withDefaultLocale?: Maybe<Scalars['Boolean']>;
};


export type MutationUnpublishManyBlogsConnectionArgs = {
  where?: Maybe<BlogManyWhereInput>;
  stage?: Maybe<Stage>;
  from?: Array<Stage>;
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['ID']>;
  after?: Maybe<Scalars['ID']>;
  locales?: Maybe<Array<Locale>>;
  unpublishBase?: Maybe<Scalars['Boolean']>;
};


export type MutationUpdateManyBlogsArgs = {
  where?: Maybe<BlogManyWhereInput>;
  data: BlogUpdateManyInput;
};


export type MutationDeleteManyBlogsArgs = {
  where?: Maybe<BlogManyWhereInput>;
};


export type MutationPublishManyBlogsArgs = {
  where?: Maybe<BlogManyWhereInput>;
  to?: Array<Stage>;
  locales?: Maybe<Array<Locale>>;
  publishBase?: Maybe<Scalars['Boolean']>;
  withDefaultLocale?: Maybe<Scalars['Boolean']>;
};


export type MutationUnpublishManyBlogsArgs = {
  where?: Maybe<BlogManyWhereInput>;
  from?: Array<Stage>;
  locales?: Maybe<Array<Locale>>;
  unpublishBase?: Maybe<Scalars['Boolean']>;
};


export type MutationCreateShopArgs = {
  data: ShopCreateInput;
};


export type MutationUpdateShopArgs = {
  where: ShopWhereUniqueInput;
  data: ShopUpdateInput;
};


export type MutationDeleteShopArgs = {
  where: ShopWhereUniqueInput;
};


export type MutationUpsertShopArgs = {
  where: ShopWhereUniqueInput;
  upsert: ShopUpsertInput;
};


export type MutationPublishShopArgs = {
  where: ShopWhereUniqueInput;
  to?: Array<Stage>;
};


export type MutationUnpublishShopArgs = {
  where: ShopWhereUniqueInput;
  from?: Array<Stage>;
};


export type MutationUpdateManyShopsConnectionArgs = {
  where?: Maybe<ShopManyWhereInput>;
  data: ShopUpdateManyInput;
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['ID']>;
  after?: Maybe<Scalars['ID']>;
};


export type MutationDeleteManyShopsConnectionArgs = {
  where?: Maybe<ShopManyWhereInput>;
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['ID']>;
  after?: Maybe<Scalars['ID']>;
};


export type MutationPublishManyShopsConnectionArgs = {
  where?: Maybe<ShopManyWhereInput>;
  from?: Maybe<Stage>;
  to?: Array<Stage>;
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['ID']>;
  after?: Maybe<Scalars['ID']>;
};


export type MutationUnpublishManyShopsConnectionArgs = {
  where?: Maybe<ShopManyWhereInput>;
  stage?: Maybe<Stage>;
  from?: Array<Stage>;
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['ID']>;
  after?: Maybe<Scalars['ID']>;
};


export type MutationUpdateManyShopsArgs = {
  where?: Maybe<ShopManyWhereInput>;
  data: ShopUpdateManyInput;
};


export type MutationDeleteManyShopsArgs = {
  where?: Maybe<ShopManyWhereInput>;
};


export type MutationPublishManyShopsArgs = {
  where?: Maybe<ShopManyWhereInput>;
  to?: Array<Stage>;
};


export type MutationUnpublishManyShopsArgs = {
  where?: Maybe<ShopManyWhereInput>;
  from?: Array<Stage>;
};


export type MutationCreateKpiArgs = {
  data: KpiCreateInput;
};


export type MutationUpdateKpiArgs = {
  where: KpiWhereUniqueInput;
  data: KpiUpdateInput;
};


export type MutationDeleteKpiArgs = {
  where: KpiWhereUniqueInput;
};


export type MutationUpsertKpiArgs = {
  where: KpiWhereUniqueInput;
  upsert: KpiUpsertInput;
};


export type MutationPublishKpiArgs = {
  where: KpiWhereUniqueInput;
  locales?: Maybe<Array<Locale>>;
  publishBase?: Maybe<Scalars['Boolean']>;
  withDefaultLocale?: Maybe<Scalars['Boolean']>;
  to?: Array<Stage>;
};


export type MutationUnpublishKpiArgs = {
  where: KpiWhereUniqueInput;
  from?: Array<Stage>;
  locales?: Maybe<Array<Locale>>;
  unpublishBase?: Maybe<Scalars['Boolean']>;
};


export type MutationUpdateManyKpisConnectionArgs = {
  where?: Maybe<KpiManyWhereInput>;
  data: KpiUpdateManyInput;
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['ID']>;
  after?: Maybe<Scalars['ID']>;
};


export type MutationDeleteManyKpisConnectionArgs = {
  where?: Maybe<KpiManyWhereInput>;
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['ID']>;
  after?: Maybe<Scalars['ID']>;
};


export type MutationPublishManyKpisConnectionArgs = {
  where?: Maybe<KpiManyWhereInput>;
  from?: Maybe<Stage>;
  to?: Array<Stage>;
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['ID']>;
  after?: Maybe<Scalars['ID']>;
  locales?: Maybe<Array<Locale>>;
  publishBase?: Maybe<Scalars['Boolean']>;
  withDefaultLocale?: Maybe<Scalars['Boolean']>;
};


export type MutationUnpublishManyKpisConnectionArgs = {
  where?: Maybe<KpiManyWhereInput>;
  stage?: Maybe<Stage>;
  from?: Array<Stage>;
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['ID']>;
  after?: Maybe<Scalars['ID']>;
  locales?: Maybe<Array<Locale>>;
  unpublishBase?: Maybe<Scalars['Boolean']>;
};


export type MutationUpdateManyKpisArgs = {
  where?: Maybe<KpiManyWhereInput>;
  data: KpiUpdateManyInput;
};


export type MutationDeleteManyKpisArgs = {
  where?: Maybe<KpiManyWhereInput>;
};


export type MutationPublishManyKpisArgs = {
  where?: Maybe<KpiManyWhereInput>;
  to?: Array<Stage>;
  locales?: Maybe<Array<Locale>>;
  publishBase?: Maybe<Scalars['Boolean']>;
  withDefaultLocale?: Maybe<Scalars['Boolean']>;
};


export type MutationUnpublishManyKpisArgs = {
  where?: Maybe<KpiManyWhereInput>;
  from?: Array<Stage>;
  locales?: Maybe<Array<Locale>>;
  unpublishBase?: Maybe<Scalars['Boolean']>;
};

/** An object with an ID */
export type Node = {
  /** The id of the object. */
  id: Scalars['ID'];
  /** The Stage of an object */
  stage: Stage;
};

export type Page = Node & {
  __typename?: 'Page';
  /** System stage field */
  stage: Stage;
  /** System Locale field */
  locale: Locale;
  /** Get the other localizations for this document */
  localizations: Array<Page>;
  /** Get the document in other stages */
  documentInStages: Array<Page>;
  /** The unique identifier */
  id: Scalars['ID'];
  /** The time the document was created */
  createdAt: Scalars['DateTime'];
  /** The time the document was updated */
  updatedAt: Scalars['DateTime'];
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']>;
  title?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  vibrantColor?: Maybe<Color>;
  metaDescription?: Maybe<Scalars['String']>;
  metaKeywords?: Maybe<Scalars['String']>;
  content?: Maybe<RichText>;
  /** User that created this document */
  createdBy?: Maybe<User>;
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  pageSections: Array<PageSection>;
  /** List of Page versions */
  history: Array<Version>;
};


export type PageLocalizationsArgs = {
  locales?: Array<Locale>;
  includeCurrent?: Scalars['Boolean'];
};


export type PageDocumentInStagesArgs = {
  stages?: Array<Stage>;
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
};


export type PageCreatedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};


export type PageUpdatedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};


export type PagePublishedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};


export type PageCreatedByArgs = {
  locales?: Maybe<Array<Locale>>;
};


export type PageUpdatedByArgs = {
  locales?: Maybe<Array<Locale>>;
};


export type PagePublishedByArgs = {
  locales?: Maybe<Array<Locale>>;
};


export type PagePageSectionsArgs = {
  where?: Maybe<PageSectionWhereInput>;
  orderBy?: Maybe<PageSectionOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  locales?: Maybe<Array<Locale>>;
};


export type PageHistoryArgs = {
  limit?: Scalars['Int'];
  skip?: Scalars['Int'];
  stageOverride?: Maybe<Stage>;
};

export type PageConnectInput = {
  /** Document to connect */
  where: PageWhereUniqueInput;
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: Maybe<ConnectPositionInput>;
};

/** A connection to a list of items. */
export type PageConnection = {
  __typename?: 'PageConnection';
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** A list of edges. */
  edges: Array<PageEdge>;
  aggregate: Aggregate;
};

export type PageCreateInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  /** title input for default locale (de) */
  title?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  vibrantColor?: Maybe<ColorInput>;
  metaDescription?: Maybe<Scalars['String']>;
  metaKeywords?: Maybe<Scalars['String']>;
  content?: Maybe<Scalars['RichTextAST']>;
  pageSections?: Maybe<PageSectionCreateManyInlineInput>;
  /** Inline mutations for managing document localizations excluding the default locale */
  localizations?: Maybe<PageCreateLocalizationsInput>;
};

export type PageCreateLocalizationDataInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  title?: Maybe<Scalars['String']>;
};

export type PageCreateLocalizationInput = {
  /** Localization input */
  data: PageCreateLocalizationDataInput;
  locale: Locale;
};

export type PageCreateLocalizationsInput = {
  /** Create localizations for the newly-created document */
  create?: Maybe<Array<PageCreateLocalizationInput>>;
};

export type PageCreateManyInlineInput = {
  /** Create and connect multiple existing Page documents */
  create?: Maybe<Array<PageCreateInput>>;
  /** Connect multiple existing Page documents */
  connect?: Maybe<Array<PageWhereUniqueInput>>;
};

export type PageCreateOneInlineInput = {
  /** Create and connect one Page document */
  create?: Maybe<PageCreateInput>;
  /** Connect one existing Page document */
  connect?: Maybe<PageWhereUniqueInput>;
};

/** An edge in a connection. */
export type PageEdge = {
  __typename?: 'PageEdge';
  /** The item at the end of the edge. */
  node: Page;
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
};

/** Information about pagination in a connection. */
export type PageInfo = {
  __typename?: 'PageInfo';
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean'];
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']>;
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']>;
  /** Number of items in the current page. */
  pageSize?: Maybe<Scalars['Int']>;
};

/** Identifies documents */
export type PageManyWhereInput = {
  /** Contains search across all appropriate fields. */
  _search?: Maybe<Scalars['String']>;
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<PageWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<PageWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<PageWhereInput>>;
  id?: Maybe<Scalars['ID']>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: Maybe<Scalars['DateTime']>;
  slug?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  slug_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  slug_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  slug_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  slug_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  slug_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  slug_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  slug_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  slug_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  slug_not_ends_with?: Maybe<Scalars['String']>;
  metaDescription?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  metaDescription_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  metaDescription_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  metaDescription_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  metaDescription_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  metaDescription_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  metaDescription_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  metaDescription_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  metaDescription_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  metaDescription_not_ends_with?: Maybe<Scalars['String']>;
  metaKeywords?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  metaKeywords_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  metaKeywords_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  metaKeywords_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  metaKeywords_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  metaKeywords_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  metaKeywords_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  metaKeywords_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  metaKeywords_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  metaKeywords_not_ends_with?: Maybe<Scalars['String']>;
  createdBy?: Maybe<UserWhereInput>;
  updatedBy?: Maybe<UserWhereInput>;
  publishedBy?: Maybe<UserWhereInput>;
  pageSections_every?: Maybe<PageSectionWhereInput>;
  pageSections_some?: Maybe<PageSectionWhereInput>;
  pageSections_none?: Maybe<PageSectionWhereInput>;
};

export enum PageOrderByInput {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  MetaDescriptionAsc = 'metaDescription_ASC',
  MetaDescriptionDesc = 'metaDescription_DESC',
  MetaKeywordsAsc = 'metaKeywords_ASC',
  MetaKeywordsDesc = 'metaKeywords_DESC'
}

export type PageSection = Node & {
  __typename?: 'PageSection';
  /** System stage field */
  stage: Stage;
  /** System Locale field */
  locale: Locale;
  /** Get the other localizations for this document */
  localizations: Array<PageSection>;
  /** Get the document in other stages */
  documentInStages: Array<PageSection>;
  /** The unique identifier */
  id: Scalars['ID'];
  /** The time the document was created */
  createdAt: Scalars['DateTime'];
  /** The time the document was updated */
  updatedAt: Scalars['DateTime'];
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']>;
  title: Scalars['String'];
  code?: Maybe<Scalars['String']>;
  content: RichText;
  /** User that created this document */
  createdBy?: Maybe<User>;
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  picture: Array<Asset>;
  page?: Maybe<Page>;
  /** List of PageSection versions */
  history: Array<Version>;
};


export type PageSectionLocalizationsArgs = {
  locales?: Array<Locale>;
  includeCurrent?: Scalars['Boolean'];
};


export type PageSectionDocumentInStagesArgs = {
  stages?: Array<Stage>;
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
};


export type PageSectionCreatedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};


export type PageSectionUpdatedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};


export type PageSectionPublishedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};


export type PageSectionCreatedByArgs = {
  locales?: Maybe<Array<Locale>>;
};


export type PageSectionUpdatedByArgs = {
  locales?: Maybe<Array<Locale>>;
};


export type PageSectionPublishedByArgs = {
  locales?: Maybe<Array<Locale>>;
};


export type PageSectionPictureArgs = {
  where?: Maybe<AssetWhereInput>;
  orderBy?: Maybe<AssetOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  locales?: Maybe<Array<Locale>>;
};


export type PageSectionPageArgs = {
  locales?: Maybe<Array<Locale>>;
};


export type PageSectionHistoryArgs = {
  limit?: Scalars['Int'];
  skip?: Scalars['Int'];
  stageOverride?: Maybe<Stage>;
};

export type PageSectionConnectInput = {
  /** Document to connect */
  where: PageSectionWhereUniqueInput;
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: Maybe<ConnectPositionInput>;
};

/** A connection to a list of items. */
export type PageSectionConnection = {
  __typename?: 'PageSectionConnection';
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** A list of edges. */
  edges: Array<PageSectionEdge>;
  aggregate: Aggregate;
};

export type PageSectionCreateInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  /** title input for default locale (de) */
  title: Scalars['String'];
  code?: Maybe<Scalars['String']>;
  /** content input for default locale (de) */
  content: Scalars['RichTextAST'];
  picture?: Maybe<AssetCreateManyInlineInput>;
  page?: Maybe<PageCreateOneInlineInput>;
  /** Inline mutations for managing document localizations excluding the default locale */
  localizations?: Maybe<PageSectionCreateLocalizationsInput>;
};

export type PageSectionCreateLocalizationDataInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  title: Scalars['String'];
  content: Scalars['RichTextAST'];
};

export type PageSectionCreateLocalizationInput = {
  /** Localization input */
  data: PageSectionCreateLocalizationDataInput;
  locale: Locale;
};

export type PageSectionCreateLocalizationsInput = {
  /** Create localizations for the newly-created document */
  create?: Maybe<Array<PageSectionCreateLocalizationInput>>;
};

export type PageSectionCreateManyInlineInput = {
  /** Create and connect multiple existing PageSection documents */
  create?: Maybe<Array<PageSectionCreateInput>>;
  /** Connect multiple existing PageSection documents */
  connect?: Maybe<Array<PageSectionWhereUniqueInput>>;
};

export type PageSectionCreateOneInlineInput = {
  /** Create and connect one PageSection document */
  create?: Maybe<PageSectionCreateInput>;
  /** Connect one existing PageSection document */
  connect?: Maybe<PageSectionWhereUniqueInput>;
};

/** An edge in a connection. */
export type PageSectionEdge = {
  __typename?: 'PageSectionEdge';
  /** The item at the end of the edge. */
  node: PageSection;
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
};

/** Identifies documents */
export type PageSectionManyWhereInput = {
  /** Contains search across all appropriate fields. */
  _search?: Maybe<Scalars['String']>;
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<PageSectionWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<PageSectionWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<PageSectionWhereInput>>;
  id?: Maybe<Scalars['ID']>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: Maybe<Scalars['DateTime']>;
  code?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  code_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  code_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  code_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  code_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  code_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  code_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  code_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  code_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  code_not_ends_with?: Maybe<Scalars['String']>;
  createdBy?: Maybe<UserWhereInput>;
  updatedBy?: Maybe<UserWhereInput>;
  publishedBy?: Maybe<UserWhereInput>;
  picture_every?: Maybe<AssetWhereInput>;
  picture_some?: Maybe<AssetWhereInput>;
  picture_none?: Maybe<AssetWhereInput>;
  page?: Maybe<PageWhereInput>;
};

export enum PageSectionOrderByInput {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  CodeAsc = 'code_ASC',
  CodeDesc = 'code_DESC'
}

export type PageSectionUpdateInput = {
  /** title input for default locale (de) */
  title?: Maybe<Scalars['String']>;
  code?: Maybe<Scalars['String']>;
  /** content input for default locale (de) */
  content?: Maybe<Scalars['RichTextAST']>;
  picture?: Maybe<AssetUpdateManyInlineInput>;
  page?: Maybe<PageUpdateOneInlineInput>;
  /** Manage document localizations */
  localizations?: Maybe<PageSectionUpdateLocalizationsInput>;
};

export type PageSectionUpdateLocalizationDataInput = {
  title?: Maybe<Scalars['String']>;
  content?: Maybe<Scalars['RichTextAST']>;
};

export type PageSectionUpdateLocalizationInput = {
  data: PageSectionUpdateLocalizationDataInput;
  locale: Locale;
};

export type PageSectionUpdateLocalizationsInput = {
  /** Localizations to create */
  create?: Maybe<Array<PageSectionCreateLocalizationInput>>;
  /** Localizations to update */
  update?: Maybe<Array<PageSectionUpdateLocalizationInput>>;
  upsert?: Maybe<Array<PageSectionUpsertLocalizationInput>>;
  /** Localizations to delete */
  delete?: Maybe<Array<Locale>>;
};

export type PageSectionUpdateManyInlineInput = {
  /** Create and connect multiple PageSection documents */
  create?: Maybe<Array<PageSectionCreateInput>>;
  /** Connect multiple existing PageSection documents */
  connect?: Maybe<Array<PageSectionConnectInput>>;
  /** Override currently-connected documents with multiple existing PageSection documents */
  set?: Maybe<Array<PageSectionWhereUniqueInput>>;
  /** Update multiple PageSection documents */
  update?: Maybe<Array<PageSectionUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple PageSection documents */
  upsert?: Maybe<Array<PageSectionUpsertWithNestedWhereUniqueInput>>;
  /** Disconnect multiple PageSection documents */
  disconnect?: Maybe<Array<PageSectionWhereUniqueInput>>;
  /** Delete multiple PageSection documents */
  delete?: Maybe<Array<PageSectionWhereUniqueInput>>;
};

export type PageSectionUpdateManyInput = {
  /** title input for default locale (de) */
  title?: Maybe<Scalars['String']>;
  code?: Maybe<Scalars['String']>;
  /** content input for default locale (de) */
  content?: Maybe<Scalars['RichTextAST']>;
  /** Optional updates to localizations */
  localizations?: Maybe<PageSectionUpdateManyLocalizationsInput>;
};

export type PageSectionUpdateManyLocalizationDataInput = {
  title?: Maybe<Scalars['String']>;
  content?: Maybe<Scalars['RichTextAST']>;
};

export type PageSectionUpdateManyLocalizationInput = {
  data: PageSectionUpdateManyLocalizationDataInput;
  locale: Locale;
};

export type PageSectionUpdateManyLocalizationsInput = {
  /** Localizations to update */
  update?: Maybe<Array<PageSectionUpdateManyLocalizationInput>>;
};

export type PageSectionUpdateManyWithNestedWhereInput = {
  /** Document search */
  where: PageSectionWhereInput;
  /** Update many input */
  data: PageSectionUpdateManyInput;
};

export type PageSectionUpdateOneInlineInput = {
  /** Create and connect one PageSection document */
  create?: Maybe<PageSectionCreateInput>;
  /** Update single PageSection document */
  update?: Maybe<PageSectionUpdateWithNestedWhereUniqueInput>;
  /** Upsert single PageSection document */
  upsert?: Maybe<PageSectionUpsertWithNestedWhereUniqueInput>;
  /** Connect existing PageSection document */
  connect?: Maybe<PageSectionWhereUniqueInput>;
  /** Disconnect currently connected PageSection document */
  disconnect?: Maybe<Scalars['Boolean']>;
  /** Delete currently connected PageSection document */
  delete?: Maybe<Scalars['Boolean']>;
};

export type PageSectionUpdateWithNestedWhereUniqueInput = {
  /** Unique document search */
  where: PageSectionWhereUniqueInput;
  /** Document to update */
  data: PageSectionUpdateInput;
};

export type PageSectionUpsertInput = {
  /** Create document if it didn't exist */
  create: PageSectionCreateInput;
  /** Update document if it exists */
  update: PageSectionUpdateInput;
};

export type PageSectionUpsertLocalizationInput = {
  update: PageSectionUpdateLocalizationDataInput;
  create: PageSectionCreateLocalizationDataInput;
  locale: Locale;
};

export type PageSectionUpsertWithNestedWhereUniqueInput = {
  /** Unique document search */
  where: PageSectionWhereUniqueInput;
  /** Upsert data */
  data: PageSectionUpsertInput;
};

/** Identifies documents */
export type PageSectionWhereInput = {
  /** Contains search across all appropriate fields. */
  _search?: Maybe<Scalars['String']>;
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<PageSectionWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<PageSectionWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<PageSectionWhereInput>>;
  id?: Maybe<Scalars['ID']>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: Maybe<Scalars['DateTime']>;
  title?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  title_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  title_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  title_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  title_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  title_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  title_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  title_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  title_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  title_not_ends_with?: Maybe<Scalars['String']>;
  code?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  code_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  code_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  code_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  code_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  code_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  code_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  code_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  code_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  code_not_ends_with?: Maybe<Scalars['String']>;
  createdBy?: Maybe<UserWhereInput>;
  updatedBy?: Maybe<UserWhereInput>;
  publishedBy?: Maybe<UserWhereInput>;
  picture_every?: Maybe<AssetWhereInput>;
  picture_some?: Maybe<AssetWhereInput>;
  picture_none?: Maybe<AssetWhereInput>;
  page?: Maybe<PageWhereInput>;
};

/** References PageSection record uniquely */
export type PageSectionWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>;
};

export type PageUpdateInput = {
  /** title input for default locale (de) */
  title?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  vibrantColor?: Maybe<ColorInput>;
  metaDescription?: Maybe<Scalars['String']>;
  metaKeywords?: Maybe<Scalars['String']>;
  content?: Maybe<Scalars['RichTextAST']>;
  pageSections?: Maybe<PageSectionUpdateManyInlineInput>;
  /** Manage document localizations */
  localizations?: Maybe<PageUpdateLocalizationsInput>;
};

export type PageUpdateLocalizationDataInput = {
  title?: Maybe<Scalars['String']>;
};

export type PageUpdateLocalizationInput = {
  data: PageUpdateLocalizationDataInput;
  locale: Locale;
};

export type PageUpdateLocalizationsInput = {
  /** Localizations to create */
  create?: Maybe<Array<PageCreateLocalizationInput>>;
  /** Localizations to update */
  update?: Maybe<Array<PageUpdateLocalizationInput>>;
  upsert?: Maybe<Array<PageUpsertLocalizationInput>>;
  /** Localizations to delete */
  delete?: Maybe<Array<Locale>>;
};

export type PageUpdateManyInlineInput = {
  /** Create and connect multiple Page documents */
  create?: Maybe<Array<PageCreateInput>>;
  /** Connect multiple existing Page documents */
  connect?: Maybe<Array<PageConnectInput>>;
  /** Override currently-connected documents with multiple existing Page documents */
  set?: Maybe<Array<PageWhereUniqueInput>>;
  /** Update multiple Page documents */
  update?: Maybe<Array<PageUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple Page documents */
  upsert?: Maybe<Array<PageUpsertWithNestedWhereUniqueInput>>;
  /** Disconnect multiple Page documents */
  disconnect?: Maybe<Array<PageWhereUniqueInput>>;
  /** Delete multiple Page documents */
  delete?: Maybe<Array<PageWhereUniqueInput>>;
};

export type PageUpdateManyInput = {
  /** title input for default locale (de) */
  title?: Maybe<Scalars['String']>;
  vibrantColor?: Maybe<ColorInput>;
  metaDescription?: Maybe<Scalars['String']>;
  metaKeywords?: Maybe<Scalars['String']>;
  content?: Maybe<Scalars['RichTextAST']>;
  /** Optional updates to localizations */
  localizations?: Maybe<PageUpdateManyLocalizationsInput>;
};

export type PageUpdateManyLocalizationDataInput = {
  title?: Maybe<Scalars['String']>;
};

export type PageUpdateManyLocalizationInput = {
  data: PageUpdateManyLocalizationDataInput;
  locale: Locale;
};

export type PageUpdateManyLocalizationsInput = {
  /** Localizations to update */
  update?: Maybe<Array<PageUpdateManyLocalizationInput>>;
};

export type PageUpdateManyWithNestedWhereInput = {
  /** Document search */
  where: PageWhereInput;
  /** Update many input */
  data: PageUpdateManyInput;
};

export type PageUpdateOneInlineInput = {
  /** Create and connect one Page document */
  create?: Maybe<PageCreateInput>;
  /** Update single Page document */
  update?: Maybe<PageUpdateWithNestedWhereUniqueInput>;
  /** Upsert single Page document */
  upsert?: Maybe<PageUpsertWithNestedWhereUniqueInput>;
  /** Connect existing Page document */
  connect?: Maybe<PageWhereUniqueInput>;
  /** Disconnect currently connected Page document */
  disconnect?: Maybe<Scalars['Boolean']>;
  /** Delete currently connected Page document */
  delete?: Maybe<Scalars['Boolean']>;
};

export type PageUpdateWithNestedWhereUniqueInput = {
  /** Unique document search */
  where: PageWhereUniqueInput;
  /** Document to update */
  data: PageUpdateInput;
};

export type PageUpsertInput = {
  /** Create document if it didn't exist */
  create: PageCreateInput;
  /** Update document if it exists */
  update: PageUpdateInput;
};

export type PageUpsertLocalizationInput = {
  update: PageUpdateLocalizationDataInput;
  create: PageCreateLocalizationDataInput;
  locale: Locale;
};

export type PageUpsertWithNestedWhereUniqueInput = {
  /** Unique document search */
  where: PageWhereUniqueInput;
  /** Upsert data */
  data: PageUpsertInput;
};

/** Identifies documents */
export type PageWhereInput = {
  /** Contains search across all appropriate fields. */
  _search?: Maybe<Scalars['String']>;
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<PageWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<PageWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<PageWhereInput>>;
  id?: Maybe<Scalars['ID']>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: Maybe<Scalars['DateTime']>;
  title?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  title_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  title_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  title_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  title_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  title_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  title_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  title_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  title_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  title_not_ends_with?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  slug_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  slug_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  slug_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  slug_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  slug_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  slug_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  slug_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  slug_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  slug_not_ends_with?: Maybe<Scalars['String']>;
  metaDescription?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  metaDescription_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  metaDescription_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  metaDescription_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  metaDescription_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  metaDescription_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  metaDescription_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  metaDescription_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  metaDescription_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  metaDescription_not_ends_with?: Maybe<Scalars['String']>;
  metaKeywords?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  metaKeywords_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  metaKeywords_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  metaKeywords_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  metaKeywords_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  metaKeywords_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  metaKeywords_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  metaKeywords_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  metaKeywords_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  metaKeywords_not_ends_with?: Maybe<Scalars['String']>;
  createdBy?: Maybe<UserWhereInput>;
  updatedBy?: Maybe<UserWhereInput>;
  publishedBy?: Maybe<UserWhereInput>;
  pageSections_every?: Maybe<PageSectionWhereInput>;
  pageSections_some?: Maybe<PageSectionWhereInput>;
  pageSections_none?: Maybe<PageSectionWhereInput>;
};

/** References Page record uniquely */
export type PageWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>;
  slug?: Maybe<Scalars['String']>;
};

export type PublishLocaleInput = {
  /** Locales to publish */
  locale: Locale;
  /** Stages to publish selected locales to */
  stages: Array<Stage>;
};

export type Query = {
  __typename?: 'Query';
  /** Fetches an object given its ID */
  node?: Maybe<Node>;
  /** Retrieve multiple supporters */
  supporters: Array<Supporter>;
  /** Retrieve a single supporter */
  supporter?: Maybe<Supporter>;
  /** Retrieve multiple supporters using the Relay connection interface */
  supportersConnection: SupporterConnection;
  /** Retrieve document version */
  supporterVersion?: Maybe<DocumentVersion>;
  /** Retrieve multiple shopTowns */
  shopTowns: Array<ShopTown>;
  /** Retrieve a single shopTown */
  shopTown?: Maybe<ShopTown>;
  /** Retrieve multiple shopTowns using the Relay connection interface */
  shopTownsConnection: ShopTownConnection;
  /** Retrieve document version */
  shopTownVersion?: Maybe<DocumentVersion>;
  /** Retrieve multiple shopTypes */
  shopTypes: Array<ShopType>;
  /** Retrieve a single shopType */
  shopType?: Maybe<ShopType>;
  /** Retrieve multiple shopTypes using the Relay connection interface */
  shopTypesConnection: ShopTypeConnection;
  /** Retrieve document version */
  shopTypeVersion?: Maybe<DocumentVersion>;
  /** Retrieve multiple shopCategories */
  shopCategories: Array<ShopCategory>;
  /** Retrieve a single shopCategory */
  shopCategory?: Maybe<ShopCategory>;
  /** Retrieve multiple shopCategories using the Relay connection interface */
  shopCategoriesConnection: ShopCategoryConnection;
  /** Retrieve document version */
  shopCategoryVersion?: Maybe<DocumentVersion>;
  /** Retrieve multiple users */
  users: Array<User>;
  /** Retrieve a single user */
  user?: Maybe<User>;
  /** Retrieve multiple users using the Relay connection interface */
  usersConnection: UserConnection;
  /** Retrieve multiple assets */
  assets: Array<Asset>;
  /** Retrieve a single asset */
  asset?: Maybe<Asset>;
  /** Retrieve multiple assets using the Relay connection interface */
  assetsConnection: AssetConnection;
  /** Retrieve document version */
  assetVersion?: Maybe<DocumentVersion>;
  /** Retrieve multiple pageSections */
  pageSections: Array<PageSection>;
  /** Retrieve a single pageSection */
  pageSection?: Maybe<PageSection>;
  /** Retrieve multiple pageSections using the Relay connection interface */
  pageSectionsConnection: PageSectionConnection;
  /** Retrieve document version */
  pageSectionVersion?: Maybe<DocumentVersion>;
  /** Retrieve multiple cityPartners */
  cityPartners: Array<CityPartner>;
  /** Retrieve a single cityPartner */
  cityPartner?: Maybe<CityPartner>;
  /** Retrieve multiple cityPartners using the Relay connection interface */
  cityPartnersConnection: CityPartnerConnection;
  /** Retrieve document version */
  cityPartnerVersion?: Maybe<DocumentVersion>;
  /** Retrieve multiple shopBundeslands */
  shopBundeslands: Array<ShopBundesland>;
  /** Retrieve a single shopBundesland */
  shopBundesland?: Maybe<ShopBundesland>;
  /** Retrieve multiple shopBundeslands using the Relay connection interface */
  shopBundeslandsConnection: ShopBundeslandConnection;
  /** Retrieve document version */
  shopBundeslandVersion?: Maybe<DocumentVersion>;
  /** Retrieve multiple shopStatuses */
  shopStatuses: Array<ShopStatus>;
  /** Retrieve a single shopStatus */
  shopStatus?: Maybe<ShopStatus>;
  /** Retrieve multiple shopStatuses using the Relay connection interface */
  shopStatusesConnection: ShopStatusConnection;
  /** Retrieve document version */
  shopStatusVersion?: Maybe<DocumentVersion>;
  /** Retrieve multiple translations */
  translations: Array<Translation>;
  /** Retrieve a single translation */
  translation?: Maybe<Translation>;
  /** Retrieve multiple translations using the Relay connection interface */
  translationsConnection: TranslationConnection;
  /** Retrieve document version */
  translationVersion?: Maybe<DocumentVersion>;
  /** Retrieve multiple faqs */
  faqs: Array<Faq>;
  /** Retrieve a single faq */
  faq?: Maybe<Faq>;
  /** Retrieve multiple faqs using the Relay connection interface */
  faqsConnection: FaqConnection;
  /** Retrieve document version */
  faqVersion?: Maybe<DocumentVersion>;
  /** Retrieve multiple members */
  members: Array<Member>;
  /** Retrieve a single member */
  member?: Maybe<Member>;
  /** Retrieve multiple members using the Relay connection interface */
  membersConnection: MemberConnection;
  /** Retrieve document version */
  memberVersion?: Maybe<DocumentVersion>;
  /** Retrieve multiple pages */
  pages: Array<Page>;
  /** Retrieve a single page */
  page?: Maybe<Page>;
  /** Retrieve multiple pages using the Relay connection interface */
  pagesConnection: PageConnection;
  /** Retrieve document version */
  pageVersion?: Maybe<DocumentVersion>;
  /** Retrieve multiple blogs */
  blogs: Array<Blog>;
  /** Retrieve a single blog */
  blog?: Maybe<Blog>;
  /** Retrieve multiple blogs using the Relay connection interface */
  blogsConnection: BlogConnection;
  /** Retrieve document version */
  blogVersion?: Maybe<DocumentVersion>;
  /** Retrieve multiple shops */
  shops: Array<Shop>;
  /** Retrieve a single shop */
  shop?: Maybe<Shop>;
  /** Retrieve multiple shops using the Relay connection interface */
  shopsConnection: ShopConnection;
  /** Retrieve document version */
  shopVersion?: Maybe<DocumentVersion>;
  /** Retrieve multiple kpis */
  kpis: Array<Kpi>;
  /** Retrieve a single kpi */
  kpi?: Maybe<Kpi>;
  /** Retrieve multiple kpis using the Relay connection interface */
  kpisConnection: KpiConnection;
  /** Retrieve document version */
  kpiVersion?: Maybe<DocumentVersion>;
};


export type QueryNodeArgs = {
  id: Scalars['ID'];
  stage?: Stage;
  locales?: Array<Locale>;
};


export type QuerySupportersArgs = {
  where?: Maybe<SupporterWhereInput>;
  orderBy?: Maybe<SupporterOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  stage?: Stage;
  locales?: Array<Locale>;
};


export type QuerySupporterArgs = {
  where: SupporterWhereUniqueInput;
  stage?: Stage;
  locales?: Array<Locale>;
};


export type QuerySupportersConnectionArgs = {
  where?: Maybe<SupporterWhereInput>;
  orderBy?: Maybe<SupporterOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  stage?: Stage;
  locales?: Array<Locale>;
};


export type QuerySupporterVersionArgs = {
  where: VersionWhereInput;
};


export type QueryShopTownsArgs = {
  where?: Maybe<ShopTownWhereInput>;
  orderBy?: Maybe<ShopTownOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  stage?: Stage;
  locales?: Array<Locale>;
};


export type QueryShopTownArgs = {
  where: ShopTownWhereUniqueInput;
  stage?: Stage;
  locales?: Array<Locale>;
};


export type QueryShopTownsConnectionArgs = {
  where?: Maybe<ShopTownWhereInput>;
  orderBy?: Maybe<ShopTownOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  stage?: Stage;
  locales?: Array<Locale>;
};


export type QueryShopTownVersionArgs = {
  where: VersionWhereInput;
};


export type QueryShopTypesArgs = {
  where?: Maybe<ShopTypeWhereInput>;
  orderBy?: Maybe<ShopTypeOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  stage?: Stage;
  locales?: Array<Locale>;
};


export type QueryShopTypeArgs = {
  where: ShopTypeWhereUniqueInput;
  stage?: Stage;
  locales?: Array<Locale>;
};


export type QueryShopTypesConnectionArgs = {
  where?: Maybe<ShopTypeWhereInput>;
  orderBy?: Maybe<ShopTypeOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  stage?: Stage;
  locales?: Array<Locale>;
};


export type QueryShopTypeVersionArgs = {
  where: VersionWhereInput;
};


export type QueryShopCategoriesArgs = {
  where?: Maybe<ShopCategoryWhereInput>;
  orderBy?: Maybe<ShopCategoryOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  stage?: Stage;
  locales?: Array<Locale>;
};


export type QueryShopCategoryArgs = {
  where: ShopCategoryWhereUniqueInput;
  stage?: Stage;
  locales?: Array<Locale>;
};


export type QueryShopCategoriesConnectionArgs = {
  where?: Maybe<ShopCategoryWhereInput>;
  orderBy?: Maybe<ShopCategoryOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  stage?: Stage;
  locales?: Array<Locale>;
};


export type QueryShopCategoryVersionArgs = {
  where: VersionWhereInput;
};


export type QueryUsersArgs = {
  where?: Maybe<UserWhereInput>;
  orderBy?: Maybe<UserOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  stage?: Stage;
  locales?: Array<Locale>;
};


export type QueryUserArgs = {
  where: UserWhereUniqueInput;
  stage?: Stage;
  locales?: Array<Locale>;
};


export type QueryUsersConnectionArgs = {
  where?: Maybe<UserWhereInput>;
  orderBy?: Maybe<UserOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  stage?: Stage;
  locales?: Array<Locale>;
};


export type QueryAssetsArgs = {
  where?: Maybe<AssetWhereInput>;
  orderBy?: Maybe<AssetOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  stage?: Stage;
  locales?: Array<Locale>;
};


export type QueryAssetArgs = {
  where: AssetWhereUniqueInput;
  stage?: Stage;
  locales?: Array<Locale>;
};


export type QueryAssetsConnectionArgs = {
  where?: Maybe<AssetWhereInput>;
  orderBy?: Maybe<AssetOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  stage?: Stage;
  locales?: Array<Locale>;
};


export type QueryAssetVersionArgs = {
  where: VersionWhereInput;
};


export type QueryPageSectionsArgs = {
  where?: Maybe<PageSectionWhereInput>;
  orderBy?: Maybe<PageSectionOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  stage?: Stage;
  locales?: Array<Locale>;
};


export type QueryPageSectionArgs = {
  where: PageSectionWhereUniqueInput;
  stage?: Stage;
  locales?: Array<Locale>;
};


export type QueryPageSectionsConnectionArgs = {
  where?: Maybe<PageSectionWhereInput>;
  orderBy?: Maybe<PageSectionOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  stage?: Stage;
  locales?: Array<Locale>;
};


export type QueryPageSectionVersionArgs = {
  where: VersionWhereInput;
};


export type QueryCityPartnersArgs = {
  where?: Maybe<CityPartnerWhereInput>;
  orderBy?: Maybe<CityPartnerOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  stage?: Stage;
  locales?: Array<Locale>;
};


export type QueryCityPartnerArgs = {
  where: CityPartnerWhereUniqueInput;
  stage?: Stage;
  locales?: Array<Locale>;
};


export type QueryCityPartnersConnectionArgs = {
  where?: Maybe<CityPartnerWhereInput>;
  orderBy?: Maybe<CityPartnerOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  stage?: Stage;
  locales?: Array<Locale>;
};


export type QueryCityPartnerVersionArgs = {
  where: VersionWhereInput;
};


export type QueryShopBundeslandsArgs = {
  where?: Maybe<ShopBundeslandWhereInput>;
  orderBy?: Maybe<ShopBundeslandOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  stage?: Stage;
  locales?: Array<Locale>;
};


export type QueryShopBundeslandArgs = {
  where: ShopBundeslandWhereUniqueInput;
  stage?: Stage;
  locales?: Array<Locale>;
};


export type QueryShopBundeslandsConnectionArgs = {
  where?: Maybe<ShopBundeslandWhereInput>;
  orderBy?: Maybe<ShopBundeslandOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  stage?: Stage;
  locales?: Array<Locale>;
};


export type QueryShopBundeslandVersionArgs = {
  where: VersionWhereInput;
};


export type QueryShopStatusesArgs = {
  where?: Maybe<ShopStatusWhereInput>;
  orderBy?: Maybe<ShopStatusOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  stage?: Stage;
  locales?: Array<Locale>;
};


export type QueryShopStatusArgs = {
  where: ShopStatusWhereUniqueInput;
  stage?: Stage;
  locales?: Array<Locale>;
};


export type QueryShopStatusesConnectionArgs = {
  where?: Maybe<ShopStatusWhereInput>;
  orderBy?: Maybe<ShopStatusOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  stage?: Stage;
  locales?: Array<Locale>;
};


export type QueryShopStatusVersionArgs = {
  where: VersionWhereInput;
};


export type QueryTranslationsArgs = {
  where?: Maybe<TranslationWhereInput>;
  orderBy?: Maybe<TranslationOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  stage?: Stage;
  locales?: Array<Locale>;
};


export type QueryTranslationArgs = {
  where: TranslationWhereUniqueInput;
  stage?: Stage;
  locales?: Array<Locale>;
};


export type QueryTranslationsConnectionArgs = {
  where?: Maybe<TranslationWhereInput>;
  orderBy?: Maybe<TranslationOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  stage?: Stage;
  locales?: Array<Locale>;
};


export type QueryTranslationVersionArgs = {
  where: VersionWhereInput;
};


export type QueryFaqsArgs = {
  where?: Maybe<FaqWhereInput>;
  orderBy?: Maybe<FaqOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  stage?: Stage;
  locales?: Array<Locale>;
};


export type QueryFaqArgs = {
  where: FaqWhereUniqueInput;
  stage?: Stage;
  locales?: Array<Locale>;
};


export type QueryFaqsConnectionArgs = {
  where?: Maybe<FaqWhereInput>;
  orderBy?: Maybe<FaqOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  stage?: Stage;
  locales?: Array<Locale>;
};


export type QueryFaqVersionArgs = {
  where: VersionWhereInput;
};


export type QueryMembersArgs = {
  where?: Maybe<MemberWhereInput>;
  orderBy?: Maybe<MemberOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  stage?: Stage;
  locales?: Array<Locale>;
};


export type QueryMemberArgs = {
  where: MemberWhereUniqueInput;
  stage?: Stage;
  locales?: Array<Locale>;
};


export type QueryMembersConnectionArgs = {
  where?: Maybe<MemberWhereInput>;
  orderBy?: Maybe<MemberOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  stage?: Stage;
  locales?: Array<Locale>;
};


export type QueryMemberVersionArgs = {
  where: VersionWhereInput;
};


export type QueryPagesArgs = {
  where?: Maybe<PageWhereInput>;
  orderBy?: Maybe<PageOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  stage?: Stage;
  locales?: Array<Locale>;
};


export type QueryPageArgs = {
  where: PageWhereUniqueInput;
  stage?: Stage;
  locales?: Array<Locale>;
};


export type QueryPagesConnectionArgs = {
  where?: Maybe<PageWhereInput>;
  orderBy?: Maybe<PageOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  stage?: Stage;
  locales?: Array<Locale>;
};


export type QueryPageVersionArgs = {
  where: VersionWhereInput;
};


export type QueryBlogsArgs = {
  where?: Maybe<BlogWhereInput>;
  orderBy?: Maybe<BlogOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  stage?: Stage;
  locales?: Array<Locale>;
};


export type QueryBlogArgs = {
  where: BlogWhereUniqueInput;
  stage?: Stage;
  locales?: Array<Locale>;
};


export type QueryBlogsConnectionArgs = {
  where?: Maybe<BlogWhereInput>;
  orderBy?: Maybe<BlogOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  stage?: Stage;
  locales?: Array<Locale>;
};


export type QueryBlogVersionArgs = {
  where: VersionWhereInput;
};


export type QueryShopsArgs = {
  where?: Maybe<ShopWhereInput>;
  orderBy?: Maybe<ShopOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  stage?: Stage;
  locales?: Array<Locale>;
};


export type QueryShopArgs = {
  where: ShopWhereUniqueInput;
  stage?: Stage;
  locales?: Array<Locale>;
};


export type QueryShopsConnectionArgs = {
  where?: Maybe<ShopWhereInput>;
  orderBy?: Maybe<ShopOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  stage?: Stage;
  locales?: Array<Locale>;
};


export type QueryShopVersionArgs = {
  where: VersionWhereInput;
};


export type QueryKpisArgs = {
  where?: Maybe<KpiWhereInput>;
  orderBy?: Maybe<KpiOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  stage?: Stage;
  locales?: Array<Locale>;
};


export type QueryKpiArgs = {
  where: KpiWhereUniqueInput;
  stage?: Stage;
  locales?: Array<Locale>;
};


export type QueryKpisConnectionArgs = {
  where?: Maybe<KpiWhereInput>;
  orderBy?: Maybe<KpiOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  stage?: Stage;
  locales?: Array<Locale>;
};


export type QueryKpiVersionArgs = {
  where: VersionWhereInput;
};

/** Representing a RGBA color value: https://developer.mozilla.org/en-US/docs/Web/CSS/color_value#rgb()_and_rgba() */
export type Rgba = {
  __typename?: 'RGBA';
  r: Scalars['RGBAHue'];
  g: Scalars['RGBAHue'];
  b: Scalars['RGBAHue'];
  a: Scalars['RGBATransparency'];
};


/** Input type representing a RGBA color value: https://developer.mozilla.org/en-US/docs/Web/CSS/color_value#rgb()_and_rgba() */
export type RgbaInput = {
  r: Scalars['RGBAHue'];
  g: Scalars['RGBAHue'];
  b: Scalars['RGBAHue'];
  a: Scalars['RGBATransparency'];
};


/** Custom type representing a rich text value comprising of raw rich text ast, html, markdown and text values */
export type RichText = {
  __typename?: 'RichText';
  /** Returns AST representation */
  raw: Scalars['RichTextAST'];
  /** Returns HTMl representation */
  html: Scalars['String'];
  /** Returns Markdown representation */
  markdown: Scalars['String'];
  /** Returns plain-text contents of RichText */
  text: Scalars['String'];
};


export type Shop = Node & {
  __typename?: 'Shop';
  /** System stage field */
  stage: Stage;
  /** Get the document in other stages */
  documentInStages: Array<Shop>;
  /** The unique identifier */
  id: Scalars['ID'];
  /** The time the document was created */
  createdAt: Scalars['DateTime'];
  /** The time the document was updated */
  updatedAt: Scalars['DateTime'];
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']>;
  name?: Maybe<Scalars['String']>;
  openinghours?: Maybe<Scalars['String']>;
  address?: Maybe<Scalars['String']>;
  location?: Maybe<Location>;
  email?: Maybe<Scalars['String']>;
  stickerFront?: Maybe<Scalars['Int']>;
  stickerBack?: Maybe<Scalars['Int']>;
  stickerDelivery?: Maybe<Scalars['Boolean']>;
  newsletter?: Maybe<Scalars['Boolean']>;
  furtherInformation?: Maybe<Scalars['String']>;
  website?: Maybe<Scalars['String']>;
  trayinformation?: Maybe<Scalars['Int']>;
  infoflyer?: Maybe<Scalars['Int']>;
  /** User that created this document */
  createdBy?: Maybe<User>;
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  shopStatus?: Maybe<ShopStatus>;
  shopBundesland?: Maybe<ShopBundesland>;
  shopType: Array<ShopType>;
  shopcategories: Array<ShopCategory>;
  dataProtectionForm?: Maybe<Asset>;
  shopTown?: Maybe<ShopShopTown>;
  /** List of Shop versions */
  history: Array<Version>;
};


export type ShopDocumentInStagesArgs = {
  stages?: Array<Stage>;
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
};


export type ShopCreatedByArgs = {
  locales?: Maybe<Array<Locale>>;
};


export type ShopUpdatedByArgs = {
  locales?: Maybe<Array<Locale>>;
};


export type ShopPublishedByArgs = {
  locales?: Maybe<Array<Locale>>;
};


export type ShopShopStatusArgs = {
  locales?: Maybe<Array<Locale>>;
};


export type ShopShopBundeslandArgs = {
  locales?: Maybe<Array<Locale>>;
};


export type ShopShopTypeArgs = {
  where?: Maybe<ShopTypeWhereInput>;
  orderBy?: Maybe<ShopTypeOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  locales?: Maybe<Array<Locale>>;
};


export type ShopShopcategoriesArgs = {
  where?: Maybe<ShopCategoryWhereInput>;
  orderBy?: Maybe<ShopCategoryOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  locales?: Maybe<Array<Locale>>;
};


export type ShopDataProtectionFormArgs = {
  locales?: Maybe<Array<Locale>>;
};


export type ShopShopTownArgs = {
  locales?: Maybe<Array<Locale>>;
};


export type ShopHistoryArgs = {
  limit?: Scalars['Int'];
  skip?: Scalars['Int'];
  stageOverride?: Maybe<Stage>;
};

export type ShopBundesland = Node & {
  __typename?: 'ShopBundesland';
  /** System stage field */
  stage: Stage;
  /** Get the document in other stages */
  documentInStages: Array<ShopBundesland>;
  /** The unique identifier */
  id: Scalars['ID'];
  /** The time the document was created */
  createdAt: Scalars['DateTime'];
  /** The time the document was updated */
  updatedAt: Scalars['DateTime'];
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']>;
  name?: Maybe<Scalars['String']>;
  /** User that created this document */
  createdBy?: Maybe<User>;
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  shops: Array<Shop>;
  /** List of ShopBundesland versions */
  history: Array<Version>;
};


export type ShopBundeslandDocumentInStagesArgs = {
  stages?: Array<Stage>;
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
};


export type ShopBundeslandCreatedByArgs = {
  locales?: Maybe<Array<Locale>>;
};


export type ShopBundeslandUpdatedByArgs = {
  locales?: Maybe<Array<Locale>>;
};


export type ShopBundeslandPublishedByArgs = {
  locales?: Maybe<Array<Locale>>;
};


export type ShopBundeslandShopsArgs = {
  where?: Maybe<ShopWhereInput>;
  orderBy?: Maybe<ShopOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  locales?: Maybe<Array<Locale>>;
};


export type ShopBundeslandHistoryArgs = {
  limit?: Scalars['Int'];
  skip?: Scalars['Int'];
  stageOverride?: Maybe<Stage>;
};

export type ShopBundeslandConnectInput = {
  /** Document to connect */
  where: ShopBundeslandWhereUniqueInput;
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: Maybe<ConnectPositionInput>;
};

/** A connection to a list of items. */
export type ShopBundeslandConnection = {
  __typename?: 'ShopBundeslandConnection';
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** A list of edges. */
  edges: Array<ShopBundeslandEdge>;
  aggregate: Aggregate;
};

export type ShopBundeslandCreateInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  name?: Maybe<Scalars['String']>;
  shops?: Maybe<ShopCreateManyInlineInput>;
};

export type ShopBundeslandCreateManyInlineInput = {
  /** Create and connect multiple existing ShopBundesland documents */
  create?: Maybe<Array<ShopBundeslandCreateInput>>;
  /** Connect multiple existing ShopBundesland documents */
  connect?: Maybe<Array<ShopBundeslandWhereUniqueInput>>;
};

export type ShopBundeslandCreateOneInlineInput = {
  /** Create and connect one ShopBundesland document */
  create?: Maybe<ShopBundeslandCreateInput>;
  /** Connect one existing ShopBundesland document */
  connect?: Maybe<ShopBundeslandWhereUniqueInput>;
};

/** An edge in a connection. */
export type ShopBundeslandEdge = {
  __typename?: 'ShopBundeslandEdge';
  /** The item at the end of the edge. */
  node: ShopBundesland;
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
};

/** Identifies documents */
export type ShopBundeslandManyWhereInput = {
  /** Contains search across all appropriate fields. */
  _search?: Maybe<Scalars['String']>;
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<ShopBundeslandWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<ShopBundeslandWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<ShopBundeslandWhereInput>>;
  id?: Maybe<Scalars['ID']>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: Maybe<Scalars['DateTime']>;
  name?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  name_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  name_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  name_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  name_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  name_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  name_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  name_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  name_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  name_not_ends_with?: Maybe<Scalars['String']>;
  createdBy?: Maybe<UserWhereInput>;
  updatedBy?: Maybe<UserWhereInput>;
  publishedBy?: Maybe<UserWhereInput>;
  shops_every?: Maybe<ShopWhereInput>;
  shops_some?: Maybe<ShopWhereInput>;
  shops_none?: Maybe<ShopWhereInput>;
};

export enum ShopBundeslandOrderByInput {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC'
}

export type ShopBundeslandUpdateInput = {
  name?: Maybe<Scalars['String']>;
  shops?: Maybe<ShopUpdateManyInlineInput>;
};

export type ShopBundeslandUpdateManyInlineInput = {
  /** Create and connect multiple ShopBundesland documents */
  create?: Maybe<Array<ShopBundeslandCreateInput>>;
  /** Connect multiple existing ShopBundesland documents */
  connect?: Maybe<Array<ShopBundeslandConnectInput>>;
  /** Override currently-connected documents with multiple existing ShopBundesland documents */
  set?: Maybe<Array<ShopBundeslandWhereUniqueInput>>;
  /** Update multiple ShopBundesland documents */
  update?: Maybe<Array<ShopBundeslandUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple ShopBundesland documents */
  upsert?: Maybe<Array<ShopBundeslandUpsertWithNestedWhereUniqueInput>>;
  /** Disconnect multiple ShopBundesland documents */
  disconnect?: Maybe<Array<ShopBundeslandWhereUniqueInput>>;
  /** Delete multiple ShopBundesland documents */
  delete?: Maybe<Array<ShopBundeslandWhereUniqueInput>>;
};

export type ShopBundeslandUpdateManyInput = {
  name?: Maybe<Scalars['String']>;
};

export type ShopBundeslandUpdateManyWithNestedWhereInput = {
  /** Document search */
  where: ShopBundeslandWhereInput;
  /** Update many input */
  data: ShopBundeslandUpdateManyInput;
};

export type ShopBundeslandUpdateOneInlineInput = {
  /** Create and connect one ShopBundesland document */
  create?: Maybe<ShopBundeslandCreateInput>;
  /** Update single ShopBundesland document */
  update?: Maybe<ShopBundeslandUpdateWithNestedWhereUniqueInput>;
  /** Upsert single ShopBundesland document */
  upsert?: Maybe<ShopBundeslandUpsertWithNestedWhereUniqueInput>;
  /** Connect existing ShopBundesland document */
  connect?: Maybe<ShopBundeslandWhereUniqueInput>;
  /** Disconnect currently connected ShopBundesland document */
  disconnect?: Maybe<Scalars['Boolean']>;
  /** Delete currently connected ShopBundesland document */
  delete?: Maybe<Scalars['Boolean']>;
};

export type ShopBundeslandUpdateWithNestedWhereUniqueInput = {
  /** Unique document search */
  where: ShopBundeslandWhereUniqueInput;
  /** Document to update */
  data: ShopBundeslandUpdateInput;
};

export type ShopBundeslandUpsertInput = {
  /** Create document if it didn't exist */
  create: ShopBundeslandCreateInput;
  /** Update document if it exists */
  update: ShopBundeslandUpdateInput;
};

export type ShopBundeslandUpsertWithNestedWhereUniqueInput = {
  /** Unique document search */
  where: ShopBundeslandWhereUniqueInput;
  /** Upsert data */
  data: ShopBundeslandUpsertInput;
};

/** Identifies documents */
export type ShopBundeslandWhereInput = {
  /** Contains search across all appropriate fields. */
  _search?: Maybe<Scalars['String']>;
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<ShopBundeslandWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<ShopBundeslandWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<ShopBundeslandWhereInput>>;
  id?: Maybe<Scalars['ID']>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: Maybe<Scalars['DateTime']>;
  name?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  name_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  name_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  name_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  name_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  name_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  name_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  name_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  name_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  name_not_ends_with?: Maybe<Scalars['String']>;
  createdBy?: Maybe<UserWhereInput>;
  updatedBy?: Maybe<UserWhereInput>;
  publishedBy?: Maybe<UserWhereInput>;
  shops_every?: Maybe<ShopWhereInput>;
  shops_some?: Maybe<ShopWhereInput>;
  shops_none?: Maybe<ShopWhereInput>;
};

/** References ShopBundesland record uniquely */
export type ShopBundeslandWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>;
};

export type ShopCategory = Node & {
  __typename?: 'ShopCategory';
  /** System stage field */
  stage: Stage;
  /** Get the document in other stages */
  documentInStages: Array<ShopCategory>;
  /** The unique identifier */
  id: Scalars['ID'];
  /** The time the document was created */
  createdAt: Scalars['DateTime'];
  /** The time the document was updated */
  updatedAt: Scalars['DateTime'];
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']>;
  name?: Maybe<Scalars['String']>;
  isMain?: Maybe<Scalars['Boolean']>;
  /** User that created this document */
  createdBy?: Maybe<User>;
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  shop: Array<Shop>;
  /** List of ShopCategory versions */
  history: Array<Version>;
};


export type ShopCategoryDocumentInStagesArgs = {
  stages?: Array<Stage>;
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
};


export type ShopCategoryCreatedByArgs = {
  locales?: Maybe<Array<Locale>>;
};


export type ShopCategoryUpdatedByArgs = {
  locales?: Maybe<Array<Locale>>;
};


export type ShopCategoryPublishedByArgs = {
  locales?: Maybe<Array<Locale>>;
};


export type ShopCategoryShopArgs = {
  where?: Maybe<ShopWhereInput>;
  orderBy?: Maybe<ShopOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  locales?: Maybe<Array<Locale>>;
};


export type ShopCategoryHistoryArgs = {
  limit?: Scalars['Int'];
  skip?: Scalars['Int'];
  stageOverride?: Maybe<Stage>;
};

export type ShopCategoryConnectInput = {
  /** Document to connect */
  where: ShopCategoryWhereUniqueInput;
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: Maybe<ConnectPositionInput>;
};

/** A connection to a list of items. */
export type ShopCategoryConnection = {
  __typename?: 'ShopCategoryConnection';
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** A list of edges. */
  edges: Array<ShopCategoryEdge>;
  aggregate: Aggregate;
};

export type ShopCategoryCreateInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  name?: Maybe<Scalars['String']>;
  isMain?: Maybe<Scalars['Boolean']>;
  shop?: Maybe<ShopCreateManyInlineInput>;
};

export type ShopCategoryCreateManyInlineInput = {
  /** Create and connect multiple existing ShopCategory documents */
  create?: Maybe<Array<ShopCategoryCreateInput>>;
  /** Connect multiple existing ShopCategory documents */
  connect?: Maybe<Array<ShopCategoryWhereUniqueInput>>;
};

export type ShopCategoryCreateOneInlineInput = {
  /** Create and connect one ShopCategory document */
  create?: Maybe<ShopCategoryCreateInput>;
  /** Connect one existing ShopCategory document */
  connect?: Maybe<ShopCategoryWhereUniqueInput>;
};

/** An edge in a connection. */
export type ShopCategoryEdge = {
  __typename?: 'ShopCategoryEdge';
  /** The item at the end of the edge. */
  node: ShopCategory;
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
};

/** Identifies documents */
export type ShopCategoryManyWhereInput = {
  /** Contains search across all appropriate fields. */
  _search?: Maybe<Scalars['String']>;
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<ShopCategoryWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<ShopCategoryWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<ShopCategoryWhereInput>>;
  id?: Maybe<Scalars['ID']>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: Maybe<Scalars['DateTime']>;
  name?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  name_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  name_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  name_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  name_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  name_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  name_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  name_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  name_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  name_not_ends_with?: Maybe<Scalars['String']>;
  isMain?: Maybe<Scalars['Boolean']>;
  /** All values that are not equal to given value. */
  isMain_not?: Maybe<Scalars['Boolean']>;
  createdBy?: Maybe<UserWhereInput>;
  updatedBy?: Maybe<UserWhereInput>;
  publishedBy?: Maybe<UserWhereInput>;
  shop_every?: Maybe<ShopWhereInput>;
  shop_some?: Maybe<ShopWhereInput>;
  shop_none?: Maybe<ShopWhereInput>;
};

export enum ShopCategoryOrderByInput {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  IsMainAsc = 'isMain_ASC',
  IsMainDesc = 'isMain_DESC'
}

export type ShopCategoryUpdateInput = {
  name?: Maybe<Scalars['String']>;
  isMain?: Maybe<Scalars['Boolean']>;
  shop?: Maybe<ShopUpdateManyInlineInput>;
};

export type ShopCategoryUpdateManyInlineInput = {
  /** Create and connect multiple ShopCategory documents */
  create?: Maybe<Array<ShopCategoryCreateInput>>;
  /** Connect multiple existing ShopCategory documents */
  connect?: Maybe<Array<ShopCategoryConnectInput>>;
  /** Override currently-connected documents with multiple existing ShopCategory documents */
  set?: Maybe<Array<ShopCategoryWhereUniqueInput>>;
  /** Update multiple ShopCategory documents */
  update?: Maybe<Array<ShopCategoryUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple ShopCategory documents */
  upsert?: Maybe<Array<ShopCategoryUpsertWithNestedWhereUniqueInput>>;
  /** Disconnect multiple ShopCategory documents */
  disconnect?: Maybe<Array<ShopCategoryWhereUniqueInput>>;
  /** Delete multiple ShopCategory documents */
  delete?: Maybe<Array<ShopCategoryWhereUniqueInput>>;
};

export type ShopCategoryUpdateManyInput = {
  name?: Maybe<Scalars['String']>;
  isMain?: Maybe<Scalars['Boolean']>;
};

export type ShopCategoryUpdateManyWithNestedWhereInput = {
  /** Document search */
  where: ShopCategoryWhereInput;
  /** Update many input */
  data: ShopCategoryUpdateManyInput;
};

export type ShopCategoryUpdateOneInlineInput = {
  /** Create and connect one ShopCategory document */
  create?: Maybe<ShopCategoryCreateInput>;
  /** Update single ShopCategory document */
  update?: Maybe<ShopCategoryUpdateWithNestedWhereUniqueInput>;
  /** Upsert single ShopCategory document */
  upsert?: Maybe<ShopCategoryUpsertWithNestedWhereUniqueInput>;
  /** Connect existing ShopCategory document */
  connect?: Maybe<ShopCategoryWhereUniqueInput>;
  /** Disconnect currently connected ShopCategory document */
  disconnect?: Maybe<Scalars['Boolean']>;
  /** Delete currently connected ShopCategory document */
  delete?: Maybe<Scalars['Boolean']>;
};

export type ShopCategoryUpdateWithNestedWhereUniqueInput = {
  /** Unique document search */
  where: ShopCategoryWhereUniqueInput;
  /** Document to update */
  data: ShopCategoryUpdateInput;
};

export type ShopCategoryUpsertInput = {
  /** Create document if it didn't exist */
  create: ShopCategoryCreateInput;
  /** Update document if it exists */
  update: ShopCategoryUpdateInput;
};

export type ShopCategoryUpsertWithNestedWhereUniqueInput = {
  /** Unique document search */
  where: ShopCategoryWhereUniqueInput;
  /** Upsert data */
  data: ShopCategoryUpsertInput;
};

/** Identifies documents */
export type ShopCategoryWhereInput = {
  /** Contains search across all appropriate fields. */
  _search?: Maybe<Scalars['String']>;
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<ShopCategoryWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<ShopCategoryWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<ShopCategoryWhereInput>>;
  id?: Maybe<Scalars['ID']>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: Maybe<Scalars['DateTime']>;
  name?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  name_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  name_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  name_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  name_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  name_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  name_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  name_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  name_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  name_not_ends_with?: Maybe<Scalars['String']>;
  isMain?: Maybe<Scalars['Boolean']>;
  /** All values that are not equal to given value. */
  isMain_not?: Maybe<Scalars['Boolean']>;
  createdBy?: Maybe<UserWhereInput>;
  updatedBy?: Maybe<UserWhereInput>;
  publishedBy?: Maybe<UserWhereInput>;
  shop_every?: Maybe<ShopWhereInput>;
  shop_some?: Maybe<ShopWhereInput>;
  shop_none?: Maybe<ShopWhereInput>;
};

/** References ShopCategory record uniquely */
export type ShopCategoryWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>;
};

export type ShopConnectInput = {
  /** Document to connect */
  where: ShopWhereUniqueInput;
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: Maybe<ConnectPositionInput>;
};

/** A connection to a list of items. */
export type ShopConnection = {
  __typename?: 'ShopConnection';
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** A list of edges. */
  edges: Array<ShopEdge>;
  aggregate: Aggregate;
};

export type ShopCreateInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  name?: Maybe<Scalars['String']>;
  openinghours?: Maybe<Scalars['String']>;
  address?: Maybe<Scalars['String']>;
  location?: Maybe<LocationInput>;
  email?: Maybe<Scalars['String']>;
  stickerFront?: Maybe<Scalars['Int']>;
  stickerBack?: Maybe<Scalars['Int']>;
  stickerDelivery?: Maybe<Scalars['Boolean']>;
  newsletter?: Maybe<Scalars['Boolean']>;
  furtherInformation?: Maybe<Scalars['String']>;
  website?: Maybe<Scalars['String']>;
  trayinformation?: Maybe<Scalars['Int']>;
  infoflyer?: Maybe<Scalars['Int']>;
  shopStatus?: Maybe<ShopStatusCreateOneInlineInput>;
  shopBundesland?: Maybe<ShopBundeslandCreateOneInlineInput>;
  shopType?: Maybe<ShopTypeCreateManyInlineInput>;
  shopcategories?: Maybe<ShopCategoryCreateManyInlineInput>;
  dataProtectionForm?: Maybe<AssetCreateOneInlineInput>;
  shopTown?: Maybe<ShopShopTownCreateOneInlineInput>;
};

export type ShopCreateManyInlineInput = {
  /** Create and connect multiple existing Shop documents */
  create?: Maybe<Array<ShopCreateInput>>;
  /** Connect multiple existing Shop documents */
  connect?: Maybe<Array<ShopWhereUniqueInput>>;
};

export type ShopCreateOneInlineInput = {
  /** Create and connect one Shop document */
  create?: Maybe<ShopCreateInput>;
  /** Connect one existing Shop document */
  connect?: Maybe<ShopWhereUniqueInput>;
};

/** An edge in a connection. */
export type ShopEdge = {
  __typename?: 'ShopEdge';
  /** The item at the end of the edge. */
  node: Shop;
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
};

/** Identifies documents */
export type ShopManyWhereInput = {
  /** Contains search across all appropriate fields. */
  _search?: Maybe<Scalars['String']>;
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<ShopWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<ShopWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<ShopWhereInput>>;
  id?: Maybe<Scalars['ID']>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: Maybe<Scalars['DateTime']>;
  name?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  name_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  name_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  name_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  name_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  name_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  name_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  name_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  name_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  name_not_ends_with?: Maybe<Scalars['String']>;
  openinghours?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  openinghours_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  openinghours_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  openinghours_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  openinghours_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  openinghours_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  openinghours_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  openinghours_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  openinghours_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  openinghours_not_ends_with?: Maybe<Scalars['String']>;
  address?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  address_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  address_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  address_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  address_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  address_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  address_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  address_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  address_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  address_not_ends_with?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  email_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  email_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  email_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  email_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  email_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  email_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  email_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  email_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  email_not_ends_with?: Maybe<Scalars['String']>;
  stickerFront?: Maybe<Scalars['Int']>;
  /** All values that are not equal to given value. */
  stickerFront_not?: Maybe<Scalars['Int']>;
  /** All values that are contained in given list. */
  stickerFront_in?: Maybe<Array<Scalars['Int']>>;
  /** All values that are not contained in given list. */
  stickerFront_not_in?: Maybe<Array<Scalars['Int']>>;
  /** All values less than the given value. */
  stickerFront_lt?: Maybe<Scalars['Int']>;
  /** All values less than or equal the given value. */
  stickerFront_lte?: Maybe<Scalars['Int']>;
  /** All values greater than the given value. */
  stickerFront_gt?: Maybe<Scalars['Int']>;
  /** All values greater than or equal the given value. */
  stickerFront_gte?: Maybe<Scalars['Int']>;
  stickerBack?: Maybe<Scalars['Int']>;
  /** All values that are not equal to given value. */
  stickerBack_not?: Maybe<Scalars['Int']>;
  /** All values that are contained in given list. */
  stickerBack_in?: Maybe<Array<Scalars['Int']>>;
  /** All values that are not contained in given list. */
  stickerBack_not_in?: Maybe<Array<Scalars['Int']>>;
  /** All values less than the given value. */
  stickerBack_lt?: Maybe<Scalars['Int']>;
  /** All values less than or equal the given value. */
  stickerBack_lte?: Maybe<Scalars['Int']>;
  /** All values greater than the given value. */
  stickerBack_gt?: Maybe<Scalars['Int']>;
  /** All values greater than or equal the given value. */
  stickerBack_gte?: Maybe<Scalars['Int']>;
  stickerDelivery?: Maybe<Scalars['Boolean']>;
  /** All values that are not equal to given value. */
  stickerDelivery_not?: Maybe<Scalars['Boolean']>;
  newsletter?: Maybe<Scalars['Boolean']>;
  /** All values that are not equal to given value. */
  newsletter_not?: Maybe<Scalars['Boolean']>;
  furtherInformation?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  furtherInformation_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  furtherInformation_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  furtherInformation_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  furtherInformation_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  furtherInformation_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  furtherInformation_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  furtherInformation_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  furtherInformation_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  furtherInformation_not_ends_with?: Maybe<Scalars['String']>;
  website?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  website_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  website_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  website_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  website_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  website_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  website_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  website_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  website_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  website_not_ends_with?: Maybe<Scalars['String']>;
  trayinformation?: Maybe<Scalars['Int']>;
  /** All values that are not equal to given value. */
  trayinformation_not?: Maybe<Scalars['Int']>;
  /** All values that are contained in given list. */
  trayinformation_in?: Maybe<Array<Scalars['Int']>>;
  /** All values that are not contained in given list. */
  trayinformation_not_in?: Maybe<Array<Scalars['Int']>>;
  /** All values less than the given value. */
  trayinformation_lt?: Maybe<Scalars['Int']>;
  /** All values less than or equal the given value. */
  trayinformation_lte?: Maybe<Scalars['Int']>;
  /** All values greater than the given value. */
  trayinformation_gt?: Maybe<Scalars['Int']>;
  /** All values greater than or equal the given value. */
  trayinformation_gte?: Maybe<Scalars['Int']>;
  infoflyer?: Maybe<Scalars['Int']>;
  /** All values that are not equal to given value. */
  infoflyer_not?: Maybe<Scalars['Int']>;
  /** All values that are contained in given list. */
  infoflyer_in?: Maybe<Array<Scalars['Int']>>;
  /** All values that are not contained in given list. */
  infoflyer_not_in?: Maybe<Array<Scalars['Int']>>;
  /** All values less than the given value. */
  infoflyer_lt?: Maybe<Scalars['Int']>;
  /** All values less than or equal the given value. */
  infoflyer_lte?: Maybe<Scalars['Int']>;
  /** All values greater than the given value. */
  infoflyer_gt?: Maybe<Scalars['Int']>;
  /** All values greater than or equal the given value. */
  infoflyer_gte?: Maybe<Scalars['Int']>;
  createdBy?: Maybe<UserWhereInput>;
  updatedBy?: Maybe<UserWhereInput>;
  publishedBy?: Maybe<UserWhereInput>;
  shopStatus?: Maybe<ShopStatusWhereInput>;
  shopBundesland?: Maybe<ShopBundeslandWhereInput>;
  shopType_every?: Maybe<ShopTypeWhereInput>;
  shopType_some?: Maybe<ShopTypeWhereInput>;
  shopType_none?: Maybe<ShopTypeWhereInput>;
  shopcategories_every?: Maybe<ShopCategoryWhereInput>;
  shopcategories_some?: Maybe<ShopCategoryWhereInput>;
  shopcategories_none?: Maybe<ShopCategoryWhereInput>;
  dataProtectionForm?: Maybe<AssetWhereInput>;
};

export enum ShopOrderByInput {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  OpeninghoursAsc = 'openinghours_ASC',
  OpeninghoursDesc = 'openinghours_DESC',
  AddressAsc = 'address_ASC',
  AddressDesc = 'address_DESC',
  EmailAsc = 'email_ASC',
  EmailDesc = 'email_DESC',
  StickerFrontAsc = 'stickerFront_ASC',
  StickerFrontDesc = 'stickerFront_DESC',
  StickerBackAsc = 'stickerBack_ASC',
  StickerBackDesc = 'stickerBack_DESC',
  StickerDeliveryAsc = 'stickerDelivery_ASC',
  StickerDeliveryDesc = 'stickerDelivery_DESC',
  NewsletterAsc = 'newsletter_ASC',
  NewsletterDesc = 'newsletter_DESC',
  FurtherInformationAsc = 'furtherInformation_ASC',
  FurtherInformationDesc = 'furtherInformation_DESC',
  WebsiteAsc = 'website_ASC',
  WebsiteDesc = 'website_DESC',
  TrayinformationAsc = 'trayinformation_ASC',
  TrayinformationDesc = 'trayinformation_DESC',
  InfoflyerAsc = 'infoflyer_ASC',
  InfoflyerDesc = 'infoflyer_DESC'
}

export type ShopShopTown = ShopTown;

export type ShopShopTownConnectInput = {
  ShopTown?: Maybe<ShopTownConnectInput>;
};

export type ShopShopTownCreateInput = {
  ShopTown?: Maybe<ShopTownCreateInput>;
};

export type ShopShopTownCreateManyInlineInput = {
  /** Create and connect multiple existing ShopShopTown documents */
  create?: Maybe<Array<ShopShopTownCreateInput>>;
  /** Connect multiple existing ShopShopTown documents */
  connect?: Maybe<Array<ShopShopTownWhereUniqueInput>>;
};

export type ShopShopTownCreateOneInlineInput = {
  /** Create and connect one ShopShopTown document */
  create?: Maybe<ShopShopTownCreateInput>;
  /** Connect one existing ShopShopTown document */
  connect?: Maybe<ShopShopTownWhereUniqueInput>;
};

export type ShopShopTownUpdateInput = {
  ShopTown?: Maybe<ShopTownUpdateInput>;
};

export type ShopShopTownUpdateManyInlineInput = {
  /** Create and connect multiple ShopShopTown documents */
  create?: Maybe<Array<ShopShopTownCreateInput>>;
  /** Connect multiple existing ShopShopTown documents */
  connect?: Maybe<Array<ShopShopTownConnectInput>>;
  /** Override currently-connected documents with multiple existing ShopShopTown documents */
  set?: Maybe<Array<ShopShopTownWhereUniqueInput>>;
  /** Update multiple ShopShopTown documents */
  update?: Maybe<Array<ShopShopTownUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple ShopShopTown documents */
  upsert?: Maybe<Array<ShopShopTownUpsertWithNestedWhereUniqueInput>>;
  /** Disconnect multiple ShopShopTown documents */
  disconnect?: Maybe<Array<ShopShopTownWhereUniqueInput>>;
  /** Delete multiple ShopShopTown documents */
  delete?: Maybe<Array<ShopShopTownWhereUniqueInput>>;
};

export type ShopShopTownUpdateManyWithNestedWhereInput = {
  ShopTown?: Maybe<ShopTownUpdateManyWithNestedWhereInput>;
};

export type ShopShopTownUpdateOneInlineInput = {
  /** Create and connect one ShopShopTown document */
  create?: Maybe<ShopShopTownCreateInput>;
  /** Update single ShopShopTown document */
  update?: Maybe<ShopShopTownUpdateWithNestedWhereUniqueInput>;
  /** Upsert single ShopShopTown document */
  upsert?: Maybe<ShopShopTownUpsertWithNestedWhereUniqueInput>;
  /** Connect existing ShopShopTown document */
  connect?: Maybe<ShopShopTownWhereUniqueInput>;
  /** Disconnect currently connected ShopShopTown document */
  disconnect?: Maybe<Scalars['Boolean']>;
  /** Delete currently connected ShopShopTown document */
  delete?: Maybe<Scalars['Boolean']>;
};

export type ShopShopTownUpdateWithNestedWhereUniqueInput = {
  ShopTown?: Maybe<ShopTownUpdateWithNestedWhereUniqueInput>;
};

export type ShopShopTownUpsertWithNestedWhereUniqueInput = {
  ShopTown?: Maybe<ShopTownUpsertWithNestedWhereUniqueInput>;
};

export type ShopShopTownWhereInput = {
  ShopTown?: Maybe<ShopTownWhereInput>;
};

export type ShopShopTownWhereUniqueInput = {
  ShopTown?: Maybe<ShopTownWhereUniqueInput>;
};

export type ShopStatus = Node & {
  __typename?: 'ShopStatus';
  /** System stage field */
  stage: Stage;
  /** Get the document in other stages */
  documentInStages: Array<ShopStatus>;
  /** The unique identifier */
  id: Scalars['ID'];
  /** The time the document was created */
  createdAt: Scalars['DateTime'];
  /** The time the document was updated */
  updatedAt: Scalars['DateTime'];
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']>;
  name?: Maybe<Scalars['String']>;
  /** User that created this document */
  createdBy?: Maybe<User>;
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  shops: Array<Shop>;
  /** List of ShopStatus versions */
  history: Array<Version>;
};


export type ShopStatusDocumentInStagesArgs = {
  stages?: Array<Stage>;
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
};


export type ShopStatusCreatedByArgs = {
  locales?: Maybe<Array<Locale>>;
};


export type ShopStatusUpdatedByArgs = {
  locales?: Maybe<Array<Locale>>;
};


export type ShopStatusPublishedByArgs = {
  locales?: Maybe<Array<Locale>>;
};


export type ShopStatusShopsArgs = {
  where?: Maybe<ShopWhereInput>;
  orderBy?: Maybe<ShopOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  locales?: Maybe<Array<Locale>>;
};


export type ShopStatusHistoryArgs = {
  limit?: Scalars['Int'];
  skip?: Scalars['Int'];
  stageOverride?: Maybe<Stage>;
};

export type ShopStatusConnectInput = {
  /** Document to connect */
  where: ShopStatusWhereUniqueInput;
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: Maybe<ConnectPositionInput>;
};

/** A connection to a list of items. */
export type ShopStatusConnection = {
  __typename?: 'ShopStatusConnection';
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** A list of edges. */
  edges: Array<ShopStatusEdge>;
  aggregate: Aggregate;
};

export type ShopStatusCreateInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  name?: Maybe<Scalars['String']>;
  shops?: Maybe<ShopCreateManyInlineInput>;
};

export type ShopStatusCreateManyInlineInput = {
  /** Create and connect multiple existing ShopStatus documents */
  create?: Maybe<Array<ShopStatusCreateInput>>;
  /** Connect multiple existing ShopStatus documents */
  connect?: Maybe<Array<ShopStatusWhereUniqueInput>>;
};

export type ShopStatusCreateOneInlineInput = {
  /** Create and connect one ShopStatus document */
  create?: Maybe<ShopStatusCreateInput>;
  /** Connect one existing ShopStatus document */
  connect?: Maybe<ShopStatusWhereUniqueInput>;
};

/** An edge in a connection. */
export type ShopStatusEdge = {
  __typename?: 'ShopStatusEdge';
  /** The item at the end of the edge. */
  node: ShopStatus;
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
};

/** Identifies documents */
export type ShopStatusManyWhereInput = {
  /** Contains search across all appropriate fields. */
  _search?: Maybe<Scalars['String']>;
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<ShopStatusWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<ShopStatusWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<ShopStatusWhereInput>>;
  id?: Maybe<Scalars['ID']>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: Maybe<Scalars['DateTime']>;
  name?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  name_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  name_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  name_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  name_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  name_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  name_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  name_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  name_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  name_not_ends_with?: Maybe<Scalars['String']>;
  createdBy?: Maybe<UserWhereInput>;
  updatedBy?: Maybe<UserWhereInput>;
  publishedBy?: Maybe<UserWhereInput>;
  shops_every?: Maybe<ShopWhereInput>;
  shops_some?: Maybe<ShopWhereInput>;
  shops_none?: Maybe<ShopWhereInput>;
};

export enum ShopStatusOrderByInput {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC'
}

export type ShopStatusUpdateInput = {
  name?: Maybe<Scalars['String']>;
  shops?: Maybe<ShopUpdateManyInlineInput>;
};

export type ShopStatusUpdateManyInlineInput = {
  /** Create and connect multiple ShopStatus documents */
  create?: Maybe<Array<ShopStatusCreateInput>>;
  /** Connect multiple existing ShopStatus documents */
  connect?: Maybe<Array<ShopStatusConnectInput>>;
  /** Override currently-connected documents with multiple existing ShopStatus documents */
  set?: Maybe<Array<ShopStatusWhereUniqueInput>>;
  /** Update multiple ShopStatus documents */
  update?: Maybe<Array<ShopStatusUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple ShopStatus documents */
  upsert?: Maybe<Array<ShopStatusUpsertWithNestedWhereUniqueInput>>;
  /** Disconnect multiple ShopStatus documents */
  disconnect?: Maybe<Array<ShopStatusWhereUniqueInput>>;
  /** Delete multiple ShopStatus documents */
  delete?: Maybe<Array<ShopStatusWhereUniqueInput>>;
};

export type ShopStatusUpdateManyInput = {
  name?: Maybe<Scalars['String']>;
};

export type ShopStatusUpdateManyWithNestedWhereInput = {
  /** Document search */
  where: ShopStatusWhereInput;
  /** Update many input */
  data: ShopStatusUpdateManyInput;
};

export type ShopStatusUpdateOneInlineInput = {
  /** Create and connect one ShopStatus document */
  create?: Maybe<ShopStatusCreateInput>;
  /** Update single ShopStatus document */
  update?: Maybe<ShopStatusUpdateWithNestedWhereUniqueInput>;
  /** Upsert single ShopStatus document */
  upsert?: Maybe<ShopStatusUpsertWithNestedWhereUniqueInput>;
  /** Connect existing ShopStatus document */
  connect?: Maybe<ShopStatusWhereUniqueInput>;
  /** Disconnect currently connected ShopStatus document */
  disconnect?: Maybe<Scalars['Boolean']>;
  /** Delete currently connected ShopStatus document */
  delete?: Maybe<Scalars['Boolean']>;
};

export type ShopStatusUpdateWithNestedWhereUniqueInput = {
  /** Unique document search */
  where: ShopStatusWhereUniqueInput;
  /** Document to update */
  data: ShopStatusUpdateInput;
};

export type ShopStatusUpsertInput = {
  /** Create document if it didn't exist */
  create: ShopStatusCreateInput;
  /** Update document if it exists */
  update: ShopStatusUpdateInput;
};

export type ShopStatusUpsertWithNestedWhereUniqueInput = {
  /** Unique document search */
  where: ShopStatusWhereUniqueInput;
  /** Upsert data */
  data: ShopStatusUpsertInput;
};

/** Identifies documents */
export type ShopStatusWhereInput = {
  /** Contains search across all appropriate fields. */
  _search?: Maybe<Scalars['String']>;
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<ShopStatusWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<ShopStatusWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<ShopStatusWhereInput>>;
  id?: Maybe<Scalars['ID']>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: Maybe<Scalars['DateTime']>;
  name?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  name_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  name_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  name_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  name_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  name_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  name_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  name_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  name_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  name_not_ends_with?: Maybe<Scalars['String']>;
  createdBy?: Maybe<UserWhereInput>;
  updatedBy?: Maybe<UserWhereInput>;
  publishedBy?: Maybe<UserWhereInput>;
  shops_every?: Maybe<ShopWhereInput>;
  shops_some?: Maybe<ShopWhereInput>;
  shops_none?: Maybe<ShopWhereInput>;
};

/** References ShopStatus record uniquely */
export type ShopStatusWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>;
};

export type ShopTown = Node & {
  __typename?: 'ShopTown';
  /** System stage field */
  stage: Stage;
  /** Get the document in other stages */
  documentInStages: Array<ShopTown>;
  /** The unique identifier */
  id: Scalars['ID'];
  /** The time the document was created */
  createdAt: Scalars['DateTime'];
  /** The time the document was updated */
  updatedAt: Scalars['DateTime'];
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']>;
  name?: Maybe<Scalars['String']>;
  location?: Maybe<Location>;
  /** User that created this document */
  createdBy?: Maybe<User>;
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  shops: Array<Shop>;
  /** List of ShopTown versions */
  history: Array<Version>;
};


export type ShopTownDocumentInStagesArgs = {
  stages?: Array<Stage>;
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
};


export type ShopTownCreatedByArgs = {
  locales?: Maybe<Array<Locale>>;
};


export type ShopTownUpdatedByArgs = {
  locales?: Maybe<Array<Locale>>;
};


export type ShopTownPublishedByArgs = {
  locales?: Maybe<Array<Locale>>;
};


export type ShopTownShopsArgs = {
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  locales?: Maybe<Array<Locale>>;
};


export type ShopTownHistoryArgs = {
  limit?: Scalars['Int'];
  skip?: Scalars['Int'];
  stageOverride?: Maybe<Stage>;
};

export type ShopTownConnectInput = {
  /** Document to connect */
  where: ShopTownWhereUniqueInput;
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: Maybe<ConnectPositionInput>;
};

/** A connection to a list of items. */
export type ShopTownConnection = {
  __typename?: 'ShopTownConnection';
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** A list of edges. */
  edges: Array<ShopTownEdge>;
  aggregate: Aggregate;
};

export type ShopTownCreateInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  name?: Maybe<Scalars['String']>;
  location?: Maybe<LocationInput>;
  shops?: Maybe<ShopCreateManyInlineInput>;
};

export type ShopTownCreateManyInlineInput = {
  /** Create and connect multiple existing ShopTown documents */
  create?: Maybe<Array<ShopTownCreateInput>>;
  /** Connect multiple existing ShopTown documents */
  connect?: Maybe<Array<ShopTownWhereUniqueInput>>;
};

export type ShopTownCreateOneInlineInput = {
  /** Create and connect one ShopTown document */
  create?: Maybe<ShopTownCreateInput>;
  /** Connect one existing ShopTown document */
  connect?: Maybe<ShopTownWhereUniqueInput>;
};

/** An edge in a connection. */
export type ShopTownEdge = {
  __typename?: 'ShopTownEdge';
  /** The item at the end of the edge. */
  node: ShopTown;
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
};

/** Identifies documents */
export type ShopTownManyWhereInput = {
  /** Contains search across all appropriate fields. */
  _search?: Maybe<Scalars['String']>;
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<ShopTownWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<ShopTownWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<ShopTownWhereInput>>;
  id?: Maybe<Scalars['ID']>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: Maybe<Scalars['DateTime']>;
  name?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  name_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  name_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  name_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  name_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  name_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  name_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  name_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  name_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  name_not_ends_with?: Maybe<Scalars['String']>;
  createdBy?: Maybe<UserWhereInput>;
  updatedBy?: Maybe<UserWhereInput>;
  publishedBy?: Maybe<UserWhereInput>;
  shops_every?: Maybe<ShopWhereInput>;
  shops_some?: Maybe<ShopWhereInput>;
  shops_none?: Maybe<ShopWhereInput>;
};

export enum ShopTownOrderByInput {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC'
}

export type ShopTownUpdateInput = {
  name?: Maybe<Scalars['String']>;
  location?: Maybe<LocationInput>;
  shops?: Maybe<ShopUpdateManyInlineInput>;
};

export type ShopTownUpdateManyInlineInput = {
  /** Create and connect multiple ShopTown documents */
  create?: Maybe<Array<ShopTownCreateInput>>;
  /** Connect multiple existing ShopTown documents */
  connect?: Maybe<Array<ShopTownConnectInput>>;
  /** Override currently-connected documents with multiple existing ShopTown documents */
  set?: Maybe<Array<ShopTownWhereUniqueInput>>;
  /** Update multiple ShopTown documents */
  update?: Maybe<Array<ShopTownUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple ShopTown documents */
  upsert?: Maybe<Array<ShopTownUpsertWithNestedWhereUniqueInput>>;
  /** Disconnect multiple ShopTown documents */
  disconnect?: Maybe<Array<ShopTownWhereUniqueInput>>;
  /** Delete multiple ShopTown documents */
  delete?: Maybe<Array<ShopTownWhereUniqueInput>>;
};

export type ShopTownUpdateManyInput = {
  name?: Maybe<Scalars['String']>;
  location?: Maybe<LocationInput>;
};

export type ShopTownUpdateManyWithNestedWhereInput = {
  /** Document search */
  where: ShopTownWhereInput;
  /** Update many input */
  data: ShopTownUpdateManyInput;
};

export type ShopTownUpdateOneInlineInput = {
  /** Create and connect one ShopTown document */
  create?: Maybe<ShopTownCreateInput>;
  /** Update single ShopTown document */
  update?: Maybe<ShopTownUpdateWithNestedWhereUniqueInput>;
  /** Upsert single ShopTown document */
  upsert?: Maybe<ShopTownUpsertWithNestedWhereUniqueInput>;
  /** Connect existing ShopTown document */
  connect?: Maybe<ShopTownWhereUniqueInput>;
  /** Disconnect currently connected ShopTown document */
  disconnect?: Maybe<Scalars['Boolean']>;
  /** Delete currently connected ShopTown document */
  delete?: Maybe<Scalars['Boolean']>;
};

export type ShopTownUpdateWithNestedWhereUniqueInput = {
  /** Unique document search */
  where: ShopTownWhereUniqueInput;
  /** Document to update */
  data: ShopTownUpdateInput;
};

export type ShopTownUpsertInput = {
  /** Create document if it didn't exist */
  create: ShopTownCreateInput;
  /** Update document if it exists */
  update: ShopTownUpdateInput;
};

export type ShopTownUpsertWithNestedWhereUniqueInput = {
  /** Unique document search */
  where: ShopTownWhereUniqueInput;
  /** Upsert data */
  data: ShopTownUpsertInput;
};

/** Identifies documents */
export type ShopTownWhereInput = {
  /** Contains search across all appropriate fields. */
  _search?: Maybe<Scalars['String']>;
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<ShopTownWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<ShopTownWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<ShopTownWhereInput>>;
  id?: Maybe<Scalars['ID']>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: Maybe<Scalars['DateTime']>;
  name?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  name_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  name_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  name_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  name_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  name_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  name_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  name_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  name_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  name_not_ends_with?: Maybe<Scalars['String']>;
  createdBy?: Maybe<UserWhereInput>;
  updatedBy?: Maybe<UserWhereInput>;
  publishedBy?: Maybe<UserWhereInput>;
  shops_every?: Maybe<ShopWhereInput>;
  shops_some?: Maybe<ShopWhereInput>;
  shops_none?: Maybe<ShopWhereInput>;
};

/** References ShopTown record uniquely */
export type ShopTownWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>;
};

export type ShopType = Node & {
  __typename?: 'ShopType';
  /** System stage field */
  stage: Stage;
  /** Get the document in other stages */
  documentInStages: Array<ShopType>;
  /** The unique identifier */
  id: Scalars['ID'];
  /** The time the document was created */
  createdAt: Scalars['DateTime'];
  /** The time the document was updated */
  updatedAt: Scalars['DateTime'];
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']>;
  name?: Maybe<Scalars['String']>;
  /** User that created this document */
  createdBy?: Maybe<User>;
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  shops: Array<Shop>;
  /** List of ShopType versions */
  history: Array<Version>;
};


export type ShopTypeDocumentInStagesArgs = {
  stages?: Array<Stage>;
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
};


export type ShopTypeCreatedByArgs = {
  locales?: Maybe<Array<Locale>>;
};


export type ShopTypeUpdatedByArgs = {
  locales?: Maybe<Array<Locale>>;
};


export type ShopTypePublishedByArgs = {
  locales?: Maybe<Array<Locale>>;
};


export type ShopTypeShopsArgs = {
  where?: Maybe<ShopWhereInput>;
  orderBy?: Maybe<ShopOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  locales?: Maybe<Array<Locale>>;
};


export type ShopTypeHistoryArgs = {
  limit?: Scalars['Int'];
  skip?: Scalars['Int'];
  stageOverride?: Maybe<Stage>;
};

export type ShopTypeConnectInput = {
  /** Document to connect */
  where: ShopTypeWhereUniqueInput;
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: Maybe<ConnectPositionInput>;
};

/** A connection to a list of items. */
export type ShopTypeConnection = {
  __typename?: 'ShopTypeConnection';
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** A list of edges. */
  edges: Array<ShopTypeEdge>;
  aggregate: Aggregate;
};

export type ShopTypeCreateInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  name?: Maybe<Scalars['String']>;
  shops?: Maybe<ShopCreateManyInlineInput>;
};

export type ShopTypeCreateManyInlineInput = {
  /** Create and connect multiple existing ShopType documents */
  create?: Maybe<Array<ShopTypeCreateInput>>;
  /** Connect multiple existing ShopType documents */
  connect?: Maybe<Array<ShopTypeWhereUniqueInput>>;
};

export type ShopTypeCreateOneInlineInput = {
  /** Create and connect one ShopType document */
  create?: Maybe<ShopTypeCreateInput>;
  /** Connect one existing ShopType document */
  connect?: Maybe<ShopTypeWhereUniqueInput>;
};

/** An edge in a connection. */
export type ShopTypeEdge = {
  __typename?: 'ShopTypeEdge';
  /** The item at the end of the edge. */
  node: ShopType;
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
};

/** Identifies documents */
export type ShopTypeManyWhereInput = {
  /** Contains search across all appropriate fields. */
  _search?: Maybe<Scalars['String']>;
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<ShopTypeWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<ShopTypeWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<ShopTypeWhereInput>>;
  id?: Maybe<Scalars['ID']>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: Maybe<Scalars['DateTime']>;
  name?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  name_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  name_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  name_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  name_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  name_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  name_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  name_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  name_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  name_not_ends_with?: Maybe<Scalars['String']>;
  createdBy?: Maybe<UserWhereInput>;
  updatedBy?: Maybe<UserWhereInput>;
  publishedBy?: Maybe<UserWhereInput>;
  shops_every?: Maybe<ShopWhereInput>;
  shops_some?: Maybe<ShopWhereInput>;
  shops_none?: Maybe<ShopWhereInput>;
};

export enum ShopTypeOrderByInput {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC'
}

export type ShopTypeUpdateInput = {
  name?: Maybe<Scalars['String']>;
  shops?: Maybe<ShopUpdateManyInlineInput>;
};

export type ShopTypeUpdateManyInlineInput = {
  /** Create and connect multiple ShopType documents */
  create?: Maybe<Array<ShopTypeCreateInput>>;
  /** Connect multiple existing ShopType documents */
  connect?: Maybe<Array<ShopTypeConnectInput>>;
  /** Override currently-connected documents with multiple existing ShopType documents */
  set?: Maybe<Array<ShopTypeWhereUniqueInput>>;
  /** Update multiple ShopType documents */
  update?: Maybe<Array<ShopTypeUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple ShopType documents */
  upsert?: Maybe<Array<ShopTypeUpsertWithNestedWhereUniqueInput>>;
  /** Disconnect multiple ShopType documents */
  disconnect?: Maybe<Array<ShopTypeWhereUniqueInput>>;
  /** Delete multiple ShopType documents */
  delete?: Maybe<Array<ShopTypeWhereUniqueInput>>;
};

export type ShopTypeUpdateManyInput = {
  name?: Maybe<Scalars['String']>;
};

export type ShopTypeUpdateManyWithNestedWhereInput = {
  /** Document search */
  where: ShopTypeWhereInput;
  /** Update many input */
  data: ShopTypeUpdateManyInput;
};

export type ShopTypeUpdateOneInlineInput = {
  /** Create and connect one ShopType document */
  create?: Maybe<ShopTypeCreateInput>;
  /** Update single ShopType document */
  update?: Maybe<ShopTypeUpdateWithNestedWhereUniqueInput>;
  /** Upsert single ShopType document */
  upsert?: Maybe<ShopTypeUpsertWithNestedWhereUniqueInput>;
  /** Connect existing ShopType document */
  connect?: Maybe<ShopTypeWhereUniqueInput>;
  /** Disconnect currently connected ShopType document */
  disconnect?: Maybe<Scalars['Boolean']>;
  /** Delete currently connected ShopType document */
  delete?: Maybe<Scalars['Boolean']>;
};

export type ShopTypeUpdateWithNestedWhereUniqueInput = {
  /** Unique document search */
  where: ShopTypeWhereUniqueInput;
  /** Document to update */
  data: ShopTypeUpdateInput;
};

export type ShopTypeUpsertInput = {
  /** Create document if it didn't exist */
  create: ShopTypeCreateInput;
  /** Update document if it exists */
  update: ShopTypeUpdateInput;
};

export type ShopTypeUpsertWithNestedWhereUniqueInput = {
  /** Unique document search */
  where: ShopTypeWhereUniqueInput;
  /** Upsert data */
  data: ShopTypeUpsertInput;
};

/** Identifies documents */
export type ShopTypeWhereInput = {
  /** Contains search across all appropriate fields. */
  _search?: Maybe<Scalars['String']>;
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<ShopTypeWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<ShopTypeWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<ShopTypeWhereInput>>;
  id?: Maybe<Scalars['ID']>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: Maybe<Scalars['DateTime']>;
  name?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  name_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  name_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  name_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  name_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  name_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  name_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  name_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  name_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  name_not_ends_with?: Maybe<Scalars['String']>;
  createdBy?: Maybe<UserWhereInput>;
  updatedBy?: Maybe<UserWhereInput>;
  publishedBy?: Maybe<UserWhereInput>;
  shops_every?: Maybe<ShopWhereInput>;
  shops_some?: Maybe<ShopWhereInput>;
  shops_none?: Maybe<ShopWhereInput>;
};

/** References ShopType record uniquely */
export type ShopTypeWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>;
};

export type ShopUpdateInput = {
  name?: Maybe<Scalars['String']>;
  openinghours?: Maybe<Scalars['String']>;
  address?: Maybe<Scalars['String']>;
  location?: Maybe<LocationInput>;
  email?: Maybe<Scalars['String']>;
  stickerFront?: Maybe<Scalars['Int']>;
  stickerBack?: Maybe<Scalars['Int']>;
  stickerDelivery?: Maybe<Scalars['Boolean']>;
  newsletter?: Maybe<Scalars['Boolean']>;
  furtherInformation?: Maybe<Scalars['String']>;
  website?: Maybe<Scalars['String']>;
  trayinformation?: Maybe<Scalars['Int']>;
  infoflyer?: Maybe<Scalars['Int']>;
  shopStatus?: Maybe<ShopStatusUpdateOneInlineInput>;
  shopBundesland?: Maybe<ShopBundeslandUpdateOneInlineInput>;
  shopType?: Maybe<ShopTypeUpdateManyInlineInput>;
  shopcategories?: Maybe<ShopCategoryUpdateManyInlineInput>;
  dataProtectionForm?: Maybe<AssetUpdateOneInlineInput>;
  shopTown?: Maybe<ShopShopTownUpdateOneInlineInput>;
};

export type ShopUpdateManyInlineInput = {
  /** Create and connect multiple Shop documents */
  create?: Maybe<Array<ShopCreateInput>>;
  /** Connect multiple existing Shop documents */
  connect?: Maybe<Array<ShopConnectInput>>;
  /** Override currently-connected documents with multiple existing Shop documents */
  set?: Maybe<Array<ShopWhereUniqueInput>>;
  /** Update multiple Shop documents */
  update?: Maybe<Array<ShopUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple Shop documents */
  upsert?: Maybe<Array<ShopUpsertWithNestedWhereUniqueInput>>;
  /** Disconnect multiple Shop documents */
  disconnect?: Maybe<Array<ShopWhereUniqueInput>>;
  /** Delete multiple Shop documents */
  delete?: Maybe<Array<ShopWhereUniqueInput>>;
};

export type ShopUpdateManyInput = {
  name?: Maybe<Scalars['String']>;
  openinghours?: Maybe<Scalars['String']>;
  address?: Maybe<Scalars['String']>;
  location?: Maybe<LocationInput>;
  email?: Maybe<Scalars['String']>;
  stickerFront?: Maybe<Scalars['Int']>;
  stickerBack?: Maybe<Scalars['Int']>;
  stickerDelivery?: Maybe<Scalars['Boolean']>;
  newsletter?: Maybe<Scalars['Boolean']>;
  furtherInformation?: Maybe<Scalars['String']>;
  website?: Maybe<Scalars['String']>;
  trayinformation?: Maybe<Scalars['Int']>;
  infoflyer?: Maybe<Scalars['Int']>;
};

export type ShopUpdateManyWithNestedWhereInput = {
  /** Document search */
  where: ShopWhereInput;
  /** Update many input */
  data: ShopUpdateManyInput;
};

export type ShopUpdateOneInlineInput = {
  /** Create and connect one Shop document */
  create?: Maybe<ShopCreateInput>;
  /** Update single Shop document */
  update?: Maybe<ShopUpdateWithNestedWhereUniqueInput>;
  /** Upsert single Shop document */
  upsert?: Maybe<ShopUpsertWithNestedWhereUniqueInput>;
  /** Connect existing Shop document */
  connect?: Maybe<ShopWhereUniqueInput>;
  /** Disconnect currently connected Shop document */
  disconnect?: Maybe<Scalars['Boolean']>;
  /** Delete currently connected Shop document */
  delete?: Maybe<Scalars['Boolean']>;
};

export type ShopUpdateWithNestedWhereUniqueInput = {
  /** Unique document search */
  where: ShopWhereUniqueInput;
  /** Document to update */
  data: ShopUpdateInput;
};

export type ShopUpsertInput = {
  /** Create document if it didn't exist */
  create: ShopCreateInput;
  /** Update document if it exists */
  update: ShopUpdateInput;
};

export type ShopUpsertWithNestedWhereUniqueInput = {
  /** Unique document search */
  where: ShopWhereUniqueInput;
  /** Upsert data */
  data: ShopUpsertInput;
};

/** Identifies documents */
export type ShopWhereInput = {
  /** Contains search across all appropriate fields. */
  _search?: Maybe<Scalars['String']>;
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<ShopWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<ShopWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<ShopWhereInput>>;
  id?: Maybe<Scalars['ID']>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: Maybe<Scalars['DateTime']>;
  name?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  name_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  name_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  name_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  name_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  name_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  name_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  name_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  name_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  name_not_ends_with?: Maybe<Scalars['String']>;
  openinghours?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  openinghours_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  openinghours_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  openinghours_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  openinghours_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  openinghours_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  openinghours_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  openinghours_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  openinghours_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  openinghours_not_ends_with?: Maybe<Scalars['String']>;
  address?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  address_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  address_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  address_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  address_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  address_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  address_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  address_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  address_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  address_not_ends_with?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  email_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  email_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  email_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  email_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  email_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  email_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  email_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  email_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  email_not_ends_with?: Maybe<Scalars['String']>;
  stickerFront?: Maybe<Scalars['Int']>;
  /** All values that are not equal to given value. */
  stickerFront_not?: Maybe<Scalars['Int']>;
  /** All values that are contained in given list. */
  stickerFront_in?: Maybe<Array<Scalars['Int']>>;
  /** All values that are not contained in given list. */
  stickerFront_not_in?: Maybe<Array<Scalars['Int']>>;
  /** All values less than the given value. */
  stickerFront_lt?: Maybe<Scalars['Int']>;
  /** All values less than or equal the given value. */
  stickerFront_lte?: Maybe<Scalars['Int']>;
  /** All values greater than the given value. */
  stickerFront_gt?: Maybe<Scalars['Int']>;
  /** All values greater than or equal the given value. */
  stickerFront_gte?: Maybe<Scalars['Int']>;
  stickerBack?: Maybe<Scalars['Int']>;
  /** All values that are not equal to given value. */
  stickerBack_not?: Maybe<Scalars['Int']>;
  /** All values that are contained in given list. */
  stickerBack_in?: Maybe<Array<Scalars['Int']>>;
  /** All values that are not contained in given list. */
  stickerBack_not_in?: Maybe<Array<Scalars['Int']>>;
  /** All values less than the given value. */
  stickerBack_lt?: Maybe<Scalars['Int']>;
  /** All values less than or equal the given value. */
  stickerBack_lte?: Maybe<Scalars['Int']>;
  /** All values greater than the given value. */
  stickerBack_gt?: Maybe<Scalars['Int']>;
  /** All values greater than or equal the given value. */
  stickerBack_gte?: Maybe<Scalars['Int']>;
  stickerDelivery?: Maybe<Scalars['Boolean']>;
  /** All values that are not equal to given value. */
  stickerDelivery_not?: Maybe<Scalars['Boolean']>;
  newsletter?: Maybe<Scalars['Boolean']>;
  /** All values that are not equal to given value. */
  newsletter_not?: Maybe<Scalars['Boolean']>;
  furtherInformation?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  furtherInformation_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  furtherInformation_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  furtherInformation_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  furtherInformation_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  furtherInformation_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  furtherInformation_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  furtherInformation_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  furtherInformation_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  furtherInformation_not_ends_with?: Maybe<Scalars['String']>;
  website?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  website_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  website_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  website_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  website_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  website_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  website_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  website_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  website_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  website_not_ends_with?: Maybe<Scalars['String']>;
  trayinformation?: Maybe<Scalars['Int']>;
  /** All values that are not equal to given value. */
  trayinformation_not?: Maybe<Scalars['Int']>;
  /** All values that are contained in given list. */
  trayinformation_in?: Maybe<Array<Scalars['Int']>>;
  /** All values that are not contained in given list. */
  trayinformation_not_in?: Maybe<Array<Scalars['Int']>>;
  /** All values less than the given value. */
  trayinformation_lt?: Maybe<Scalars['Int']>;
  /** All values less than or equal the given value. */
  trayinformation_lte?: Maybe<Scalars['Int']>;
  /** All values greater than the given value. */
  trayinformation_gt?: Maybe<Scalars['Int']>;
  /** All values greater than or equal the given value. */
  trayinformation_gte?: Maybe<Scalars['Int']>;
  infoflyer?: Maybe<Scalars['Int']>;
  /** All values that are not equal to given value. */
  infoflyer_not?: Maybe<Scalars['Int']>;
  /** All values that are contained in given list. */
  infoflyer_in?: Maybe<Array<Scalars['Int']>>;
  /** All values that are not contained in given list. */
  infoflyer_not_in?: Maybe<Array<Scalars['Int']>>;
  /** All values less than the given value. */
  infoflyer_lt?: Maybe<Scalars['Int']>;
  /** All values less than or equal the given value. */
  infoflyer_lte?: Maybe<Scalars['Int']>;
  /** All values greater than the given value. */
  infoflyer_gt?: Maybe<Scalars['Int']>;
  /** All values greater than or equal the given value. */
  infoflyer_gte?: Maybe<Scalars['Int']>;
  createdBy?: Maybe<UserWhereInput>;
  updatedBy?: Maybe<UserWhereInput>;
  publishedBy?: Maybe<UserWhereInput>;
  shopStatus?: Maybe<ShopStatusWhereInput>;
  shopBundesland?: Maybe<ShopBundeslandWhereInput>;
  shopType_every?: Maybe<ShopTypeWhereInput>;
  shopType_some?: Maybe<ShopTypeWhereInput>;
  shopType_none?: Maybe<ShopTypeWhereInput>;
  shopcategories_every?: Maybe<ShopCategoryWhereInput>;
  shopcategories_some?: Maybe<ShopCategoryWhereInput>;
  shopcategories_none?: Maybe<ShopCategoryWhereInput>;
  dataProtectionForm?: Maybe<AssetWhereInput>;
};

/** References Shop record uniquely */
export type ShopWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>;
};

/** Stage system enumeration */
export enum Stage {
  /** The Published stage is where you can publish your content to. */
  Published = 'PUBLISHED',
  /** The Draft is the default stage for all your content. */
  Draft = 'DRAFT'
}

export type Supporter = Node & {
  __typename?: 'Supporter';
  /** System stage field */
  stage: Stage;
  /** System Locale field */
  locale: Locale;
  /** Get the other localizations for this document */
  localizations: Array<Supporter>;
  /** Get the document in other stages */
  documentInStages: Array<Supporter>;
  /** The unique identifier */
  id: Scalars['ID'];
  /** The time the document was created */
  createdAt: Scalars['DateTime'];
  /** The time the document was updated */
  updatedAt: Scalars['DateTime'];
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']>;
  name?: Maybe<Scalars['String']>;
  website?: Maybe<Scalars['String']>;
  /** User that created this document */
  createdBy?: Maybe<User>;
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  picture?: Maybe<Asset>;
  /** List of Supporter versions */
  history: Array<Version>;
};


export type SupporterLocalizationsArgs = {
  locales?: Array<Locale>;
  includeCurrent?: Scalars['Boolean'];
};


export type SupporterDocumentInStagesArgs = {
  stages?: Array<Stage>;
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
};


export type SupporterCreatedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};


export type SupporterUpdatedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};


export type SupporterPublishedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};


export type SupporterCreatedByArgs = {
  locales?: Maybe<Array<Locale>>;
};


export type SupporterUpdatedByArgs = {
  locales?: Maybe<Array<Locale>>;
};


export type SupporterPublishedByArgs = {
  locales?: Maybe<Array<Locale>>;
};


export type SupporterPictureArgs = {
  locales?: Maybe<Array<Locale>>;
};


export type SupporterHistoryArgs = {
  limit?: Scalars['Int'];
  skip?: Scalars['Int'];
  stageOverride?: Maybe<Stage>;
};

export type SupporterConnectInput = {
  /** Document to connect */
  where: SupporterWhereUniqueInput;
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: Maybe<ConnectPositionInput>;
};

/** A connection to a list of items. */
export type SupporterConnection = {
  __typename?: 'SupporterConnection';
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** A list of edges. */
  edges: Array<SupporterEdge>;
  aggregate: Aggregate;
};

export type SupporterCreateInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  /** name input for default locale (de) */
  name?: Maybe<Scalars['String']>;
  /** website input for default locale (de) */
  website?: Maybe<Scalars['String']>;
  picture?: Maybe<AssetCreateOneInlineInput>;
  /** Inline mutations for managing document localizations excluding the default locale */
  localizations?: Maybe<SupporterCreateLocalizationsInput>;
};

export type SupporterCreateLocalizationDataInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  name?: Maybe<Scalars['String']>;
  website?: Maybe<Scalars['String']>;
};

export type SupporterCreateLocalizationInput = {
  /** Localization input */
  data: SupporterCreateLocalizationDataInput;
  locale: Locale;
};

export type SupporterCreateLocalizationsInput = {
  /** Create localizations for the newly-created document */
  create?: Maybe<Array<SupporterCreateLocalizationInput>>;
};

export type SupporterCreateManyInlineInput = {
  /** Create and connect multiple existing Supporter documents */
  create?: Maybe<Array<SupporterCreateInput>>;
  /** Connect multiple existing Supporter documents */
  connect?: Maybe<Array<SupporterWhereUniqueInput>>;
};

export type SupporterCreateOneInlineInput = {
  /** Create and connect one Supporter document */
  create?: Maybe<SupporterCreateInput>;
  /** Connect one existing Supporter document */
  connect?: Maybe<SupporterWhereUniqueInput>;
};

/** An edge in a connection. */
export type SupporterEdge = {
  __typename?: 'SupporterEdge';
  /** The item at the end of the edge. */
  node: Supporter;
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
};

/** Identifies documents */
export type SupporterManyWhereInput = {
  /** Contains search across all appropriate fields. */
  _search?: Maybe<Scalars['String']>;
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<SupporterWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<SupporterWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<SupporterWhereInput>>;
  id?: Maybe<Scalars['ID']>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: Maybe<Scalars['DateTime']>;
  createdBy?: Maybe<UserWhereInput>;
  updatedBy?: Maybe<UserWhereInput>;
  publishedBy?: Maybe<UserWhereInput>;
  picture?: Maybe<AssetWhereInput>;
};

export enum SupporterOrderByInput {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  WebsiteAsc = 'website_ASC',
  WebsiteDesc = 'website_DESC'
}

export type SupporterUpdateInput = {
  /** name input for default locale (de) */
  name?: Maybe<Scalars['String']>;
  /** website input for default locale (de) */
  website?: Maybe<Scalars['String']>;
  picture?: Maybe<AssetUpdateOneInlineInput>;
  /** Manage document localizations */
  localizations?: Maybe<SupporterUpdateLocalizationsInput>;
};

export type SupporterUpdateLocalizationDataInput = {
  name?: Maybe<Scalars['String']>;
  website?: Maybe<Scalars['String']>;
};

export type SupporterUpdateLocalizationInput = {
  data: SupporterUpdateLocalizationDataInput;
  locale: Locale;
};

export type SupporterUpdateLocalizationsInput = {
  /** Localizations to create */
  create?: Maybe<Array<SupporterCreateLocalizationInput>>;
  /** Localizations to update */
  update?: Maybe<Array<SupporterUpdateLocalizationInput>>;
  upsert?: Maybe<Array<SupporterUpsertLocalizationInput>>;
  /** Localizations to delete */
  delete?: Maybe<Array<Locale>>;
};

export type SupporterUpdateManyInlineInput = {
  /** Create and connect multiple Supporter documents */
  create?: Maybe<Array<SupporterCreateInput>>;
  /** Connect multiple existing Supporter documents */
  connect?: Maybe<Array<SupporterConnectInput>>;
  /** Override currently-connected documents with multiple existing Supporter documents */
  set?: Maybe<Array<SupporterWhereUniqueInput>>;
  /** Update multiple Supporter documents */
  update?: Maybe<Array<SupporterUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple Supporter documents */
  upsert?: Maybe<Array<SupporterUpsertWithNestedWhereUniqueInput>>;
  /** Disconnect multiple Supporter documents */
  disconnect?: Maybe<Array<SupporterWhereUniqueInput>>;
  /** Delete multiple Supporter documents */
  delete?: Maybe<Array<SupporterWhereUniqueInput>>;
};

export type SupporterUpdateManyInput = {
  /** name input for default locale (de) */
  name?: Maybe<Scalars['String']>;
  /** website input for default locale (de) */
  website?: Maybe<Scalars['String']>;
  /** Optional updates to localizations */
  localizations?: Maybe<SupporterUpdateManyLocalizationsInput>;
};

export type SupporterUpdateManyLocalizationDataInput = {
  name?: Maybe<Scalars['String']>;
  website?: Maybe<Scalars['String']>;
};

export type SupporterUpdateManyLocalizationInput = {
  data: SupporterUpdateManyLocalizationDataInput;
  locale: Locale;
};

export type SupporterUpdateManyLocalizationsInput = {
  /** Localizations to update */
  update?: Maybe<Array<SupporterUpdateManyLocalizationInput>>;
};

export type SupporterUpdateManyWithNestedWhereInput = {
  /** Document search */
  where: SupporterWhereInput;
  /** Update many input */
  data: SupporterUpdateManyInput;
};

export type SupporterUpdateOneInlineInput = {
  /** Create and connect one Supporter document */
  create?: Maybe<SupporterCreateInput>;
  /** Update single Supporter document */
  update?: Maybe<SupporterUpdateWithNestedWhereUniqueInput>;
  /** Upsert single Supporter document */
  upsert?: Maybe<SupporterUpsertWithNestedWhereUniqueInput>;
  /** Connect existing Supporter document */
  connect?: Maybe<SupporterWhereUniqueInput>;
  /** Disconnect currently connected Supporter document */
  disconnect?: Maybe<Scalars['Boolean']>;
  /** Delete currently connected Supporter document */
  delete?: Maybe<Scalars['Boolean']>;
};

export type SupporterUpdateWithNestedWhereUniqueInput = {
  /** Unique document search */
  where: SupporterWhereUniqueInput;
  /** Document to update */
  data: SupporterUpdateInput;
};

export type SupporterUpsertInput = {
  /** Create document if it didn't exist */
  create: SupporterCreateInput;
  /** Update document if it exists */
  update: SupporterUpdateInput;
};

export type SupporterUpsertLocalizationInput = {
  update: SupporterUpdateLocalizationDataInput;
  create: SupporterCreateLocalizationDataInput;
  locale: Locale;
};

export type SupporterUpsertWithNestedWhereUniqueInput = {
  /** Unique document search */
  where: SupporterWhereUniqueInput;
  /** Upsert data */
  data: SupporterUpsertInput;
};

/** Identifies documents */
export type SupporterWhereInput = {
  /** Contains search across all appropriate fields. */
  _search?: Maybe<Scalars['String']>;
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<SupporterWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<SupporterWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<SupporterWhereInput>>;
  id?: Maybe<Scalars['ID']>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: Maybe<Scalars['DateTime']>;
  name?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  name_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  name_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  name_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  name_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  name_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  name_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  name_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  name_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  name_not_ends_with?: Maybe<Scalars['String']>;
  website?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  website_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  website_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  website_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  website_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  website_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  website_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  website_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  website_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  website_not_ends_with?: Maybe<Scalars['String']>;
  createdBy?: Maybe<UserWhereInput>;
  updatedBy?: Maybe<UserWhereInput>;
  publishedBy?: Maybe<UserWhereInput>;
  picture?: Maybe<AssetWhereInput>;
};

/** References Supporter record uniquely */
export type SupporterWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>;
};

export enum SystemDateTimeFieldVariation {
  Base = 'BASE',
  Localization = 'LOCALIZATION',
  Combined = 'COMBINED'
}

export type Translation = Node & {
  __typename?: 'Translation';
  /** System stage field */
  stage: Stage;
  /** System Locale field */
  locale: Locale;
  /** Get the other localizations for this document */
  localizations: Array<Translation>;
  /** Get the document in other stages */
  documentInStages: Array<Translation>;
  /** The unique identifier */
  id: Scalars['ID'];
  /** The time the document was created */
  createdAt: Scalars['DateTime'];
  /** The time the document was updated */
  updatedAt: Scalars['DateTime'];
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']>;
  key: Scalars['String'];
  value?: Maybe<Scalars['String']>;
  /** User that created this document */
  createdBy?: Maybe<User>;
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  category?: Maybe<Category>;
  /** List of Translation versions */
  history: Array<Version>;
};


export type TranslationLocalizationsArgs = {
  locales?: Array<Locale>;
  includeCurrent?: Scalars['Boolean'];
};


export type TranslationDocumentInStagesArgs = {
  stages?: Array<Stage>;
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
};


export type TranslationCreatedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};


export type TranslationUpdatedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};


export type TranslationPublishedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};


export type TranslationCreatedByArgs = {
  locales?: Maybe<Array<Locale>>;
};


export type TranslationUpdatedByArgs = {
  locales?: Maybe<Array<Locale>>;
};


export type TranslationPublishedByArgs = {
  locales?: Maybe<Array<Locale>>;
};


export type TranslationHistoryArgs = {
  limit?: Scalars['Int'];
  skip?: Scalars['Int'];
  stageOverride?: Maybe<Stage>;
};

export type TranslationConnectInput = {
  /** Document to connect */
  where: TranslationWhereUniqueInput;
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: Maybe<ConnectPositionInput>;
};

/** A connection to a list of items. */
export type TranslationConnection = {
  __typename?: 'TranslationConnection';
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** A list of edges. */
  edges: Array<TranslationEdge>;
  aggregate: Aggregate;
};

export type TranslationCreateInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  key: Scalars['String'];
  /** value input for default locale (de) */
  value?: Maybe<Scalars['String']>;
  category?: Maybe<Category>;
  /** Inline mutations for managing document localizations excluding the default locale */
  localizations?: Maybe<TranslationCreateLocalizationsInput>;
};

export type TranslationCreateLocalizationDataInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  value?: Maybe<Scalars['String']>;
};

export type TranslationCreateLocalizationInput = {
  /** Localization input */
  data: TranslationCreateLocalizationDataInput;
  locale: Locale;
};

export type TranslationCreateLocalizationsInput = {
  /** Create localizations for the newly-created document */
  create?: Maybe<Array<TranslationCreateLocalizationInput>>;
};

export type TranslationCreateManyInlineInput = {
  /** Create and connect multiple existing Translation documents */
  create?: Maybe<Array<TranslationCreateInput>>;
  /** Connect multiple existing Translation documents */
  connect?: Maybe<Array<TranslationWhereUniqueInput>>;
};

export type TranslationCreateOneInlineInput = {
  /** Create and connect one Translation document */
  create?: Maybe<TranslationCreateInput>;
  /** Connect one existing Translation document */
  connect?: Maybe<TranslationWhereUniqueInput>;
};

/** An edge in a connection. */
export type TranslationEdge = {
  __typename?: 'TranslationEdge';
  /** The item at the end of the edge. */
  node: Translation;
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
};

/** Identifies documents */
export type TranslationManyWhereInput = {
  /** Contains search across all appropriate fields. */
  _search?: Maybe<Scalars['String']>;
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<TranslationWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<TranslationWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<TranslationWhereInput>>;
  id?: Maybe<Scalars['ID']>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: Maybe<Scalars['DateTime']>;
  key?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  key_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  key_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  key_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  key_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  key_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  key_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  key_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  key_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  key_not_ends_with?: Maybe<Scalars['String']>;
  createdBy?: Maybe<UserWhereInput>;
  updatedBy?: Maybe<UserWhereInput>;
  publishedBy?: Maybe<UserWhereInput>;
  category?: Maybe<Category>;
  /** All values that are not equal to given value. */
  category_not?: Maybe<Category>;
  /** All values that are contained in given list. */
  category_in?: Maybe<Array<Category>>;
  /** All values that are not contained in given list. */
  category_not_in?: Maybe<Array<Category>>;
};

export enum TranslationOrderByInput {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  KeyAsc = 'key_ASC',
  KeyDesc = 'key_DESC',
  ValueAsc = 'value_ASC',
  ValueDesc = 'value_DESC',
  CategoryAsc = 'category_ASC',
  CategoryDesc = 'category_DESC'
}

export type TranslationUpdateInput = {
  key?: Maybe<Scalars['String']>;
  /** value input for default locale (de) */
  value?: Maybe<Scalars['String']>;
  category?: Maybe<Category>;
  /** Manage document localizations */
  localizations?: Maybe<TranslationUpdateLocalizationsInput>;
};

export type TranslationUpdateLocalizationDataInput = {
  value?: Maybe<Scalars['String']>;
};

export type TranslationUpdateLocalizationInput = {
  data: TranslationUpdateLocalizationDataInput;
  locale: Locale;
};

export type TranslationUpdateLocalizationsInput = {
  /** Localizations to create */
  create?: Maybe<Array<TranslationCreateLocalizationInput>>;
  /** Localizations to update */
  update?: Maybe<Array<TranslationUpdateLocalizationInput>>;
  upsert?: Maybe<Array<TranslationUpsertLocalizationInput>>;
  /** Localizations to delete */
  delete?: Maybe<Array<Locale>>;
};

export type TranslationUpdateManyInlineInput = {
  /** Create and connect multiple Translation documents */
  create?: Maybe<Array<TranslationCreateInput>>;
  /** Connect multiple existing Translation documents */
  connect?: Maybe<Array<TranslationConnectInput>>;
  /** Override currently-connected documents with multiple existing Translation documents */
  set?: Maybe<Array<TranslationWhereUniqueInput>>;
  /** Update multiple Translation documents */
  update?: Maybe<Array<TranslationUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple Translation documents */
  upsert?: Maybe<Array<TranslationUpsertWithNestedWhereUniqueInput>>;
  /** Disconnect multiple Translation documents */
  disconnect?: Maybe<Array<TranslationWhereUniqueInput>>;
  /** Delete multiple Translation documents */
  delete?: Maybe<Array<TranslationWhereUniqueInput>>;
};

export type TranslationUpdateManyInput = {
  /** value input for default locale (de) */
  value?: Maybe<Scalars['String']>;
  category?: Maybe<Category>;
  /** Optional updates to localizations */
  localizations?: Maybe<TranslationUpdateManyLocalizationsInput>;
};

export type TranslationUpdateManyLocalizationDataInput = {
  value?: Maybe<Scalars['String']>;
};

export type TranslationUpdateManyLocalizationInput = {
  data: TranslationUpdateManyLocalizationDataInput;
  locale: Locale;
};

export type TranslationUpdateManyLocalizationsInput = {
  /** Localizations to update */
  update?: Maybe<Array<TranslationUpdateManyLocalizationInput>>;
};

export type TranslationUpdateManyWithNestedWhereInput = {
  /** Document search */
  where: TranslationWhereInput;
  /** Update many input */
  data: TranslationUpdateManyInput;
};

export type TranslationUpdateOneInlineInput = {
  /** Create and connect one Translation document */
  create?: Maybe<TranslationCreateInput>;
  /** Update single Translation document */
  update?: Maybe<TranslationUpdateWithNestedWhereUniqueInput>;
  /** Upsert single Translation document */
  upsert?: Maybe<TranslationUpsertWithNestedWhereUniqueInput>;
  /** Connect existing Translation document */
  connect?: Maybe<TranslationWhereUniqueInput>;
  /** Disconnect currently connected Translation document */
  disconnect?: Maybe<Scalars['Boolean']>;
  /** Delete currently connected Translation document */
  delete?: Maybe<Scalars['Boolean']>;
};

export type TranslationUpdateWithNestedWhereUniqueInput = {
  /** Unique document search */
  where: TranslationWhereUniqueInput;
  /** Document to update */
  data: TranslationUpdateInput;
};

export type TranslationUpsertInput = {
  /** Create document if it didn't exist */
  create: TranslationCreateInput;
  /** Update document if it exists */
  update: TranslationUpdateInput;
};

export type TranslationUpsertLocalizationInput = {
  update: TranslationUpdateLocalizationDataInput;
  create: TranslationCreateLocalizationDataInput;
  locale: Locale;
};

export type TranslationUpsertWithNestedWhereUniqueInput = {
  /** Unique document search */
  where: TranslationWhereUniqueInput;
  /** Upsert data */
  data: TranslationUpsertInput;
};

/** Identifies documents */
export type TranslationWhereInput = {
  /** Contains search across all appropriate fields. */
  _search?: Maybe<Scalars['String']>;
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<TranslationWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<TranslationWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<TranslationWhereInput>>;
  id?: Maybe<Scalars['ID']>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: Maybe<Scalars['DateTime']>;
  key?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  key_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  key_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  key_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  key_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  key_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  key_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  key_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  key_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  key_not_ends_with?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  value_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  value_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  value_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  value_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  value_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  value_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  value_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  value_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  value_not_ends_with?: Maybe<Scalars['String']>;
  createdBy?: Maybe<UserWhereInput>;
  updatedBy?: Maybe<UserWhereInput>;
  publishedBy?: Maybe<UserWhereInput>;
  category?: Maybe<Category>;
  /** All values that are not equal to given value. */
  category_not?: Maybe<Category>;
  /** All values that are contained in given list. */
  category_in?: Maybe<Array<Category>>;
  /** All values that are not contained in given list. */
  category_not_in?: Maybe<Array<Category>>;
};

/** References Translation record uniquely */
export type TranslationWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>;
  key?: Maybe<Scalars['String']>;
};

export type UnpublishLocaleInput = {
  /** Locales to unpublish */
  locale: Locale;
  /** Stages to unpublish selected locales from */
  stages: Array<Stage>;
};

/** User system model */
export type User = Node & {
  __typename?: 'User';
  /** System stage field */
  stage: Stage;
  /** Get the document in other stages */
  documentInStages: Array<User>;
  /** The unique identifier */
  id: Scalars['ID'];
  /** The time the document was created */
  createdAt: Scalars['DateTime'];
  /** The time the document was updated */
  updatedAt: Scalars['DateTime'];
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** The username */
  name: Scalars['String'];
  /** Profile Picture url */
  picture?: Maybe<Scalars['String']>;
  /** Flag to determine if user is active or not */
  isActive: Scalars['Boolean'];
  /** User Kind. Can be either MEMBER, PAT or PUBLIC */
  kind: UserKind;
};


/** User system model */
export type UserDocumentInStagesArgs = {
  stages?: Array<Stage>;
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
};

export type UserConnectInput = {
  /** Document to connect */
  where: UserWhereUniqueInput;
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: Maybe<ConnectPositionInput>;
};

/** A connection to a list of items. */
export type UserConnection = {
  __typename?: 'UserConnection';
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** A list of edges. */
  edges: Array<UserEdge>;
  aggregate: Aggregate;
};

export type UserCreateManyInlineInput = {
  /** Connect multiple existing User documents */
  connect?: Maybe<Array<UserWhereUniqueInput>>;
};

export type UserCreateOneInlineInput = {
  /** Connect one existing User document */
  connect?: Maybe<UserWhereUniqueInput>;
};

/** An edge in a connection. */
export type UserEdge = {
  __typename?: 'UserEdge';
  /** The item at the end of the edge. */
  node: User;
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
};

/** System User Kind */
export enum UserKind {
  Member = 'MEMBER',
  Pat = 'PAT',
  Public = 'PUBLIC',
  Webhook = 'WEBHOOK'
}

/** Identifies documents */
export type UserManyWhereInput = {
  /** Contains search across all appropriate fields. */
  _search?: Maybe<Scalars['String']>;
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<UserWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<UserWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<UserWhereInput>>;
  id?: Maybe<Scalars['ID']>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: Maybe<Scalars['DateTime']>;
  name?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  name_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  name_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  name_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  name_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  name_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  name_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  name_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  name_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  name_not_ends_with?: Maybe<Scalars['String']>;
  picture?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  picture_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  picture_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  picture_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  picture_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  picture_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  picture_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  picture_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  picture_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  picture_not_ends_with?: Maybe<Scalars['String']>;
  isActive?: Maybe<Scalars['Boolean']>;
  /** All values that are not equal to given value. */
  isActive_not?: Maybe<Scalars['Boolean']>;
  kind?: Maybe<UserKind>;
  /** All values that are not equal to given value. */
  kind_not?: Maybe<UserKind>;
  /** All values that are contained in given list. */
  kind_in?: Maybe<Array<UserKind>>;
  /** All values that are not contained in given list. */
  kind_not_in?: Maybe<Array<UserKind>>;
};

export enum UserOrderByInput {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  PictureAsc = 'picture_ASC',
  PictureDesc = 'picture_DESC',
  IsActiveAsc = 'isActive_ASC',
  IsActiveDesc = 'isActive_DESC',
  KindAsc = 'kind_ASC',
  KindDesc = 'kind_DESC'
}

export type UserUpdateManyInlineInput = {
  /** Connect multiple existing User documents */
  connect?: Maybe<Array<UserConnectInput>>;
  /** Override currently-connected documents with multiple existing User documents */
  set?: Maybe<Array<UserWhereUniqueInput>>;
  /** Disconnect multiple User documents */
  disconnect?: Maybe<Array<UserWhereUniqueInput>>;
};

export type UserUpdateOneInlineInput = {
  /** Connect existing User document */
  connect?: Maybe<UserWhereUniqueInput>;
  /** Disconnect currently connected User document */
  disconnect?: Maybe<Scalars['Boolean']>;
};

/** Identifies documents */
export type UserWhereInput = {
  /** Contains search across all appropriate fields. */
  _search?: Maybe<Scalars['String']>;
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<UserWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<UserWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<UserWhereInput>>;
  id?: Maybe<Scalars['ID']>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: Maybe<Scalars['DateTime']>;
  name?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  name_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  name_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  name_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  name_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  name_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  name_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  name_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  name_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  name_not_ends_with?: Maybe<Scalars['String']>;
  picture?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  picture_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  picture_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  picture_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  picture_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  picture_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  picture_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  picture_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  picture_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  picture_not_ends_with?: Maybe<Scalars['String']>;
  isActive?: Maybe<Scalars['Boolean']>;
  /** All values that are not equal to given value. */
  isActive_not?: Maybe<Scalars['Boolean']>;
  kind?: Maybe<UserKind>;
  /** All values that are not equal to given value. */
  kind_not?: Maybe<UserKind>;
  /** All values that are contained in given list. */
  kind_in?: Maybe<Array<UserKind>>;
  /** All values that are not contained in given list. */
  kind_not_in?: Maybe<Array<UserKind>>;
};

/** References User record uniquely */
export type UserWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>;
};

export type Version = {
  __typename?: 'Version';
  id: Scalars['ID'];
  stage: Stage;
  revision: Scalars['Int'];
  createdAt: Scalars['DateTime'];
};

export type VersionWhereInput = {
  id: Scalars['ID'];
  stage: Stage;
  revision: Scalars['Int'];
};

export enum _FilterKind {
  Search = 'search',
  And = 'AND',
  Or = 'OR',
  Not = 'NOT',
  Eq = 'eq',
  EqNot = 'eq_not',
  In = 'in',
  NotIn = 'not_in',
  Lt = 'lt',
  Lte = 'lte',
  Gt = 'gt',
  Gte = 'gte',
  Contains = 'contains',
  NotContains = 'not_contains',
  StartsWith = 'starts_with',
  NotStartsWith = 'not_starts_with',
  EndsWith = 'ends_with',
  NotEndsWith = 'not_ends_with',
  ContainsAll = 'contains_all',
  ContainsSome = 'contains_some',
  ContainsNone = 'contains_none',
  RelationalSingle = 'relational_single',
  RelationalEvery = 'relational_every',
  RelationalSome = 'relational_some',
  RelationalNone = 'relational_none'
}

export enum _MutationInputFieldKind {
  Scalar = 'scalar',
  RichText = 'richText',
  RichTextWithEmbeds = 'richTextWithEmbeds',
  Enum = 'enum',
  Relation = 'relation',
  Union = 'union',
  Virtual = 'virtual'
}

export enum _MutationKind {
  Create = 'create',
  Publish = 'publish',
  Unpublish = 'unpublish',
  Update = 'update',
  Upsert = 'upsert',
  Delete = 'delete',
  UpdateMany = 'updateMany',
  PublishMany = 'publishMany',
  UnpublishMany = 'unpublishMany',
  DeleteMany = 'deleteMany'
}

export enum _OrderDirection {
  Asc = 'asc',
  Desc = 'desc'
}

export enum _RelationInputCardinality {
  One = 'one',
  Many = 'many'
}

export enum _RelationInputKind {
  Create = 'create',
  Update = 'update'
}

export enum _RelationKind {
  Regular = 'regular',
  Union = 'union'
}

export enum _SystemDateTimeFieldVariation {
  Base = 'base',
  Localization = 'localization',
  Combined = 'combined'
}
