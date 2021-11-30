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
  category?: Maybe<Category>;
  /** The time the document was created */
  createdAt: Scalars['DateTime'];
  /** User that created this document */
  createdBy?: Maybe<User>;
  dataProtectionFormShop: Array<Shop>;
  /** Get the document in other stages */
  documentInStages: Array<Asset>;
  /** The file name */
  fileName: Scalars['String'];
  /** The file handle */
  handle: Scalars['String'];
  /** The height of the file */
  height?: Maybe<Scalars['Float']>;
  /** List of Asset versions */
  history: Array<Version>;
  /** The unique identifier */
  id: Scalars['ID'];
  /** System Locale field */
  locale: Locale;
  /** Get the other localizations for this document */
  localizations: Array<Asset>;
  logoCityPartner: Array<CityPartner>;
  logoNetwork: Array<Network>;
  /** The mime type of the file */
  mimeType?: Maybe<Scalars['String']>;
  photoPressPhoto: Array<PressPhoto>;
  photoPressReport: Array<PressReport>;
  pictureMember: Array<Member>;
  picturePageSection: Array<PageSection>;
  pictureSupporter: Array<Supporter>;
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  scheduledIn: Array<ScheduledOperation>;
  /** The file size */
  size?: Maybe<Scalars['Float']>;
  /** System stage field */
  stage: Stage;
  /** The time the document was updated */
  updatedAt: Scalars['DateTime'];
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
  /** Get the url for the asset with provided transformations applied. */
  url: Scalars['String'];
  /** The file width */
  width?: Maybe<Scalars['Float']>;
};


/** Asset system model */
export type AssetCreatedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};


/** Asset system model */
export type AssetCreatedByArgs = {
  locales?: Maybe<Array<Locale>>;
};


/** Asset system model */
export type AssetDataProtectionFormShopArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  locales?: Maybe<Array<Locale>>;
  orderBy?: Maybe<ShopOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  where?: Maybe<ShopWhereInput>;
};


/** Asset system model */
export type AssetDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
  stages?: Array<Stage>;
};


/** Asset system model */
export type AssetHistoryArgs = {
  limit?: Scalars['Int'];
  skip?: Scalars['Int'];
  stageOverride?: Maybe<Stage>;
};


/** Asset system model */
export type AssetLocalizationsArgs = {
  includeCurrent?: Scalars['Boolean'];
  locales?: Array<Locale>;
};


/** Asset system model */
export type AssetLogoCityPartnerArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  locales?: Maybe<Array<Locale>>;
  orderBy?: Maybe<CityPartnerOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  where?: Maybe<CityPartnerWhereInput>;
};


/** Asset system model */
export type AssetLogoNetworkArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  locales?: Maybe<Array<Locale>>;
  orderBy?: Maybe<NetworkOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  where?: Maybe<NetworkWhereInput>;
};


/** Asset system model */
export type AssetPhotoPressPhotoArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  locales?: Maybe<Array<Locale>>;
  orderBy?: Maybe<PressPhotoOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  where?: Maybe<PressPhotoWhereInput>;
};


/** Asset system model */
export type AssetPhotoPressReportArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  locales?: Maybe<Array<Locale>>;
  orderBy?: Maybe<PressReportOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  where?: Maybe<PressReportWhereInput>;
};


/** Asset system model */
export type AssetPictureMemberArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  locales?: Maybe<Array<Locale>>;
  orderBy?: Maybe<MemberOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  where?: Maybe<MemberWhereInput>;
};


/** Asset system model */
export type AssetPicturePageSectionArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  locales?: Maybe<Array<Locale>>;
  orderBy?: Maybe<PageSectionOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  where?: Maybe<PageSectionWhereInput>;
};


/** Asset system model */
export type AssetPictureSupporterArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  locales?: Maybe<Array<Locale>>;
  orderBy?: Maybe<SupporterOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  where?: Maybe<SupporterWhereInput>;
};


/** Asset system model */
export type AssetPublishedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};


/** Asset system model */
export type AssetPublishedByArgs = {
  locales?: Maybe<Array<Locale>>;
};


/** Asset system model */
export type AssetScheduledInArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  locales?: Maybe<Array<Locale>>;
  skip?: Maybe<Scalars['Int']>;
  where?: Maybe<ScheduledOperationWhereInput>;
};


/** Asset system model */
export type AssetUpdatedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};


/** Asset system model */
export type AssetUpdatedByArgs = {
  locales?: Maybe<Array<Locale>>;
};


/** Asset system model */
export type AssetUrlArgs = {
  transformation?: Maybe<AssetTransformationInput>;
};

export type AssetConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: Maybe<ConnectPositionInput>;
  /** Document to connect */
  where: AssetWhereUniqueInput;
};

/** A connection to a list of items. */
export type AssetConnection = {
  __typename?: 'AssetConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<AssetEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type AssetCreateInput = {
  category?: Maybe<Category>;
  createdAt?: Maybe<Scalars['DateTime']>;
  dataProtectionFormShop?: Maybe<ShopCreateManyInlineInput>;
  fileName: Scalars['String'];
  handle: Scalars['String'];
  height?: Maybe<Scalars['Float']>;
  /** Inline mutations for managing document localizations excluding the default locale */
  localizations?: Maybe<AssetCreateLocalizationsInput>;
  logoCityPartner?: Maybe<CityPartnerCreateManyInlineInput>;
  logoNetwork?: Maybe<NetworkCreateManyInlineInput>;
  mimeType?: Maybe<Scalars['String']>;
  photoPressPhoto?: Maybe<PressPhotoCreateManyInlineInput>;
  photoPressReport?: Maybe<PressReportCreateManyInlineInput>;
  pictureMember?: Maybe<MemberCreateManyInlineInput>;
  picturePageSection?: Maybe<PageSectionCreateManyInlineInput>;
  pictureSupporter?: Maybe<SupporterCreateManyInlineInput>;
  size?: Maybe<Scalars['Float']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  width?: Maybe<Scalars['Float']>;
};

export type AssetCreateLocalizationDataInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  fileName: Scalars['String'];
  handle: Scalars['String'];
  height?: Maybe<Scalars['Float']>;
  mimeType?: Maybe<Scalars['String']>;
  size?: Maybe<Scalars['Float']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  width?: Maybe<Scalars['Float']>;
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
  /** Connect multiple existing Asset documents */
  connect?: Maybe<Array<AssetWhereUniqueInput>>;
  /** Create and connect multiple existing Asset documents */
  create?: Maybe<Array<AssetCreateInput>>;
};

export type AssetCreateOneInlineInput = {
  /** Connect one existing Asset document */
  connect?: Maybe<AssetWhereUniqueInput>;
  /** Create and connect one Asset document */
  create?: Maybe<AssetCreateInput>;
};

/** An edge in a connection. */
export type AssetEdge = {
  __typename?: 'AssetEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: Asset;
};

/** Identifies documents */
export type AssetManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<AssetWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<AssetWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<AssetWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: Maybe<Scalars['String']>;
  category?: Maybe<Category>;
  /** All values that are contained in given list. */
  category_in?: Maybe<Array<Category>>;
  /** All values that are not equal to given value. */
  category_not?: Maybe<Category>;
  /** All values that are not contained in given list. */
  category_not_in?: Maybe<Array<Category>>;
  createdAt?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  createdBy?: Maybe<UserWhereInput>;
  dataProtectionFormShop_every?: Maybe<ShopWhereInput>;
  dataProtectionFormShop_none?: Maybe<ShopWhereInput>;
  dataProtectionFormShop_some?: Maybe<ShopWhereInput>;
  id?: Maybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  logoCityPartner_every?: Maybe<CityPartnerWhereInput>;
  logoCityPartner_none?: Maybe<CityPartnerWhereInput>;
  logoCityPartner_some?: Maybe<CityPartnerWhereInput>;
  logoNetwork_every?: Maybe<NetworkWhereInput>;
  logoNetwork_none?: Maybe<NetworkWhereInput>;
  logoNetwork_some?: Maybe<NetworkWhereInput>;
  photoPressPhoto_every?: Maybe<PressPhotoWhereInput>;
  photoPressPhoto_none?: Maybe<PressPhotoWhereInput>;
  photoPressPhoto_some?: Maybe<PressPhotoWhereInput>;
  photoPressReport_every?: Maybe<PressReportWhereInput>;
  photoPressReport_none?: Maybe<PressReportWhereInput>;
  photoPressReport_some?: Maybe<PressReportWhereInput>;
  pictureMember_every?: Maybe<MemberWhereInput>;
  pictureMember_none?: Maybe<MemberWhereInput>;
  pictureMember_some?: Maybe<MemberWhereInput>;
  picturePageSection_every?: Maybe<PageSectionWhereInput>;
  picturePageSection_none?: Maybe<PageSectionWhereInput>;
  picturePageSection_some?: Maybe<PageSectionWhereInput>;
  pictureSupporter_every?: Maybe<SupporterWhereInput>;
  pictureSupporter_none?: Maybe<SupporterWhereInput>;
  pictureSupporter_some?: Maybe<SupporterWhereInput>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  publishedBy?: Maybe<UserWhereInput>;
  scheduledIn_every?: Maybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: Maybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: Maybe<ScheduledOperationWhereInput>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  updatedBy?: Maybe<UserWhereInput>;
};

export enum AssetOrderByInput {
  CategoryAsc = 'category_ASC',
  CategoryDesc = 'category_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  FileNameAsc = 'fileName_ASC',
  FileNameDesc = 'fileName_DESC',
  HandleAsc = 'handle_ASC',
  HandleDesc = 'handle_DESC',
  HeightAsc = 'height_ASC',
  HeightDesc = 'height_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  MimeTypeAsc = 'mimeType_ASC',
  MimeTypeDesc = 'mimeType_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  SizeAsc = 'size_ASC',
  SizeDesc = 'size_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  WidthAsc = 'width_ASC',
  WidthDesc = 'width_DESC'
}

/** Transformations for Assets */
export type AssetTransformationInput = {
  document?: Maybe<DocumentTransformationInput>;
  image?: Maybe<ImageTransformationInput>;
  /** Pass true if you want to validate the passed transformation parameters */
  validateOptions?: Maybe<Scalars['Boolean']>;
};

export type AssetUpdateInput = {
  category?: Maybe<Category>;
  dataProtectionFormShop?: Maybe<ShopUpdateManyInlineInput>;
  fileName?: Maybe<Scalars['String']>;
  handle?: Maybe<Scalars['String']>;
  height?: Maybe<Scalars['Float']>;
  /** Manage document localizations */
  localizations?: Maybe<AssetUpdateLocalizationsInput>;
  logoCityPartner?: Maybe<CityPartnerUpdateManyInlineInput>;
  logoNetwork?: Maybe<NetworkUpdateManyInlineInput>;
  mimeType?: Maybe<Scalars['String']>;
  photoPressPhoto?: Maybe<PressPhotoUpdateManyInlineInput>;
  photoPressReport?: Maybe<PressReportUpdateManyInlineInput>;
  pictureMember?: Maybe<MemberUpdateManyInlineInput>;
  picturePageSection?: Maybe<PageSectionUpdateManyInlineInput>;
  pictureSupporter?: Maybe<SupporterUpdateManyInlineInput>;
  size?: Maybe<Scalars['Float']>;
  width?: Maybe<Scalars['Float']>;
};

export type AssetUpdateLocalizationDataInput = {
  fileName?: Maybe<Scalars['String']>;
  handle?: Maybe<Scalars['String']>;
  height?: Maybe<Scalars['Float']>;
  mimeType?: Maybe<Scalars['String']>;
  size?: Maybe<Scalars['Float']>;
  width?: Maybe<Scalars['Float']>;
};

export type AssetUpdateLocalizationInput = {
  data: AssetUpdateLocalizationDataInput;
  locale: Locale;
};

export type AssetUpdateLocalizationsInput = {
  /** Localizations to create */
  create?: Maybe<Array<AssetCreateLocalizationInput>>;
  /** Localizations to delete */
  delete?: Maybe<Array<Locale>>;
  /** Localizations to update */
  update?: Maybe<Array<AssetUpdateLocalizationInput>>;
  upsert?: Maybe<Array<AssetUpsertLocalizationInput>>;
};

export type AssetUpdateManyInlineInput = {
  /** Connect multiple existing Asset documents */
  connect?: Maybe<Array<AssetConnectInput>>;
  /** Create and connect multiple Asset documents */
  create?: Maybe<Array<AssetCreateInput>>;
  /** Delete multiple Asset documents */
  delete?: Maybe<Array<AssetWhereUniqueInput>>;
  /** Disconnect multiple Asset documents */
  disconnect?: Maybe<Array<AssetWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing Asset documents */
  set?: Maybe<Array<AssetWhereUniqueInput>>;
  /** Update multiple Asset documents */
  update?: Maybe<Array<AssetUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple Asset documents */
  upsert?: Maybe<Array<AssetUpsertWithNestedWhereUniqueInput>>;
};

export type AssetUpdateManyInput = {
  category?: Maybe<Category>;
  fileName?: Maybe<Scalars['String']>;
  height?: Maybe<Scalars['Float']>;
  /** Optional updates to localizations */
  localizations?: Maybe<AssetUpdateManyLocalizationsInput>;
  mimeType?: Maybe<Scalars['String']>;
  size?: Maybe<Scalars['Float']>;
  width?: Maybe<Scalars['Float']>;
};

export type AssetUpdateManyLocalizationDataInput = {
  fileName?: Maybe<Scalars['String']>;
  height?: Maybe<Scalars['Float']>;
  mimeType?: Maybe<Scalars['String']>;
  size?: Maybe<Scalars['Float']>;
  width?: Maybe<Scalars['Float']>;
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
  /** Update many input */
  data: AssetUpdateManyInput;
  /** Document search */
  where: AssetWhereInput;
};

export type AssetUpdateOneInlineInput = {
  /** Connect existing Asset document */
  connect?: Maybe<AssetWhereUniqueInput>;
  /** Create and connect one Asset document */
  create?: Maybe<AssetCreateInput>;
  /** Delete currently connected Asset document */
  delete?: Maybe<Scalars['Boolean']>;
  /** Disconnect currently connected Asset document */
  disconnect?: Maybe<Scalars['Boolean']>;
  /** Update single Asset document */
  update?: Maybe<AssetUpdateWithNestedWhereUniqueInput>;
  /** Upsert single Asset document */
  upsert?: Maybe<AssetUpsertWithNestedWhereUniqueInput>;
};

export type AssetUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: AssetUpdateInput;
  /** Unique document search */
  where: AssetWhereUniqueInput;
};

export type AssetUpsertInput = {
  /** Create document if it didn't exist */
  create: AssetCreateInput;
  /** Update document if it exists */
  update: AssetUpdateInput;
};

export type AssetUpsertLocalizationInput = {
  create: AssetCreateLocalizationDataInput;
  locale: Locale;
  update: AssetUpdateLocalizationDataInput;
};

export type AssetUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: AssetUpsertInput;
  /** Unique document search */
  where: AssetWhereUniqueInput;
};

/** Identifies documents */
export type AssetWhereInput = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<AssetWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<AssetWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<AssetWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: Maybe<Scalars['String']>;
  category?: Maybe<Category>;
  /** All values that are contained in given list. */
  category_in?: Maybe<Array<Category>>;
  /** All values that are not equal to given value. */
  category_not?: Maybe<Category>;
  /** All values that are not contained in given list. */
  category_not_in?: Maybe<Array<Category>>;
  createdAt?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  createdBy?: Maybe<UserWhereInput>;
  dataProtectionFormShop_every?: Maybe<ShopWhereInput>;
  dataProtectionFormShop_none?: Maybe<ShopWhereInput>;
  dataProtectionFormShop_some?: Maybe<ShopWhereInput>;
  fileName?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  fileName_contains?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  fileName_ends_with?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  fileName_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  fileName_not?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  fileName_not_contains?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  fileName_not_ends_with?: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  fileName_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  fileName_not_starts_with?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  fileName_starts_with?: Maybe<Scalars['String']>;
  handle?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  handle_contains?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  handle_ends_with?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  handle_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  handle_not?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  handle_not_contains?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  handle_not_ends_with?: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  handle_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  handle_not_starts_with?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  handle_starts_with?: Maybe<Scalars['String']>;
  height?: Maybe<Scalars['Float']>;
  /** All values greater than the given value. */
  height_gt?: Maybe<Scalars['Float']>;
  /** All values greater than or equal the given value. */
  height_gte?: Maybe<Scalars['Float']>;
  /** All values that are contained in given list. */
  height_in?: Maybe<Array<Scalars['Float']>>;
  /** All values less than the given value. */
  height_lt?: Maybe<Scalars['Float']>;
  /** All values less than or equal the given value. */
  height_lte?: Maybe<Scalars['Float']>;
  /** All values that are not equal to given value. */
  height_not?: Maybe<Scalars['Float']>;
  /** All values that are not contained in given list. */
  height_not_in?: Maybe<Array<Scalars['Float']>>;
  id?: Maybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  logoCityPartner_every?: Maybe<CityPartnerWhereInput>;
  logoCityPartner_none?: Maybe<CityPartnerWhereInput>;
  logoCityPartner_some?: Maybe<CityPartnerWhereInput>;
  logoNetwork_every?: Maybe<NetworkWhereInput>;
  logoNetwork_none?: Maybe<NetworkWhereInput>;
  logoNetwork_some?: Maybe<NetworkWhereInput>;
  mimeType?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  mimeType_contains?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  mimeType_ends_with?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  mimeType_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  mimeType_not?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  mimeType_not_contains?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  mimeType_not_ends_with?: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  mimeType_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  mimeType_not_starts_with?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  mimeType_starts_with?: Maybe<Scalars['String']>;
  photoPressPhoto_every?: Maybe<PressPhotoWhereInput>;
  photoPressPhoto_none?: Maybe<PressPhotoWhereInput>;
  photoPressPhoto_some?: Maybe<PressPhotoWhereInput>;
  photoPressReport_every?: Maybe<PressReportWhereInput>;
  photoPressReport_none?: Maybe<PressReportWhereInput>;
  photoPressReport_some?: Maybe<PressReportWhereInput>;
  pictureMember_every?: Maybe<MemberWhereInput>;
  pictureMember_none?: Maybe<MemberWhereInput>;
  pictureMember_some?: Maybe<MemberWhereInput>;
  picturePageSection_every?: Maybe<PageSectionWhereInput>;
  picturePageSection_none?: Maybe<PageSectionWhereInput>;
  picturePageSection_some?: Maybe<PageSectionWhereInput>;
  pictureSupporter_every?: Maybe<SupporterWhereInput>;
  pictureSupporter_none?: Maybe<SupporterWhereInput>;
  pictureSupporter_some?: Maybe<SupporterWhereInput>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  publishedBy?: Maybe<UserWhereInput>;
  scheduledIn_every?: Maybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: Maybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: Maybe<ScheduledOperationWhereInput>;
  size?: Maybe<Scalars['Float']>;
  /** All values greater than the given value. */
  size_gt?: Maybe<Scalars['Float']>;
  /** All values greater than or equal the given value. */
  size_gte?: Maybe<Scalars['Float']>;
  /** All values that are contained in given list. */
  size_in?: Maybe<Array<Scalars['Float']>>;
  /** All values less than the given value. */
  size_lt?: Maybe<Scalars['Float']>;
  /** All values less than or equal the given value. */
  size_lte?: Maybe<Scalars['Float']>;
  /** All values that are not equal to given value. */
  size_not?: Maybe<Scalars['Float']>;
  /** All values that are not contained in given list. */
  size_not_in?: Maybe<Array<Scalars['Float']>>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  updatedBy?: Maybe<UserWhereInput>;
  width?: Maybe<Scalars['Float']>;
  /** All values greater than the given value. */
  width_gt?: Maybe<Scalars['Float']>;
  /** All values greater than or equal the given value. */
  width_gte?: Maybe<Scalars['Float']>;
  /** All values that are contained in given list. */
  width_in?: Maybe<Array<Scalars['Float']>>;
  /** All values less than the given value. */
  width_lt?: Maybe<Scalars['Float']>;
  /** All values less than or equal the given value. */
  width_lte?: Maybe<Scalars['Float']>;
  /** All values that are not equal to given value. */
  width_not?: Maybe<Scalars['Float']>;
  /** All values that are not contained in given list. */
  width_not_in?: Maybe<Array<Scalars['Float']>>;
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
  abstract?: Maybe<Scalars['String']>;
  content?: Maybe<RichText>;
  /** The time the document was created */
  createdAt: Scalars['DateTime'];
  /** User that created this document */
  createdBy?: Maybe<User>;
  date?: Maybe<Scalars['Date']>;
  /** Get the document in other stages */
  documentInStages: Array<Blog>;
  /** List of Blog versions */
  history: Array<Version>;
  /** The unique identifier */
  id: Scalars['ID'];
  /** System Locale field */
  locale: Locale;
  /** Get the other localizations for this document */
  localizations: Array<Blog>;
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  scheduledIn: Array<ScheduledOperation>;
  slug?: Maybe<Scalars['String']>;
  /** System stage field */
  stage: Stage;
  title: Scalars['String'];
  /** The time the document was updated */
  updatedAt: Scalars['DateTime'];
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
};


export type BlogCreatedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};


export type BlogCreatedByArgs = {
  locales?: Maybe<Array<Locale>>;
};


export type BlogDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
  stages?: Array<Stage>;
};


export type BlogHistoryArgs = {
  limit?: Scalars['Int'];
  skip?: Scalars['Int'];
  stageOverride?: Maybe<Stage>;
};


export type BlogLocalizationsArgs = {
  includeCurrent?: Scalars['Boolean'];
  locales?: Array<Locale>;
};


export type BlogPublishedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};


export type BlogPublishedByArgs = {
  locales?: Maybe<Array<Locale>>;
};


export type BlogScheduledInArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  locales?: Maybe<Array<Locale>>;
  skip?: Maybe<Scalars['Int']>;
  where?: Maybe<ScheduledOperationWhereInput>;
};


export type BlogUpdatedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};


export type BlogUpdatedByArgs = {
  locales?: Maybe<Array<Locale>>;
};

export type BlogConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: Maybe<ConnectPositionInput>;
  /** Document to connect */
  where: BlogWhereUniqueInput;
};

/** A connection to a list of items. */
export type BlogConnection = {
  __typename?: 'BlogConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<BlogEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type BlogCreateInput = {
  /** abstract input for default locale (de) */
  abstract?: Maybe<Scalars['String']>;
  /** content input for default locale (de) */
  content?: Maybe<Scalars['RichTextAST']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  date?: Maybe<Scalars['Date']>;
  /** Inline mutations for managing document localizations excluding the default locale */
  localizations?: Maybe<BlogCreateLocalizationsInput>;
  slug?: Maybe<Scalars['String']>;
  /** title input for default locale (de) */
  title: Scalars['String'];
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type BlogCreateLocalizationDataInput = {
  abstract?: Maybe<Scalars['String']>;
  content?: Maybe<Scalars['RichTextAST']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  title: Scalars['String'];
  updatedAt?: Maybe<Scalars['DateTime']>;
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
  /** Connect multiple existing Blog documents */
  connect?: Maybe<Array<BlogWhereUniqueInput>>;
  /** Create and connect multiple existing Blog documents */
  create?: Maybe<Array<BlogCreateInput>>;
};

export type BlogCreateOneInlineInput = {
  /** Connect one existing Blog document */
  connect?: Maybe<BlogWhereUniqueInput>;
  /** Create and connect one Blog document */
  create?: Maybe<BlogCreateInput>;
};

/** An edge in a connection. */
export type BlogEdge = {
  __typename?: 'BlogEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: Blog;
};

/** Identifies documents */
export type BlogManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<BlogWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<BlogWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<BlogWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  createdBy?: Maybe<UserWhereInput>;
  date?: Maybe<Scalars['Date']>;
  /** All values greater than the given value. */
  date_gt?: Maybe<Scalars['Date']>;
  /** All values greater than or equal the given value. */
  date_gte?: Maybe<Scalars['Date']>;
  /** All values that are contained in given list. */
  date_in?: Maybe<Array<Scalars['Date']>>;
  /** All values less than the given value. */
  date_lt?: Maybe<Scalars['Date']>;
  /** All values less than or equal the given value. */
  date_lte?: Maybe<Scalars['Date']>;
  /** All values that are not equal to given value. */
  date_not?: Maybe<Scalars['Date']>;
  /** All values that are not contained in given list. */
  date_not_in?: Maybe<Array<Scalars['Date']>>;
  id?: Maybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  publishedBy?: Maybe<UserWhereInput>;
  scheduledIn_every?: Maybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: Maybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: Maybe<ScheduledOperationWhereInput>;
  slug?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  slug_contains?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  slug_ends_with?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  slug_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  slug_not?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  slug_not_contains?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  slug_not_ends_with?: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  slug_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  slug_not_starts_with?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  slug_starts_with?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  updatedBy?: Maybe<UserWhereInput>;
};

export enum BlogOrderByInput {
  AbstractAsc = 'abstract_ASC',
  AbstractDesc = 'abstract_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  DateAsc = 'date_ASC',
  DateDesc = 'date_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

export type BlogUpdateInput = {
  /** abstract input for default locale (de) */
  abstract?: Maybe<Scalars['String']>;
  /** content input for default locale (de) */
  content?: Maybe<Scalars['RichTextAST']>;
  date?: Maybe<Scalars['Date']>;
  /** Manage document localizations */
  localizations?: Maybe<BlogUpdateLocalizationsInput>;
  slug?: Maybe<Scalars['String']>;
  /** title input for default locale (de) */
  title?: Maybe<Scalars['String']>;
};

export type BlogUpdateLocalizationDataInput = {
  abstract?: Maybe<Scalars['String']>;
  content?: Maybe<Scalars['RichTextAST']>;
  title?: Maybe<Scalars['String']>;
};

export type BlogUpdateLocalizationInput = {
  data: BlogUpdateLocalizationDataInput;
  locale: Locale;
};

export type BlogUpdateLocalizationsInput = {
  /** Localizations to create */
  create?: Maybe<Array<BlogCreateLocalizationInput>>;
  /** Localizations to delete */
  delete?: Maybe<Array<Locale>>;
  /** Localizations to update */
  update?: Maybe<Array<BlogUpdateLocalizationInput>>;
  upsert?: Maybe<Array<BlogUpsertLocalizationInput>>;
};

export type BlogUpdateManyInlineInput = {
  /** Connect multiple existing Blog documents */
  connect?: Maybe<Array<BlogConnectInput>>;
  /** Create and connect multiple Blog documents */
  create?: Maybe<Array<BlogCreateInput>>;
  /** Delete multiple Blog documents */
  delete?: Maybe<Array<BlogWhereUniqueInput>>;
  /** Disconnect multiple Blog documents */
  disconnect?: Maybe<Array<BlogWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing Blog documents */
  set?: Maybe<Array<BlogWhereUniqueInput>>;
  /** Update multiple Blog documents */
  update?: Maybe<Array<BlogUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple Blog documents */
  upsert?: Maybe<Array<BlogUpsertWithNestedWhereUniqueInput>>;
};

export type BlogUpdateManyInput = {
  /** abstract input for default locale (de) */
  abstract?: Maybe<Scalars['String']>;
  /** content input for default locale (de) */
  content?: Maybe<Scalars['RichTextAST']>;
  date?: Maybe<Scalars['Date']>;
  /** Optional updates to localizations */
  localizations?: Maybe<BlogUpdateManyLocalizationsInput>;
  /** title input for default locale (de) */
  title?: Maybe<Scalars['String']>;
};

export type BlogUpdateManyLocalizationDataInput = {
  abstract?: Maybe<Scalars['String']>;
  content?: Maybe<Scalars['RichTextAST']>;
  title?: Maybe<Scalars['String']>;
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
  /** Update many input */
  data: BlogUpdateManyInput;
  /** Document search */
  where: BlogWhereInput;
};

export type BlogUpdateOneInlineInput = {
  /** Connect existing Blog document */
  connect?: Maybe<BlogWhereUniqueInput>;
  /** Create and connect one Blog document */
  create?: Maybe<BlogCreateInput>;
  /** Delete currently connected Blog document */
  delete?: Maybe<Scalars['Boolean']>;
  /** Disconnect currently connected Blog document */
  disconnect?: Maybe<Scalars['Boolean']>;
  /** Update single Blog document */
  update?: Maybe<BlogUpdateWithNestedWhereUniqueInput>;
  /** Upsert single Blog document */
  upsert?: Maybe<BlogUpsertWithNestedWhereUniqueInput>;
};

export type BlogUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: BlogUpdateInput;
  /** Unique document search */
  where: BlogWhereUniqueInput;
};

export type BlogUpsertInput = {
  /** Create document if it didn't exist */
  create: BlogCreateInput;
  /** Update document if it exists */
  update: BlogUpdateInput;
};

export type BlogUpsertLocalizationInput = {
  create: BlogCreateLocalizationDataInput;
  locale: Locale;
  update: BlogUpdateLocalizationDataInput;
};

export type BlogUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: BlogUpsertInput;
  /** Unique document search */
  where: BlogWhereUniqueInput;
};

/** Identifies documents */
export type BlogWhereInput = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<BlogWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<BlogWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<BlogWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: Maybe<Scalars['String']>;
  abstract?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  abstract_contains?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  abstract_ends_with?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  abstract_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  abstract_not?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  abstract_not_contains?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  abstract_not_ends_with?: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  abstract_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  abstract_not_starts_with?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  abstract_starts_with?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  createdBy?: Maybe<UserWhereInput>;
  date?: Maybe<Scalars['Date']>;
  /** All values greater than the given value. */
  date_gt?: Maybe<Scalars['Date']>;
  /** All values greater than or equal the given value. */
  date_gte?: Maybe<Scalars['Date']>;
  /** All values that are contained in given list. */
  date_in?: Maybe<Array<Scalars['Date']>>;
  /** All values less than the given value. */
  date_lt?: Maybe<Scalars['Date']>;
  /** All values less than or equal the given value. */
  date_lte?: Maybe<Scalars['Date']>;
  /** All values that are not equal to given value. */
  date_not?: Maybe<Scalars['Date']>;
  /** All values that are not contained in given list. */
  date_not_in?: Maybe<Array<Scalars['Date']>>;
  id?: Maybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  publishedBy?: Maybe<UserWhereInput>;
  scheduledIn_every?: Maybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: Maybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: Maybe<ScheduledOperationWhereInput>;
  slug?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  slug_contains?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  slug_ends_with?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  slug_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  slug_not?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  slug_not_contains?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  slug_not_ends_with?: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  slug_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  slug_not_starts_with?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  slug_starts_with?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  title_contains?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  title_ends_with?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  title_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  title_not?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  title_not_contains?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  title_not_ends_with?: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  title_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  title_not_starts_with?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  title_starts_with?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  updatedBy?: Maybe<UserWhereInput>;
};

/** References Blog record uniquely */
export type BlogWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>;
  slug?: Maybe<Scalars['String']>;
};

export enum Category {
  Cookies = 'cookies',
  Docs = 'docs',
  Download = 'download',
  Footer = 'footer',
  Form = 'form',
  Header = 'header',
  Home = 'home',
  Map = 'map',
  Members = 'members',
  Press = 'press',
  Uberuns = 'uberuns'
}

export type CityPartner = Node & {
  __typename?: 'CityPartner';
  /** The time the document was created */
  createdAt: Scalars['DateTime'];
  /** User that created this document */
  createdBy?: Maybe<User>;
  /** Get the document in other stages */
  documentInStages: Array<CityPartner>;
  /** List of CityPartner versions */
  history: Array<Version>;
  /** The unique identifier */
  id: Scalars['ID'];
  link?: Maybe<Scalars['String']>;
  /** System Locale field */
  locale: Locale;
  /** Get the other localizations for this document */
  localizations: Array<CityPartner>;
  logo?: Maybe<Asset>;
  name?: Maybe<Scalars['String']>;
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  scheduledIn: Array<ScheduledOperation>;
  /** System stage field */
  stage: Stage;
  /** The time the document was updated */
  updatedAt: Scalars['DateTime'];
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
};


export type CityPartnerCreatedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};


export type CityPartnerCreatedByArgs = {
  locales?: Maybe<Array<Locale>>;
};


export type CityPartnerDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
  stages?: Array<Stage>;
};


export type CityPartnerHistoryArgs = {
  limit?: Scalars['Int'];
  skip?: Scalars['Int'];
  stageOverride?: Maybe<Stage>;
};


export type CityPartnerLocalizationsArgs = {
  includeCurrent?: Scalars['Boolean'];
  locales?: Array<Locale>;
};


export type CityPartnerLogoArgs = {
  locales?: Maybe<Array<Locale>>;
};


export type CityPartnerPublishedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};


export type CityPartnerPublishedByArgs = {
  locales?: Maybe<Array<Locale>>;
};


export type CityPartnerScheduledInArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  locales?: Maybe<Array<Locale>>;
  skip?: Maybe<Scalars['Int']>;
  where?: Maybe<ScheduledOperationWhereInput>;
};


export type CityPartnerUpdatedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};


export type CityPartnerUpdatedByArgs = {
  locales?: Maybe<Array<Locale>>;
};

export type CityPartnerConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: Maybe<ConnectPositionInput>;
  /** Document to connect */
  where: CityPartnerWhereUniqueInput;
};

/** A connection to a list of items. */
export type CityPartnerConnection = {
  __typename?: 'CityPartnerConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<CityPartnerEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type CityPartnerCreateInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  link?: Maybe<Scalars['String']>;
  /** Inline mutations for managing document localizations excluding the default locale */
  localizations?: Maybe<CityPartnerCreateLocalizationsInput>;
  logo?: Maybe<AssetCreateOneInlineInput>;
  /** name input for default locale (de) */
  name?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type CityPartnerCreateLocalizationDataInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  name?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
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
  /** Connect multiple existing CityPartner documents */
  connect?: Maybe<Array<CityPartnerWhereUniqueInput>>;
  /** Create and connect multiple existing CityPartner documents */
  create?: Maybe<Array<CityPartnerCreateInput>>;
};

export type CityPartnerCreateOneInlineInput = {
  /** Connect one existing CityPartner document */
  connect?: Maybe<CityPartnerWhereUniqueInput>;
  /** Create and connect one CityPartner document */
  create?: Maybe<CityPartnerCreateInput>;
};

/** An edge in a connection. */
export type CityPartnerEdge = {
  __typename?: 'CityPartnerEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: CityPartner;
};

/** Identifies documents */
export type CityPartnerManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<CityPartnerWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<CityPartnerWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<CityPartnerWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  createdBy?: Maybe<UserWhereInput>;
  id?: Maybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  link?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  link_contains?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  link_ends_with?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  link_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  link_not?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  link_not_contains?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  link_not_ends_with?: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  link_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  link_not_starts_with?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  link_starts_with?: Maybe<Scalars['String']>;
  logo?: Maybe<AssetWhereInput>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  publishedBy?: Maybe<UserWhereInput>;
  scheduledIn_every?: Maybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: Maybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: Maybe<ScheduledOperationWhereInput>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  updatedBy?: Maybe<UserWhereInput>;
};

export enum CityPartnerOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  LinkAsc = 'link_ASC',
  LinkDesc = 'link_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

export type CityPartnerUpdateInput = {
  link?: Maybe<Scalars['String']>;
  /** Manage document localizations */
  localizations?: Maybe<CityPartnerUpdateLocalizationsInput>;
  logo?: Maybe<AssetUpdateOneInlineInput>;
  /** name input for default locale (de) */
  name?: Maybe<Scalars['String']>;
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
  /** Localizations to delete */
  delete?: Maybe<Array<Locale>>;
  /** Localizations to update */
  update?: Maybe<Array<CityPartnerUpdateLocalizationInput>>;
  upsert?: Maybe<Array<CityPartnerUpsertLocalizationInput>>;
};

export type CityPartnerUpdateManyInlineInput = {
  /** Connect multiple existing CityPartner documents */
  connect?: Maybe<Array<CityPartnerConnectInput>>;
  /** Create and connect multiple CityPartner documents */
  create?: Maybe<Array<CityPartnerCreateInput>>;
  /** Delete multiple CityPartner documents */
  delete?: Maybe<Array<CityPartnerWhereUniqueInput>>;
  /** Disconnect multiple CityPartner documents */
  disconnect?: Maybe<Array<CityPartnerWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing CityPartner documents */
  set?: Maybe<Array<CityPartnerWhereUniqueInput>>;
  /** Update multiple CityPartner documents */
  update?: Maybe<Array<CityPartnerUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple CityPartner documents */
  upsert?: Maybe<Array<CityPartnerUpsertWithNestedWhereUniqueInput>>;
};

export type CityPartnerUpdateManyInput = {
  link?: Maybe<Scalars['String']>;
  /** Optional updates to localizations */
  localizations?: Maybe<CityPartnerUpdateManyLocalizationsInput>;
  /** name input for default locale (de) */
  name?: Maybe<Scalars['String']>;
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
  /** Update many input */
  data: CityPartnerUpdateManyInput;
  /** Document search */
  where: CityPartnerWhereInput;
};

export type CityPartnerUpdateOneInlineInput = {
  /** Connect existing CityPartner document */
  connect?: Maybe<CityPartnerWhereUniqueInput>;
  /** Create and connect one CityPartner document */
  create?: Maybe<CityPartnerCreateInput>;
  /** Delete currently connected CityPartner document */
  delete?: Maybe<Scalars['Boolean']>;
  /** Disconnect currently connected CityPartner document */
  disconnect?: Maybe<Scalars['Boolean']>;
  /** Update single CityPartner document */
  update?: Maybe<CityPartnerUpdateWithNestedWhereUniqueInput>;
  /** Upsert single CityPartner document */
  upsert?: Maybe<CityPartnerUpsertWithNestedWhereUniqueInput>;
};

export type CityPartnerUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: CityPartnerUpdateInput;
  /** Unique document search */
  where: CityPartnerWhereUniqueInput;
};

export type CityPartnerUpsertInput = {
  /** Create document if it didn't exist */
  create: CityPartnerCreateInput;
  /** Update document if it exists */
  update: CityPartnerUpdateInput;
};

export type CityPartnerUpsertLocalizationInput = {
  create: CityPartnerCreateLocalizationDataInput;
  locale: Locale;
  update: CityPartnerUpdateLocalizationDataInput;
};

export type CityPartnerUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: CityPartnerUpsertInput;
  /** Unique document search */
  where: CityPartnerWhereUniqueInput;
};

/** Identifies documents */
export type CityPartnerWhereInput = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<CityPartnerWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<CityPartnerWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<CityPartnerWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  createdBy?: Maybe<UserWhereInput>;
  id?: Maybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  link?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  link_contains?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  link_ends_with?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  link_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  link_not?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  link_not_contains?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  link_not_ends_with?: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  link_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  link_not_starts_with?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  link_starts_with?: Maybe<Scalars['String']>;
  logo?: Maybe<AssetWhereInput>;
  name?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  name_contains?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  name_ends_with?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  name_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  name_not?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  name_not_contains?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  name_not_ends_with?: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  name_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  name_not_starts_with?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  name_starts_with?: Maybe<Scalars['String']>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  publishedBy?: Maybe<UserWhereInput>;
  scheduledIn_every?: Maybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: Maybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: Maybe<ScheduledOperationWhereInput>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  updatedBy?: Maybe<UserWhereInput>;
};

/** References CityPartner record uniquely */
export type CityPartnerWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>;
};

/** Representing a color value comprising of HEX, RGBA and css color values */
export type Color = {
  __typename?: 'Color';
  css: Scalars['String'];
  hex: Scalars['Hex'];
  rgba: Rgba;
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
  /** Connect document at last position */
  end?: Maybe<Scalars['Boolean']>;
  /** Connect document at first position */
  start?: Maybe<Scalars['Boolean']>;
};

export enum DocumentFileTypes {
  Doc = 'doc',
  Docx = 'docx',
  Html = 'html',
  Jpg = 'jpg',
  Odp = 'odp',
  Ods = 'ods',
  Odt = 'odt',
  Pdf = 'pdf',
  Png = 'png',
  Ppt = 'ppt',
  Pptx = 'pptx',
  Svg = 'svg',
  Txt = 'txt',
  Webp = 'webp',
  Xls = 'xls',
  Xlsx = 'xlsx'
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
  createdAt: Scalars['DateTime'];
  data?: Maybe<Scalars['Json']>;
  id: Scalars['ID'];
  revision: Scalars['Int'];
  stage: Stage;
};

export type Faq = Node & {
  __typename?: 'Faq';
  answer?: Maybe<RichText>;
  /** The time the document was created */
  createdAt: Scalars['DateTime'];
  /** User that created this document */
  createdBy?: Maybe<User>;
  /** Get the document in other stages */
  documentInStages: Array<Faq>;
  /** List of Faq versions */
  history: Array<Version>;
  /** The unique identifier */
  id: Scalars['ID'];
  /** System Locale field */
  locale: Locale;
  /** Get the other localizations for this document */
  localizations: Array<Faq>;
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  question: Scalars['String'];
  scheduledIn: Array<ScheduledOperation>;
  /** System stage field */
  stage: Stage;
  /** The time the document was updated */
  updatedAt: Scalars['DateTime'];
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
};


export type FaqCreatedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};


export type FaqCreatedByArgs = {
  locales?: Maybe<Array<Locale>>;
};


export type FaqDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
  stages?: Array<Stage>;
};


export type FaqHistoryArgs = {
  limit?: Scalars['Int'];
  skip?: Scalars['Int'];
  stageOverride?: Maybe<Stage>;
};


export type FaqLocalizationsArgs = {
  includeCurrent?: Scalars['Boolean'];
  locales?: Array<Locale>;
};


export type FaqPublishedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};


export type FaqPublishedByArgs = {
  locales?: Maybe<Array<Locale>>;
};


export type FaqScheduledInArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  locales?: Maybe<Array<Locale>>;
  skip?: Maybe<Scalars['Int']>;
  where?: Maybe<ScheduledOperationWhereInput>;
};


export type FaqUpdatedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};


export type FaqUpdatedByArgs = {
  locales?: Maybe<Array<Locale>>;
};

export type FaqConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: Maybe<ConnectPositionInput>;
  /** Document to connect */
  where: FaqWhereUniqueInput;
};

/** A connection to a list of items. */
export type FaqConnection = {
  __typename?: 'FaqConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<FaqEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type FaqCreateInput = {
  /** answer input for default locale (de) */
  answer?: Maybe<Scalars['RichTextAST']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  /** Inline mutations for managing document localizations excluding the default locale */
  localizations?: Maybe<FaqCreateLocalizationsInput>;
  /** question input for default locale (de) */
  question: Scalars['String'];
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type FaqCreateLocalizationDataInput = {
  answer?: Maybe<Scalars['RichTextAST']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  question: Scalars['String'];
  updatedAt?: Maybe<Scalars['DateTime']>;
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
  /** Connect multiple existing Faq documents */
  connect?: Maybe<Array<FaqWhereUniqueInput>>;
  /** Create and connect multiple existing Faq documents */
  create?: Maybe<Array<FaqCreateInput>>;
};

export type FaqCreateOneInlineInput = {
  /** Connect one existing Faq document */
  connect?: Maybe<FaqWhereUniqueInput>;
  /** Create and connect one Faq document */
  create?: Maybe<FaqCreateInput>;
};

/** An edge in a connection. */
export type FaqEdge = {
  __typename?: 'FaqEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: Faq;
};

/** Identifies documents */
export type FaqManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<FaqWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<FaqWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<FaqWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  createdBy?: Maybe<UserWhereInput>;
  id?: Maybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  publishedBy?: Maybe<UserWhereInput>;
  scheduledIn_every?: Maybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: Maybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: Maybe<ScheduledOperationWhereInput>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  updatedBy?: Maybe<UserWhereInput>;
};

export enum FaqOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  QuestionAsc = 'question_ASC',
  QuestionDesc = 'question_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

export type FaqUpdateInput = {
  /** answer input for default locale (de) */
  answer?: Maybe<Scalars['RichTextAST']>;
  /** Manage document localizations */
  localizations?: Maybe<FaqUpdateLocalizationsInput>;
  /** question input for default locale (de) */
  question?: Maybe<Scalars['String']>;
};

export type FaqUpdateLocalizationDataInput = {
  answer?: Maybe<Scalars['RichTextAST']>;
  question?: Maybe<Scalars['String']>;
};

export type FaqUpdateLocalizationInput = {
  data: FaqUpdateLocalizationDataInput;
  locale: Locale;
};

export type FaqUpdateLocalizationsInput = {
  /** Localizations to create */
  create?: Maybe<Array<FaqCreateLocalizationInput>>;
  /** Localizations to delete */
  delete?: Maybe<Array<Locale>>;
  /** Localizations to update */
  update?: Maybe<Array<FaqUpdateLocalizationInput>>;
  upsert?: Maybe<Array<FaqUpsertLocalizationInput>>;
};

export type FaqUpdateManyInlineInput = {
  /** Connect multiple existing Faq documents */
  connect?: Maybe<Array<FaqConnectInput>>;
  /** Create and connect multiple Faq documents */
  create?: Maybe<Array<FaqCreateInput>>;
  /** Delete multiple Faq documents */
  delete?: Maybe<Array<FaqWhereUniqueInput>>;
  /** Disconnect multiple Faq documents */
  disconnect?: Maybe<Array<FaqWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing Faq documents */
  set?: Maybe<Array<FaqWhereUniqueInput>>;
  /** Update multiple Faq documents */
  update?: Maybe<Array<FaqUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple Faq documents */
  upsert?: Maybe<Array<FaqUpsertWithNestedWhereUniqueInput>>;
};

export type FaqUpdateManyInput = {
  /** answer input for default locale (de) */
  answer?: Maybe<Scalars['RichTextAST']>;
  /** Optional updates to localizations */
  localizations?: Maybe<FaqUpdateManyLocalizationsInput>;
  /** question input for default locale (de) */
  question?: Maybe<Scalars['String']>;
};

export type FaqUpdateManyLocalizationDataInput = {
  answer?: Maybe<Scalars['RichTextAST']>;
  question?: Maybe<Scalars['String']>;
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
  /** Update many input */
  data: FaqUpdateManyInput;
  /** Document search */
  where: FaqWhereInput;
};

export type FaqUpdateOneInlineInput = {
  /** Connect existing Faq document */
  connect?: Maybe<FaqWhereUniqueInput>;
  /** Create and connect one Faq document */
  create?: Maybe<FaqCreateInput>;
  /** Delete currently connected Faq document */
  delete?: Maybe<Scalars['Boolean']>;
  /** Disconnect currently connected Faq document */
  disconnect?: Maybe<Scalars['Boolean']>;
  /** Update single Faq document */
  update?: Maybe<FaqUpdateWithNestedWhereUniqueInput>;
  /** Upsert single Faq document */
  upsert?: Maybe<FaqUpsertWithNestedWhereUniqueInput>;
};

export type FaqUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: FaqUpdateInput;
  /** Unique document search */
  where: FaqWhereUniqueInput;
};

export type FaqUpsertInput = {
  /** Create document if it didn't exist */
  create: FaqCreateInput;
  /** Update document if it exists */
  update: FaqUpdateInput;
};

export type FaqUpsertLocalizationInput = {
  create: FaqCreateLocalizationDataInput;
  locale: Locale;
  update: FaqUpdateLocalizationDataInput;
};

export type FaqUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: FaqUpsertInput;
  /** Unique document search */
  where: FaqWhereUniqueInput;
};

/** Identifies documents */
export type FaqWhereInput = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<FaqWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<FaqWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<FaqWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  createdBy?: Maybe<UserWhereInput>;
  id?: Maybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  publishedBy?: Maybe<UserWhereInput>;
  question?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  question_contains?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  question_ends_with?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  question_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  question_not?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  question_not_contains?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  question_not_ends_with?: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  question_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  question_not_starts_with?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  question_starts_with?: Maybe<Scalars['String']>;
  scheduledIn_every?: Maybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: Maybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: Maybe<ScheduledOperationWhereInput>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  updatedBy?: Maybe<UserWhereInput>;
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
  /** Resizes the image to fit within the parameters, but as opposed to 'fit:clip' will not scale the image if the image is smaller than the output size. */
  Max = 'max',
  /** Resizes the image to fit the specified parameters exactly by scaling the image to the desired size. The aspect ratio of the image is not respected and the image can be distorted using this method. */
  Scale = 'scale'
}

export type ImageResizeInput = {
  /** The default value for the fit parameter is fit:clip. */
  fit?: Maybe<ImageFit>;
  /** The height in pixels to resize the image to. The value must be an integer from 1 to 10000. */
  height?: Maybe<Scalars['Int']>;
  /** The width in pixels to resize the image to. The value must be an integer from 1 to 10000. */
  width?: Maybe<Scalars['Int']>;
};

/** Transformations for Images */
export type ImageTransformationInput = {
  /** Resizes the image */
  resize?: Maybe<ImageResizeInput>;
};

export type Kpi = Node & {
  __typename?: 'Kpi';
  /** The time the document was created */
  createdAt: Scalars['DateTime'];
  /** User that created this document */
  createdBy?: Maybe<User>;
  /** Get the document in other stages */
  documentInStages: Array<Kpi>;
  /** List of Kpi versions */
  history: Array<Version>;
  /** The unique identifier */
  id: Scalars['ID'];
  /** System Locale field */
  locale: Locale;
  /** Get the other localizations for this document */
  localizations: Array<Kpi>;
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  scheduledIn: Array<ScheduledOperation>;
  /** System stage field */
  stage: Stage;
  text?: Maybe<Scalars['String']>;
  /** The time the document was updated */
  updatedAt: Scalars['DateTime'];
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
  value?: Maybe<Scalars['Int']>;
};


export type KpiCreatedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};


export type KpiCreatedByArgs = {
  locales?: Maybe<Array<Locale>>;
};


export type KpiDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
  stages?: Array<Stage>;
};


export type KpiHistoryArgs = {
  limit?: Scalars['Int'];
  skip?: Scalars['Int'];
  stageOverride?: Maybe<Stage>;
};


export type KpiLocalizationsArgs = {
  includeCurrent?: Scalars['Boolean'];
  locales?: Array<Locale>;
};


export type KpiPublishedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};


export type KpiPublishedByArgs = {
  locales?: Maybe<Array<Locale>>;
};


export type KpiScheduledInArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  locales?: Maybe<Array<Locale>>;
  skip?: Maybe<Scalars['Int']>;
  where?: Maybe<ScheduledOperationWhereInput>;
};


export type KpiUpdatedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};


export type KpiUpdatedByArgs = {
  locales?: Maybe<Array<Locale>>;
};

export type KpiConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: Maybe<ConnectPositionInput>;
  /** Document to connect */
  where: KpiWhereUniqueInput;
};

/** A connection to a list of items. */
export type KpiConnection = {
  __typename?: 'KpiConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<KpiEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type KpiCreateInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  /** Inline mutations for managing document localizations excluding the default locale */
  localizations?: Maybe<KpiCreateLocalizationsInput>;
  /** text input for default locale (de) */
  text?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  value?: Maybe<Scalars['Int']>;
};

export type KpiCreateLocalizationDataInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  text?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
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
  /** Connect multiple existing Kpi documents */
  connect?: Maybe<Array<KpiWhereUniqueInput>>;
  /** Create and connect multiple existing Kpi documents */
  create?: Maybe<Array<KpiCreateInput>>;
};

export type KpiCreateOneInlineInput = {
  /** Connect one existing Kpi document */
  connect?: Maybe<KpiWhereUniqueInput>;
  /** Create and connect one Kpi document */
  create?: Maybe<KpiCreateInput>;
};

/** An edge in a connection. */
export type KpiEdge = {
  __typename?: 'KpiEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: Kpi;
};

/** Identifies documents */
export type KpiManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<KpiWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<KpiWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<KpiWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  createdBy?: Maybe<UserWhereInput>;
  id?: Maybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  publishedBy?: Maybe<UserWhereInput>;
  scheduledIn_every?: Maybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: Maybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: Maybe<ScheduledOperationWhereInput>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  updatedBy?: Maybe<UserWhereInput>;
  value?: Maybe<Scalars['Int']>;
  /** All values greater than the given value. */
  value_gt?: Maybe<Scalars['Int']>;
  /** All values greater than or equal the given value. */
  value_gte?: Maybe<Scalars['Int']>;
  /** All values that are contained in given list. */
  value_in?: Maybe<Array<Scalars['Int']>>;
  /** All values less than the given value. */
  value_lt?: Maybe<Scalars['Int']>;
  /** All values less than or equal the given value. */
  value_lte?: Maybe<Scalars['Int']>;
  /** All values that are not equal to given value. */
  value_not?: Maybe<Scalars['Int']>;
  /** All values that are not contained in given list. */
  value_not_in?: Maybe<Array<Scalars['Int']>>;
};

export enum KpiOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  TextAsc = 'text_ASC',
  TextDesc = 'text_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  ValueAsc = 'value_ASC',
  ValueDesc = 'value_DESC'
}

export type KpiUpdateInput = {
  /** Manage document localizations */
  localizations?: Maybe<KpiUpdateLocalizationsInput>;
  /** text input for default locale (de) */
  text?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['Int']>;
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
  /** Localizations to delete */
  delete?: Maybe<Array<Locale>>;
  /** Localizations to update */
  update?: Maybe<Array<KpiUpdateLocalizationInput>>;
  upsert?: Maybe<Array<KpiUpsertLocalizationInput>>;
};

export type KpiUpdateManyInlineInput = {
  /** Connect multiple existing Kpi documents */
  connect?: Maybe<Array<KpiConnectInput>>;
  /** Create and connect multiple Kpi documents */
  create?: Maybe<Array<KpiCreateInput>>;
  /** Delete multiple Kpi documents */
  delete?: Maybe<Array<KpiWhereUniqueInput>>;
  /** Disconnect multiple Kpi documents */
  disconnect?: Maybe<Array<KpiWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing Kpi documents */
  set?: Maybe<Array<KpiWhereUniqueInput>>;
  /** Update multiple Kpi documents */
  update?: Maybe<Array<KpiUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple Kpi documents */
  upsert?: Maybe<Array<KpiUpsertWithNestedWhereUniqueInput>>;
};

export type KpiUpdateManyInput = {
  /** Optional updates to localizations */
  localizations?: Maybe<KpiUpdateManyLocalizationsInput>;
  /** text input for default locale (de) */
  text?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['Int']>;
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
  /** Update many input */
  data: KpiUpdateManyInput;
  /** Document search */
  where: KpiWhereInput;
};

export type KpiUpdateOneInlineInput = {
  /** Connect existing Kpi document */
  connect?: Maybe<KpiWhereUniqueInput>;
  /** Create and connect one Kpi document */
  create?: Maybe<KpiCreateInput>;
  /** Delete currently connected Kpi document */
  delete?: Maybe<Scalars['Boolean']>;
  /** Disconnect currently connected Kpi document */
  disconnect?: Maybe<Scalars['Boolean']>;
  /** Update single Kpi document */
  update?: Maybe<KpiUpdateWithNestedWhereUniqueInput>;
  /** Upsert single Kpi document */
  upsert?: Maybe<KpiUpsertWithNestedWhereUniqueInput>;
};

export type KpiUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: KpiUpdateInput;
  /** Unique document search */
  where: KpiWhereUniqueInput;
};

export type KpiUpsertInput = {
  /** Create document if it didn't exist */
  create: KpiCreateInput;
  /** Update document if it exists */
  update: KpiUpdateInput;
};

export type KpiUpsertLocalizationInput = {
  create: KpiCreateLocalizationDataInput;
  locale: Locale;
  update: KpiUpdateLocalizationDataInput;
};

export type KpiUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: KpiUpsertInput;
  /** Unique document search */
  where: KpiWhereUniqueInput;
};

/** Identifies documents */
export type KpiWhereInput = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<KpiWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<KpiWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<KpiWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  createdBy?: Maybe<UserWhereInput>;
  id?: Maybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  publishedBy?: Maybe<UserWhereInput>;
  scheduledIn_every?: Maybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: Maybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: Maybe<ScheduledOperationWhereInput>;
  text?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  text_contains?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  text_ends_with?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  text_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  text_not?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  text_not_contains?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  text_not_ends_with?: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  text_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  text_not_starts_with?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  text_starts_with?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  updatedBy?: Maybe<UserWhereInput>;
  value?: Maybe<Scalars['Int']>;
  /** All values greater than the given value. */
  value_gt?: Maybe<Scalars['Int']>;
  /** All values greater than or equal the given value. */
  value_gte?: Maybe<Scalars['Int']>;
  /** All values that are contained in given list. */
  value_in?: Maybe<Array<Scalars['Int']>>;
  /** All values less than the given value. */
  value_lt?: Maybe<Scalars['Int']>;
  /** All values less than or equal the given value. */
  value_lte?: Maybe<Scalars['Int']>;
  /** All values that are not equal to given value. */
  value_not?: Maybe<Scalars['Int']>;
  /** All values that are not contained in given list. */
  value_not_in?: Maybe<Array<Scalars['Int']>>;
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
  distance: Scalars['Float'];
  latitude: Scalars['Float'];
  longitude: Scalars['Float'];
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
  abstract?: Maybe<Scalars['String']>;
  bio?: Maybe<RichText>;
  /** The time the document was created */
  createdAt: Scalars['DateTime'];
  /** User that created this document */
  createdBy?: Maybe<User>;
  /** Get the document in other stages */
  documentInStages: Array<Member>;
  /** List of Member versions */
  history: Array<Version>;
  /** The unique identifier */
  id: Scalars['ID'];
  /** System Locale field */
  locale: Locale;
  /** Get the other localizations for this document */
  localizations: Array<Member>;
  name?: Maybe<Scalars['String']>;
  order: Scalars['Int'];
  picture?: Maybe<Asset>;
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  scheduledIn: Array<ScheduledOperation>;
  slug?: Maybe<Scalars['String']>;
  /** System stage field */
  stage: Stage;
  /** The time the document was updated */
  updatedAt: Scalars['DateTime'];
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
};


export type MemberCreatedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};


export type MemberCreatedByArgs = {
  locales?: Maybe<Array<Locale>>;
};


export type MemberDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
  stages?: Array<Stage>;
};


export type MemberHistoryArgs = {
  limit?: Scalars['Int'];
  skip?: Scalars['Int'];
  stageOverride?: Maybe<Stage>;
};


export type MemberLocalizationsArgs = {
  includeCurrent?: Scalars['Boolean'];
  locales?: Array<Locale>;
};


export type MemberPictureArgs = {
  locales?: Maybe<Array<Locale>>;
};


export type MemberPublishedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};


export type MemberPublishedByArgs = {
  locales?: Maybe<Array<Locale>>;
};


export type MemberScheduledInArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  locales?: Maybe<Array<Locale>>;
  skip?: Maybe<Scalars['Int']>;
  where?: Maybe<ScheduledOperationWhereInput>;
};


export type MemberUpdatedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};


export type MemberUpdatedByArgs = {
  locales?: Maybe<Array<Locale>>;
};

export type MemberConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: Maybe<ConnectPositionInput>;
  /** Document to connect */
  where: MemberWhereUniqueInput;
};

/** A connection to a list of items. */
export type MemberConnection = {
  __typename?: 'MemberConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<MemberEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type MemberCreateInput = {
  /** abstract input for default locale (de) */
  abstract?: Maybe<Scalars['String']>;
  bio?: Maybe<Scalars['RichTextAST']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  /** Inline mutations for managing document localizations excluding the default locale */
  localizations?: Maybe<MemberCreateLocalizationsInput>;
  name?: Maybe<Scalars['String']>;
  order: Scalars['Int'];
  picture?: Maybe<AssetCreateOneInlineInput>;
  slug?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type MemberCreateLocalizationDataInput = {
  abstract?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
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
  /** Connect multiple existing Member documents */
  connect?: Maybe<Array<MemberWhereUniqueInput>>;
  /** Create and connect multiple existing Member documents */
  create?: Maybe<Array<MemberCreateInput>>;
};

export type MemberCreateOneInlineInput = {
  /** Connect one existing Member document */
  connect?: Maybe<MemberWhereUniqueInput>;
  /** Create and connect one Member document */
  create?: Maybe<MemberCreateInput>;
};

/** An edge in a connection. */
export type MemberEdge = {
  __typename?: 'MemberEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: Member;
};

/** Identifies documents */
export type MemberManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<MemberWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<MemberWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<MemberWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  createdBy?: Maybe<UserWhereInput>;
  id?: Maybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  name_contains?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  name_ends_with?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  name_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  name_not?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  name_not_contains?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  name_not_ends_with?: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  name_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  name_not_starts_with?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  name_starts_with?: Maybe<Scalars['String']>;
  order?: Maybe<Scalars['Int']>;
  /** All values greater than the given value. */
  order_gt?: Maybe<Scalars['Int']>;
  /** All values greater than or equal the given value. */
  order_gte?: Maybe<Scalars['Int']>;
  /** All values that are contained in given list. */
  order_in?: Maybe<Array<Scalars['Int']>>;
  /** All values less than the given value. */
  order_lt?: Maybe<Scalars['Int']>;
  /** All values less than or equal the given value. */
  order_lte?: Maybe<Scalars['Int']>;
  /** All values that are not equal to given value. */
  order_not?: Maybe<Scalars['Int']>;
  /** All values that are not contained in given list. */
  order_not_in?: Maybe<Array<Scalars['Int']>>;
  picture?: Maybe<AssetWhereInput>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  publishedBy?: Maybe<UserWhereInput>;
  scheduledIn_every?: Maybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: Maybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: Maybe<ScheduledOperationWhereInput>;
  slug?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  slug_contains?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  slug_ends_with?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  slug_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  slug_not?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  slug_not_contains?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  slug_not_ends_with?: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  slug_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  slug_not_starts_with?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  slug_starts_with?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  updatedBy?: Maybe<UserWhereInput>;
};

export enum MemberOrderByInput {
  AbstractAsc = 'abstract_ASC',
  AbstractDesc = 'abstract_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  OrderAsc = 'order_ASC',
  OrderDesc = 'order_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

export type MemberUpdateInput = {
  /** abstract input for default locale (de) */
  abstract?: Maybe<Scalars['String']>;
  bio?: Maybe<Scalars['RichTextAST']>;
  /** Manage document localizations */
  localizations?: Maybe<MemberUpdateLocalizationsInput>;
  name?: Maybe<Scalars['String']>;
  order?: Maybe<Scalars['Int']>;
  picture?: Maybe<AssetUpdateOneInlineInput>;
  slug?: Maybe<Scalars['String']>;
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
  /** Localizations to delete */
  delete?: Maybe<Array<Locale>>;
  /** Localizations to update */
  update?: Maybe<Array<MemberUpdateLocalizationInput>>;
  upsert?: Maybe<Array<MemberUpsertLocalizationInput>>;
};

export type MemberUpdateManyInlineInput = {
  /** Connect multiple existing Member documents */
  connect?: Maybe<Array<MemberConnectInput>>;
  /** Create and connect multiple Member documents */
  create?: Maybe<Array<MemberCreateInput>>;
  /** Delete multiple Member documents */
  delete?: Maybe<Array<MemberWhereUniqueInput>>;
  /** Disconnect multiple Member documents */
  disconnect?: Maybe<Array<MemberWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing Member documents */
  set?: Maybe<Array<MemberWhereUniqueInput>>;
  /** Update multiple Member documents */
  update?: Maybe<Array<MemberUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple Member documents */
  upsert?: Maybe<Array<MemberUpsertWithNestedWhereUniqueInput>>;
};

export type MemberUpdateManyInput = {
  /** abstract input for default locale (de) */
  abstract?: Maybe<Scalars['String']>;
  bio?: Maybe<Scalars['RichTextAST']>;
  /** Optional updates to localizations */
  localizations?: Maybe<MemberUpdateManyLocalizationsInput>;
  name?: Maybe<Scalars['String']>;
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
  /** Update many input */
  data: MemberUpdateManyInput;
  /** Document search */
  where: MemberWhereInput;
};

export type MemberUpdateOneInlineInput = {
  /** Connect existing Member document */
  connect?: Maybe<MemberWhereUniqueInput>;
  /** Create and connect one Member document */
  create?: Maybe<MemberCreateInput>;
  /** Delete currently connected Member document */
  delete?: Maybe<Scalars['Boolean']>;
  /** Disconnect currently connected Member document */
  disconnect?: Maybe<Scalars['Boolean']>;
  /** Update single Member document */
  update?: Maybe<MemberUpdateWithNestedWhereUniqueInput>;
  /** Upsert single Member document */
  upsert?: Maybe<MemberUpsertWithNestedWhereUniqueInput>;
};

export type MemberUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: MemberUpdateInput;
  /** Unique document search */
  where: MemberWhereUniqueInput;
};

export type MemberUpsertInput = {
  /** Create document if it didn't exist */
  create: MemberCreateInput;
  /** Update document if it exists */
  update: MemberUpdateInput;
};

export type MemberUpsertLocalizationInput = {
  create: MemberCreateLocalizationDataInput;
  locale: Locale;
  update: MemberUpdateLocalizationDataInput;
};

export type MemberUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: MemberUpsertInput;
  /** Unique document search */
  where: MemberWhereUniqueInput;
};

/** Identifies documents */
export type MemberWhereInput = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<MemberWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<MemberWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<MemberWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: Maybe<Scalars['String']>;
  abstract?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  abstract_contains?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  abstract_ends_with?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  abstract_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  abstract_not?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  abstract_not_contains?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  abstract_not_ends_with?: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  abstract_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  abstract_not_starts_with?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  abstract_starts_with?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  createdBy?: Maybe<UserWhereInput>;
  id?: Maybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  name_contains?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  name_ends_with?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  name_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  name_not?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  name_not_contains?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  name_not_ends_with?: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  name_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  name_not_starts_with?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  name_starts_with?: Maybe<Scalars['String']>;
  order?: Maybe<Scalars['Int']>;
  /** All values greater than the given value. */
  order_gt?: Maybe<Scalars['Int']>;
  /** All values greater than or equal the given value. */
  order_gte?: Maybe<Scalars['Int']>;
  /** All values that are contained in given list. */
  order_in?: Maybe<Array<Scalars['Int']>>;
  /** All values less than the given value. */
  order_lt?: Maybe<Scalars['Int']>;
  /** All values less than or equal the given value. */
  order_lte?: Maybe<Scalars['Int']>;
  /** All values that are not equal to given value. */
  order_not?: Maybe<Scalars['Int']>;
  /** All values that are not contained in given list. */
  order_not_in?: Maybe<Array<Scalars['Int']>>;
  picture?: Maybe<AssetWhereInput>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  publishedBy?: Maybe<UserWhereInput>;
  scheduledIn_every?: Maybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: Maybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: Maybe<ScheduledOperationWhereInput>;
  slug?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  slug_contains?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  slug_ends_with?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  slug_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  slug_not?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  slug_not_contains?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  slug_not_ends_with?: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  slug_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  slug_not_starts_with?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  slug_starts_with?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  updatedBy?: Maybe<UserWhereInput>;
};

/** References Member record uniquely */
export type MemberWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>;
  order?: Maybe<Scalars['Int']>;
  slug?: Maybe<Scalars['String']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  /**
   * Create one asset
   * @deprecated Asset mutations will be overhauled soon
   */
  createAsset?: Maybe<Asset>;
  /** Create one blog */
  createBlog?: Maybe<Blog>;
  /** Create one cityPartner */
  createCityPartner?: Maybe<CityPartner>;
  /** Create one faq */
  createFaq?: Maybe<Faq>;
  /** Create one kpi */
  createKpi?: Maybe<Kpi>;
  /** Create one member */
  createMember?: Maybe<Member>;
  /** Create one network */
  createNetwork?: Maybe<Network>;
  /** Create one page */
  createPage?: Maybe<Page>;
  /** Create one pageSection */
  createPageSection?: Maybe<PageSection>;
  /** Create one pressArticle */
  createPressArticle?: Maybe<PressArticle>;
  /** Create one pressPhoto */
  createPressPhoto?: Maybe<PressPhoto>;
  /** Create one pressReport */
  createPressReport?: Maybe<PressReport>;
  /** Create one scheduledRelease */
  createScheduledRelease?: Maybe<ScheduledRelease>;
  /** Create one shop */
  createShop?: Maybe<Shop>;
  /** Create one shopBundesland */
  createShopBundesland?: Maybe<ShopBundesland>;
  /** Create one shopCategory */
  createShopCategory?: Maybe<ShopCategory>;
  /** Create one shopStatus */
  createShopStatus?: Maybe<ShopStatus>;
  /** Create one shopTown */
  createShopTown?: Maybe<ShopTown>;
  /** Create one shopType */
  createShopType?: Maybe<ShopType>;
  /** Create one supporter */
  createSupporter?: Maybe<Supporter>;
  /** Create one translation */
  createTranslation?: Maybe<Translation>;
  /** Delete one asset from _all_ existing stages. Returns deleted document. */
  deleteAsset?: Maybe<Asset>;
  /** Delete one blog from _all_ existing stages. Returns deleted document. */
  deleteBlog?: Maybe<Blog>;
  /** Delete one cityPartner from _all_ existing stages. Returns deleted document. */
  deleteCityPartner?: Maybe<CityPartner>;
  /** Delete one faq from _all_ existing stages. Returns deleted document. */
  deleteFaq?: Maybe<Faq>;
  /** Delete one kpi from _all_ existing stages. Returns deleted document. */
  deleteKpi?: Maybe<Kpi>;
  /**
   * Delete many Asset documents
   * @deprecated Please use the new paginated many mutation (deleteManyAssetsConnection)
   */
  deleteManyAssets: BatchPayload;
  /** Delete many Asset documents, return deleted documents */
  deleteManyAssetsConnection: AssetConnection;
  /**
   * Delete many Blog documents
   * @deprecated Please use the new paginated many mutation (deleteManyBlogsConnection)
   */
  deleteManyBlogs: BatchPayload;
  /** Delete many Blog documents, return deleted documents */
  deleteManyBlogsConnection: BlogConnection;
  /**
   * Delete many CityPartner documents
   * @deprecated Please use the new paginated many mutation (deleteManyCityPartnersConnection)
   */
  deleteManyCityPartners: BatchPayload;
  /** Delete many CityPartner documents, return deleted documents */
  deleteManyCityPartnersConnection: CityPartnerConnection;
  /**
   * Delete many Faq documents
   * @deprecated Please use the new paginated many mutation (deleteManyFaqsConnection)
   */
  deleteManyFaqs: BatchPayload;
  /** Delete many Faq documents, return deleted documents */
  deleteManyFaqsConnection: FaqConnection;
  /**
   * Delete many Kpi documents
   * @deprecated Please use the new paginated many mutation (deleteManyKpisConnection)
   */
  deleteManyKpis: BatchPayload;
  /** Delete many Kpi documents, return deleted documents */
  deleteManyKpisConnection: KpiConnection;
  /**
   * Delete many Member documents
   * @deprecated Please use the new paginated many mutation (deleteManyMembersConnection)
   */
  deleteManyMembers: BatchPayload;
  /** Delete many Member documents, return deleted documents */
  deleteManyMembersConnection: MemberConnection;
  /**
   * Delete many Network documents
   * @deprecated Please use the new paginated many mutation (deleteManyNetworksConnection)
   */
  deleteManyNetworks: BatchPayload;
  /** Delete many Network documents, return deleted documents */
  deleteManyNetworksConnection: NetworkConnection;
  /**
   * Delete many PageSection documents
   * @deprecated Please use the new paginated many mutation (deleteManyPageSectionsConnection)
   */
  deleteManyPageSections: BatchPayload;
  /** Delete many PageSection documents, return deleted documents */
  deleteManyPageSectionsConnection: PageSectionConnection;
  /**
   * Delete many Page documents
   * @deprecated Please use the new paginated many mutation (deleteManyPagesConnection)
   */
  deleteManyPages: BatchPayload;
  /** Delete many Page documents, return deleted documents */
  deleteManyPagesConnection: PageConnection;
  /**
   * Delete many PressArticle documents
   * @deprecated Please use the new paginated many mutation (deleteManyPressArticlesConnection)
   */
  deleteManyPressArticles: BatchPayload;
  /** Delete many PressArticle documents, return deleted documents */
  deleteManyPressArticlesConnection: PressArticleConnection;
  /**
   * Delete many PressPhoto documents
   * @deprecated Please use the new paginated many mutation (deleteManyPressPhotosConnection)
   */
  deleteManyPressPhotos: BatchPayload;
  /** Delete many PressPhoto documents, return deleted documents */
  deleteManyPressPhotosConnection: PressPhotoConnection;
  /**
   * Delete many PressReport documents
   * @deprecated Please use the new paginated many mutation (deleteManyPressReportsConnection)
   */
  deleteManyPressReports: BatchPayload;
  /** Delete many PressReport documents, return deleted documents */
  deleteManyPressReportsConnection: PressReportConnection;
  /**
   * Delete many ShopBundesland documents
   * @deprecated Please use the new paginated many mutation (deleteManyShopBundeslandsConnection)
   */
  deleteManyShopBundeslands: BatchPayload;
  /** Delete many ShopBundesland documents, return deleted documents */
  deleteManyShopBundeslandsConnection: ShopBundeslandConnection;
  /**
   * Delete many ShopCategory documents
   * @deprecated Please use the new paginated many mutation (deleteManyShopCategoriesConnection)
   */
  deleteManyShopCategories: BatchPayload;
  /** Delete many ShopCategory documents, return deleted documents */
  deleteManyShopCategoriesConnection: ShopCategoryConnection;
  /**
   * Delete many ShopStatus documents
   * @deprecated Please use the new paginated many mutation (deleteManyShopStatusesConnection)
   */
  deleteManyShopStatuses: BatchPayload;
  /** Delete many ShopStatus documents, return deleted documents */
  deleteManyShopStatusesConnection: ShopStatusConnection;
  /**
   * Delete many ShopTown documents
   * @deprecated Please use the new paginated many mutation (deleteManyShopTownsConnection)
   */
  deleteManyShopTowns: BatchPayload;
  /** Delete many ShopTown documents, return deleted documents */
  deleteManyShopTownsConnection: ShopTownConnection;
  /**
   * Delete many ShopType documents
   * @deprecated Please use the new paginated many mutation (deleteManyShopTypesConnection)
   */
  deleteManyShopTypes: BatchPayload;
  /** Delete many ShopType documents, return deleted documents */
  deleteManyShopTypesConnection: ShopTypeConnection;
  /**
   * Delete many Shop documents
   * @deprecated Please use the new paginated many mutation (deleteManyShopsConnection)
   */
  deleteManyShops: BatchPayload;
  /** Delete many Shop documents, return deleted documents */
  deleteManyShopsConnection: ShopConnection;
  /**
   * Delete many Supporter documents
   * @deprecated Please use the new paginated many mutation (deleteManySupportersConnection)
   */
  deleteManySupporters: BatchPayload;
  /** Delete many Supporter documents, return deleted documents */
  deleteManySupportersConnection: SupporterConnection;
  /**
   * Delete many Translation documents
   * @deprecated Please use the new paginated many mutation (deleteManyTranslationsConnection)
   */
  deleteManyTranslations: BatchPayload;
  /** Delete many Translation documents, return deleted documents */
  deleteManyTranslationsConnection: TranslationConnection;
  /** Delete one member from _all_ existing stages. Returns deleted document. */
  deleteMember?: Maybe<Member>;
  /** Delete one network from _all_ existing stages. Returns deleted document. */
  deleteNetwork?: Maybe<Network>;
  /** Delete one page from _all_ existing stages. Returns deleted document. */
  deletePage?: Maybe<Page>;
  /** Delete one pageSection from _all_ existing stages. Returns deleted document. */
  deletePageSection?: Maybe<PageSection>;
  /** Delete one pressArticle from _all_ existing stages. Returns deleted document. */
  deletePressArticle?: Maybe<PressArticle>;
  /** Delete one pressPhoto from _all_ existing stages. Returns deleted document. */
  deletePressPhoto?: Maybe<PressPhoto>;
  /** Delete one pressReport from _all_ existing stages. Returns deleted document. */
  deletePressReport?: Maybe<PressReport>;
  /** Delete and return scheduled operation */
  deleteScheduledOperation?: Maybe<ScheduledOperation>;
  /** Delete one scheduledRelease from _all_ existing stages. Returns deleted document. */
  deleteScheduledRelease?: Maybe<ScheduledRelease>;
  /** Delete one shop from _all_ existing stages. Returns deleted document. */
  deleteShop?: Maybe<Shop>;
  /** Delete one shopBundesland from _all_ existing stages. Returns deleted document. */
  deleteShopBundesland?: Maybe<ShopBundesland>;
  /** Delete one shopCategory from _all_ existing stages. Returns deleted document. */
  deleteShopCategory?: Maybe<ShopCategory>;
  /** Delete one shopStatus from _all_ existing stages. Returns deleted document. */
  deleteShopStatus?: Maybe<ShopStatus>;
  /** Delete one shopTown from _all_ existing stages. Returns deleted document. */
  deleteShopTown?: Maybe<ShopTown>;
  /** Delete one shopType from _all_ existing stages. Returns deleted document. */
  deleteShopType?: Maybe<ShopType>;
  /** Delete one supporter from _all_ existing stages. Returns deleted document. */
  deleteSupporter?: Maybe<Supporter>;
  /** Delete one translation from _all_ existing stages. Returns deleted document. */
  deleteTranslation?: Maybe<Translation>;
  /** Publish one asset */
  publishAsset?: Maybe<Asset>;
  /** Publish one blog */
  publishBlog?: Maybe<Blog>;
  /** Publish one cityPartner */
  publishCityPartner?: Maybe<CityPartner>;
  /** Publish one faq */
  publishFaq?: Maybe<Faq>;
  /** Publish one kpi */
  publishKpi?: Maybe<Kpi>;
  /**
   * Publish many Asset documents
   * @deprecated Please use the new paginated many mutation (publishManyAssetsConnection)
   */
  publishManyAssets: BatchPayload;
  /** Publish many Asset documents */
  publishManyAssetsConnection: AssetConnection;
  /**
   * Publish many Blog documents
   * @deprecated Please use the new paginated many mutation (publishManyBlogsConnection)
   */
  publishManyBlogs: BatchPayload;
  /** Publish many Blog documents */
  publishManyBlogsConnection: BlogConnection;
  /**
   * Publish many CityPartner documents
   * @deprecated Please use the new paginated many mutation (publishManyCityPartnersConnection)
   */
  publishManyCityPartners: BatchPayload;
  /** Publish many CityPartner documents */
  publishManyCityPartnersConnection: CityPartnerConnection;
  /**
   * Publish many Faq documents
   * @deprecated Please use the new paginated many mutation (publishManyFaqsConnection)
   */
  publishManyFaqs: BatchPayload;
  /** Publish many Faq documents */
  publishManyFaqsConnection: FaqConnection;
  /**
   * Publish many Kpi documents
   * @deprecated Please use the new paginated many mutation (publishManyKpisConnection)
   */
  publishManyKpis: BatchPayload;
  /** Publish many Kpi documents */
  publishManyKpisConnection: KpiConnection;
  /**
   * Publish many Member documents
   * @deprecated Please use the new paginated many mutation (publishManyMembersConnection)
   */
  publishManyMembers: BatchPayload;
  /** Publish many Member documents */
  publishManyMembersConnection: MemberConnection;
  /**
   * Publish many Network documents
   * @deprecated Please use the new paginated many mutation (publishManyNetworksConnection)
   */
  publishManyNetworks: BatchPayload;
  /** Publish many Network documents */
  publishManyNetworksConnection: NetworkConnection;
  /**
   * Publish many PageSection documents
   * @deprecated Please use the new paginated many mutation (publishManyPageSectionsConnection)
   */
  publishManyPageSections: BatchPayload;
  /** Publish many PageSection documents */
  publishManyPageSectionsConnection: PageSectionConnection;
  /**
   * Publish many Page documents
   * @deprecated Please use the new paginated many mutation (publishManyPagesConnection)
   */
  publishManyPages: BatchPayload;
  /** Publish many Page documents */
  publishManyPagesConnection: PageConnection;
  /**
   * Publish many PressArticle documents
   * @deprecated Please use the new paginated many mutation (publishManyPressArticlesConnection)
   */
  publishManyPressArticles: BatchPayload;
  /** Publish many PressArticle documents */
  publishManyPressArticlesConnection: PressArticleConnection;
  /**
   * Publish many PressPhoto documents
   * @deprecated Please use the new paginated many mutation (publishManyPressPhotosConnection)
   */
  publishManyPressPhotos: BatchPayload;
  /** Publish many PressPhoto documents */
  publishManyPressPhotosConnection: PressPhotoConnection;
  /**
   * Publish many PressReport documents
   * @deprecated Please use the new paginated many mutation (publishManyPressReportsConnection)
   */
  publishManyPressReports: BatchPayload;
  /** Publish many PressReport documents */
  publishManyPressReportsConnection: PressReportConnection;
  /**
   * Publish many ShopBundesland documents
   * @deprecated Please use the new paginated many mutation (publishManyShopBundeslandsConnection)
   */
  publishManyShopBundeslands: BatchPayload;
  /** Publish many ShopBundesland documents */
  publishManyShopBundeslandsConnection: ShopBundeslandConnection;
  /**
   * Publish many ShopCategory documents
   * @deprecated Please use the new paginated many mutation (publishManyShopCategoriesConnection)
   */
  publishManyShopCategories: BatchPayload;
  /** Publish many ShopCategory documents */
  publishManyShopCategoriesConnection: ShopCategoryConnection;
  /**
   * Publish many ShopStatus documents
   * @deprecated Please use the new paginated many mutation (publishManyShopStatusesConnection)
   */
  publishManyShopStatuses: BatchPayload;
  /** Publish many ShopStatus documents */
  publishManyShopStatusesConnection: ShopStatusConnection;
  /**
   * Publish many ShopTown documents
   * @deprecated Please use the new paginated many mutation (publishManyShopTownsConnection)
   */
  publishManyShopTowns: BatchPayload;
  /** Publish many ShopTown documents */
  publishManyShopTownsConnection: ShopTownConnection;
  /**
   * Publish many ShopType documents
   * @deprecated Please use the new paginated many mutation (publishManyShopTypesConnection)
   */
  publishManyShopTypes: BatchPayload;
  /** Publish many ShopType documents */
  publishManyShopTypesConnection: ShopTypeConnection;
  /**
   * Publish many Shop documents
   * @deprecated Please use the new paginated many mutation (publishManyShopsConnection)
   */
  publishManyShops: BatchPayload;
  /** Publish many Shop documents */
  publishManyShopsConnection: ShopConnection;
  /**
   * Publish many Supporter documents
   * @deprecated Please use the new paginated many mutation (publishManySupportersConnection)
   */
  publishManySupporters: BatchPayload;
  /** Publish many Supporter documents */
  publishManySupportersConnection: SupporterConnection;
  /**
   * Publish many Translation documents
   * @deprecated Please use the new paginated many mutation (publishManyTranslationsConnection)
   */
  publishManyTranslations: BatchPayload;
  /** Publish many Translation documents */
  publishManyTranslationsConnection: TranslationConnection;
  /** Publish one member */
  publishMember?: Maybe<Member>;
  /** Publish one network */
  publishNetwork?: Maybe<Network>;
  /** Publish one page */
  publishPage?: Maybe<Page>;
  /** Publish one pageSection */
  publishPageSection?: Maybe<PageSection>;
  /** Publish one pressArticle */
  publishPressArticle?: Maybe<PressArticle>;
  /** Publish one pressPhoto */
  publishPressPhoto?: Maybe<PressPhoto>;
  /** Publish one pressReport */
  publishPressReport?: Maybe<PressReport>;
  /** Publish one shop */
  publishShop?: Maybe<Shop>;
  /** Publish one shopBundesland */
  publishShopBundesland?: Maybe<ShopBundesland>;
  /** Publish one shopCategory */
  publishShopCategory?: Maybe<ShopCategory>;
  /** Publish one shopStatus */
  publishShopStatus?: Maybe<ShopStatus>;
  /** Publish one shopTown */
  publishShopTown?: Maybe<ShopTown>;
  /** Publish one shopType */
  publishShopType?: Maybe<ShopType>;
  /** Publish one supporter */
  publishSupporter?: Maybe<Supporter>;
  /** Publish one translation */
  publishTranslation?: Maybe<Translation>;
  /** Schedule to publish one asset */
  schedulePublishAsset?: Maybe<Asset>;
  /** Schedule to publish one blog */
  schedulePublishBlog?: Maybe<Blog>;
  /** Schedule to publish one cityPartner */
  schedulePublishCityPartner?: Maybe<CityPartner>;
  /** Schedule to publish one faq */
  schedulePublishFaq?: Maybe<Faq>;
  /** Schedule to publish one kpi */
  schedulePublishKpi?: Maybe<Kpi>;
  /** Schedule to publish one member */
  schedulePublishMember?: Maybe<Member>;
  /** Schedule to publish one network */
  schedulePublishNetwork?: Maybe<Network>;
  /** Schedule to publish one page */
  schedulePublishPage?: Maybe<Page>;
  /** Schedule to publish one pageSection */
  schedulePublishPageSection?: Maybe<PageSection>;
  /** Schedule to publish one pressArticle */
  schedulePublishPressArticle?: Maybe<PressArticle>;
  /** Schedule to publish one pressPhoto */
  schedulePublishPressPhoto?: Maybe<PressPhoto>;
  /** Schedule to publish one pressReport */
  schedulePublishPressReport?: Maybe<PressReport>;
  /** Schedule to publish one shop */
  schedulePublishShop?: Maybe<Shop>;
  /** Schedule to publish one shopBundesland */
  schedulePublishShopBundesland?: Maybe<ShopBundesland>;
  /** Schedule to publish one shopCategory */
  schedulePublishShopCategory?: Maybe<ShopCategory>;
  /** Schedule to publish one shopStatus */
  schedulePublishShopStatus?: Maybe<ShopStatus>;
  /** Schedule to publish one shopTown */
  schedulePublishShopTown?: Maybe<ShopTown>;
  /** Schedule to publish one shopType */
  schedulePublishShopType?: Maybe<ShopType>;
  /** Schedule to publish one supporter */
  schedulePublishSupporter?: Maybe<Supporter>;
  /** Schedule to publish one translation */
  schedulePublishTranslation?: Maybe<Translation>;
  /** Unpublish one asset from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  scheduleUnpublishAsset?: Maybe<Asset>;
  /** Unpublish one blog from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  scheduleUnpublishBlog?: Maybe<Blog>;
  /** Unpublish one cityPartner from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  scheduleUnpublishCityPartner?: Maybe<CityPartner>;
  /** Unpublish one faq from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  scheduleUnpublishFaq?: Maybe<Faq>;
  /** Unpublish one kpi from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  scheduleUnpublishKpi?: Maybe<Kpi>;
  /** Unpublish one member from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  scheduleUnpublishMember?: Maybe<Member>;
  /** Unpublish one network from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  scheduleUnpublishNetwork?: Maybe<Network>;
  /** Unpublish one page from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  scheduleUnpublishPage?: Maybe<Page>;
  /** Unpublish one pageSection from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  scheduleUnpublishPageSection?: Maybe<PageSection>;
  /** Unpublish one pressArticle from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  scheduleUnpublishPressArticle?: Maybe<PressArticle>;
  /** Unpublish one pressPhoto from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  scheduleUnpublishPressPhoto?: Maybe<PressPhoto>;
  /** Unpublish one pressReport from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  scheduleUnpublishPressReport?: Maybe<PressReport>;
  /** Unpublish one shop from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  scheduleUnpublishShop?: Maybe<Shop>;
  /** Unpublish one shopBundesland from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  scheduleUnpublishShopBundesland?: Maybe<ShopBundesland>;
  /** Unpublish one shopCategory from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  scheduleUnpublishShopCategory?: Maybe<ShopCategory>;
  /** Unpublish one shopStatus from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  scheduleUnpublishShopStatus?: Maybe<ShopStatus>;
  /** Unpublish one shopTown from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  scheduleUnpublishShopTown?: Maybe<ShopTown>;
  /** Unpublish one shopType from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  scheduleUnpublishShopType?: Maybe<ShopType>;
  /** Unpublish one supporter from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  scheduleUnpublishSupporter?: Maybe<Supporter>;
  /** Unpublish one translation from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  scheduleUnpublishTranslation?: Maybe<Translation>;
  /** Unpublish one asset from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishAsset?: Maybe<Asset>;
  /** Unpublish one blog from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishBlog?: Maybe<Blog>;
  /** Unpublish one cityPartner from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishCityPartner?: Maybe<CityPartner>;
  /** Unpublish one faq from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishFaq?: Maybe<Faq>;
  /** Unpublish one kpi from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishKpi?: Maybe<Kpi>;
  /**
   * Unpublish many Asset documents
   * @deprecated Please use the new paginated many mutation (unpublishManyAssetsConnection)
   */
  unpublishManyAssets: BatchPayload;
  /** Find many Asset documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyAssetsConnection: AssetConnection;
  /**
   * Unpublish many Blog documents
   * @deprecated Please use the new paginated many mutation (unpublishManyBlogsConnection)
   */
  unpublishManyBlogs: BatchPayload;
  /** Find many Blog documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyBlogsConnection: BlogConnection;
  /**
   * Unpublish many CityPartner documents
   * @deprecated Please use the new paginated many mutation (unpublishManyCityPartnersConnection)
   */
  unpublishManyCityPartners: BatchPayload;
  /** Find many CityPartner documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyCityPartnersConnection: CityPartnerConnection;
  /**
   * Unpublish many Faq documents
   * @deprecated Please use the new paginated many mutation (unpublishManyFaqsConnection)
   */
  unpublishManyFaqs: BatchPayload;
  /** Find many Faq documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyFaqsConnection: FaqConnection;
  /**
   * Unpublish many Kpi documents
   * @deprecated Please use the new paginated many mutation (unpublishManyKpisConnection)
   */
  unpublishManyKpis: BatchPayload;
  /** Find many Kpi documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyKpisConnection: KpiConnection;
  /**
   * Unpublish many Member documents
   * @deprecated Please use the new paginated many mutation (unpublishManyMembersConnection)
   */
  unpublishManyMembers: BatchPayload;
  /** Find many Member documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyMembersConnection: MemberConnection;
  /**
   * Unpublish many Network documents
   * @deprecated Please use the new paginated many mutation (unpublishManyNetworksConnection)
   */
  unpublishManyNetworks: BatchPayload;
  /** Find many Network documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyNetworksConnection: NetworkConnection;
  /**
   * Unpublish many PageSection documents
   * @deprecated Please use the new paginated many mutation (unpublishManyPageSectionsConnection)
   */
  unpublishManyPageSections: BatchPayload;
  /** Find many PageSection documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyPageSectionsConnection: PageSectionConnection;
  /**
   * Unpublish many Page documents
   * @deprecated Please use the new paginated many mutation (unpublishManyPagesConnection)
   */
  unpublishManyPages: BatchPayload;
  /** Find many Page documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyPagesConnection: PageConnection;
  /**
   * Unpublish many PressArticle documents
   * @deprecated Please use the new paginated many mutation (unpublishManyPressArticlesConnection)
   */
  unpublishManyPressArticles: BatchPayload;
  /** Find many PressArticle documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyPressArticlesConnection: PressArticleConnection;
  /**
   * Unpublish many PressPhoto documents
   * @deprecated Please use the new paginated many mutation (unpublishManyPressPhotosConnection)
   */
  unpublishManyPressPhotos: BatchPayload;
  /** Find many PressPhoto documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyPressPhotosConnection: PressPhotoConnection;
  /**
   * Unpublish many PressReport documents
   * @deprecated Please use the new paginated many mutation (unpublishManyPressReportsConnection)
   */
  unpublishManyPressReports: BatchPayload;
  /** Find many PressReport documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyPressReportsConnection: PressReportConnection;
  /**
   * Unpublish many ShopBundesland documents
   * @deprecated Please use the new paginated many mutation (unpublishManyShopBundeslandsConnection)
   */
  unpublishManyShopBundeslands: BatchPayload;
  /** Find many ShopBundesland documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyShopBundeslandsConnection: ShopBundeslandConnection;
  /**
   * Unpublish many ShopCategory documents
   * @deprecated Please use the new paginated many mutation (unpublishManyShopCategoriesConnection)
   */
  unpublishManyShopCategories: BatchPayload;
  /** Find many ShopCategory documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyShopCategoriesConnection: ShopCategoryConnection;
  /**
   * Unpublish many ShopStatus documents
   * @deprecated Please use the new paginated many mutation (unpublishManyShopStatusesConnection)
   */
  unpublishManyShopStatuses: BatchPayload;
  /** Find many ShopStatus documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyShopStatusesConnection: ShopStatusConnection;
  /**
   * Unpublish many ShopTown documents
   * @deprecated Please use the new paginated many mutation (unpublishManyShopTownsConnection)
   */
  unpublishManyShopTowns: BatchPayload;
  /** Find many ShopTown documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyShopTownsConnection: ShopTownConnection;
  /**
   * Unpublish many ShopType documents
   * @deprecated Please use the new paginated many mutation (unpublishManyShopTypesConnection)
   */
  unpublishManyShopTypes: BatchPayload;
  /** Find many ShopType documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyShopTypesConnection: ShopTypeConnection;
  /**
   * Unpublish many Shop documents
   * @deprecated Please use the new paginated many mutation (unpublishManyShopsConnection)
   */
  unpublishManyShops: BatchPayload;
  /** Find many Shop documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyShopsConnection: ShopConnection;
  /**
   * Unpublish many Supporter documents
   * @deprecated Please use the new paginated many mutation (unpublishManySupportersConnection)
   */
  unpublishManySupporters: BatchPayload;
  /** Find many Supporter documents that match criteria in specified stage and unpublish from target stages */
  unpublishManySupportersConnection: SupporterConnection;
  /**
   * Unpublish many Translation documents
   * @deprecated Please use the new paginated many mutation (unpublishManyTranslationsConnection)
   */
  unpublishManyTranslations: BatchPayload;
  /** Find many Translation documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyTranslationsConnection: TranslationConnection;
  /** Unpublish one member from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishMember?: Maybe<Member>;
  /** Unpublish one network from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishNetwork?: Maybe<Network>;
  /** Unpublish one page from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishPage?: Maybe<Page>;
  /** Unpublish one pageSection from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishPageSection?: Maybe<PageSection>;
  /** Unpublish one pressArticle from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishPressArticle?: Maybe<PressArticle>;
  /** Unpublish one pressPhoto from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishPressPhoto?: Maybe<PressPhoto>;
  /** Unpublish one pressReport from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishPressReport?: Maybe<PressReport>;
  /** Unpublish one shop from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishShop?: Maybe<Shop>;
  /** Unpublish one shopBundesland from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishShopBundesland?: Maybe<ShopBundesland>;
  /** Unpublish one shopCategory from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishShopCategory?: Maybe<ShopCategory>;
  /** Unpublish one shopStatus from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishShopStatus?: Maybe<ShopStatus>;
  /** Unpublish one shopTown from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishShopTown?: Maybe<ShopTown>;
  /** Unpublish one shopType from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishShopType?: Maybe<ShopType>;
  /** Unpublish one supporter from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishSupporter?: Maybe<Supporter>;
  /** Unpublish one translation from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishTranslation?: Maybe<Translation>;
  /** Update one asset */
  updateAsset?: Maybe<Asset>;
  /** Update one blog */
  updateBlog?: Maybe<Blog>;
  /** Update one cityPartner */
  updateCityPartner?: Maybe<CityPartner>;
  /** Update one faq */
  updateFaq?: Maybe<Faq>;
  /** Update one kpi */
  updateKpi?: Maybe<Kpi>;
  /**
   * Update many assets
   * @deprecated Please use the new paginated many mutation (updateManyAssetsConnection)
   */
  updateManyAssets: BatchPayload;
  /** Update many Asset documents */
  updateManyAssetsConnection: AssetConnection;
  /**
   * Update many blogs
   * @deprecated Please use the new paginated many mutation (updateManyBlogsConnection)
   */
  updateManyBlogs: BatchPayload;
  /** Update many Blog documents */
  updateManyBlogsConnection: BlogConnection;
  /**
   * Update many cityPartners
   * @deprecated Please use the new paginated many mutation (updateManyCityPartnersConnection)
   */
  updateManyCityPartners: BatchPayload;
  /** Update many CityPartner documents */
  updateManyCityPartnersConnection: CityPartnerConnection;
  /**
   * Update many faqs
   * @deprecated Please use the new paginated many mutation (updateManyFaqsConnection)
   */
  updateManyFaqs: BatchPayload;
  /** Update many Faq documents */
  updateManyFaqsConnection: FaqConnection;
  /**
   * Update many kpis
   * @deprecated Please use the new paginated many mutation (updateManyKpisConnection)
   */
  updateManyKpis: BatchPayload;
  /** Update many Kpi documents */
  updateManyKpisConnection: KpiConnection;
  /**
   * Update many members
   * @deprecated Please use the new paginated many mutation (updateManyMembersConnection)
   */
  updateManyMembers: BatchPayload;
  /** Update many Member documents */
  updateManyMembersConnection: MemberConnection;
  /**
   * Update many networks
   * @deprecated Please use the new paginated many mutation (updateManyNetworksConnection)
   */
  updateManyNetworks: BatchPayload;
  /** Update many Network documents */
  updateManyNetworksConnection: NetworkConnection;
  /**
   * Update many pageSections
   * @deprecated Please use the new paginated many mutation (updateManyPageSectionsConnection)
   */
  updateManyPageSections: BatchPayload;
  /** Update many PageSection documents */
  updateManyPageSectionsConnection: PageSectionConnection;
  /**
   * Update many pages
   * @deprecated Please use the new paginated many mutation (updateManyPagesConnection)
   */
  updateManyPages: BatchPayload;
  /** Update many Page documents */
  updateManyPagesConnection: PageConnection;
  /**
   * Update many pressArticles
   * @deprecated Please use the new paginated many mutation (updateManyPressArticlesConnection)
   */
  updateManyPressArticles: BatchPayload;
  /** Update many PressArticle documents */
  updateManyPressArticlesConnection: PressArticleConnection;
  /**
   * Update many pressPhotos
   * @deprecated Please use the new paginated many mutation (updateManyPressPhotosConnection)
   */
  updateManyPressPhotos: BatchPayload;
  /** Update many PressPhoto documents */
  updateManyPressPhotosConnection: PressPhotoConnection;
  /**
   * Update many pressReports
   * @deprecated Please use the new paginated many mutation (updateManyPressReportsConnection)
   */
  updateManyPressReports: BatchPayload;
  /** Update many PressReport documents */
  updateManyPressReportsConnection: PressReportConnection;
  /**
   * Update many shopBundeslands
   * @deprecated Please use the new paginated many mutation (updateManyShopBundeslandsConnection)
   */
  updateManyShopBundeslands: BatchPayload;
  /** Update many ShopBundesland documents */
  updateManyShopBundeslandsConnection: ShopBundeslandConnection;
  /**
   * Update many shopCategories
   * @deprecated Please use the new paginated many mutation (updateManyShopCategoriesConnection)
   */
  updateManyShopCategories: BatchPayload;
  /** Update many ShopCategory documents */
  updateManyShopCategoriesConnection: ShopCategoryConnection;
  /**
   * Update many shopStatuses
   * @deprecated Please use the new paginated many mutation (updateManyShopStatusesConnection)
   */
  updateManyShopStatuses: BatchPayload;
  /** Update many ShopStatus documents */
  updateManyShopStatusesConnection: ShopStatusConnection;
  /**
   * Update many shopTowns
   * @deprecated Please use the new paginated many mutation (updateManyShopTownsConnection)
   */
  updateManyShopTowns: BatchPayload;
  /** Update many ShopTown documents */
  updateManyShopTownsConnection: ShopTownConnection;
  /**
   * Update many shopTypes
   * @deprecated Please use the new paginated many mutation (updateManyShopTypesConnection)
   */
  updateManyShopTypes: BatchPayload;
  /** Update many ShopType documents */
  updateManyShopTypesConnection: ShopTypeConnection;
  /**
   * Update many shops
   * @deprecated Please use the new paginated many mutation (updateManyShopsConnection)
   */
  updateManyShops: BatchPayload;
  /** Update many Shop documents */
  updateManyShopsConnection: ShopConnection;
  /**
   * Update many supporters
   * @deprecated Please use the new paginated many mutation (updateManySupportersConnection)
   */
  updateManySupporters: BatchPayload;
  /** Update many Supporter documents */
  updateManySupportersConnection: SupporterConnection;
  /**
   * Update many translations
   * @deprecated Please use the new paginated many mutation (updateManyTranslationsConnection)
   */
  updateManyTranslations: BatchPayload;
  /** Update many Translation documents */
  updateManyTranslationsConnection: TranslationConnection;
  /** Update one member */
  updateMember?: Maybe<Member>;
  /** Update one network */
  updateNetwork?: Maybe<Network>;
  /** Update one page */
  updatePage?: Maybe<Page>;
  /** Update one pageSection */
  updatePageSection?: Maybe<PageSection>;
  /** Update one pressArticle */
  updatePressArticle?: Maybe<PressArticle>;
  /** Update one pressPhoto */
  updatePressPhoto?: Maybe<PressPhoto>;
  /** Update one pressReport */
  updatePressReport?: Maybe<PressReport>;
  /** Update one scheduledRelease */
  updateScheduledRelease?: Maybe<ScheduledRelease>;
  /** Update one shop */
  updateShop?: Maybe<Shop>;
  /** Update one shopBundesland */
  updateShopBundesland?: Maybe<ShopBundesland>;
  /** Update one shopCategory */
  updateShopCategory?: Maybe<ShopCategory>;
  /** Update one shopStatus */
  updateShopStatus?: Maybe<ShopStatus>;
  /** Update one shopTown */
  updateShopTown?: Maybe<ShopTown>;
  /** Update one shopType */
  updateShopType?: Maybe<ShopType>;
  /** Update one supporter */
  updateSupporter?: Maybe<Supporter>;
  /** Update one translation */
  updateTranslation?: Maybe<Translation>;
  /** Upsert one asset */
  upsertAsset?: Maybe<Asset>;
  /** Upsert one blog */
  upsertBlog?: Maybe<Blog>;
  /** Upsert one cityPartner */
  upsertCityPartner?: Maybe<CityPartner>;
  /** Upsert one faq */
  upsertFaq?: Maybe<Faq>;
  /** Upsert one kpi */
  upsertKpi?: Maybe<Kpi>;
  /** Upsert one member */
  upsertMember?: Maybe<Member>;
  /** Upsert one network */
  upsertNetwork?: Maybe<Network>;
  /** Upsert one page */
  upsertPage?: Maybe<Page>;
  /** Upsert one pageSection */
  upsertPageSection?: Maybe<PageSection>;
  /** Upsert one pressArticle */
  upsertPressArticle?: Maybe<PressArticle>;
  /** Upsert one pressPhoto */
  upsertPressPhoto?: Maybe<PressPhoto>;
  /** Upsert one pressReport */
  upsertPressReport?: Maybe<PressReport>;
  /** Upsert one shop */
  upsertShop?: Maybe<Shop>;
  /** Upsert one shopBundesland */
  upsertShopBundesland?: Maybe<ShopBundesland>;
  /** Upsert one shopCategory */
  upsertShopCategory?: Maybe<ShopCategory>;
  /** Upsert one shopStatus */
  upsertShopStatus?: Maybe<ShopStatus>;
  /** Upsert one shopTown */
  upsertShopTown?: Maybe<ShopTown>;
  /** Upsert one shopType */
  upsertShopType?: Maybe<ShopType>;
  /** Upsert one supporter */
  upsertSupporter?: Maybe<Supporter>;
  /** Upsert one translation */
  upsertTranslation?: Maybe<Translation>;
};


export type MutationCreateAssetArgs = {
  data: AssetCreateInput;
};


export type MutationCreateBlogArgs = {
  data: BlogCreateInput;
};


export type MutationCreateCityPartnerArgs = {
  data: CityPartnerCreateInput;
};


export type MutationCreateFaqArgs = {
  data: FaqCreateInput;
};


export type MutationCreateKpiArgs = {
  data: KpiCreateInput;
};


export type MutationCreateMemberArgs = {
  data: MemberCreateInput;
};


export type MutationCreateNetworkArgs = {
  data: NetworkCreateInput;
};


export type MutationCreatePageArgs = {
  data: PageCreateInput;
};


export type MutationCreatePageSectionArgs = {
  data: PageSectionCreateInput;
};


export type MutationCreatePressArticleArgs = {
  data: PressArticleCreateInput;
};


export type MutationCreatePressPhotoArgs = {
  data: PressPhotoCreateInput;
};


export type MutationCreatePressReportArgs = {
  data: PressReportCreateInput;
};


export type MutationCreateScheduledReleaseArgs = {
  data: ScheduledReleaseCreateInput;
};


export type MutationCreateShopArgs = {
  data: ShopCreateInput;
};


export type MutationCreateShopBundeslandArgs = {
  data: ShopBundeslandCreateInput;
};


export type MutationCreateShopCategoryArgs = {
  data: ShopCategoryCreateInput;
};


export type MutationCreateShopStatusArgs = {
  data: ShopStatusCreateInput;
};


export type MutationCreateShopTownArgs = {
  data: ShopTownCreateInput;
};


export type MutationCreateShopTypeArgs = {
  data: ShopTypeCreateInput;
};


export type MutationCreateSupporterArgs = {
  data: SupporterCreateInput;
};


export type MutationCreateTranslationArgs = {
  data: TranslationCreateInput;
};


export type MutationDeleteAssetArgs = {
  where: AssetWhereUniqueInput;
};


export type MutationDeleteBlogArgs = {
  where: BlogWhereUniqueInput;
};


export type MutationDeleteCityPartnerArgs = {
  where: CityPartnerWhereUniqueInput;
};


export type MutationDeleteFaqArgs = {
  where: FaqWhereUniqueInput;
};


export type MutationDeleteKpiArgs = {
  where: KpiWhereUniqueInput;
};


export type MutationDeleteManyAssetsArgs = {
  where?: Maybe<AssetManyWhereInput>;
};


export type MutationDeleteManyAssetsConnectionArgs = {
  after?: Maybe<Scalars['ID']>;
  before?: Maybe<Scalars['ID']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  where?: Maybe<AssetManyWhereInput>;
};


export type MutationDeleteManyBlogsArgs = {
  where?: Maybe<BlogManyWhereInput>;
};


export type MutationDeleteManyBlogsConnectionArgs = {
  after?: Maybe<Scalars['ID']>;
  before?: Maybe<Scalars['ID']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  where?: Maybe<BlogManyWhereInput>;
};


export type MutationDeleteManyCityPartnersArgs = {
  where?: Maybe<CityPartnerManyWhereInput>;
};


export type MutationDeleteManyCityPartnersConnectionArgs = {
  after?: Maybe<Scalars['ID']>;
  before?: Maybe<Scalars['ID']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  where?: Maybe<CityPartnerManyWhereInput>;
};


export type MutationDeleteManyFaqsArgs = {
  where?: Maybe<FaqManyWhereInput>;
};


export type MutationDeleteManyFaqsConnectionArgs = {
  after?: Maybe<Scalars['ID']>;
  before?: Maybe<Scalars['ID']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  where?: Maybe<FaqManyWhereInput>;
};


export type MutationDeleteManyKpisArgs = {
  where?: Maybe<KpiManyWhereInput>;
};


export type MutationDeleteManyKpisConnectionArgs = {
  after?: Maybe<Scalars['ID']>;
  before?: Maybe<Scalars['ID']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  where?: Maybe<KpiManyWhereInput>;
};


export type MutationDeleteManyMembersArgs = {
  where?: Maybe<MemberManyWhereInput>;
};


export type MutationDeleteManyMembersConnectionArgs = {
  after?: Maybe<Scalars['ID']>;
  before?: Maybe<Scalars['ID']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  where?: Maybe<MemberManyWhereInput>;
};


export type MutationDeleteManyNetworksArgs = {
  where?: Maybe<NetworkManyWhereInput>;
};


export type MutationDeleteManyNetworksConnectionArgs = {
  after?: Maybe<Scalars['ID']>;
  before?: Maybe<Scalars['ID']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  where?: Maybe<NetworkManyWhereInput>;
};


export type MutationDeleteManyPageSectionsArgs = {
  where?: Maybe<PageSectionManyWhereInput>;
};


export type MutationDeleteManyPageSectionsConnectionArgs = {
  after?: Maybe<Scalars['ID']>;
  before?: Maybe<Scalars['ID']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  where?: Maybe<PageSectionManyWhereInput>;
};


export type MutationDeleteManyPagesArgs = {
  where?: Maybe<PageManyWhereInput>;
};


export type MutationDeleteManyPagesConnectionArgs = {
  after?: Maybe<Scalars['ID']>;
  before?: Maybe<Scalars['ID']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  where?: Maybe<PageManyWhereInput>;
};


export type MutationDeleteManyPressArticlesArgs = {
  where?: Maybe<PressArticleManyWhereInput>;
};


export type MutationDeleteManyPressArticlesConnectionArgs = {
  after?: Maybe<Scalars['ID']>;
  before?: Maybe<Scalars['ID']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  where?: Maybe<PressArticleManyWhereInput>;
};


export type MutationDeleteManyPressPhotosArgs = {
  where?: Maybe<PressPhotoManyWhereInput>;
};


export type MutationDeleteManyPressPhotosConnectionArgs = {
  after?: Maybe<Scalars['ID']>;
  before?: Maybe<Scalars['ID']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  where?: Maybe<PressPhotoManyWhereInput>;
};


export type MutationDeleteManyPressReportsArgs = {
  where?: Maybe<PressReportManyWhereInput>;
};


export type MutationDeleteManyPressReportsConnectionArgs = {
  after?: Maybe<Scalars['ID']>;
  before?: Maybe<Scalars['ID']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  where?: Maybe<PressReportManyWhereInput>;
};


export type MutationDeleteManyShopBundeslandsArgs = {
  where?: Maybe<ShopBundeslandManyWhereInput>;
};


export type MutationDeleteManyShopBundeslandsConnectionArgs = {
  after?: Maybe<Scalars['ID']>;
  before?: Maybe<Scalars['ID']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  where?: Maybe<ShopBundeslandManyWhereInput>;
};


export type MutationDeleteManyShopCategoriesArgs = {
  where?: Maybe<ShopCategoryManyWhereInput>;
};


export type MutationDeleteManyShopCategoriesConnectionArgs = {
  after?: Maybe<Scalars['ID']>;
  before?: Maybe<Scalars['ID']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  where?: Maybe<ShopCategoryManyWhereInput>;
};


export type MutationDeleteManyShopStatusesArgs = {
  where?: Maybe<ShopStatusManyWhereInput>;
};


export type MutationDeleteManyShopStatusesConnectionArgs = {
  after?: Maybe<Scalars['ID']>;
  before?: Maybe<Scalars['ID']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  where?: Maybe<ShopStatusManyWhereInput>;
};


export type MutationDeleteManyShopTownsArgs = {
  where?: Maybe<ShopTownManyWhereInput>;
};


export type MutationDeleteManyShopTownsConnectionArgs = {
  after?: Maybe<Scalars['ID']>;
  before?: Maybe<Scalars['ID']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  where?: Maybe<ShopTownManyWhereInput>;
};


export type MutationDeleteManyShopTypesArgs = {
  where?: Maybe<ShopTypeManyWhereInput>;
};


export type MutationDeleteManyShopTypesConnectionArgs = {
  after?: Maybe<Scalars['ID']>;
  before?: Maybe<Scalars['ID']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  where?: Maybe<ShopTypeManyWhereInput>;
};


export type MutationDeleteManyShopsArgs = {
  where?: Maybe<ShopManyWhereInput>;
};


export type MutationDeleteManyShopsConnectionArgs = {
  after?: Maybe<Scalars['ID']>;
  before?: Maybe<Scalars['ID']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  where?: Maybe<ShopManyWhereInput>;
};


export type MutationDeleteManySupportersArgs = {
  where?: Maybe<SupporterManyWhereInput>;
};


export type MutationDeleteManySupportersConnectionArgs = {
  after?: Maybe<Scalars['ID']>;
  before?: Maybe<Scalars['ID']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  where?: Maybe<SupporterManyWhereInput>;
};


export type MutationDeleteManyTranslationsArgs = {
  where?: Maybe<TranslationManyWhereInput>;
};


export type MutationDeleteManyTranslationsConnectionArgs = {
  after?: Maybe<Scalars['ID']>;
  before?: Maybe<Scalars['ID']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  where?: Maybe<TranslationManyWhereInput>;
};


export type MutationDeleteMemberArgs = {
  where: MemberWhereUniqueInput;
};


export type MutationDeleteNetworkArgs = {
  where: NetworkWhereUniqueInput;
};


export type MutationDeletePageArgs = {
  where: PageWhereUniqueInput;
};


export type MutationDeletePageSectionArgs = {
  where: PageSectionWhereUniqueInput;
};


export type MutationDeletePressArticleArgs = {
  where: PressArticleWhereUniqueInput;
};


export type MutationDeletePressPhotoArgs = {
  where: PressPhotoWhereUniqueInput;
};


export type MutationDeletePressReportArgs = {
  where: PressReportWhereUniqueInput;
};


export type MutationDeleteScheduledOperationArgs = {
  where: ScheduledOperationWhereUniqueInput;
};


export type MutationDeleteScheduledReleaseArgs = {
  where: ScheduledReleaseWhereUniqueInput;
};


export type MutationDeleteShopArgs = {
  where: ShopWhereUniqueInput;
};


export type MutationDeleteShopBundeslandArgs = {
  where: ShopBundeslandWhereUniqueInput;
};


export type MutationDeleteShopCategoryArgs = {
  where: ShopCategoryWhereUniqueInput;
};


export type MutationDeleteShopStatusArgs = {
  where: ShopStatusWhereUniqueInput;
};


export type MutationDeleteShopTownArgs = {
  where: ShopTownWhereUniqueInput;
};


export type MutationDeleteShopTypeArgs = {
  where: ShopTypeWhereUniqueInput;
};


export type MutationDeleteSupporterArgs = {
  where: SupporterWhereUniqueInput;
};


export type MutationDeleteTranslationArgs = {
  where: TranslationWhereUniqueInput;
};


export type MutationPublishAssetArgs = {
  locales?: Maybe<Array<Locale>>;
  publishBase?: Maybe<Scalars['Boolean']>;
  to?: Array<Stage>;
  where: AssetWhereUniqueInput;
  withDefaultLocale?: Maybe<Scalars['Boolean']>;
};


export type MutationPublishBlogArgs = {
  locales?: Maybe<Array<Locale>>;
  publishBase?: Maybe<Scalars['Boolean']>;
  to?: Array<Stage>;
  where: BlogWhereUniqueInput;
  withDefaultLocale?: Maybe<Scalars['Boolean']>;
};


export type MutationPublishCityPartnerArgs = {
  locales?: Maybe<Array<Locale>>;
  publishBase?: Maybe<Scalars['Boolean']>;
  to?: Array<Stage>;
  where: CityPartnerWhereUniqueInput;
  withDefaultLocale?: Maybe<Scalars['Boolean']>;
};


export type MutationPublishFaqArgs = {
  locales?: Maybe<Array<Locale>>;
  publishBase?: Maybe<Scalars['Boolean']>;
  to?: Array<Stage>;
  where: FaqWhereUniqueInput;
  withDefaultLocale?: Maybe<Scalars['Boolean']>;
};


export type MutationPublishKpiArgs = {
  locales?: Maybe<Array<Locale>>;
  publishBase?: Maybe<Scalars['Boolean']>;
  to?: Array<Stage>;
  where: KpiWhereUniqueInput;
  withDefaultLocale?: Maybe<Scalars['Boolean']>;
};


export type MutationPublishManyAssetsArgs = {
  locales?: Maybe<Array<Locale>>;
  publishBase?: Maybe<Scalars['Boolean']>;
  to?: Array<Stage>;
  where?: Maybe<AssetManyWhereInput>;
  withDefaultLocale?: Maybe<Scalars['Boolean']>;
};


export type MutationPublishManyAssetsConnectionArgs = {
  after?: Maybe<Scalars['ID']>;
  before?: Maybe<Scalars['ID']>;
  first?: Maybe<Scalars['Int']>;
  from?: Maybe<Stage>;
  last?: Maybe<Scalars['Int']>;
  locales?: Maybe<Array<Locale>>;
  publishBase?: Maybe<Scalars['Boolean']>;
  skip?: Maybe<Scalars['Int']>;
  to?: Array<Stage>;
  where?: Maybe<AssetManyWhereInput>;
  withDefaultLocale?: Maybe<Scalars['Boolean']>;
};


export type MutationPublishManyBlogsArgs = {
  locales?: Maybe<Array<Locale>>;
  publishBase?: Maybe<Scalars['Boolean']>;
  to?: Array<Stage>;
  where?: Maybe<BlogManyWhereInput>;
  withDefaultLocale?: Maybe<Scalars['Boolean']>;
};


export type MutationPublishManyBlogsConnectionArgs = {
  after?: Maybe<Scalars['ID']>;
  before?: Maybe<Scalars['ID']>;
  first?: Maybe<Scalars['Int']>;
  from?: Maybe<Stage>;
  last?: Maybe<Scalars['Int']>;
  locales?: Maybe<Array<Locale>>;
  publishBase?: Maybe<Scalars['Boolean']>;
  skip?: Maybe<Scalars['Int']>;
  to?: Array<Stage>;
  where?: Maybe<BlogManyWhereInput>;
  withDefaultLocale?: Maybe<Scalars['Boolean']>;
};


export type MutationPublishManyCityPartnersArgs = {
  locales?: Maybe<Array<Locale>>;
  publishBase?: Maybe<Scalars['Boolean']>;
  to?: Array<Stage>;
  where?: Maybe<CityPartnerManyWhereInput>;
  withDefaultLocale?: Maybe<Scalars['Boolean']>;
};


export type MutationPublishManyCityPartnersConnectionArgs = {
  after?: Maybe<Scalars['ID']>;
  before?: Maybe<Scalars['ID']>;
  first?: Maybe<Scalars['Int']>;
  from?: Maybe<Stage>;
  last?: Maybe<Scalars['Int']>;
  locales?: Maybe<Array<Locale>>;
  publishBase?: Maybe<Scalars['Boolean']>;
  skip?: Maybe<Scalars['Int']>;
  to?: Array<Stage>;
  where?: Maybe<CityPartnerManyWhereInput>;
  withDefaultLocale?: Maybe<Scalars['Boolean']>;
};


export type MutationPublishManyFaqsArgs = {
  locales?: Maybe<Array<Locale>>;
  publishBase?: Maybe<Scalars['Boolean']>;
  to?: Array<Stage>;
  where?: Maybe<FaqManyWhereInput>;
  withDefaultLocale?: Maybe<Scalars['Boolean']>;
};


export type MutationPublishManyFaqsConnectionArgs = {
  after?: Maybe<Scalars['ID']>;
  before?: Maybe<Scalars['ID']>;
  first?: Maybe<Scalars['Int']>;
  from?: Maybe<Stage>;
  last?: Maybe<Scalars['Int']>;
  locales?: Maybe<Array<Locale>>;
  publishBase?: Maybe<Scalars['Boolean']>;
  skip?: Maybe<Scalars['Int']>;
  to?: Array<Stage>;
  where?: Maybe<FaqManyWhereInput>;
  withDefaultLocale?: Maybe<Scalars['Boolean']>;
};


export type MutationPublishManyKpisArgs = {
  locales?: Maybe<Array<Locale>>;
  publishBase?: Maybe<Scalars['Boolean']>;
  to?: Array<Stage>;
  where?: Maybe<KpiManyWhereInput>;
  withDefaultLocale?: Maybe<Scalars['Boolean']>;
};


export type MutationPublishManyKpisConnectionArgs = {
  after?: Maybe<Scalars['ID']>;
  before?: Maybe<Scalars['ID']>;
  first?: Maybe<Scalars['Int']>;
  from?: Maybe<Stage>;
  last?: Maybe<Scalars['Int']>;
  locales?: Maybe<Array<Locale>>;
  publishBase?: Maybe<Scalars['Boolean']>;
  skip?: Maybe<Scalars['Int']>;
  to?: Array<Stage>;
  where?: Maybe<KpiManyWhereInput>;
  withDefaultLocale?: Maybe<Scalars['Boolean']>;
};


export type MutationPublishManyMembersArgs = {
  locales?: Maybe<Array<Locale>>;
  publishBase?: Maybe<Scalars['Boolean']>;
  to?: Array<Stage>;
  where?: Maybe<MemberManyWhereInput>;
  withDefaultLocale?: Maybe<Scalars['Boolean']>;
};


export type MutationPublishManyMembersConnectionArgs = {
  after?: Maybe<Scalars['ID']>;
  before?: Maybe<Scalars['ID']>;
  first?: Maybe<Scalars['Int']>;
  from?: Maybe<Stage>;
  last?: Maybe<Scalars['Int']>;
  locales?: Maybe<Array<Locale>>;
  publishBase?: Maybe<Scalars['Boolean']>;
  skip?: Maybe<Scalars['Int']>;
  to?: Array<Stage>;
  where?: Maybe<MemberManyWhereInput>;
  withDefaultLocale?: Maybe<Scalars['Boolean']>;
};


export type MutationPublishManyNetworksArgs = {
  locales?: Maybe<Array<Locale>>;
  publishBase?: Maybe<Scalars['Boolean']>;
  to?: Array<Stage>;
  where?: Maybe<NetworkManyWhereInput>;
  withDefaultLocale?: Maybe<Scalars['Boolean']>;
};


export type MutationPublishManyNetworksConnectionArgs = {
  after?: Maybe<Scalars['ID']>;
  before?: Maybe<Scalars['ID']>;
  first?: Maybe<Scalars['Int']>;
  from?: Maybe<Stage>;
  last?: Maybe<Scalars['Int']>;
  locales?: Maybe<Array<Locale>>;
  publishBase?: Maybe<Scalars['Boolean']>;
  skip?: Maybe<Scalars['Int']>;
  to?: Array<Stage>;
  where?: Maybe<NetworkManyWhereInput>;
  withDefaultLocale?: Maybe<Scalars['Boolean']>;
};


export type MutationPublishManyPageSectionsArgs = {
  locales?: Maybe<Array<Locale>>;
  publishBase?: Maybe<Scalars['Boolean']>;
  to?: Array<Stage>;
  where?: Maybe<PageSectionManyWhereInput>;
  withDefaultLocale?: Maybe<Scalars['Boolean']>;
};


export type MutationPublishManyPageSectionsConnectionArgs = {
  after?: Maybe<Scalars['ID']>;
  before?: Maybe<Scalars['ID']>;
  first?: Maybe<Scalars['Int']>;
  from?: Maybe<Stage>;
  last?: Maybe<Scalars['Int']>;
  locales?: Maybe<Array<Locale>>;
  publishBase?: Maybe<Scalars['Boolean']>;
  skip?: Maybe<Scalars['Int']>;
  to?: Array<Stage>;
  where?: Maybe<PageSectionManyWhereInput>;
  withDefaultLocale?: Maybe<Scalars['Boolean']>;
};


export type MutationPublishManyPagesArgs = {
  locales?: Maybe<Array<Locale>>;
  publishBase?: Maybe<Scalars['Boolean']>;
  to?: Array<Stage>;
  where?: Maybe<PageManyWhereInput>;
  withDefaultLocale?: Maybe<Scalars['Boolean']>;
};


export type MutationPublishManyPagesConnectionArgs = {
  after?: Maybe<Scalars['ID']>;
  before?: Maybe<Scalars['ID']>;
  first?: Maybe<Scalars['Int']>;
  from?: Maybe<Stage>;
  last?: Maybe<Scalars['Int']>;
  locales?: Maybe<Array<Locale>>;
  publishBase?: Maybe<Scalars['Boolean']>;
  skip?: Maybe<Scalars['Int']>;
  to?: Array<Stage>;
  where?: Maybe<PageManyWhereInput>;
  withDefaultLocale?: Maybe<Scalars['Boolean']>;
};


export type MutationPublishManyPressArticlesArgs = {
  locales?: Maybe<Array<Locale>>;
  publishBase?: Maybe<Scalars['Boolean']>;
  to?: Array<Stage>;
  where?: Maybe<PressArticleManyWhereInput>;
  withDefaultLocale?: Maybe<Scalars['Boolean']>;
};


export type MutationPublishManyPressArticlesConnectionArgs = {
  after?: Maybe<Scalars['ID']>;
  before?: Maybe<Scalars['ID']>;
  first?: Maybe<Scalars['Int']>;
  from?: Maybe<Stage>;
  last?: Maybe<Scalars['Int']>;
  locales?: Maybe<Array<Locale>>;
  publishBase?: Maybe<Scalars['Boolean']>;
  skip?: Maybe<Scalars['Int']>;
  to?: Array<Stage>;
  where?: Maybe<PressArticleManyWhereInput>;
  withDefaultLocale?: Maybe<Scalars['Boolean']>;
};


export type MutationPublishManyPressPhotosArgs = {
  to?: Array<Stage>;
  where?: Maybe<PressPhotoManyWhereInput>;
};


export type MutationPublishManyPressPhotosConnectionArgs = {
  after?: Maybe<Scalars['ID']>;
  before?: Maybe<Scalars['ID']>;
  first?: Maybe<Scalars['Int']>;
  from?: Maybe<Stage>;
  last?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  to?: Array<Stage>;
  where?: Maybe<PressPhotoManyWhereInput>;
};


export type MutationPublishManyPressReportsArgs = {
  locales?: Maybe<Array<Locale>>;
  publishBase?: Maybe<Scalars['Boolean']>;
  to?: Array<Stage>;
  where?: Maybe<PressReportManyWhereInput>;
  withDefaultLocale?: Maybe<Scalars['Boolean']>;
};


export type MutationPublishManyPressReportsConnectionArgs = {
  after?: Maybe<Scalars['ID']>;
  before?: Maybe<Scalars['ID']>;
  first?: Maybe<Scalars['Int']>;
  from?: Maybe<Stage>;
  last?: Maybe<Scalars['Int']>;
  locales?: Maybe<Array<Locale>>;
  publishBase?: Maybe<Scalars['Boolean']>;
  skip?: Maybe<Scalars['Int']>;
  to?: Array<Stage>;
  where?: Maybe<PressReportManyWhereInput>;
  withDefaultLocale?: Maybe<Scalars['Boolean']>;
};


export type MutationPublishManyShopBundeslandsArgs = {
  to?: Array<Stage>;
  where?: Maybe<ShopBundeslandManyWhereInput>;
};


export type MutationPublishManyShopBundeslandsConnectionArgs = {
  after?: Maybe<Scalars['ID']>;
  before?: Maybe<Scalars['ID']>;
  first?: Maybe<Scalars['Int']>;
  from?: Maybe<Stage>;
  last?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  to?: Array<Stage>;
  where?: Maybe<ShopBundeslandManyWhereInput>;
};


export type MutationPublishManyShopCategoriesArgs = {
  to?: Array<Stage>;
  where?: Maybe<ShopCategoryManyWhereInput>;
};


export type MutationPublishManyShopCategoriesConnectionArgs = {
  after?: Maybe<Scalars['ID']>;
  before?: Maybe<Scalars['ID']>;
  first?: Maybe<Scalars['Int']>;
  from?: Maybe<Stage>;
  last?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  to?: Array<Stage>;
  where?: Maybe<ShopCategoryManyWhereInput>;
};


export type MutationPublishManyShopStatusesArgs = {
  to?: Array<Stage>;
  where?: Maybe<ShopStatusManyWhereInput>;
};


export type MutationPublishManyShopStatusesConnectionArgs = {
  after?: Maybe<Scalars['ID']>;
  before?: Maybe<Scalars['ID']>;
  first?: Maybe<Scalars['Int']>;
  from?: Maybe<Stage>;
  last?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  to?: Array<Stage>;
  where?: Maybe<ShopStatusManyWhereInput>;
};


export type MutationPublishManyShopTownsArgs = {
  to?: Array<Stage>;
  where?: Maybe<ShopTownManyWhereInput>;
};


export type MutationPublishManyShopTownsConnectionArgs = {
  after?: Maybe<Scalars['ID']>;
  before?: Maybe<Scalars['ID']>;
  first?: Maybe<Scalars['Int']>;
  from?: Maybe<Stage>;
  last?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  to?: Array<Stage>;
  where?: Maybe<ShopTownManyWhereInput>;
};


export type MutationPublishManyShopTypesArgs = {
  to?: Array<Stage>;
  where?: Maybe<ShopTypeManyWhereInput>;
};


export type MutationPublishManyShopTypesConnectionArgs = {
  after?: Maybe<Scalars['ID']>;
  before?: Maybe<Scalars['ID']>;
  first?: Maybe<Scalars['Int']>;
  from?: Maybe<Stage>;
  last?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  to?: Array<Stage>;
  where?: Maybe<ShopTypeManyWhereInput>;
};


export type MutationPublishManyShopsArgs = {
  to?: Array<Stage>;
  where?: Maybe<ShopManyWhereInput>;
};


export type MutationPublishManyShopsConnectionArgs = {
  after?: Maybe<Scalars['ID']>;
  before?: Maybe<Scalars['ID']>;
  first?: Maybe<Scalars['Int']>;
  from?: Maybe<Stage>;
  last?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  to?: Array<Stage>;
  where?: Maybe<ShopManyWhereInput>;
};


export type MutationPublishManySupportersArgs = {
  locales?: Maybe<Array<Locale>>;
  publishBase?: Maybe<Scalars['Boolean']>;
  to?: Array<Stage>;
  where?: Maybe<SupporterManyWhereInput>;
  withDefaultLocale?: Maybe<Scalars['Boolean']>;
};


export type MutationPublishManySupportersConnectionArgs = {
  after?: Maybe<Scalars['ID']>;
  before?: Maybe<Scalars['ID']>;
  first?: Maybe<Scalars['Int']>;
  from?: Maybe<Stage>;
  last?: Maybe<Scalars['Int']>;
  locales?: Maybe<Array<Locale>>;
  publishBase?: Maybe<Scalars['Boolean']>;
  skip?: Maybe<Scalars['Int']>;
  to?: Array<Stage>;
  where?: Maybe<SupporterManyWhereInput>;
  withDefaultLocale?: Maybe<Scalars['Boolean']>;
};


export type MutationPublishManyTranslationsArgs = {
  locales?: Maybe<Array<Locale>>;
  publishBase?: Maybe<Scalars['Boolean']>;
  to?: Array<Stage>;
  where?: Maybe<TranslationManyWhereInput>;
  withDefaultLocale?: Maybe<Scalars['Boolean']>;
};


export type MutationPublishManyTranslationsConnectionArgs = {
  after?: Maybe<Scalars['ID']>;
  before?: Maybe<Scalars['ID']>;
  first?: Maybe<Scalars['Int']>;
  from?: Maybe<Stage>;
  last?: Maybe<Scalars['Int']>;
  locales?: Maybe<Array<Locale>>;
  publishBase?: Maybe<Scalars['Boolean']>;
  skip?: Maybe<Scalars['Int']>;
  to?: Array<Stage>;
  where?: Maybe<TranslationManyWhereInput>;
  withDefaultLocale?: Maybe<Scalars['Boolean']>;
};


export type MutationPublishMemberArgs = {
  locales?: Maybe<Array<Locale>>;
  publishBase?: Maybe<Scalars['Boolean']>;
  to?: Array<Stage>;
  where: MemberWhereUniqueInput;
  withDefaultLocale?: Maybe<Scalars['Boolean']>;
};


export type MutationPublishNetworkArgs = {
  locales?: Maybe<Array<Locale>>;
  publishBase?: Maybe<Scalars['Boolean']>;
  to?: Array<Stage>;
  where: NetworkWhereUniqueInput;
  withDefaultLocale?: Maybe<Scalars['Boolean']>;
};


export type MutationPublishPageArgs = {
  locales?: Maybe<Array<Locale>>;
  publishBase?: Maybe<Scalars['Boolean']>;
  to?: Array<Stage>;
  where: PageWhereUniqueInput;
  withDefaultLocale?: Maybe<Scalars['Boolean']>;
};


export type MutationPublishPageSectionArgs = {
  locales?: Maybe<Array<Locale>>;
  publishBase?: Maybe<Scalars['Boolean']>;
  to?: Array<Stage>;
  where: PageSectionWhereUniqueInput;
  withDefaultLocale?: Maybe<Scalars['Boolean']>;
};


export type MutationPublishPressArticleArgs = {
  locales?: Maybe<Array<Locale>>;
  publishBase?: Maybe<Scalars['Boolean']>;
  to?: Array<Stage>;
  where: PressArticleWhereUniqueInput;
  withDefaultLocale?: Maybe<Scalars['Boolean']>;
};


export type MutationPublishPressPhotoArgs = {
  to?: Array<Stage>;
  where: PressPhotoWhereUniqueInput;
};


export type MutationPublishPressReportArgs = {
  locales?: Maybe<Array<Locale>>;
  publishBase?: Maybe<Scalars['Boolean']>;
  to?: Array<Stage>;
  where: PressReportWhereUniqueInput;
  withDefaultLocale?: Maybe<Scalars['Boolean']>;
};


export type MutationPublishShopArgs = {
  to?: Array<Stage>;
  where: ShopWhereUniqueInput;
};


export type MutationPublishShopBundeslandArgs = {
  to?: Array<Stage>;
  where: ShopBundeslandWhereUniqueInput;
};


export type MutationPublishShopCategoryArgs = {
  to?: Array<Stage>;
  where: ShopCategoryWhereUniqueInput;
};


export type MutationPublishShopStatusArgs = {
  to?: Array<Stage>;
  where: ShopStatusWhereUniqueInput;
};


export type MutationPublishShopTownArgs = {
  to?: Array<Stage>;
  where: ShopTownWhereUniqueInput;
};


export type MutationPublishShopTypeArgs = {
  to?: Array<Stage>;
  where: ShopTypeWhereUniqueInput;
};


export type MutationPublishSupporterArgs = {
  locales?: Maybe<Array<Locale>>;
  publishBase?: Maybe<Scalars['Boolean']>;
  to?: Array<Stage>;
  where: SupporterWhereUniqueInput;
  withDefaultLocale?: Maybe<Scalars['Boolean']>;
};


export type MutationPublishTranslationArgs = {
  locales?: Maybe<Array<Locale>>;
  publishBase?: Maybe<Scalars['Boolean']>;
  to?: Array<Stage>;
  where: TranslationWhereUniqueInput;
  withDefaultLocale?: Maybe<Scalars['Boolean']>;
};


export type MutationSchedulePublishAssetArgs = {
  locales?: Maybe<Array<Locale>>;
  publishBase?: Maybe<Scalars['Boolean']>;
  releaseAt?: Maybe<Scalars['DateTime']>;
  releaseId?: Maybe<Scalars['String']>;
  to?: Array<Stage>;
  where: AssetWhereUniqueInput;
  withDefaultLocale?: Maybe<Scalars['Boolean']>;
};


export type MutationSchedulePublishBlogArgs = {
  locales?: Maybe<Array<Locale>>;
  publishBase?: Maybe<Scalars['Boolean']>;
  releaseAt?: Maybe<Scalars['DateTime']>;
  releaseId?: Maybe<Scalars['String']>;
  to?: Array<Stage>;
  where: BlogWhereUniqueInput;
  withDefaultLocale?: Maybe<Scalars['Boolean']>;
};


export type MutationSchedulePublishCityPartnerArgs = {
  locales?: Maybe<Array<Locale>>;
  publishBase?: Maybe<Scalars['Boolean']>;
  releaseAt?: Maybe<Scalars['DateTime']>;
  releaseId?: Maybe<Scalars['String']>;
  to?: Array<Stage>;
  where: CityPartnerWhereUniqueInput;
  withDefaultLocale?: Maybe<Scalars['Boolean']>;
};


export type MutationSchedulePublishFaqArgs = {
  locales?: Maybe<Array<Locale>>;
  publishBase?: Maybe<Scalars['Boolean']>;
  releaseAt?: Maybe<Scalars['DateTime']>;
  releaseId?: Maybe<Scalars['String']>;
  to?: Array<Stage>;
  where: FaqWhereUniqueInput;
  withDefaultLocale?: Maybe<Scalars['Boolean']>;
};


export type MutationSchedulePublishKpiArgs = {
  locales?: Maybe<Array<Locale>>;
  publishBase?: Maybe<Scalars['Boolean']>;
  releaseAt?: Maybe<Scalars['DateTime']>;
  releaseId?: Maybe<Scalars['String']>;
  to?: Array<Stage>;
  where: KpiWhereUniqueInput;
  withDefaultLocale?: Maybe<Scalars['Boolean']>;
};


export type MutationSchedulePublishMemberArgs = {
  locales?: Maybe<Array<Locale>>;
  publishBase?: Maybe<Scalars['Boolean']>;
  releaseAt?: Maybe<Scalars['DateTime']>;
  releaseId?: Maybe<Scalars['String']>;
  to?: Array<Stage>;
  where: MemberWhereUniqueInput;
  withDefaultLocale?: Maybe<Scalars['Boolean']>;
};


export type MutationSchedulePublishNetworkArgs = {
  locales?: Maybe<Array<Locale>>;
  publishBase?: Maybe<Scalars['Boolean']>;
  releaseAt?: Maybe<Scalars['DateTime']>;
  releaseId?: Maybe<Scalars['String']>;
  to?: Array<Stage>;
  where: NetworkWhereUniqueInput;
  withDefaultLocale?: Maybe<Scalars['Boolean']>;
};


export type MutationSchedulePublishPageArgs = {
  locales?: Maybe<Array<Locale>>;
  publishBase?: Maybe<Scalars['Boolean']>;
  releaseAt?: Maybe<Scalars['DateTime']>;
  releaseId?: Maybe<Scalars['String']>;
  to?: Array<Stage>;
  where: PageWhereUniqueInput;
  withDefaultLocale?: Maybe<Scalars['Boolean']>;
};


export type MutationSchedulePublishPageSectionArgs = {
  locales?: Maybe<Array<Locale>>;
  publishBase?: Maybe<Scalars['Boolean']>;
  releaseAt?: Maybe<Scalars['DateTime']>;
  releaseId?: Maybe<Scalars['String']>;
  to?: Array<Stage>;
  where: PageSectionWhereUniqueInput;
  withDefaultLocale?: Maybe<Scalars['Boolean']>;
};


export type MutationSchedulePublishPressArticleArgs = {
  locales?: Maybe<Array<Locale>>;
  publishBase?: Maybe<Scalars['Boolean']>;
  releaseAt?: Maybe<Scalars['DateTime']>;
  releaseId?: Maybe<Scalars['String']>;
  to?: Array<Stage>;
  where: PressArticleWhereUniqueInput;
  withDefaultLocale?: Maybe<Scalars['Boolean']>;
};


export type MutationSchedulePublishPressPhotoArgs = {
  releaseAt?: Maybe<Scalars['DateTime']>;
  releaseId?: Maybe<Scalars['String']>;
  to?: Array<Stage>;
  where: PressPhotoWhereUniqueInput;
};


export type MutationSchedulePublishPressReportArgs = {
  locales?: Maybe<Array<Locale>>;
  publishBase?: Maybe<Scalars['Boolean']>;
  releaseAt?: Maybe<Scalars['DateTime']>;
  releaseId?: Maybe<Scalars['String']>;
  to?: Array<Stage>;
  where: PressReportWhereUniqueInput;
  withDefaultLocale?: Maybe<Scalars['Boolean']>;
};


export type MutationSchedulePublishShopArgs = {
  releaseAt?: Maybe<Scalars['DateTime']>;
  releaseId?: Maybe<Scalars['String']>;
  to?: Array<Stage>;
  where: ShopWhereUniqueInput;
};


export type MutationSchedulePublishShopBundeslandArgs = {
  releaseAt?: Maybe<Scalars['DateTime']>;
  releaseId?: Maybe<Scalars['String']>;
  to?: Array<Stage>;
  where: ShopBundeslandWhereUniqueInput;
};


export type MutationSchedulePublishShopCategoryArgs = {
  releaseAt?: Maybe<Scalars['DateTime']>;
  releaseId?: Maybe<Scalars['String']>;
  to?: Array<Stage>;
  where: ShopCategoryWhereUniqueInput;
};


export type MutationSchedulePublishShopStatusArgs = {
  releaseAt?: Maybe<Scalars['DateTime']>;
  releaseId?: Maybe<Scalars['String']>;
  to?: Array<Stage>;
  where: ShopStatusWhereUniqueInput;
};


export type MutationSchedulePublishShopTownArgs = {
  releaseAt?: Maybe<Scalars['DateTime']>;
  releaseId?: Maybe<Scalars['String']>;
  to?: Array<Stage>;
  where: ShopTownWhereUniqueInput;
};


export type MutationSchedulePublishShopTypeArgs = {
  releaseAt?: Maybe<Scalars['DateTime']>;
  releaseId?: Maybe<Scalars['String']>;
  to?: Array<Stage>;
  where: ShopTypeWhereUniqueInput;
};


export type MutationSchedulePublishSupporterArgs = {
  locales?: Maybe<Array<Locale>>;
  publishBase?: Maybe<Scalars['Boolean']>;
  releaseAt?: Maybe<Scalars['DateTime']>;
  releaseId?: Maybe<Scalars['String']>;
  to?: Array<Stage>;
  where: SupporterWhereUniqueInput;
  withDefaultLocale?: Maybe<Scalars['Boolean']>;
};


export type MutationSchedulePublishTranslationArgs = {
  locales?: Maybe<Array<Locale>>;
  publishBase?: Maybe<Scalars['Boolean']>;
  releaseAt?: Maybe<Scalars['DateTime']>;
  releaseId?: Maybe<Scalars['String']>;
  to?: Array<Stage>;
  where: TranslationWhereUniqueInput;
  withDefaultLocale?: Maybe<Scalars['Boolean']>;
};


export type MutationScheduleUnpublishAssetArgs = {
  from?: Array<Stage>;
  locales?: Maybe<Array<Locale>>;
  releaseAt?: Maybe<Scalars['DateTime']>;
  releaseId?: Maybe<Scalars['String']>;
  unpublishBase?: Maybe<Scalars['Boolean']>;
  where: AssetWhereUniqueInput;
};


export type MutationScheduleUnpublishBlogArgs = {
  from?: Array<Stage>;
  locales?: Maybe<Array<Locale>>;
  releaseAt?: Maybe<Scalars['DateTime']>;
  releaseId?: Maybe<Scalars['String']>;
  unpublishBase?: Maybe<Scalars['Boolean']>;
  where: BlogWhereUniqueInput;
};


export type MutationScheduleUnpublishCityPartnerArgs = {
  from?: Array<Stage>;
  locales?: Maybe<Array<Locale>>;
  releaseAt?: Maybe<Scalars['DateTime']>;
  releaseId?: Maybe<Scalars['String']>;
  unpublishBase?: Maybe<Scalars['Boolean']>;
  where: CityPartnerWhereUniqueInput;
};


export type MutationScheduleUnpublishFaqArgs = {
  from?: Array<Stage>;
  locales?: Maybe<Array<Locale>>;
  releaseAt?: Maybe<Scalars['DateTime']>;
  releaseId?: Maybe<Scalars['String']>;
  unpublishBase?: Maybe<Scalars['Boolean']>;
  where: FaqWhereUniqueInput;
};


export type MutationScheduleUnpublishKpiArgs = {
  from?: Array<Stage>;
  locales?: Maybe<Array<Locale>>;
  releaseAt?: Maybe<Scalars['DateTime']>;
  releaseId?: Maybe<Scalars['String']>;
  unpublishBase?: Maybe<Scalars['Boolean']>;
  where: KpiWhereUniqueInput;
};


export type MutationScheduleUnpublishMemberArgs = {
  from?: Array<Stage>;
  locales?: Maybe<Array<Locale>>;
  releaseAt?: Maybe<Scalars['DateTime']>;
  releaseId?: Maybe<Scalars['String']>;
  unpublishBase?: Maybe<Scalars['Boolean']>;
  where: MemberWhereUniqueInput;
};


export type MutationScheduleUnpublishNetworkArgs = {
  from?: Array<Stage>;
  locales?: Maybe<Array<Locale>>;
  releaseAt?: Maybe<Scalars['DateTime']>;
  releaseId?: Maybe<Scalars['String']>;
  unpublishBase?: Maybe<Scalars['Boolean']>;
  where: NetworkWhereUniqueInput;
};


export type MutationScheduleUnpublishPageArgs = {
  from?: Array<Stage>;
  locales?: Maybe<Array<Locale>>;
  releaseAt?: Maybe<Scalars['DateTime']>;
  releaseId?: Maybe<Scalars['String']>;
  unpublishBase?: Maybe<Scalars['Boolean']>;
  where: PageWhereUniqueInput;
};


export type MutationScheduleUnpublishPageSectionArgs = {
  from?: Array<Stage>;
  locales?: Maybe<Array<Locale>>;
  releaseAt?: Maybe<Scalars['DateTime']>;
  releaseId?: Maybe<Scalars['String']>;
  unpublishBase?: Maybe<Scalars['Boolean']>;
  where: PageSectionWhereUniqueInput;
};


export type MutationScheduleUnpublishPressArticleArgs = {
  from?: Array<Stage>;
  locales?: Maybe<Array<Locale>>;
  releaseAt?: Maybe<Scalars['DateTime']>;
  releaseId?: Maybe<Scalars['String']>;
  unpublishBase?: Maybe<Scalars['Boolean']>;
  where: PressArticleWhereUniqueInput;
};


export type MutationScheduleUnpublishPressPhotoArgs = {
  from?: Array<Stage>;
  releaseAt?: Maybe<Scalars['DateTime']>;
  releaseId?: Maybe<Scalars['String']>;
  where: PressPhotoWhereUniqueInput;
};


export type MutationScheduleUnpublishPressReportArgs = {
  from?: Array<Stage>;
  locales?: Maybe<Array<Locale>>;
  releaseAt?: Maybe<Scalars['DateTime']>;
  releaseId?: Maybe<Scalars['String']>;
  unpublishBase?: Maybe<Scalars['Boolean']>;
  where: PressReportWhereUniqueInput;
};


export type MutationScheduleUnpublishShopArgs = {
  from?: Array<Stage>;
  releaseAt?: Maybe<Scalars['DateTime']>;
  releaseId?: Maybe<Scalars['String']>;
  where: ShopWhereUniqueInput;
};


export type MutationScheduleUnpublishShopBundeslandArgs = {
  from?: Array<Stage>;
  releaseAt?: Maybe<Scalars['DateTime']>;
  releaseId?: Maybe<Scalars['String']>;
  where: ShopBundeslandWhereUniqueInput;
};


export type MutationScheduleUnpublishShopCategoryArgs = {
  from?: Array<Stage>;
  releaseAt?: Maybe<Scalars['DateTime']>;
  releaseId?: Maybe<Scalars['String']>;
  where: ShopCategoryWhereUniqueInput;
};


export type MutationScheduleUnpublishShopStatusArgs = {
  from?: Array<Stage>;
  releaseAt?: Maybe<Scalars['DateTime']>;
  releaseId?: Maybe<Scalars['String']>;
  where: ShopStatusWhereUniqueInput;
};


export type MutationScheduleUnpublishShopTownArgs = {
  from?: Array<Stage>;
  releaseAt?: Maybe<Scalars['DateTime']>;
  releaseId?: Maybe<Scalars['String']>;
  where: ShopTownWhereUniqueInput;
};


export type MutationScheduleUnpublishShopTypeArgs = {
  from?: Array<Stage>;
  releaseAt?: Maybe<Scalars['DateTime']>;
  releaseId?: Maybe<Scalars['String']>;
  where: ShopTypeWhereUniqueInput;
};


export type MutationScheduleUnpublishSupporterArgs = {
  from?: Array<Stage>;
  locales?: Maybe<Array<Locale>>;
  releaseAt?: Maybe<Scalars['DateTime']>;
  releaseId?: Maybe<Scalars['String']>;
  unpublishBase?: Maybe<Scalars['Boolean']>;
  where: SupporterWhereUniqueInput;
};


export type MutationScheduleUnpublishTranslationArgs = {
  from?: Array<Stage>;
  locales?: Maybe<Array<Locale>>;
  releaseAt?: Maybe<Scalars['DateTime']>;
  releaseId?: Maybe<Scalars['String']>;
  unpublishBase?: Maybe<Scalars['Boolean']>;
  where: TranslationWhereUniqueInput;
};


export type MutationUnpublishAssetArgs = {
  from?: Array<Stage>;
  locales?: Maybe<Array<Locale>>;
  unpublishBase?: Maybe<Scalars['Boolean']>;
  where: AssetWhereUniqueInput;
};


export type MutationUnpublishBlogArgs = {
  from?: Array<Stage>;
  locales?: Maybe<Array<Locale>>;
  unpublishBase?: Maybe<Scalars['Boolean']>;
  where: BlogWhereUniqueInput;
};


export type MutationUnpublishCityPartnerArgs = {
  from?: Array<Stage>;
  locales?: Maybe<Array<Locale>>;
  unpublishBase?: Maybe<Scalars['Boolean']>;
  where: CityPartnerWhereUniqueInput;
};


export type MutationUnpublishFaqArgs = {
  from?: Array<Stage>;
  locales?: Maybe<Array<Locale>>;
  unpublishBase?: Maybe<Scalars['Boolean']>;
  where: FaqWhereUniqueInput;
};


export type MutationUnpublishKpiArgs = {
  from?: Array<Stage>;
  locales?: Maybe<Array<Locale>>;
  unpublishBase?: Maybe<Scalars['Boolean']>;
  where: KpiWhereUniqueInput;
};


export type MutationUnpublishManyAssetsArgs = {
  from?: Array<Stage>;
  locales?: Maybe<Array<Locale>>;
  unpublishBase?: Maybe<Scalars['Boolean']>;
  where?: Maybe<AssetManyWhereInput>;
};


export type MutationUnpublishManyAssetsConnectionArgs = {
  after?: Maybe<Scalars['ID']>;
  before?: Maybe<Scalars['ID']>;
  first?: Maybe<Scalars['Int']>;
  from?: Array<Stage>;
  last?: Maybe<Scalars['Int']>;
  locales?: Maybe<Array<Locale>>;
  skip?: Maybe<Scalars['Int']>;
  stage?: Maybe<Stage>;
  unpublishBase?: Maybe<Scalars['Boolean']>;
  where?: Maybe<AssetManyWhereInput>;
};


export type MutationUnpublishManyBlogsArgs = {
  from?: Array<Stage>;
  locales?: Maybe<Array<Locale>>;
  unpublishBase?: Maybe<Scalars['Boolean']>;
  where?: Maybe<BlogManyWhereInput>;
};


export type MutationUnpublishManyBlogsConnectionArgs = {
  after?: Maybe<Scalars['ID']>;
  before?: Maybe<Scalars['ID']>;
  first?: Maybe<Scalars['Int']>;
  from?: Array<Stage>;
  last?: Maybe<Scalars['Int']>;
  locales?: Maybe<Array<Locale>>;
  skip?: Maybe<Scalars['Int']>;
  stage?: Maybe<Stage>;
  unpublishBase?: Maybe<Scalars['Boolean']>;
  where?: Maybe<BlogManyWhereInput>;
};


export type MutationUnpublishManyCityPartnersArgs = {
  from?: Array<Stage>;
  locales?: Maybe<Array<Locale>>;
  unpublishBase?: Maybe<Scalars['Boolean']>;
  where?: Maybe<CityPartnerManyWhereInput>;
};


export type MutationUnpublishManyCityPartnersConnectionArgs = {
  after?: Maybe<Scalars['ID']>;
  before?: Maybe<Scalars['ID']>;
  first?: Maybe<Scalars['Int']>;
  from?: Array<Stage>;
  last?: Maybe<Scalars['Int']>;
  locales?: Maybe<Array<Locale>>;
  skip?: Maybe<Scalars['Int']>;
  stage?: Maybe<Stage>;
  unpublishBase?: Maybe<Scalars['Boolean']>;
  where?: Maybe<CityPartnerManyWhereInput>;
};


export type MutationUnpublishManyFaqsArgs = {
  from?: Array<Stage>;
  locales?: Maybe<Array<Locale>>;
  unpublishBase?: Maybe<Scalars['Boolean']>;
  where?: Maybe<FaqManyWhereInput>;
};


export type MutationUnpublishManyFaqsConnectionArgs = {
  after?: Maybe<Scalars['ID']>;
  before?: Maybe<Scalars['ID']>;
  first?: Maybe<Scalars['Int']>;
  from?: Array<Stage>;
  last?: Maybe<Scalars['Int']>;
  locales?: Maybe<Array<Locale>>;
  skip?: Maybe<Scalars['Int']>;
  stage?: Maybe<Stage>;
  unpublishBase?: Maybe<Scalars['Boolean']>;
  where?: Maybe<FaqManyWhereInput>;
};


export type MutationUnpublishManyKpisArgs = {
  from?: Array<Stage>;
  locales?: Maybe<Array<Locale>>;
  unpublishBase?: Maybe<Scalars['Boolean']>;
  where?: Maybe<KpiManyWhereInput>;
};


export type MutationUnpublishManyKpisConnectionArgs = {
  after?: Maybe<Scalars['ID']>;
  before?: Maybe<Scalars['ID']>;
  first?: Maybe<Scalars['Int']>;
  from?: Array<Stage>;
  last?: Maybe<Scalars['Int']>;
  locales?: Maybe<Array<Locale>>;
  skip?: Maybe<Scalars['Int']>;
  stage?: Maybe<Stage>;
  unpublishBase?: Maybe<Scalars['Boolean']>;
  where?: Maybe<KpiManyWhereInput>;
};


export type MutationUnpublishManyMembersArgs = {
  from?: Array<Stage>;
  locales?: Maybe<Array<Locale>>;
  unpublishBase?: Maybe<Scalars['Boolean']>;
  where?: Maybe<MemberManyWhereInput>;
};


export type MutationUnpublishManyMembersConnectionArgs = {
  after?: Maybe<Scalars['ID']>;
  before?: Maybe<Scalars['ID']>;
  first?: Maybe<Scalars['Int']>;
  from?: Array<Stage>;
  last?: Maybe<Scalars['Int']>;
  locales?: Maybe<Array<Locale>>;
  skip?: Maybe<Scalars['Int']>;
  stage?: Maybe<Stage>;
  unpublishBase?: Maybe<Scalars['Boolean']>;
  where?: Maybe<MemberManyWhereInput>;
};


export type MutationUnpublishManyNetworksArgs = {
  from?: Array<Stage>;
  locales?: Maybe<Array<Locale>>;
  unpublishBase?: Maybe<Scalars['Boolean']>;
  where?: Maybe<NetworkManyWhereInput>;
};


export type MutationUnpublishManyNetworksConnectionArgs = {
  after?: Maybe<Scalars['ID']>;
  before?: Maybe<Scalars['ID']>;
  first?: Maybe<Scalars['Int']>;
  from?: Array<Stage>;
  last?: Maybe<Scalars['Int']>;
  locales?: Maybe<Array<Locale>>;
  skip?: Maybe<Scalars['Int']>;
  stage?: Maybe<Stage>;
  unpublishBase?: Maybe<Scalars['Boolean']>;
  where?: Maybe<NetworkManyWhereInput>;
};


export type MutationUnpublishManyPageSectionsArgs = {
  from?: Array<Stage>;
  locales?: Maybe<Array<Locale>>;
  unpublishBase?: Maybe<Scalars['Boolean']>;
  where?: Maybe<PageSectionManyWhereInput>;
};


export type MutationUnpublishManyPageSectionsConnectionArgs = {
  after?: Maybe<Scalars['ID']>;
  before?: Maybe<Scalars['ID']>;
  first?: Maybe<Scalars['Int']>;
  from?: Array<Stage>;
  last?: Maybe<Scalars['Int']>;
  locales?: Maybe<Array<Locale>>;
  skip?: Maybe<Scalars['Int']>;
  stage?: Maybe<Stage>;
  unpublishBase?: Maybe<Scalars['Boolean']>;
  where?: Maybe<PageSectionManyWhereInput>;
};


export type MutationUnpublishManyPagesArgs = {
  from?: Array<Stage>;
  locales?: Maybe<Array<Locale>>;
  unpublishBase?: Maybe<Scalars['Boolean']>;
  where?: Maybe<PageManyWhereInput>;
};


export type MutationUnpublishManyPagesConnectionArgs = {
  after?: Maybe<Scalars['ID']>;
  before?: Maybe<Scalars['ID']>;
  first?: Maybe<Scalars['Int']>;
  from?: Array<Stage>;
  last?: Maybe<Scalars['Int']>;
  locales?: Maybe<Array<Locale>>;
  skip?: Maybe<Scalars['Int']>;
  stage?: Maybe<Stage>;
  unpublishBase?: Maybe<Scalars['Boolean']>;
  where?: Maybe<PageManyWhereInput>;
};


export type MutationUnpublishManyPressArticlesArgs = {
  from?: Array<Stage>;
  locales?: Maybe<Array<Locale>>;
  unpublishBase?: Maybe<Scalars['Boolean']>;
  where?: Maybe<PressArticleManyWhereInput>;
};


export type MutationUnpublishManyPressArticlesConnectionArgs = {
  after?: Maybe<Scalars['ID']>;
  before?: Maybe<Scalars['ID']>;
  first?: Maybe<Scalars['Int']>;
  from?: Array<Stage>;
  last?: Maybe<Scalars['Int']>;
  locales?: Maybe<Array<Locale>>;
  skip?: Maybe<Scalars['Int']>;
  stage?: Maybe<Stage>;
  unpublishBase?: Maybe<Scalars['Boolean']>;
  where?: Maybe<PressArticleManyWhereInput>;
};


export type MutationUnpublishManyPressPhotosArgs = {
  from?: Array<Stage>;
  where?: Maybe<PressPhotoManyWhereInput>;
};


export type MutationUnpublishManyPressPhotosConnectionArgs = {
  after?: Maybe<Scalars['ID']>;
  before?: Maybe<Scalars['ID']>;
  first?: Maybe<Scalars['Int']>;
  from?: Array<Stage>;
  last?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  stage?: Maybe<Stage>;
  where?: Maybe<PressPhotoManyWhereInput>;
};


export type MutationUnpublishManyPressReportsArgs = {
  from?: Array<Stage>;
  locales?: Maybe<Array<Locale>>;
  unpublishBase?: Maybe<Scalars['Boolean']>;
  where?: Maybe<PressReportManyWhereInput>;
};


export type MutationUnpublishManyPressReportsConnectionArgs = {
  after?: Maybe<Scalars['ID']>;
  before?: Maybe<Scalars['ID']>;
  first?: Maybe<Scalars['Int']>;
  from?: Array<Stage>;
  last?: Maybe<Scalars['Int']>;
  locales?: Maybe<Array<Locale>>;
  skip?: Maybe<Scalars['Int']>;
  stage?: Maybe<Stage>;
  unpublishBase?: Maybe<Scalars['Boolean']>;
  where?: Maybe<PressReportManyWhereInput>;
};


export type MutationUnpublishManyShopBundeslandsArgs = {
  from?: Array<Stage>;
  where?: Maybe<ShopBundeslandManyWhereInput>;
};


export type MutationUnpublishManyShopBundeslandsConnectionArgs = {
  after?: Maybe<Scalars['ID']>;
  before?: Maybe<Scalars['ID']>;
  first?: Maybe<Scalars['Int']>;
  from?: Array<Stage>;
  last?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  stage?: Maybe<Stage>;
  where?: Maybe<ShopBundeslandManyWhereInput>;
};


export type MutationUnpublishManyShopCategoriesArgs = {
  from?: Array<Stage>;
  where?: Maybe<ShopCategoryManyWhereInput>;
};


export type MutationUnpublishManyShopCategoriesConnectionArgs = {
  after?: Maybe<Scalars['ID']>;
  before?: Maybe<Scalars['ID']>;
  first?: Maybe<Scalars['Int']>;
  from?: Array<Stage>;
  last?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  stage?: Maybe<Stage>;
  where?: Maybe<ShopCategoryManyWhereInput>;
};


export type MutationUnpublishManyShopStatusesArgs = {
  from?: Array<Stage>;
  where?: Maybe<ShopStatusManyWhereInput>;
};


export type MutationUnpublishManyShopStatusesConnectionArgs = {
  after?: Maybe<Scalars['ID']>;
  before?: Maybe<Scalars['ID']>;
  first?: Maybe<Scalars['Int']>;
  from?: Array<Stage>;
  last?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  stage?: Maybe<Stage>;
  where?: Maybe<ShopStatusManyWhereInput>;
};


export type MutationUnpublishManyShopTownsArgs = {
  from?: Array<Stage>;
  where?: Maybe<ShopTownManyWhereInput>;
};


export type MutationUnpublishManyShopTownsConnectionArgs = {
  after?: Maybe<Scalars['ID']>;
  before?: Maybe<Scalars['ID']>;
  first?: Maybe<Scalars['Int']>;
  from?: Array<Stage>;
  last?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  stage?: Maybe<Stage>;
  where?: Maybe<ShopTownManyWhereInput>;
};


export type MutationUnpublishManyShopTypesArgs = {
  from?: Array<Stage>;
  where?: Maybe<ShopTypeManyWhereInput>;
};


export type MutationUnpublishManyShopTypesConnectionArgs = {
  after?: Maybe<Scalars['ID']>;
  before?: Maybe<Scalars['ID']>;
  first?: Maybe<Scalars['Int']>;
  from?: Array<Stage>;
  last?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  stage?: Maybe<Stage>;
  where?: Maybe<ShopTypeManyWhereInput>;
};


export type MutationUnpublishManyShopsArgs = {
  from?: Array<Stage>;
  where?: Maybe<ShopManyWhereInput>;
};


export type MutationUnpublishManyShopsConnectionArgs = {
  after?: Maybe<Scalars['ID']>;
  before?: Maybe<Scalars['ID']>;
  first?: Maybe<Scalars['Int']>;
  from?: Array<Stage>;
  last?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  stage?: Maybe<Stage>;
  where?: Maybe<ShopManyWhereInput>;
};


export type MutationUnpublishManySupportersArgs = {
  from?: Array<Stage>;
  locales?: Maybe<Array<Locale>>;
  unpublishBase?: Maybe<Scalars['Boolean']>;
  where?: Maybe<SupporterManyWhereInput>;
};


export type MutationUnpublishManySupportersConnectionArgs = {
  after?: Maybe<Scalars['ID']>;
  before?: Maybe<Scalars['ID']>;
  first?: Maybe<Scalars['Int']>;
  from?: Array<Stage>;
  last?: Maybe<Scalars['Int']>;
  locales?: Maybe<Array<Locale>>;
  skip?: Maybe<Scalars['Int']>;
  stage?: Maybe<Stage>;
  unpublishBase?: Maybe<Scalars['Boolean']>;
  where?: Maybe<SupporterManyWhereInput>;
};


export type MutationUnpublishManyTranslationsArgs = {
  from?: Array<Stage>;
  locales?: Maybe<Array<Locale>>;
  unpublishBase?: Maybe<Scalars['Boolean']>;
  where?: Maybe<TranslationManyWhereInput>;
};


export type MutationUnpublishManyTranslationsConnectionArgs = {
  after?: Maybe<Scalars['ID']>;
  before?: Maybe<Scalars['ID']>;
  first?: Maybe<Scalars['Int']>;
  from?: Array<Stage>;
  last?: Maybe<Scalars['Int']>;
  locales?: Maybe<Array<Locale>>;
  skip?: Maybe<Scalars['Int']>;
  stage?: Maybe<Stage>;
  unpublishBase?: Maybe<Scalars['Boolean']>;
  where?: Maybe<TranslationManyWhereInput>;
};


export type MutationUnpublishMemberArgs = {
  from?: Array<Stage>;
  locales?: Maybe<Array<Locale>>;
  unpublishBase?: Maybe<Scalars['Boolean']>;
  where: MemberWhereUniqueInput;
};


export type MutationUnpublishNetworkArgs = {
  from?: Array<Stage>;
  locales?: Maybe<Array<Locale>>;
  unpublishBase?: Maybe<Scalars['Boolean']>;
  where: NetworkWhereUniqueInput;
};


export type MutationUnpublishPageArgs = {
  from?: Array<Stage>;
  locales?: Maybe<Array<Locale>>;
  unpublishBase?: Maybe<Scalars['Boolean']>;
  where: PageWhereUniqueInput;
};


export type MutationUnpublishPageSectionArgs = {
  from?: Array<Stage>;
  locales?: Maybe<Array<Locale>>;
  unpublishBase?: Maybe<Scalars['Boolean']>;
  where: PageSectionWhereUniqueInput;
};


export type MutationUnpublishPressArticleArgs = {
  from?: Array<Stage>;
  locales?: Maybe<Array<Locale>>;
  unpublishBase?: Maybe<Scalars['Boolean']>;
  where: PressArticleWhereUniqueInput;
};


export type MutationUnpublishPressPhotoArgs = {
  from?: Array<Stage>;
  where: PressPhotoWhereUniqueInput;
};


export type MutationUnpublishPressReportArgs = {
  from?: Array<Stage>;
  locales?: Maybe<Array<Locale>>;
  unpublishBase?: Maybe<Scalars['Boolean']>;
  where: PressReportWhereUniqueInput;
};


export type MutationUnpublishShopArgs = {
  from?: Array<Stage>;
  where: ShopWhereUniqueInput;
};


export type MutationUnpublishShopBundeslandArgs = {
  from?: Array<Stage>;
  where: ShopBundeslandWhereUniqueInput;
};


export type MutationUnpublishShopCategoryArgs = {
  from?: Array<Stage>;
  where: ShopCategoryWhereUniqueInput;
};


export type MutationUnpublishShopStatusArgs = {
  from?: Array<Stage>;
  where: ShopStatusWhereUniqueInput;
};


export type MutationUnpublishShopTownArgs = {
  from?: Array<Stage>;
  where: ShopTownWhereUniqueInput;
};


export type MutationUnpublishShopTypeArgs = {
  from?: Array<Stage>;
  where: ShopTypeWhereUniqueInput;
};


export type MutationUnpublishSupporterArgs = {
  from?: Array<Stage>;
  locales?: Maybe<Array<Locale>>;
  unpublishBase?: Maybe<Scalars['Boolean']>;
  where: SupporterWhereUniqueInput;
};


export type MutationUnpublishTranslationArgs = {
  from?: Array<Stage>;
  locales?: Maybe<Array<Locale>>;
  unpublishBase?: Maybe<Scalars['Boolean']>;
  where: TranslationWhereUniqueInput;
};


export type MutationUpdateAssetArgs = {
  data: AssetUpdateInput;
  where: AssetWhereUniqueInput;
};


export type MutationUpdateBlogArgs = {
  data: BlogUpdateInput;
  where: BlogWhereUniqueInput;
};


export type MutationUpdateCityPartnerArgs = {
  data: CityPartnerUpdateInput;
  where: CityPartnerWhereUniqueInput;
};


export type MutationUpdateFaqArgs = {
  data: FaqUpdateInput;
  where: FaqWhereUniqueInput;
};


export type MutationUpdateKpiArgs = {
  data: KpiUpdateInput;
  where: KpiWhereUniqueInput;
};


export type MutationUpdateManyAssetsArgs = {
  data: AssetUpdateManyInput;
  where?: Maybe<AssetManyWhereInput>;
};


export type MutationUpdateManyAssetsConnectionArgs = {
  after?: Maybe<Scalars['ID']>;
  before?: Maybe<Scalars['ID']>;
  data: AssetUpdateManyInput;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  where?: Maybe<AssetManyWhereInput>;
};


export type MutationUpdateManyBlogsArgs = {
  data: BlogUpdateManyInput;
  where?: Maybe<BlogManyWhereInput>;
};


export type MutationUpdateManyBlogsConnectionArgs = {
  after?: Maybe<Scalars['ID']>;
  before?: Maybe<Scalars['ID']>;
  data: BlogUpdateManyInput;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  where?: Maybe<BlogManyWhereInput>;
};


export type MutationUpdateManyCityPartnersArgs = {
  data: CityPartnerUpdateManyInput;
  where?: Maybe<CityPartnerManyWhereInput>;
};


export type MutationUpdateManyCityPartnersConnectionArgs = {
  after?: Maybe<Scalars['ID']>;
  before?: Maybe<Scalars['ID']>;
  data: CityPartnerUpdateManyInput;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  where?: Maybe<CityPartnerManyWhereInput>;
};


export type MutationUpdateManyFaqsArgs = {
  data: FaqUpdateManyInput;
  where?: Maybe<FaqManyWhereInput>;
};


export type MutationUpdateManyFaqsConnectionArgs = {
  after?: Maybe<Scalars['ID']>;
  before?: Maybe<Scalars['ID']>;
  data: FaqUpdateManyInput;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  where?: Maybe<FaqManyWhereInput>;
};


export type MutationUpdateManyKpisArgs = {
  data: KpiUpdateManyInput;
  where?: Maybe<KpiManyWhereInput>;
};


export type MutationUpdateManyKpisConnectionArgs = {
  after?: Maybe<Scalars['ID']>;
  before?: Maybe<Scalars['ID']>;
  data: KpiUpdateManyInput;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  where?: Maybe<KpiManyWhereInput>;
};


export type MutationUpdateManyMembersArgs = {
  data: MemberUpdateManyInput;
  where?: Maybe<MemberManyWhereInput>;
};


export type MutationUpdateManyMembersConnectionArgs = {
  after?: Maybe<Scalars['ID']>;
  before?: Maybe<Scalars['ID']>;
  data: MemberUpdateManyInput;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  where?: Maybe<MemberManyWhereInput>;
};


export type MutationUpdateManyNetworksArgs = {
  data: NetworkUpdateManyInput;
  where?: Maybe<NetworkManyWhereInput>;
};


export type MutationUpdateManyNetworksConnectionArgs = {
  after?: Maybe<Scalars['ID']>;
  before?: Maybe<Scalars['ID']>;
  data: NetworkUpdateManyInput;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  where?: Maybe<NetworkManyWhereInput>;
};


export type MutationUpdateManyPageSectionsArgs = {
  data: PageSectionUpdateManyInput;
  where?: Maybe<PageSectionManyWhereInput>;
};


export type MutationUpdateManyPageSectionsConnectionArgs = {
  after?: Maybe<Scalars['ID']>;
  before?: Maybe<Scalars['ID']>;
  data: PageSectionUpdateManyInput;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  where?: Maybe<PageSectionManyWhereInput>;
};


export type MutationUpdateManyPagesArgs = {
  data: PageUpdateManyInput;
  where?: Maybe<PageManyWhereInput>;
};


export type MutationUpdateManyPagesConnectionArgs = {
  after?: Maybe<Scalars['ID']>;
  before?: Maybe<Scalars['ID']>;
  data: PageUpdateManyInput;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  where?: Maybe<PageManyWhereInput>;
};


export type MutationUpdateManyPressArticlesArgs = {
  data: PressArticleUpdateManyInput;
  where?: Maybe<PressArticleManyWhereInput>;
};


export type MutationUpdateManyPressArticlesConnectionArgs = {
  after?: Maybe<Scalars['ID']>;
  before?: Maybe<Scalars['ID']>;
  data: PressArticleUpdateManyInput;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  where?: Maybe<PressArticleManyWhereInput>;
};


export type MutationUpdateManyPressPhotosArgs = {
  data: PressPhotoUpdateManyInput;
  where?: Maybe<PressPhotoManyWhereInput>;
};


export type MutationUpdateManyPressPhotosConnectionArgs = {
  after?: Maybe<Scalars['ID']>;
  before?: Maybe<Scalars['ID']>;
  data: PressPhotoUpdateManyInput;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  where?: Maybe<PressPhotoManyWhereInput>;
};


export type MutationUpdateManyPressReportsArgs = {
  data: PressReportUpdateManyInput;
  where?: Maybe<PressReportManyWhereInput>;
};


export type MutationUpdateManyPressReportsConnectionArgs = {
  after?: Maybe<Scalars['ID']>;
  before?: Maybe<Scalars['ID']>;
  data: PressReportUpdateManyInput;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  where?: Maybe<PressReportManyWhereInput>;
};


export type MutationUpdateManyShopBundeslandsArgs = {
  data: ShopBundeslandUpdateManyInput;
  where?: Maybe<ShopBundeslandManyWhereInput>;
};


export type MutationUpdateManyShopBundeslandsConnectionArgs = {
  after?: Maybe<Scalars['ID']>;
  before?: Maybe<Scalars['ID']>;
  data: ShopBundeslandUpdateManyInput;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  where?: Maybe<ShopBundeslandManyWhereInput>;
};


export type MutationUpdateManyShopCategoriesArgs = {
  data: ShopCategoryUpdateManyInput;
  where?: Maybe<ShopCategoryManyWhereInput>;
};


export type MutationUpdateManyShopCategoriesConnectionArgs = {
  after?: Maybe<Scalars['ID']>;
  before?: Maybe<Scalars['ID']>;
  data: ShopCategoryUpdateManyInput;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  where?: Maybe<ShopCategoryManyWhereInput>;
};


export type MutationUpdateManyShopStatusesArgs = {
  data: ShopStatusUpdateManyInput;
  where?: Maybe<ShopStatusManyWhereInput>;
};


export type MutationUpdateManyShopStatusesConnectionArgs = {
  after?: Maybe<Scalars['ID']>;
  before?: Maybe<Scalars['ID']>;
  data: ShopStatusUpdateManyInput;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  where?: Maybe<ShopStatusManyWhereInput>;
};


export type MutationUpdateManyShopTownsArgs = {
  data: ShopTownUpdateManyInput;
  where?: Maybe<ShopTownManyWhereInput>;
};


export type MutationUpdateManyShopTownsConnectionArgs = {
  after?: Maybe<Scalars['ID']>;
  before?: Maybe<Scalars['ID']>;
  data: ShopTownUpdateManyInput;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  where?: Maybe<ShopTownManyWhereInput>;
};


export type MutationUpdateManyShopTypesArgs = {
  data: ShopTypeUpdateManyInput;
  where?: Maybe<ShopTypeManyWhereInput>;
};


export type MutationUpdateManyShopTypesConnectionArgs = {
  after?: Maybe<Scalars['ID']>;
  before?: Maybe<Scalars['ID']>;
  data: ShopTypeUpdateManyInput;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  where?: Maybe<ShopTypeManyWhereInput>;
};


export type MutationUpdateManyShopsArgs = {
  data: ShopUpdateManyInput;
  where?: Maybe<ShopManyWhereInput>;
};


export type MutationUpdateManyShopsConnectionArgs = {
  after?: Maybe<Scalars['ID']>;
  before?: Maybe<Scalars['ID']>;
  data: ShopUpdateManyInput;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  where?: Maybe<ShopManyWhereInput>;
};


export type MutationUpdateManySupportersArgs = {
  data: SupporterUpdateManyInput;
  where?: Maybe<SupporterManyWhereInput>;
};


export type MutationUpdateManySupportersConnectionArgs = {
  after?: Maybe<Scalars['ID']>;
  before?: Maybe<Scalars['ID']>;
  data: SupporterUpdateManyInput;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  where?: Maybe<SupporterManyWhereInput>;
};


export type MutationUpdateManyTranslationsArgs = {
  data: TranslationUpdateManyInput;
  where?: Maybe<TranslationManyWhereInput>;
};


export type MutationUpdateManyTranslationsConnectionArgs = {
  after?: Maybe<Scalars['ID']>;
  before?: Maybe<Scalars['ID']>;
  data: TranslationUpdateManyInput;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  where?: Maybe<TranslationManyWhereInput>;
};


export type MutationUpdateMemberArgs = {
  data: MemberUpdateInput;
  where: MemberWhereUniqueInput;
};


export type MutationUpdateNetworkArgs = {
  data: NetworkUpdateInput;
  where: NetworkWhereUniqueInput;
};


export type MutationUpdatePageArgs = {
  data: PageUpdateInput;
  where: PageWhereUniqueInput;
};


export type MutationUpdatePageSectionArgs = {
  data: PageSectionUpdateInput;
  where: PageSectionWhereUniqueInput;
};


export type MutationUpdatePressArticleArgs = {
  data: PressArticleUpdateInput;
  where: PressArticleWhereUniqueInput;
};


export type MutationUpdatePressPhotoArgs = {
  data: PressPhotoUpdateInput;
  where: PressPhotoWhereUniqueInput;
};


export type MutationUpdatePressReportArgs = {
  data: PressReportUpdateInput;
  where: PressReportWhereUniqueInput;
};


export type MutationUpdateScheduledReleaseArgs = {
  data: ScheduledReleaseUpdateInput;
  where: ScheduledReleaseWhereUniqueInput;
};


export type MutationUpdateShopArgs = {
  data: ShopUpdateInput;
  where: ShopWhereUniqueInput;
};


export type MutationUpdateShopBundeslandArgs = {
  data: ShopBundeslandUpdateInput;
  where: ShopBundeslandWhereUniqueInput;
};


export type MutationUpdateShopCategoryArgs = {
  data: ShopCategoryUpdateInput;
  where: ShopCategoryWhereUniqueInput;
};


export type MutationUpdateShopStatusArgs = {
  data: ShopStatusUpdateInput;
  where: ShopStatusWhereUniqueInput;
};


export type MutationUpdateShopTownArgs = {
  data: ShopTownUpdateInput;
  where: ShopTownWhereUniqueInput;
};


export type MutationUpdateShopTypeArgs = {
  data: ShopTypeUpdateInput;
  where: ShopTypeWhereUniqueInput;
};


export type MutationUpdateSupporterArgs = {
  data: SupporterUpdateInput;
  where: SupporterWhereUniqueInput;
};


export type MutationUpdateTranslationArgs = {
  data: TranslationUpdateInput;
  where: TranslationWhereUniqueInput;
};


export type MutationUpsertAssetArgs = {
  upsert: AssetUpsertInput;
  where: AssetWhereUniqueInput;
};


export type MutationUpsertBlogArgs = {
  upsert: BlogUpsertInput;
  where: BlogWhereUniqueInput;
};


export type MutationUpsertCityPartnerArgs = {
  upsert: CityPartnerUpsertInput;
  where: CityPartnerWhereUniqueInput;
};


export type MutationUpsertFaqArgs = {
  upsert: FaqUpsertInput;
  where: FaqWhereUniqueInput;
};


export type MutationUpsertKpiArgs = {
  upsert: KpiUpsertInput;
  where: KpiWhereUniqueInput;
};


export type MutationUpsertMemberArgs = {
  upsert: MemberUpsertInput;
  where: MemberWhereUniqueInput;
};


export type MutationUpsertNetworkArgs = {
  upsert: NetworkUpsertInput;
  where: NetworkWhereUniqueInput;
};


export type MutationUpsertPageArgs = {
  upsert: PageUpsertInput;
  where: PageWhereUniqueInput;
};


export type MutationUpsertPageSectionArgs = {
  upsert: PageSectionUpsertInput;
  where: PageSectionWhereUniqueInput;
};


export type MutationUpsertPressArticleArgs = {
  upsert: PressArticleUpsertInput;
  where: PressArticleWhereUniqueInput;
};


export type MutationUpsertPressPhotoArgs = {
  upsert: PressPhotoUpsertInput;
  where: PressPhotoWhereUniqueInput;
};


export type MutationUpsertPressReportArgs = {
  upsert: PressReportUpsertInput;
  where: PressReportWhereUniqueInput;
};


export type MutationUpsertShopArgs = {
  upsert: ShopUpsertInput;
  where: ShopWhereUniqueInput;
};


export type MutationUpsertShopBundeslandArgs = {
  upsert: ShopBundeslandUpsertInput;
  where: ShopBundeslandWhereUniqueInput;
};


export type MutationUpsertShopCategoryArgs = {
  upsert: ShopCategoryUpsertInput;
  where: ShopCategoryWhereUniqueInput;
};


export type MutationUpsertShopStatusArgs = {
  upsert: ShopStatusUpsertInput;
  where: ShopStatusWhereUniqueInput;
};


export type MutationUpsertShopTownArgs = {
  upsert: ShopTownUpsertInput;
  where: ShopTownWhereUniqueInput;
};


export type MutationUpsertShopTypeArgs = {
  upsert: ShopTypeUpsertInput;
  where: ShopTypeWhereUniqueInput;
};


export type MutationUpsertSupporterArgs = {
  upsert: SupporterUpsertInput;
  where: SupporterWhereUniqueInput;
};


export type MutationUpsertTranslationArgs = {
  upsert: TranslationUpsertInput;
  where: TranslationWhereUniqueInput;
};

export type Network = Node & {
  __typename?: 'Network';
  /** The time the document was created */
  createdAt: Scalars['DateTime'];
  /** User that created this document */
  createdBy?: Maybe<User>;
  description?: Maybe<RichText>;
  /** Get the document in other stages */
  documentInStages: Array<Network>;
  /** List of Network versions */
  history: Array<Version>;
  /** The unique identifier */
  id: Scalars['ID'];
  link?: Maybe<Scalars['String']>;
  /** System Locale field */
  locale: Locale;
  /** Get the other localizations for this document */
  localizations: Array<Network>;
  logo?: Maybe<Asset>;
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  scheduledIn: Array<ScheduledOperation>;
  /** System stage field */
  stage: Stage;
  title?: Maybe<Scalars['String']>;
  /** The time the document was updated */
  updatedAt: Scalars['DateTime'];
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
};


export type NetworkCreatedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};


export type NetworkCreatedByArgs = {
  locales?: Maybe<Array<Locale>>;
};


export type NetworkDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
  stages?: Array<Stage>;
};


export type NetworkHistoryArgs = {
  limit?: Scalars['Int'];
  skip?: Scalars['Int'];
  stageOverride?: Maybe<Stage>;
};


export type NetworkLocalizationsArgs = {
  includeCurrent?: Scalars['Boolean'];
  locales?: Array<Locale>;
};


export type NetworkLogoArgs = {
  locales?: Maybe<Array<Locale>>;
};


export type NetworkPublishedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};


export type NetworkPublishedByArgs = {
  locales?: Maybe<Array<Locale>>;
};


export type NetworkScheduledInArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  locales?: Maybe<Array<Locale>>;
  skip?: Maybe<Scalars['Int']>;
  where?: Maybe<ScheduledOperationWhereInput>;
};


export type NetworkUpdatedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};


export type NetworkUpdatedByArgs = {
  locales?: Maybe<Array<Locale>>;
};

export type NetworkConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: Maybe<ConnectPositionInput>;
  /** Document to connect */
  where: NetworkWhereUniqueInput;
};

/** A connection to a list of items. */
export type NetworkConnection = {
  __typename?: 'NetworkConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<NetworkEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type NetworkCreateInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  /** description input for default locale (de) */
  description?: Maybe<Scalars['RichTextAST']>;
  link?: Maybe<Scalars['String']>;
  /** Inline mutations for managing document localizations excluding the default locale */
  localizations?: Maybe<NetworkCreateLocalizationsInput>;
  logo?: Maybe<AssetCreateOneInlineInput>;
  title?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type NetworkCreateLocalizationDataInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['RichTextAST']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type NetworkCreateLocalizationInput = {
  /** Localization input */
  data: NetworkCreateLocalizationDataInput;
  locale: Locale;
};

export type NetworkCreateLocalizationsInput = {
  /** Create localizations for the newly-created document */
  create?: Maybe<Array<NetworkCreateLocalizationInput>>;
};

export type NetworkCreateManyInlineInput = {
  /** Connect multiple existing Network documents */
  connect?: Maybe<Array<NetworkWhereUniqueInput>>;
  /** Create and connect multiple existing Network documents */
  create?: Maybe<Array<NetworkCreateInput>>;
};

export type NetworkCreateOneInlineInput = {
  /** Connect one existing Network document */
  connect?: Maybe<NetworkWhereUniqueInput>;
  /** Create and connect one Network document */
  create?: Maybe<NetworkCreateInput>;
};

/** An edge in a connection. */
export type NetworkEdge = {
  __typename?: 'NetworkEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: Network;
};

/** Identifies documents */
export type NetworkManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<NetworkWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<NetworkWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<NetworkWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  createdBy?: Maybe<UserWhereInput>;
  id?: Maybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  link?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  link_contains?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  link_ends_with?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  link_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  link_not?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  link_not_contains?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  link_not_ends_with?: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  link_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  link_not_starts_with?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  link_starts_with?: Maybe<Scalars['String']>;
  logo?: Maybe<AssetWhereInput>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  publishedBy?: Maybe<UserWhereInput>;
  scheduledIn_every?: Maybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: Maybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: Maybe<ScheduledOperationWhereInput>;
  title?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  title_contains?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  title_ends_with?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  title_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  title_not?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  title_not_contains?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  title_not_ends_with?: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  title_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  title_not_starts_with?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  title_starts_with?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  updatedBy?: Maybe<UserWhereInput>;
};

export enum NetworkOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  LinkAsc = 'link_ASC',
  LinkDesc = 'link_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

export type NetworkUpdateInput = {
  /** description input for default locale (de) */
  description?: Maybe<Scalars['RichTextAST']>;
  link?: Maybe<Scalars['String']>;
  /** Manage document localizations */
  localizations?: Maybe<NetworkUpdateLocalizationsInput>;
  logo?: Maybe<AssetUpdateOneInlineInput>;
  title?: Maybe<Scalars['String']>;
};

export type NetworkUpdateLocalizationDataInput = {
  description?: Maybe<Scalars['RichTextAST']>;
};

export type NetworkUpdateLocalizationInput = {
  data: NetworkUpdateLocalizationDataInput;
  locale: Locale;
};

export type NetworkUpdateLocalizationsInput = {
  /** Localizations to create */
  create?: Maybe<Array<NetworkCreateLocalizationInput>>;
  /** Localizations to delete */
  delete?: Maybe<Array<Locale>>;
  /** Localizations to update */
  update?: Maybe<Array<NetworkUpdateLocalizationInput>>;
  upsert?: Maybe<Array<NetworkUpsertLocalizationInput>>;
};

export type NetworkUpdateManyInlineInput = {
  /** Connect multiple existing Network documents */
  connect?: Maybe<Array<NetworkConnectInput>>;
  /** Create and connect multiple Network documents */
  create?: Maybe<Array<NetworkCreateInput>>;
  /** Delete multiple Network documents */
  delete?: Maybe<Array<NetworkWhereUniqueInput>>;
  /** Disconnect multiple Network documents */
  disconnect?: Maybe<Array<NetworkWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing Network documents */
  set?: Maybe<Array<NetworkWhereUniqueInput>>;
  /** Update multiple Network documents */
  update?: Maybe<Array<NetworkUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple Network documents */
  upsert?: Maybe<Array<NetworkUpsertWithNestedWhereUniqueInput>>;
};

export type NetworkUpdateManyInput = {
  /** description input for default locale (de) */
  description?: Maybe<Scalars['RichTextAST']>;
  link?: Maybe<Scalars['String']>;
  /** Optional updates to localizations */
  localizations?: Maybe<NetworkUpdateManyLocalizationsInput>;
  title?: Maybe<Scalars['String']>;
};

export type NetworkUpdateManyLocalizationDataInput = {
  description?: Maybe<Scalars['RichTextAST']>;
};

export type NetworkUpdateManyLocalizationInput = {
  data: NetworkUpdateManyLocalizationDataInput;
  locale: Locale;
};

export type NetworkUpdateManyLocalizationsInput = {
  /** Localizations to update */
  update?: Maybe<Array<NetworkUpdateManyLocalizationInput>>;
};

export type NetworkUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: NetworkUpdateManyInput;
  /** Document search */
  where: NetworkWhereInput;
};

export type NetworkUpdateOneInlineInput = {
  /** Connect existing Network document */
  connect?: Maybe<NetworkWhereUniqueInput>;
  /** Create and connect one Network document */
  create?: Maybe<NetworkCreateInput>;
  /** Delete currently connected Network document */
  delete?: Maybe<Scalars['Boolean']>;
  /** Disconnect currently connected Network document */
  disconnect?: Maybe<Scalars['Boolean']>;
  /** Update single Network document */
  update?: Maybe<NetworkUpdateWithNestedWhereUniqueInput>;
  /** Upsert single Network document */
  upsert?: Maybe<NetworkUpsertWithNestedWhereUniqueInput>;
};

export type NetworkUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: NetworkUpdateInput;
  /** Unique document search */
  where: NetworkWhereUniqueInput;
};

export type NetworkUpsertInput = {
  /** Create document if it didn't exist */
  create: NetworkCreateInput;
  /** Update document if it exists */
  update: NetworkUpdateInput;
};

export type NetworkUpsertLocalizationInput = {
  create: NetworkCreateLocalizationDataInput;
  locale: Locale;
  update: NetworkUpdateLocalizationDataInput;
};

export type NetworkUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: NetworkUpsertInput;
  /** Unique document search */
  where: NetworkWhereUniqueInput;
};

/** Identifies documents */
export type NetworkWhereInput = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<NetworkWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<NetworkWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<NetworkWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  createdBy?: Maybe<UserWhereInput>;
  id?: Maybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  link?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  link_contains?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  link_ends_with?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  link_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  link_not?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  link_not_contains?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  link_not_ends_with?: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  link_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  link_not_starts_with?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  link_starts_with?: Maybe<Scalars['String']>;
  logo?: Maybe<AssetWhereInput>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  publishedBy?: Maybe<UserWhereInput>;
  scheduledIn_every?: Maybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: Maybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: Maybe<ScheduledOperationWhereInput>;
  title?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  title_contains?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  title_ends_with?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  title_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  title_not?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  title_not_contains?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  title_not_ends_with?: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  title_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  title_not_starts_with?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  title_starts_with?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  updatedBy?: Maybe<UserWhereInput>;
};

/** References Network record uniquely */
export type NetworkWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>;
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
  content?: Maybe<RichText>;
  /** The time the document was created */
  createdAt: Scalars['DateTime'];
  /** User that created this document */
  createdBy?: Maybe<User>;
  /** Get the document in other stages */
  documentInStages: Array<Page>;
  /** List of Page versions */
  history: Array<Version>;
  /** The unique identifier */
  id: Scalars['ID'];
  /** System Locale field */
  locale: Locale;
  /** Get the other localizations for this document */
  localizations: Array<Page>;
  metaDescription?: Maybe<Scalars['String']>;
  metaKeywords?: Maybe<Scalars['String']>;
  pageSections: Array<PageSection>;
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  scheduledIn: Array<ScheduledOperation>;
  slug?: Maybe<Scalars['String']>;
  /** System stage field */
  stage: Stage;
  title?: Maybe<Scalars['String']>;
  /** The time the document was updated */
  updatedAt: Scalars['DateTime'];
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
  vibrantColor?: Maybe<Color>;
};


export type PageCreatedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};


export type PageCreatedByArgs = {
  locales?: Maybe<Array<Locale>>;
};


export type PageDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
  stages?: Array<Stage>;
};


export type PageHistoryArgs = {
  limit?: Scalars['Int'];
  skip?: Scalars['Int'];
  stageOverride?: Maybe<Stage>;
};


export type PageLocalizationsArgs = {
  includeCurrent?: Scalars['Boolean'];
  locales?: Array<Locale>;
};


export type PagePageSectionsArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  locales?: Maybe<Array<Locale>>;
  orderBy?: Maybe<PageSectionOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  where?: Maybe<PageSectionWhereInput>;
};


export type PagePublishedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};


export type PagePublishedByArgs = {
  locales?: Maybe<Array<Locale>>;
};


export type PageScheduledInArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  locales?: Maybe<Array<Locale>>;
  skip?: Maybe<Scalars['Int']>;
  where?: Maybe<ScheduledOperationWhereInput>;
};


export type PageUpdatedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};


export type PageUpdatedByArgs = {
  locales?: Maybe<Array<Locale>>;
};

export type PageConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: Maybe<ConnectPositionInput>;
  /** Document to connect */
  where: PageWhereUniqueInput;
};

/** A connection to a list of items. */
export type PageConnection = {
  __typename?: 'PageConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<PageEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type PageCreateInput = {
  content?: Maybe<Scalars['RichTextAST']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  /** Inline mutations for managing document localizations excluding the default locale */
  localizations?: Maybe<PageCreateLocalizationsInput>;
  metaDescription?: Maybe<Scalars['String']>;
  metaKeywords?: Maybe<Scalars['String']>;
  pageSections?: Maybe<PageSectionCreateManyInlineInput>;
  slug?: Maybe<Scalars['String']>;
  /** title input for default locale (de) */
  title?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  vibrantColor?: Maybe<ColorInput>;
};

export type PageCreateLocalizationDataInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  title?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
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
  /** Connect multiple existing Page documents */
  connect?: Maybe<Array<PageWhereUniqueInput>>;
  /** Create and connect multiple existing Page documents */
  create?: Maybe<Array<PageCreateInput>>;
};

export type PageCreateOneInlineInput = {
  /** Connect one existing Page document */
  connect?: Maybe<PageWhereUniqueInput>;
  /** Create and connect one Page document */
  create?: Maybe<PageCreateInput>;
};

/** An edge in a connection. */
export type PageEdge = {
  __typename?: 'PageEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: Page;
};

/** Information about pagination in a connection. */
export type PageInfo = {
  __typename?: 'PageInfo';
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean'];
  /** Number of items in the current page. */
  pageSize?: Maybe<Scalars['Int']>;
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']>;
};

/** Identifies documents */
export type PageManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<PageWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<PageWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<PageWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  createdBy?: Maybe<UserWhereInput>;
  id?: Maybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  metaDescription?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  metaDescription_contains?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  metaDescription_ends_with?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  metaDescription_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  metaDescription_not?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  metaDescription_not_contains?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  metaDescription_not_ends_with?: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  metaDescription_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  metaDescription_not_starts_with?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  metaDescription_starts_with?: Maybe<Scalars['String']>;
  metaKeywords?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  metaKeywords_contains?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  metaKeywords_ends_with?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  metaKeywords_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  metaKeywords_not?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  metaKeywords_not_contains?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  metaKeywords_not_ends_with?: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  metaKeywords_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  metaKeywords_not_starts_with?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  metaKeywords_starts_with?: Maybe<Scalars['String']>;
  pageSections_every?: Maybe<PageSectionWhereInput>;
  pageSections_none?: Maybe<PageSectionWhereInput>;
  pageSections_some?: Maybe<PageSectionWhereInput>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  publishedBy?: Maybe<UserWhereInput>;
  scheduledIn_every?: Maybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: Maybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: Maybe<ScheduledOperationWhereInput>;
  slug?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  slug_contains?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  slug_ends_with?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  slug_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  slug_not?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  slug_not_contains?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  slug_not_ends_with?: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  slug_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  slug_not_starts_with?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  slug_starts_with?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  updatedBy?: Maybe<UserWhereInput>;
};

export enum PageOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  MetaDescriptionAsc = 'metaDescription_ASC',
  MetaDescriptionDesc = 'metaDescription_DESC',
  MetaKeywordsAsc = 'metaKeywords_ASC',
  MetaKeywordsDesc = 'metaKeywords_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

export type PageSection = Node & {
  __typename?: 'PageSection';
  code?: Maybe<Scalars['String']>;
  content: RichText;
  /** The time the document was created */
  createdAt: Scalars['DateTime'];
  /** User that created this document */
  createdBy?: Maybe<User>;
  /** Get the document in other stages */
  documentInStages: Array<PageSection>;
  /** List of PageSection versions */
  history: Array<Version>;
  /** The unique identifier */
  id: Scalars['ID'];
  /** System Locale field */
  locale: Locale;
  /** Get the other localizations for this document */
  localizations: Array<PageSection>;
  page?: Maybe<Page>;
  picture: Array<Asset>;
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  scheduledIn: Array<ScheduledOperation>;
  /** System stage field */
  stage: Stage;
  title: Scalars['String'];
  /** The time the document was updated */
  updatedAt: Scalars['DateTime'];
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
};


export type PageSectionCreatedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};


export type PageSectionCreatedByArgs = {
  locales?: Maybe<Array<Locale>>;
};


export type PageSectionDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
  stages?: Array<Stage>;
};


export type PageSectionHistoryArgs = {
  limit?: Scalars['Int'];
  skip?: Scalars['Int'];
  stageOverride?: Maybe<Stage>;
};


export type PageSectionLocalizationsArgs = {
  includeCurrent?: Scalars['Boolean'];
  locales?: Array<Locale>;
};


export type PageSectionPageArgs = {
  locales?: Maybe<Array<Locale>>;
};


export type PageSectionPictureArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  locales?: Maybe<Array<Locale>>;
  orderBy?: Maybe<AssetOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  where?: Maybe<AssetWhereInput>;
};


export type PageSectionPublishedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};


export type PageSectionPublishedByArgs = {
  locales?: Maybe<Array<Locale>>;
};


export type PageSectionScheduledInArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  locales?: Maybe<Array<Locale>>;
  skip?: Maybe<Scalars['Int']>;
  where?: Maybe<ScheduledOperationWhereInput>;
};


export type PageSectionUpdatedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};


export type PageSectionUpdatedByArgs = {
  locales?: Maybe<Array<Locale>>;
};

export type PageSectionConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: Maybe<ConnectPositionInput>;
  /** Document to connect */
  where: PageSectionWhereUniqueInput;
};

/** A connection to a list of items. */
export type PageSectionConnection = {
  __typename?: 'PageSectionConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<PageSectionEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type PageSectionCreateInput = {
  code?: Maybe<Scalars['String']>;
  /** content input for default locale (de) */
  content: Scalars['RichTextAST'];
  createdAt?: Maybe<Scalars['DateTime']>;
  /** Inline mutations for managing document localizations excluding the default locale */
  localizations?: Maybe<PageSectionCreateLocalizationsInput>;
  page?: Maybe<PageCreateOneInlineInput>;
  picture?: Maybe<AssetCreateManyInlineInput>;
  /** title input for default locale (de) */
  title: Scalars['String'];
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type PageSectionCreateLocalizationDataInput = {
  content: Scalars['RichTextAST'];
  createdAt?: Maybe<Scalars['DateTime']>;
  title: Scalars['String'];
  updatedAt?: Maybe<Scalars['DateTime']>;
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
  /** Connect multiple existing PageSection documents */
  connect?: Maybe<Array<PageSectionWhereUniqueInput>>;
  /** Create and connect multiple existing PageSection documents */
  create?: Maybe<Array<PageSectionCreateInput>>;
};

export type PageSectionCreateOneInlineInput = {
  /** Connect one existing PageSection document */
  connect?: Maybe<PageSectionWhereUniqueInput>;
  /** Create and connect one PageSection document */
  create?: Maybe<PageSectionCreateInput>;
};

/** An edge in a connection. */
export type PageSectionEdge = {
  __typename?: 'PageSectionEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: PageSection;
};

/** Identifies documents */
export type PageSectionManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<PageSectionWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<PageSectionWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<PageSectionWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: Maybe<Scalars['String']>;
  code?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  code_contains?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  code_ends_with?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  code_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  code_not?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  code_not_contains?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  code_not_ends_with?: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  code_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  code_not_starts_with?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  code_starts_with?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  createdBy?: Maybe<UserWhereInput>;
  id?: Maybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  page?: Maybe<PageWhereInput>;
  picture_every?: Maybe<AssetWhereInput>;
  picture_none?: Maybe<AssetWhereInput>;
  picture_some?: Maybe<AssetWhereInput>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  publishedBy?: Maybe<UserWhereInput>;
  scheduledIn_every?: Maybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: Maybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: Maybe<ScheduledOperationWhereInput>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  updatedBy?: Maybe<UserWhereInput>;
};

export enum PageSectionOrderByInput {
  CodeAsc = 'code_ASC',
  CodeDesc = 'code_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

export type PageSectionUpdateInput = {
  code?: Maybe<Scalars['String']>;
  /** content input for default locale (de) */
  content?: Maybe<Scalars['RichTextAST']>;
  /** Manage document localizations */
  localizations?: Maybe<PageSectionUpdateLocalizationsInput>;
  page?: Maybe<PageUpdateOneInlineInput>;
  picture?: Maybe<AssetUpdateManyInlineInput>;
  /** title input for default locale (de) */
  title?: Maybe<Scalars['String']>;
};

export type PageSectionUpdateLocalizationDataInput = {
  content?: Maybe<Scalars['RichTextAST']>;
  title?: Maybe<Scalars['String']>;
};

export type PageSectionUpdateLocalizationInput = {
  data: PageSectionUpdateLocalizationDataInput;
  locale: Locale;
};

export type PageSectionUpdateLocalizationsInput = {
  /** Localizations to create */
  create?: Maybe<Array<PageSectionCreateLocalizationInput>>;
  /** Localizations to delete */
  delete?: Maybe<Array<Locale>>;
  /** Localizations to update */
  update?: Maybe<Array<PageSectionUpdateLocalizationInput>>;
  upsert?: Maybe<Array<PageSectionUpsertLocalizationInput>>;
};

export type PageSectionUpdateManyInlineInput = {
  /** Connect multiple existing PageSection documents */
  connect?: Maybe<Array<PageSectionConnectInput>>;
  /** Create and connect multiple PageSection documents */
  create?: Maybe<Array<PageSectionCreateInput>>;
  /** Delete multiple PageSection documents */
  delete?: Maybe<Array<PageSectionWhereUniqueInput>>;
  /** Disconnect multiple PageSection documents */
  disconnect?: Maybe<Array<PageSectionWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing PageSection documents */
  set?: Maybe<Array<PageSectionWhereUniqueInput>>;
  /** Update multiple PageSection documents */
  update?: Maybe<Array<PageSectionUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple PageSection documents */
  upsert?: Maybe<Array<PageSectionUpsertWithNestedWhereUniqueInput>>;
};

export type PageSectionUpdateManyInput = {
  code?: Maybe<Scalars['String']>;
  /** content input for default locale (de) */
  content?: Maybe<Scalars['RichTextAST']>;
  /** Optional updates to localizations */
  localizations?: Maybe<PageSectionUpdateManyLocalizationsInput>;
  /** title input for default locale (de) */
  title?: Maybe<Scalars['String']>;
};

export type PageSectionUpdateManyLocalizationDataInput = {
  content?: Maybe<Scalars['RichTextAST']>;
  title?: Maybe<Scalars['String']>;
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
  /** Update many input */
  data: PageSectionUpdateManyInput;
  /** Document search */
  where: PageSectionWhereInput;
};

export type PageSectionUpdateOneInlineInput = {
  /** Connect existing PageSection document */
  connect?: Maybe<PageSectionWhereUniqueInput>;
  /** Create and connect one PageSection document */
  create?: Maybe<PageSectionCreateInput>;
  /** Delete currently connected PageSection document */
  delete?: Maybe<Scalars['Boolean']>;
  /** Disconnect currently connected PageSection document */
  disconnect?: Maybe<Scalars['Boolean']>;
  /** Update single PageSection document */
  update?: Maybe<PageSectionUpdateWithNestedWhereUniqueInput>;
  /** Upsert single PageSection document */
  upsert?: Maybe<PageSectionUpsertWithNestedWhereUniqueInput>;
};

export type PageSectionUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: PageSectionUpdateInput;
  /** Unique document search */
  where: PageSectionWhereUniqueInput;
};

export type PageSectionUpsertInput = {
  /** Create document if it didn't exist */
  create: PageSectionCreateInput;
  /** Update document if it exists */
  update: PageSectionUpdateInput;
};

export type PageSectionUpsertLocalizationInput = {
  create: PageSectionCreateLocalizationDataInput;
  locale: Locale;
  update: PageSectionUpdateLocalizationDataInput;
};

export type PageSectionUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: PageSectionUpsertInput;
  /** Unique document search */
  where: PageSectionWhereUniqueInput;
};

/** Identifies documents */
export type PageSectionWhereInput = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<PageSectionWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<PageSectionWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<PageSectionWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: Maybe<Scalars['String']>;
  code?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  code_contains?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  code_ends_with?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  code_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  code_not?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  code_not_contains?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  code_not_ends_with?: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  code_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  code_not_starts_with?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  code_starts_with?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  createdBy?: Maybe<UserWhereInput>;
  id?: Maybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  page?: Maybe<PageWhereInput>;
  picture_every?: Maybe<AssetWhereInput>;
  picture_none?: Maybe<AssetWhereInput>;
  picture_some?: Maybe<AssetWhereInput>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  publishedBy?: Maybe<UserWhereInput>;
  scheduledIn_every?: Maybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: Maybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: Maybe<ScheduledOperationWhereInput>;
  title?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  title_contains?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  title_ends_with?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  title_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  title_not?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  title_not_contains?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  title_not_ends_with?: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  title_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  title_not_starts_with?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  title_starts_with?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  updatedBy?: Maybe<UserWhereInput>;
};

/** References PageSection record uniquely */
export type PageSectionWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>;
};

export type PageUpdateInput = {
  content?: Maybe<Scalars['RichTextAST']>;
  /** Manage document localizations */
  localizations?: Maybe<PageUpdateLocalizationsInput>;
  metaDescription?: Maybe<Scalars['String']>;
  metaKeywords?: Maybe<Scalars['String']>;
  pageSections?: Maybe<PageSectionUpdateManyInlineInput>;
  slug?: Maybe<Scalars['String']>;
  /** title input for default locale (de) */
  title?: Maybe<Scalars['String']>;
  vibrantColor?: Maybe<ColorInput>;
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
  /** Localizations to delete */
  delete?: Maybe<Array<Locale>>;
  /** Localizations to update */
  update?: Maybe<Array<PageUpdateLocalizationInput>>;
  upsert?: Maybe<Array<PageUpsertLocalizationInput>>;
};

export type PageUpdateManyInlineInput = {
  /** Connect multiple existing Page documents */
  connect?: Maybe<Array<PageConnectInput>>;
  /** Create and connect multiple Page documents */
  create?: Maybe<Array<PageCreateInput>>;
  /** Delete multiple Page documents */
  delete?: Maybe<Array<PageWhereUniqueInput>>;
  /** Disconnect multiple Page documents */
  disconnect?: Maybe<Array<PageWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing Page documents */
  set?: Maybe<Array<PageWhereUniqueInput>>;
  /** Update multiple Page documents */
  update?: Maybe<Array<PageUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple Page documents */
  upsert?: Maybe<Array<PageUpsertWithNestedWhereUniqueInput>>;
};

export type PageUpdateManyInput = {
  content?: Maybe<Scalars['RichTextAST']>;
  /** Optional updates to localizations */
  localizations?: Maybe<PageUpdateManyLocalizationsInput>;
  metaDescription?: Maybe<Scalars['String']>;
  metaKeywords?: Maybe<Scalars['String']>;
  /** title input for default locale (de) */
  title?: Maybe<Scalars['String']>;
  vibrantColor?: Maybe<ColorInput>;
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
  /** Update many input */
  data: PageUpdateManyInput;
  /** Document search */
  where: PageWhereInput;
};

export type PageUpdateOneInlineInput = {
  /** Connect existing Page document */
  connect?: Maybe<PageWhereUniqueInput>;
  /** Create and connect one Page document */
  create?: Maybe<PageCreateInput>;
  /** Delete currently connected Page document */
  delete?: Maybe<Scalars['Boolean']>;
  /** Disconnect currently connected Page document */
  disconnect?: Maybe<Scalars['Boolean']>;
  /** Update single Page document */
  update?: Maybe<PageUpdateWithNestedWhereUniqueInput>;
  /** Upsert single Page document */
  upsert?: Maybe<PageUpsertWithNestedWhereUniqueInput>;
};

export type PageUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: PageUpdateInput;
  /** Unique document search */
  where: PageWhereUniqueInput;
};

export type PageUpsertInput = {
  /** Create document if it didn't exist */
  create: PageCreateInput;
  /** Update document if it exists */
  update: PageUpdateInput;
};

export type PageUpsertLocalizationInput = {
  create: PageCreateLocalizationDataInput;
  locale: Locale;
  update: PageUpdateLocalizationDataInput;
};

export type PageUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: PageUpsertInput;
  /** Unique document search */
  where: PageWhereUniqueInput;
};

/** Identifies documents */
export type PageWhereInput = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<PageWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<PageWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<PageWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  createdBy?: Maybe<UserWhereInput>;
  id?: Maybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  metaDescription?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  metaDescription_contains?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  metaDescription_ends_with?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  metaDescription_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  metaDescription_not?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  metaDescription_not_contains?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  metaDescription_not_ends_with?: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  metaDescription_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  metaDescription_not_starts_with?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  metaDescription_starts_with?: Maybe<Scalars['String']>;
  metaKeywords?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  metaKeywords_contains?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  metaKeywords_ends_with?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  metaKeywords_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  metaKeywords_not?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  metaKeywords_not_contains?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  metaKeywords_not_ends_with?: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  metaKeywords_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  metaKeywords_not_starts_with?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  metaKeywords_starts_with?: Maybe<Scalars['String']>;
  pageSections_every?: Maybe<PageSectionWhereInput>;
  pageSections_none?: Maybe<PageSectionWhereInput>;
  pageSections_some?: Maybe<PageSectionWhereInput>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  publishedBy?: Maybe<UserWhereInput>;
  scheduledIn_every?: Maybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: Maybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: Maybe<ScheduledOperationWhereInput>;
  slug?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  slug_contains?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  slug_ends_with?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  slug_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  slug_not?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  slug_not_contains?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  slug_not_ends_with?: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  slug_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  slug_not_starts_with?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  slug_starts_with?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  title_contains?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  title_ends_with?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  title_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  title_not?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  title_not_contains?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  title_not_ends_with?: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  title_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  title_not_starts_with?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  title_starts_with?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  updatedBy?: Maybe<UserWhereInput>;
};

/** References Page record uniquely */
export type PageWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>;
  slug?: Maybe<Scalars['String']>;
};

export type PressArticle = Node & {
  __typename?: 'PressArticle';
  abstract?: Maybe<RichText>;
  content?: Maybe<PressArticleContentRichText>;
  /** The time the document was created */
  createdAt: Scalars['DateTime'];
  /** User that created this document */
  createdBy?: Maybe<User>;
  date?: Maybe<Scalars['Date']>;
  /** Get the document in other stages */
  documentInStages: Array<PressArticle>;
  /** List of PressArticle versions */
  history: Array<Version>;
  /** The unique identifier */
  id: Scalars['ID'];
  /** System Locale field */
  locale: Locale;
  /** Get the other localizations for this document */
  localizations: Array<PressArticle>;
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  scheduledIn: Array<ScheduledOperation>;
  slug?: Maybe<Scalars['String']>;
  /** System stage field */
  stage: Stage;
  title?: Maybe<Scalars['String']>;
  /** The time the document was updated */
  updatedAt: Scalars['DateTime'];
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
};


export type PressArticleCreatedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};


export type PressArticleCreatedByArgs = {
  locales?: Maybe<Array<Locale>>;
};


export type PressArticleDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
  stages?: Array<Stage>;
};


export type PressArticleHistoryArgs = {
  limit?: Scalars['Int'];
  skip?: Scalars['Int'];
  stageOverride?: Maybe<Stage>;
};


export type PressArticleLocalizationsArgs = {
  includeCurrent?: Scalars['Boolean'];
  locales?: Array<Locale>;
};


export type PressArticlePublishedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};


export type PressArticlePublishedByArgs = {
  locales?: Maybe<Array<Locale>>;
};


export type PressArticleScheduledInArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  locales?: Maybe<Array<Locale>>;
  skip?: Maybe<Scalars['Int']>;
  where?: Maybe<ScheduledOperationWhereInput>;
};


export type PressArticleUpdatedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};


export type PressArticleUpdatedByArgs = {
  locales?: Maybe<Array<Locale>>;
};

export type PressArticleConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: Maybe<ConnectPositionInput>;
  /** Document to connect */
  where: PressArticleWhereUniqueInput;
};

/** A connection to a list of items. */
export type PressArticleConnection = {
  __typename?: 'PressArticleConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<PressArticleEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type PressArticleContentRichText = {
  __typename?: 'PressArticleContentRichText';
  /** Returns HTMl representation */
  html: Scalars['String'];
  json: Scalars['RichTextAST'];
  /** Returns Markdown representation */
  markdown: Scalars['String'];
  /** @deprecated Please use the 'json' field */
  raw: Scalars['RichTextAST'];
  references: Array<PressArticleContentRichTextEmbeddedTypes>;
  /** Returns plain-text contents of RichText */
  text: Scalars['String'];
};

export type PressArticleContentRichTextEmbeddedTypes = Asset;

export type PressArticleCreateInput = {
  /** abstract input for default locale (de) */
  abstract?: Maybe<Scalars['RichTextAST']>;
  /** content input for default locale (de) */
  content?: Maybe<Scalars['RichTextAST']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  date?: Maybe<Scalars['Date']>;
  /** Inline mutations for managing document localizations excluding the default locale */
  localizations?: Maybe<PressArticleCreateLocalizationsInput>;
  slug?: Maybe<Scalars['String']>;
  /** title input for default locale (de) */
  title?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type PressArticleCreateLocalizationDataInput = {
  abstract?: Maybe<Scalars['RichTextAST']>;
  content?: Maybe<Scalars['RichTextAST']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  title?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type PressArticleCreateLocalizationInput = {
  /** Localization input */
  data: PressArticleCreateLocalizationDataInput;
  locale: Locale;
};

export type PressArticleCreateLocalizationsInput = {
  /** Create localizations for the newly-created document */
  create?: Maybe<Array<PressArticleCreateLocalizationInput>>;
};

export type PressArticleCreateManyInlineInput = {
  /** Connect multiple existing PressArticle documents */
  connect?: Maybe<Array<PressArticleWhereUniqueInput>>;
  /** Create and connect multiple existing PressArticle documents */
  create?: Maybe<Array<PressArticleCreateInput>>;
};

export type PressArticleCreateOneInlineInput = {
  /** Connect one existing PressArticle document */
  connect?: Maybe<PressArticleWhereUniqueInput>;
  /** Create and connect one PressArticle document */
  create?: Maybe<PressArticleCreateInput>;
};

/** An edge in a connection. */
export type PressArticleEdge = {
  __typename?: 'PressArticleEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: PressArticle;
};

/** Identifies documents */
export type PressArticleManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<PressArticleWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<PressArticleWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<PressArticleWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  createdBy?: Maybe<UserWhereInput>;
  date?: Maybe<Scalars['Date']>;
  /** All values greater than the given value. */
  date_gt?: Maybe<Scalars['Date']>;
  /** All values greater than or equal the given value. */
  date_gte?: Maybe<Scalars['Date']>;
  /** All values that are contained in given list. */
  date_in?: Maybe<Array<Scalars['Date']>>;
  /** All values less than the given value. */
  date_lt?: Maybe<Scalars['Date']>;
  /** All values less than or equal the given value. */
  date_lte?: Maybe<Scalars['Date']>;
  /** All values that are not equal to given value. */
  date_not?: Maybe<Scalars['Date']>;
  /** All values that are not contained in given list. */
  date_not_in?: Maybe<Array<Scalars['Date']>>;
  id?: Maybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  publishedBy?: Maybe<UserWhereInput>;
  scheduledIn_every?: Maybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: Maybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: Maybe<ScheduledOperationWhereInput>;
  slug?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  slug_contains?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  slug_ends_with?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  slug_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  slug_not?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  slug_not_contains?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  slug_not_ends_with?: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  slug_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  slug_not_starts_with?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  slug_starts_with?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  updatedBy?: Maybe<UserWhereInput>;
};

export enum PressArticleOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  DateAsc = 'date_ASC',
  DateDesc = 'date_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

export type PressArticleUpdateInput = {
  /** abstract input for default locale (de) */
  abstract?: Maybe<Scalars['RichTextAST']>;
  /** content input for default locale (de) */
  content?: Maybe<Scalars['RichTextAST']>;
  date?: Maybe<Scalars['Date']>;
  /** Manage document localizations */
  localizations?: Maybe<PressArticleUpdateLocalizationsInput>;
  slug?: Maybe<Scalars['String']>;
  /** title input for default locale (de) */
  title?: Maybe<Scalars['String']>;
};

export type PressArticleUpdateLocalizationDataInput = {
  abstract?: Maybe<Scalars['RichTextAST']>;
  content?: Maybe<Scalars['RichTextAST']>;
  title?: Maybe<Scalars['String']>;
};

export type PressArticleUpdateLocalizationInput = {
  data: PressArticleUpdateLocalizationDataInput;
  locale: Locale;
};

export type PressArticleUpdateLocalizationsInput = {
  /** Localizations to create */
  create?: Maybe<Array<PressArticleCreateLocalizationInput>>;
  /** Localizations to delete */
  delete?: Maybe<Array<Locale>>;
  /** Localizations to update */
  update?: Maybe<Array<PressArticleUpdateLocalizationInput>>;
  upsert?: Maybe<Array<PressArticleUpsertLocalizationInput>>;
};

export type PressArticleUpdateManyInlineInput = {
  /** Connect multiple existing PressArticle documents */
  connect?: Maybe<Array<PressArticleConnectInput>>;
  /** Create and connect multiple PressArticle documents */
  create?: Maybe<Array<PressArticleCreateInput>>;
  /** Delete multiple PressArticle documents */
  delete?: Maybe<Array<PressArticleWhereUniqueInput>>;
  /** Disconnect multiple PressArticle documents */
  disconnect?: Maybe<Array<PressArticleWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing PressArticle documents */
  set?: Maybe<Array<PressArticleWhereUniqueInput>>;
  /** Update multiple PressArticle documents */
  update?: Maybe<Array<PressArticleUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple PressArticle documents */
  upsert?: Maybe<Array<PressArticleUpsertWithNestedWhereUniqueInput>>;
};

export type PressArticleUpdateManyInput = {
  /** abstract input for default locale (de) */
  abstract?: Maybe<Scalars['RichTextAST']>;
  /** content input for default locale (de) */
  content?: Maybe<Scalars['RichTextAST']>;
  date?: Maybe<Scalars['Date']>;
  /** Optional updates to localizations */
  localizations?: Maybe<PressArticleUpdateManyLocalizationsInput>;
  slug?: Maybe<Scalars['String']>;
  /** title input for default locale (de) */
  title?: Maybe<Scalars['String']>;
};

export type PressArticleUpdateManyLocalizationDataInput = {
  abstract?: Maybe<Scalars['RichTextAST']>;
  content?: Maybe<Scalars['RichTextAST']>;
  title?: Maybe<Scalars['String']>;
};

export type PressArticleUpdateManyLocalizationInput = {
  data: PressArticleUpdateManyLocalizationDataInput;
  locale: Locale;
};

export type PressArticleUpdateManyLocalizationsInput = {
  /** Localizations to update */
  update?: Maybe<Array<PressArticleUpdateManyLocalizationInput>>;
};

export type PressArticleUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: PressArticleUpdateManyInput;
  /** Document search */
  where: PressArticleWhereInput;
};

export type PressArticleUpdateOneInlineInput = {
  /** Connect existing PressArticle document */
  connect?: Maybe<PressArticleWhereUniqueInput>;
  /** Create and connect one PressArticle document */
  create?: Maybe<PressArticleCreateInput>;
  /** Delete currently connected PressArticle document */
  delete?: Maybe<Scalars['Boolean']>;
  /** Disconnect currently connected PressArticle document */
  disconnect?: Maybe<Scalars['Boolean']>;
  /** Update single PressArticle document */
  update?: Maybe<PressArticleUpdateWithNestedWhereUniqueInput>;
  /** Upsert single PressArticle document */
  upsert?: Maybe<PressArticleUpsertWithNestedWhereUniqueInput>;
};

export type PressArticleUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: PressArticleUpdateInput;
  /** Unique document search */
  where: PressArticleWhereUniqueInput;
};

export type PressArticleUpsertInput = {
  /** Create document if it didn't exist */
  create: PressArticleCreateInput;
  /** Update document if it exists */
  update: PressArticleUpdateInput;
};

export type PressArticleUpsertLocalizationInput = {
  create: PressArticleCreateLocalizationDataInput;
  locale: Locale;
  update: PressArticleUpdateLocalizationDataInput;
};

export type PressArticleUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: PressArticleUpsertInput;
  /** Unique document search */
  where: PressArticleWhereUniqueInput;
};

/** Identifies documents */
export type PressArticleWhereInput = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<PressArticleWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<PressArticleWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<PressArticleWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  createdBy?: Maybe<UserWhereInput>;
  date?: Maybe<Scalars['Date']>;
  /** All values greater than the given value. */
  date_gt?: Maybe<Scalars['Date']>;
  /** All values greater than or equal the given value. */
  date_gte?: Maybe<Scalars['Date']>;
  /** All values that are contained in given list. */
  date_in?: Maybe<Array<Scalars['Date']>>;
  /** All values less than the given value. */
  date_lt?: Maybe<Scalars['Date']>;
  /** All values less than or equal the given value. */
  date_lte?: Maybe<Scalars['Date']>;
  /** All values that are not equal to given value. */
  date_not?: Maybe<Scalars['Date']>;
  /** All values that are not contained in given list. */
  date_not_in?: Maybe<Array<Scalars['Date']>>;
  id?: Maybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  publishedBy?: Maybe<UserWhereInput>;
  scheduledIn_every?: Maybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: Maybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: Maybe<ScheduledOperationWhereInput>;
  slug?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  slug_contains?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  slug_ends_with?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  slug_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  slug_not?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  slug_not_contains?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  slug_not_ends_with?: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  slug_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  slug_not_starts_with?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  slug_starts_with?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  title_contains?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  title_ends_with?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  title_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  title_not?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  title_not_contains?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  title_not_ends_with?: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  title_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  title_not_starts_with?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  title_starts_with?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  updatedBy?: Maybe<UserWhereInput>;
};

/** References PressArticle record uniquely */
export type PressArticleWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>;
};

export type PressPhoto = Node & {
  __typename?: 'PressPhoto';
  /** The time the document was created */
  createdAt: Scalars['DateTime'];
  /** User that created this document */
  createdBy?: Maybe<User>;
  description?: Maybe<Scalars['String']>;
  /** Get the document in other stages */
  documentInStages: Array<PressPhoto>;
  /** List of PressPhoto versions */
  history: Array<Version>;
  /** The unique identifier */
  id: Scalars['ID'];
  photo?: Maybe<Asset>;
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  scheduledIn: Array<ScheduledOperation>;
  /** System stage field */
  stage: Stage;
  /** The time the document was updated */
  updatedAt: Scalars['DateTime'];
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
};


export type PressPhotoCreatedByArgs = {
  locales?: Maybe<Array<Locale>>;
};


export type PressPhotoDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
  stages?: Array<Stage>;
};


export type PressPhotoHistoryArgs = {
  limit?: Scalars['Int'];
  skip?: Scalars['Int'];
  stageOverride?: Maybe<Stage>;
};


export type PressPhotoPhotoArgs = {
  locales?: Maybe<Array<Locale>>;
};


export type PressPhotoPublishedByArgs = {
  locales?: Maybe<Array<Locale>>;
};


export type PressPhotoScheduledInArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  locales?: Maybe<Array<Locale>>;
  skip?: Maybe<Scalars['Int']>;
  where?: Maybe<ScheduledOperationWhereInput>;
};


export type PressPhotoUpdatedByArgs = {
  locales?: Maybe<Array<Locale>>;
};

export type PressPhotoConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: Maybe<ConnectPositionInput>;
  /** Document to connect */
  where: PressPhotoWhereUniqueInput;
};

/** A connection to a list of items. */
export type PressPhotoConnection = {
  __typename?: 'PressPhotoConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<PressPhotoEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type PressPhotoCreateInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  photo?: Maybe<AssetCreateOneInlineInput>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type PressPhotoCreateManyInlineInput = {
  /** Connect multiple existing PressPhoto documents */
  connect?: Maybe<Array<PressPhotoWhereUniqueInput>>;
  /** Create and connect multiple existing PressPhoto documents */
  create?: Maybe<Array<PressPhotoCreateInput>>;
};

export type PressPhotoCreateOneInlineInput = {
  /** Connect one existing PressPhoto document */
  connect?: Maybe<PressPhotoWhereUniqueInput>;
  /** Create and connect one PressPhoto document */
  create?: Maybe<PressPhotoCreateInput>;
};

/** An edge in a connection. */
export type PressPhotoEdge = {
  __typename?: 'PressPhotoEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: PressPhoto;
};

/** Identifies documents */
export type PressPhotoManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<PressPhotoWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<PressPhotoWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<PressPhotoWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  createdBy?: Maybe<UserWhereInput>;
  description?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  description_contains?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  description_ends_with?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  description_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  description_not?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  description_not_contains?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  description_not_ends_with?: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  description_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  description_not_starts_with?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  description_starts_with?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  photo?: Maybe<AssetWhereInput>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  publishedBy?: Maybe<UserWhereInput>;
  scheduledIn_every?: Maybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: Maybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: Maybe<ScheduledOperationWhereInput>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  updatedBy?: Maybe<UserWhereInput>;
};

export enum PressPhotoOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  DescriptionAsc = 'description_ASC',
  DescriptionDesc = 'description_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

export type PressPhotoUpdateInput = {
  description?: Maybe<Scalars['String']>;
  photo?: Maybe<AssetUpdateOneInlineInput>;
};

export type PressPhotoUpdateManyInlineInput = {
  /** Connect multiple existing PressPhoto documents */
  connect?: Maybe<Array<PressPhotoConnectInput>>;
  /** Create and connect multiple PressPhoto documents */
  create?: Maybe<Array<PressPhotoCreateInput>>;
  /** Delete multiple PressPhoto documents */
  delete?: Maybe<Array<PressPhotoWhereUniqueInput>>;
  /** Disconnect multiple PressPhoto documents */
  disconnect?: Maybe<Array<PressPhotoWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing PressPhoto documents */
  set?: Maybe<Array<PressPhotoWhereUniqueInput>>;
  /** Update multiple PressPhoto documents */
  update?: Maybe<Array<PressPhotoUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple PressPhoto documents */
  upsert?: Maybe<Array<PressPhotoUpsertWithNestedWhereUniqueInput>>;
};

export type PressPhotoUpdateManyInput = {
  description?: Maybe<Scalars['String']>;
};

export type PressPhotoUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: PressPhotoUpdateManyInput;
  /** Document search */
  where: PressPhotoWhereInput;
};

export type PressPhotoUpdateOneInlineInput = {
  /** Connect existing PressPhoto document */
  connect?: Maybe<PressPhotoWhereUniqueInput>;
  /** Create and connect one PressPhoto document */
  create?: Maybe<PressPhotoCreateInput>;
  /** Delete currently connected PressPhoto document */
  delete?: Maybe<Scalars['Boolean']>;
  /** Disconnect currently connected PressPhoto document */
  disconnect?: Maybe<Scalars['Boolean']>;
  /** Update single PressPhoto document */
  update?: Maybe<PressPhotoUpdateWithNestedWhereUniqueInput>;
  /** Upsert single PressPhoto document */
  upsert?: Maybe<PressPhotoUpsertWithNestedWhereUniqueInput>;
};

export type PressPhotoUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: PressPhotoUpdateInput;
  /** Unique document search */
  where: PressPhotoWhereUniqueInput;
};

export type PressPhotoUpsertInput = {
  /** Create document if it didn't exist */
  create: PressPhotoCreateInput;
  /** Update document if it exists */
  update: PressPhotoUpdateInput;
};

export type PressPhotoUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: PressPhotoUpsertInput;
  /** Unique document search */
  where: PressPhotoWhereUniqueInput;
};

/** Identifies documents */
export type PressPhotoWhereInput = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<PressPhotoWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<PressPhotoWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<PressPhotoWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  createdBy?: Maybe<UserWhereInput>;
  description?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  description_contains?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  description_ends_with?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  description_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  description_not?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  description_not_contains?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  description_not_ends_with?: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  description_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  description_not_starts_with?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  description_starts_with?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  photo?: Maybe<AssetWhereInput>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  publishedBy?: Maybe<UserWhereInput>;
  scheduledIn_every?: Maybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: Maybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: Maybe<ScheduledOperationWhereInput>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  updatedBy?: Maybe<UserWhereInput>;
};

/** References PressPhoto record uniquely */
export type PressPhotoWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>;
};

export type PressReport = Node & {
  __typename?: 'PressReport';
  /** The time the document was created */
  createdAt: Scalars['DateTime'];
  /** User that created this document */
  createdBy?: Maybe<User>;
  description?: Maybe<RichText>;
  /** Get the document in other stages */
  documentInStages: Array<PressReport>;
  /** List of PressReport versions */
  history: Array<Version>;
  /** The unique identifier */
  id: Scalars['ID'];
  link?: Maybe<Scalars['String']>;
  /** System Locale field */
  locale: Locale;
  /** Get the other localizations for this document */
  localizations: Array<PressReport>;
  photo?: Maybe<Asset>;
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  scheduledIn: Array<ScheduledOperation>;
  /** System stage field */
  stage: Stage;
  title?: Maybe<Scalars['String']>;
  /** The time the document was updated */
  updatedAt: Scalars['DateTime'];
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
};


export type PressReportCreatedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};


export type PressReportCreatedByArgs = {
  locales?: Maybe<Array<Locale>>;
};


export type PressReportDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
  stages?: Array<Stage>;
};


export type PressReportHistoryArgs = {
  limit?: Scalars['Int'];
  skip?: Scalars['Int'];
  stageOverride?: Maybe<Stage>;
};


export type PressReportLocalizationsArgs = {
  includeCurrent?: Scalars['Boolean'];
  locales?: Array<Locale>;
};


export type PressReportPhotoArgs = {
  locales?: Maybe<Array<Locale>>;
};


export type PressReportPublishedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};


export type PressReportPublishedByArgs = {
  locales?: Maybe<Array<Locale>>;
};


export type PressReportScheduledInArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  locales?: Maybe<Array<Locale>>;
  skip?: Maybe<Scalars['Int']>;
  where?: Maybe<ScheduledOperationWhereInput>;
};


export type PressReportUpdatedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};


export type PressReportUpdatedByArgs = {
  locales?: Maybe<Array<Locale>>;
};

export type PressReportConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: Maybe<ConnectPositionInput>;
  /** Document to connect */
  where: PressReportWhereUniqueInput;
};

/** A connection to a list of items. */
export type PressReportConnection = {
  __typename?: 'PressReportConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<PressReportEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type PressReportCreateInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  /** description input for default locale (de) */
  description?: Maybe<Scalars['RichTextAST']>;
  link?: Maybe<Scalars['String']>;
  /** Inline mutations for managing document localizations excluding the default locale */
  localizations?: Maybe<PressReportCreateLocalizationsInput>;
  photo?: Maybe<AssetCreateOneInlineInput>;
  /** title input for default locale (de) */
  title?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type PressReportCreateLocalizationDataInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['RichTextAST']>;
  title?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type PressReportCreateLocalizationInput = {
  /** Localization input */
  data: PressReportCreateLocalizationDataInput;
  locale: Locale;
};

export type PressReportCreateLocalizationsInput = {
  /** Create localizations for the newly-created document */
  create?: Maybe<Array<PressReportCreateLocalizationInput>>;
};

export type PressReportCreateManyInlineInput = {
  /** Connect multiple existing PressReport documents */
  connect?: Maybe<Array<PressReportWhereUniqueInput>>;
  /** Create and connect multiple existing PressReport documents */
  create?: Maybe<Array<PressReportCreateInput>>;
};

export type PressReportCreateOneInlineInput = {
  /** Connect one existing PressReport document */
  connect?: Maybe<PressReportWhereUniqueInput>;
  /** Create and connect one PressReport document */
  create?: Maybe<PressReportCreateInput>;
};

/** An edge in a connection. */
export type PressReportEdge = {
  __typename?: 'PressReportEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: PressReport;
};

/** Identifies documents */
export type PressReportManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<PressReportWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<PressReportWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<PressReportWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  createdBy?: Maybe<UserWhereInput>;
  id?: Maybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  link?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  link_contains?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  link_ends_with?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  link_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  link_not?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  link_not_contains?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  link_not_ends_with?: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  link_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  link_not_starts_with?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  link_starts_with?: Maybe<Scalars['String']>;
  photo?: Maybe<AssetWhereInput>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  publishedBy?: Maybe<UserWhereInput>;
  scheduledIn_every?: Maybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: Maybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: Maybe<ScheduledOperationWhereInput>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  updatedBy?: Maybe<UserWhereInput>;
};

export enum PressReportOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  LinkAsc = 'link_ASC',
  LinkDesc = 'link_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

export type PressReportUpdateInput = {
  /** description input for default locale (de) */
  description?: Maybe<Scalars['RichTextAST']>;
  link?: Maybe<Scalars['String']>;
  /** Manage document localizations */
  localizations?: Maybe<PressReportUpdateLocalizationsInput>;
  photo?: Maybe<AssetUpdateOneInlineInput>;
  /** title input for default locale (de) */
  title?: Maybe<Scalars['String']>;
};

export type PressReportUpdateLocalizationDataInput = {
  description?: Maybe<Scalars['RichTextAST']>;
  title?: Maybe<Scalars['String']>;
};

export type PressReportUpdateLocalizationInput = {
  data: PressReportUpdateLocalizationDataInput;
  locale: Locale;
};

export type PressReportUpdateLocalizationsInput = {
  /** Localizations to create */
  create?: Maybe<Array<PressReportCreateLocalizationInput>>;
  /** Localizations to delete */
  delete?: Maybe<Array<Locale>>;
  /** Localizations to update */
  update?: Maybe<Array<PressReportUpdateLocalizationInput>>;
  upsert?: Maybe<Array<PressReportUpsertLocalizationInput>>;
};

export type PressReportUpdateManyInlineInput = {
  /** Connect multiple existing PressReport documents */
  connect?: Maybe<Array<PressReportConnectInput>>;
  /** Create and connect multiple PressReport documents */
  create?: Maybe<Array<PressReportCreateInput>>;
  /** Delete multiple PressReport documents */
  delete?: Maybe<Array<PressReportWhereUniqueInput>>;
  /** Disconnect multiple PressReport documents */
  disconnect?: Maybe<Array<PressReportWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing PressReport documents */
  set?: Maybe<Array<PressReportWhereUniqueInput>>;
  /** Update multiple PressReport documents */
  update?: Maybe<Array<PressReportUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple PressReport documents */
  upsert?: Maybe<Array<PressReportUpsertWithNestedWhereUniqueInput>>;
};

export type PressReportUpdateManyInput = {
  /** description input for default locale (de) */
  description?: Maybe<Scalars['RichTextAST']>;
  link?: Maybe<Scalars['String']>;
  /** Optional updates to localizations */
  localizations?: Maybe<PressReportUpdateManyLocalizationsInput>;
  /** title input for default locale (de) */
  title?: Maybe<Scalars['String']>;
};

export type PressReportUpdateManyLocalizationDataInput = {
  description?: Maybe<Scalars['RichTextAST']>;
  title?: Maybe<Scalars['String']>;
};

export type PressReportUpdateManyLocalizationInput = {
  data: PressReportUpdateManyLocalizationDataInput;
  locale: Locale;
};

export type PressReportUpdateManyLocalizationsInput = {
  /** Localizations to update */
  update?: Maybe<Array<PressReportUpdateManyLocalizationInput>>;
};

export type PressReportUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: PressReportUpdateManyInput;
  /** Document search */
  where: PressReportWhereInput;
};

export type PressReportUpdateOneInlineInput = {
  /** Connect existing PressReport document */
  connect?: Maybe<PressReportWhereUniqueInput>;
  /** Create and connect one PressReport document */
  create?: Maybe<PressReportCreateInput>;
  /** Delete currently connected PressReport document */
  delete?: Maybe<Scalars['Boolean']>;
  /** Disconnect currently connected PressReport document */
  disconnect?: Maybe<Scalars['Boolean']>;
  /** Update single PressReport document */
  update?: Maybe<PressReportUpdateWithNestedWhereUniqueInput>;
  /** Upsert single PressReport document */
  upsert?: Maybe<PressReportUpsertWithNestedWhereUniqueInput>;
};

export type PressReportUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: PressReportUpdateInput;
  /** Unique document search */
  where: PressReportWhereUniqueInput;
};

export type PressReportUpsertInput = {
  /** Create document if it didn't exist */
  create: PressReportCreateInput;
  /** Update document if it exists */
  update: PressReportUpdateInput;
};

export type PressReportUpsertLocalizationInput = {
  create: PressReportCreateLocalizationDataInput;
  locale: Locale;
  update: PressReportUpdateLocalizationDataInput;
};

export type PressReportUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: PressReportUpsertInput;
  /** Unique document search */
  where: PressReportWhereUniqueInput;
};

/** Identifies documents */
export type PressReportWhereInput = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<PressReportWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<PressReportWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<PressReportWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  createdBy?: Maybe<UserWhereInput>;
  id?: Maybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  link?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  link_contains?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  link_ends_with?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  link_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  link_not?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  link_not_contains?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  link_not_ends_with?: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  link_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  link_not_starts_with?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  link_starts_with?: Maybe<Scalars['String']>;
  photo?: Maybe<AssetWhereInput>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  publishedBy?: Maybe<UserWhereInput>;
  scheduledIn_every?: Maybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: Maybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: Maybe<ScheduledOperationWhereInput>;
  title?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  title_contains?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  title_ends_with?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  title_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  title_not?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  title_not_contains?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  title_not_ends_with?: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  title_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  title_not_starts_with?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  title_starts_with?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  updatedBy?: Maybe<UserWhereInput>;
};

/** References PressReport record uniquely */
export type PressReportWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>;
};

export type PublishLocaleInput = {
  /** Locales to publish */
  locale: Locale;
  /** Stages to publish selected locales to */
  stages: Array<Stage>;
};

export type Query = {
  __typename?: 'Query';
  /** Retrieve a single asset */
  asset?: Maybe<Asset>;
  /** Retrieve document version */
  assetVersion?: Maybe<DocumentVersion>;
  /** Retrieve multiple assets */
  assets: Array<Asset>;
  /** Retrieve multiple assets using the Relay connection interface */
  assetsConnection: AssetConnection;
  /** Retrieve a single blog */
  blog?: Maybe<Blog>;
  /** Retrieve document version */
  blogVersion?: Maybe<DocumentVersion>;
  /** Retrieve multiple blogs */
  blogs: Array<Blog>;
  /** Retrieve multiple blogs using the Relay connection interface */
  blogsConnection: BlogConnection;
  /** Retrieve a single cityPartner */
  cityPartner?: Maybe<CityPartner>;
  /** Retrieve document version */
  cityPartnerVersion?: Maybe<DocumentVersion>;
  /** Retrieve multiple cityPartners */
  cityPartners: Array<CityPartner>;
  /** Retrieve multiple cityPartners using the Relay connection interface */
  cityPartnersConnection: CityPartnerConnection;
  /** Retrieve a single faq */
  faq?: Maybe<Faq>;
  /** Retrieve document version */
  faqVersion?: Maybe<DocumentVersion>;
  /** Retrieve multiple faqs */
  faqs: Array<Faq>;
  /** Retrieve multiple faqs using the Relay connection interface */
  faqsConnection: FaqConnection;
  /** Retrieve a single kpi */
  kpi?: Maybe<Kpi>;
  /** Retrieve document version */
  kpiVersion?: Maybe<DocumentVersion>;
  /** Retrieve multiple kpis */
  kpis: Array<Kpi>;
  /** Retrieve multiple kpis using the Relay connection interface */
  kpisConnection: KpiConnection;
  /** Retrieve a single member */
  member?: Maybe<Member>;
  /** Retrieve document version */
  memberVersion?: Maybe<DocumentVersion>;
  /** Retrieve multiple members */
  members: Array<Member>;
  /** Retrieve multiple members using the Relay connection interface */
  membersConnection: MemberConnection;
  /** Retrieve a single network */
  network?: Maybe<Network>;
  /** Retrieve document version */
  networkVersion?: Maybe<DocumentVersion>;
  /** Retrieve multiple networks */
  networks: Array<Network>;
  /** Retrieve multiple networks using the Relay connection interface */
  networksConnection: NetworkConnection;
  /** Fetches an object given its ID */
  node?: Maybe<Node>;
  /** Retrieve a single page */
  page?: Maybe<Page>;
  /** Retrieve a single pageSection */
  pageSection?: Maybe<PageSection>;
  /** Retrieve document version */
  pageSectionVersion?: Maybe<DocumentVersion>;
  /** Retrieve multiple pageSections */
  pageSections: Array<PageSection>;
  /** Retrieve multiple pageSections using the Relay connection interface */
  pageSectionsConnection: PageSectionConnection;
  /** Retrieve document version */
  pageVersion?: Maybe<DocumentVersion>;
  /** Retrieve multiple pages */
  pages: Array<Page>;
  /** Retrieve multiple pages using the Relay connection interface */
  pagesConnection: PageConnection;
  /** Retrieve a single pressArticle */
  pressArticle?: Maybe<PressArticle>;
  /** Retrieve document version */
  pressArticleVersion?: Maybe<DocumentVersion>;
  /** Retrieve multiple pressArticles */
  pressArticles: Array<PressArticle>;
  /** Retrieve multiple pressArticles using the Relay connection interface */
  pressArticlesConnection: PressArticleConnection;
  /** Retrieve a single pressPhoto */
  pressPhoto?: Maybe<PressPhoto>;
  /** Retrieve document version */
  pressPhotoVersion?: Maybe<DocumentVersion>;
  /** Retrieve multiple pressPhotos */
  pressPhotos: Array<PressPhoto>;
  /** Retrieve multiple pressPhotos using the Relay connection interface */
  pressPhotosConnection: PressPhotoConnection;
  /** Retrieve a single pressReport */
  pressReport?: Maybe<PressReport>;
  /** Retrieve document version */
  pressReportVersion?: Maybe<DocumentVersion>;
  /** Retrieve multiple pressReports */
  pressReports: Array<PressReport>;
  /** Retrieve multiple pressReports using the Relay connection interface */
  pressReportsConnection: PressReportConnection;
  /** Retrieve a single scheduledOperation */
  scheduledOperation?: Maybe<ScheduledOperation>;
  /** Retrieve multiple scheduledOperations */
  scheduledOperations: Array<ScheduledOperation>;
  /** Retrieve multiple scheduledOperations using the Relay connection interface */
  scheduledOperationsConnection: ScheduledOperationConnection;
  /** Retrieve a single scheduledRelease */
  scheduledRelease?: Maybe<ScheduledRelease>;
  /** Retrieve multiple scheduledReleases */
  scheduledReleases: Array<ScheduledRelease>;
  /** Retrieve multiple scheduledReleases using the Relay connection interface */
  scheduledReleasesConnection: ScheduledReleaseConnection;
  /** Retrieve a single shop */
  shop?: Maybe<Shop>;
  /** Retrieve a single shopBundesland */
  shopBundesland?: Maybe<ShopBundesland>;
  /** Retrieve document version */
  shopBundeslandVersion?: Maybe<DocumentVersion>;
  /** Retrieve multiple shopBundeslands */
  shopBundeslands: Array<ShopBundesland>;
  /** Retrieve multiple shopBundeslands using the Relay connection interface */
  shopBundeslandsConnection: ShopBundeslandConnection;
  /** Retrieve multiple shopCategories */
  shopCategories: Array<ShopCategory>;
  /** Retrieve multiple shopCategories using the Relay connection interface */
  shopCategoriesConnection: ShopCategoryConnection;
  /** Retrieve a single shopCategory */
  shopCategory?: Maybe<ShopCategory>;
  /** Retrieve document version */
  shopCategoryVersion?: Maybe<DocumentVersion>;
  /** Retrieve a single shopStatus */
  shopStatus?: Maybe<ShopStatus>;
  /** Retrieve document version */
  shopStatusVersion?: Maybe<DocumentVersion>;
  /** Retrieve multiple shopStatuses */
  shopStatuses: Array<ShopStatus>;
  /** Retrieve multiple shopStatuses using the Relay connection interface */
  shopStatusesConnection: ShopStatusConnection;
  /** Retrieve a single shopTown */
  shopTown?: Maybe<ShopTown>;
  /** Retrieve document version */
  shopTownVersion?: Maybe<DocumentVersion>;
  /** Retrieve multiple shopTowns */
  shopTowns: Array<ShopTown>;
  /** Retrieve multiple shopTowns using the Relay connection interface */
  shopTownsConnection: ShopTownConnection;
  /** Retrieve a single shopType */
  shopType?: Maybe<ShopType>;
  /** Retrieve document version */
  shopTypeVersion?: Maybe<DocumentVersion>;
  /** Retrieve multiple shopTypes */
  shopTypes: Array<ShopType>;
  /** Retrieve multiple shopTypes using the Relay connection interface */
  shopTypesConnection: ShopTypeConnection;
  /** Retrieve document version */
  shopVersion?: Maybe<DocumentVersion>;
  /** Retrieve multiple shops */
  shops: Array<Shop>;
  /** Retrieve multiple shops using the Relay connection interface */
  shopsConnection: ShopConnection;
  /** Retrieve a single supporter */
  supporter?: Maybe<Supporter>;
  /** Retrieve document version */
  supporterVersion?: Maybe<DocumentVersion>;
  /** Retrieve multiple supporters */
  supporters: Array<Supporter>;
  /** Retrieve multiple supporters using the Relay connection interface */
  supportersConnection: SupporterConnection;
  /** Retrieve a single translation */
  translation?: Maybe<Translation>;
  /** Retrieve document version */
  translationVersion?: Maybe<DocumentVersion>;
  /** Retrieve multiple translations */
  translations: Array<Translation>;
  /** Retrieve multiple translations using the Relay connection interface */
  translationsConnection: TranslationConnection;
  /** Retrieve a single user */
  user?: Maybe<User>;
  /** Retrieve multiple users */
  users: Array<User>;
  /** Retrieve multiple users using the Relay connection interface */
  usersConnection: UserConnection;
};


export type QueryAssetArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: AssetWhereUniqueInput;
};


export type QueryAssetVersionArgs = {
  where: VersionWhereInput;
};


export type QueryAssetsArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: Maybe<AssetOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  stage?: Stage;
  where?: Maybe<AssetWhereInput>;
};


export type QueryAssetsConnectionArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: Maybe<AssetOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  stage?: Stage;
  where?: Maybe<AssetWhereInput>;
};


export type QueryBlogArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: BlogWhereUniqueInput;
};


export type QueryBlogVersionArgs = {
  where: VersionWhereInput;
};


export type QueryBlogsArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: Maybe<BlogOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  stage?: Stage;
  where?: Maybe<BlogWhereInput>;
};


export type QueryBlogsConnectionArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: Maybe<BlogOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  stage?: Stage;
  where?: Maybe<BlogWhereInput>;
};


export type QueryCityPartnerArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: CityPartnerWhereUniqueInput;
};


export type QueryCityPartnerVersionArgs = {
  where: VersionWhereInput;
};


export type QueryCityPartnersArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: Maybe<CityPartnerOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  stage?: Stage;
  where?: Maybe<CityPartnerWhereInput>;
};


export type QueryCityPartnersConnectionArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: Maybe<CityPartnerOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  stage?: Stage;
  where?: Maybe<CityPartnerWhereInput>;
};


export type QueryFaqArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: FaqWhereUniqueInput;
};


export type QueryFaqVersionArgs = {
  where: VersionWhereInput;
};


export type QueryFaqsArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: Maybe<FaqOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  stage?: Stage;
  where?: Maybe<FaqWhereInput>;
};


export type QueryFaqsConnectionArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: Maybe<FaqOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  stage?: Stage;
  where?: Maybe<FaqWhereInput>;
};


export type QueryKpiArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: KpiWhereUniqueInput;
};


export type QueryKpiVersionArgs = {
  where: VersionWhereInput;
};


export type QueryKpisArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: Maybe<KpiOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  stage?: Stage;
  where?: Maybe<KpiWhereInput>;
};


export type QueryKpisConnectionArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: Maybe<KpiOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  stage?: Stage;
  where?: Maybe<KpiWhereInput>;
};


export type QueryMemberArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: MemberWhereUniqueInput;
};


export type QueryMemberVersionArgs = {
  where: VersionWhereInput;
};


export type QueryMembersArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: Maybe<MemberOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  stage?: Stage;
  where?: Maybe<MemberWhereInput>;
};


export type QueryMembersConnectionArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: Maybe<MemberOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  stage?: Stage;
  where?: Maybe<MemberWhereInput>;
};


export type QueryNetworkArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: NetworkWhereUniqueInput;
};


export type QueryNetworkVersionArgs = {
  where: VersionWhereInput;
};


export type QueryNetworksArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: Maybe<NetworkOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  stage?: Stage;
  where?: Maybe<NetworkWhereInput>;
};


export type QueryNetworksConnectionArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: Maybe<NetworkOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  stage?: Stage;
  where?: Maybe<NetworkWhereInput>;
};


export type QueryNodeArgs = {
  id: Scalars['ID'];
  locales?: Array<Locale>;
  stage?: Stage;
};


export type QueryPageArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: PageWhereUniqueInput;
};


export type QueryPageSectionArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: PageSectionWhereUniqueInput;
};


export type QueryPageSectionVersionArgs = {
  where: VersionWhereInput;
};


export type QueryPageSectionsArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: Maybe<PageSectionOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  stage?: Stage;
  where?: Maybe<PageSectionWhereInput>;
};


export type QueryPageSectionsConnectionArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: Maybe<PageSectionOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  stage?: Stage;
  where?: Maybe<PageSectionWhereInput>;
};


export type QueryPageVersionArgs = {
  where: VersionWhereInput;
};


export type QueryPagesArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: Maybe<PageOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  stage?: Stage;
  where?: Maybe<PageWhereInput>;
};


export type QueryPagesConnectionArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: Maybe<PageOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  stage?: Stage;
  where?: Maybe<PageWhereInput>;
};


export type QueryPressArticleArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: PressArticleWhereUniqueInput;
};


export type QueryPressArticleVersionArgs = {
  where: VersionWhereInput;
};


export type QueryPressArticlesArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: Maybe<PressArticleOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  stage?: Stage;
  where?: Maybe<PressArticleWhereInput>;
};


export type QueryPressArticlesConnectionArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: Maybe<PressArticleOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  stage?: Stage;
  where?: Maybe<PressArticleWhereInput>;
};


export type QueryPressPhotoArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: PressPhotoWhereUniqueInput;
};


export type QueryPressPhotoVersionArgs = {
  where: VersionWhereInput;
};


export type QueryPressPhotosArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: Maybe<PressPhotoOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  stage?: Stage;
  where?: Maybe<PressPhotoWhereInput>;
};


export type QueryPressPhotosConnectionArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: Maybe<PressPhotoOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  stage?: Stage;
  where?: Maybe<PressPhotoWhereInput>;
};


export type QueryPressReportArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: PressReportWhereUniqueInput;
};


export type QueryPressReportVersionArgs = {
  where: VersionWhereInput;
};


export type QueryPressReportsArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: Maybe<PressReportOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  stage?: Stage;
  where?: Maybe<PressReportWhereInput>;
};


export type QueryPressReportsConnectionArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: Maybe<PressReportOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  stage?: Stage;
  where?: Maybe<PressReportWhereInput>;
};


export type QueryScheduledOperationArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: ScheduledOperationWhereUniqueInput;
};


export type QueryScheduledOperationsArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: Maybe<ScheduledOperationOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  stage?: Stage;
  where?: Maybe<ScheduledOperationWhereInput>;
};


export type QueryScheduledOperationsConnectionArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: Maybe<ScheduledOperationOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  stage?: Stage;
  where?: Maybe<ScheduledOperationWhereInput>;
};


export type QueryScheduledReleaseArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: ScheduledReleaseWhereUniqueInput;
};


export type QueryScheduledReleasesArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: Maybe<ScheduledReleaseOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  stage?: Stage;
  where?: Maybe<ScheduledReleaseWhereInput>;
};


export type QueryScheduledReleasesConnectionArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: Maybe<ScheduledReleaseOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  stage?: Stage;
  where?: Maybe<ScheduledReleaseWhereInput>;
};


export type QueryShopArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: ShopWhereUniqueInput;
};


export type QueryShopBundeslandArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: ShopBundeslandWhereUniqueInput;
};


export type QueryShopBundeslandVersionArgs = {
  where: VersionWhereInput;
};


export type QueryShopBundeslandsArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: Maybe<ShopBundeslandOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  stage?: Stage;
  where?: Maybe<ShopBundeslandWhereInput>;
};


export type QueryShopBundeslandsConnectionArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: Maybe<ShopBundeslandOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  stage?: Stage;
  where?: Maybe<ShopBundeslandWhereInput>;
};


export type QueryShopCategoriesArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: Maybe<ShopCategoryOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  stage?: Stage;
  where?: Maybe<ShopCategoryWhereInput>;
};


export type QueryShopCategoriesConnectionArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: Maybe<ShopCategoryOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  stage?: Stage;
  where?: Maybe<ShopCategoryWhereInput>;
};


export type QueryShopCategoryArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: ShopCategoryWhereUniqueInput;
};


export type QueryShopCategoryVersionArgs = {
  where: VersionWhereInput;
};


export type QueryShopStatusArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: ShopStatusWhereUniqueInput;
};


export type QueryShopStatusVersionArgs = {
  where: VersionWhereInput;
};


export type QueryShopStatusesArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: Maybe<ShopStatusOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  stage?: Stage;
  where?: Maybe<ShopStatusWhereInput>;
};


export type QueryShopStatusesConnectionArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: Maybe<ShopStatusOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  stage?: Stage;
  where?: Maybe<ShopStatusWhereInput>;
};


export type QueryShopTownArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: ShopTownWhereUniqueInput;
};


export type QueryShopTownVersionArgs = {
  where: VersionWhereInput;
};


export type QueryShopTownsArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: Maybe<ShopTownOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  stage?: Stage;
  where?: Maybe<ShopTownWhereInput>;
};


export type QueryShopTownsConnectionArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: Maybe<ShopTownOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  stage?: Stage;
  where?: Maybe<ShopTownWhereInput>;
};


export type QueryShopTypeArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: ShopTypeWhereUniqueInput;
};


export type QueryShopTypeVersionArgs = {
  where: VersionWhereInput;
};


export type QueryShopTypesArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: Maybe<ShopTypeOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  stage?: Stage;
  where?: Maybe<ShopTypeWhereInput>;
};


export type QueryShopTypesConnectionArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: Maybe<ShopTypeOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  stage?: Stage;
  where?: Maybe<ShopTypeWhereInput>;
};


export type QueryShopVersionArgs = {
  where: VersionWhereInput;
};


export type QueryShopsArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: Maybe<ShopOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  stage?: Stage;
  where?: Maybe<ShopWhereInput>;
};


export type QueryShopsConnectionArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: Maybe<ShopOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  stage?: Stage;
  where?: Maybe<ShopWhereInput>;
};


export type QuerySupporterArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: SupporterWhereUniqueInput;
};


export type QuerySupporterVersionArgs = {
  where: VersionWhereInput;
};


export type QuerySupportersArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: Maybe<SupporterOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  stage?: Stage;
  where?: Maybe<SupporterWhereInput>;
};


export type QuerySupportersConnectionArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: Maybe<SupporterOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  stage?: Stage;
  where?: Maybe<SupporterWhereInput>;
};


export type QueryTranslationArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: TranslationWhereUniqueInput;
};


export type QueryTranslationVersionArgs = {
  where: VersionWhereInput;
};


export type QueryTranslationsArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: Maybe<TranslationOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  stage?: Stage;
  where?: Maybe<TranslationWhereInput>;
};


export type QueryTranslationsConnectionArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: Maybe<TranslationOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  stage?: Stage;
  where?: Maybe<TranslationWhereInput>;
};


export type QueryUserArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: UserWhereUniqueInput;
};


export type QueryUsersArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: Maybe<UserOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  stage?: Stage;
  where?: Maybe<UserWhereInput>;
};


export type QueryUsersConnectionArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: Maybe<UserOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  stage?: Stage;
  where?: Maybe<UserWhereInput>;
};

/** Representing a RGBA color value: https://developer.mozilla.org/en-US/docs/Web/CSS/color_value#rgb()_and_rgba() */
export type Rgba = {
  __typename?: 'RGBA';
  a: Scalars['RGBATransparency'];
  b: Scalars['RGBAHue'];
  g: Scalars['RGBAHue'];
  r: Scalars['RGBAHue'];
};

/** Input type representing a RGBA color value: https://developer.mozilla.org/en-US/docs/Web/CSS/color_value#rgb()_and_rgba() */
export type RgbaInput = {
  a: Scalars['RGBATransparency'];
  b: Scalars['RGBAHue'];
  g: Scalars['RGBAHue'];
  r: Scalars['RGBAHue'];
};

/** Custom type representing a rich text value comprising of raw rich text ast, html, markdown and text values */
export type RichText = {
  __typename?: 'RichText';
  /** Returns HTMl representation */
  html: Scalars['String'];
  /** Returns Markdown representation */
  markdown: Scalars['String'];
  /** Returns AST representation */
  raw: Scalars['RichTextAST'];
  /** Returns plain-text contents of RichText */
  text: Scalars['String'];
};

/** Scheduled Operation system model */
export type ScheduledOperation = Node & {
  __typename?: 'ScheduledOperation';
  affectedDocuments: Array<ScheduledOperationAffectedDocument>;
  /** The time the document was created */
  createdAt: Scalars['DateTime'];
  /** User that created this document */
  createdBy?: Maybe<User>;
  /** Operation description */
  description?: Maybe<Scalars['String']>;
  /** Get the document in other stages */
  documentInStages: Array<ScheduledOperation>;
  /** Operation error message */
  errorMessage?: Maybe<Scalars['String']>;
  /** The unique identifier */
  id: Scalars['ID'];
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  /** Raw operation payload including all details, this field is subject to change */
  rawPayload: Scalars['Json'];
  /** The release this operation is scheduled for */
  release?: Maybe<ScheduledRelease>;
  /** System stage field */
  stage: Stage;
  /** operation Status */
  status: ScheduledOperationStatus;
  /** The time the document was updated */
  updatedAt: Scalars['DateTime'];
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
};


/** Scheduled Operation system model */
export type ScheduledOperationAffectedDocumentsArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  locales?: Maybe<Array<Locale>>;
  skip?: Maybe<Scalars['Int']>;
};


/** Scheduled Operation system model */
export type ScheduledOperationCreatedByArgs = {
  locales?: Maybe<Array<Locale>>;
};


/** Scheduled Operation system model */
export type ScheduledOperationDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
  stages?: Array<Stage>;
};


/** Scheduled Operation system model */
export type ScheduledOperationPublishedByArgs = {
  locales?: Maybe<Array<Locale>>;
};


/** Scheduled Operation system model */
export type ScheduledOperationReleaseArgs = {
  locales?: Maybe<Array<Locale>>;
};


/** Scheduled Operation system model */
export type ScheduledOperationUpdatedByArgs = {
  locales?: Maybe<Array<Locale>>;
};

export type ScheduledOperationAffectedDocument = Asset | Blog | CityPartner | Faq | Kpi | Member | Network | Page | PageSection | PressArticle | PressPhoto | PressReport | Shop | ShopBundesland | ShopCategory | ShopStatus | ShopTown | ShopType | Supporter | Translation;

export type ScheduledOperationConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: Maybe<ConnectPositionInput>;
  /** Document to connect */
  where: ScheduledOperationWhereUniqueInput;
};

/** A connection to a list of items. */
export type ScheduledOperationConnection = {
  __typename?: 'ScheduledOperationConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<ScheduledOperationEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type ScheduledOperationCreateManyInlineInput = {
  /** Connect multiple existing ScheduledOperation documents */
  connect?: Maybe<Array<ScheduledOperationWhereUniqueInput>>;
};

export type ScheduledOperationCreateOneInlineInput = {
  /** Connect one existing ScheduledOperation document */
  connect?: Maybe<ScheduledOperationWhereUniqueInput>;
};

/** An edge in a connection. */
export type ScheduledOperationEdge = {
  __typename?: 'ScheduledOperationEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: ScheduledOperation;
};

/** Identifies documents */
export type ScheduledOperationManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<ScheduledOperationWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<ScheduledOperationWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<ScheduledOperationWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  createdBy?: Maybe<UserWhereInput>;
  description?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  description_contains?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  description_ends_with?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  description_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  description_not?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  description_not_contains?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  description_not_ends_with?: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  description_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  description_not_starts_with?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  description_starts_with?: Maybe<Scalars['String']>;
  errorMessage?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  errorMessage_contains?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  errorMessage_ends_with?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  errorMessage_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  errorMessage_not?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  errorMessage_not_contains?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  errorMessage_not_ends_with?: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  errorMessage_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  errorMessage_not_starts_with?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  errorMessage_starts_with?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  publishedBy?: Maybe<UserWhereInput>;
  release?: Maybe<ScheduledReleaseWhereInput>;
  status?: Maybe<ScheduledOperationStatus>;
  /** All values that are contained in given list. */
  status_in?: Maybe<Array<ScheduledOperationStatus>>;
  /** All values that are not equal to given value. */
  status_not?: Maybe<ScheduledOperationStatus>;
  /** All values that are not contained in given list. */
  status_not_in?: Maybe<Array<ScheduledOperationStatus>>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  updatedBy?: Maybe<UserWhereInput>;
};

export enum ScheduledOperationOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  DescriptionAsc = 'description_ASC',
  DescriptionDesc = 'description_DESC',
  ErrorMessageAsc = 'errorMessage_ASC',
  ErrorMessageDesc = 'errorMessage_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  StatusAsc = 'status_ASC',
  StatusDesc = 'status_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

/** System Scheduled Operation Status */
export enum ScheduledOperationStatus {
  Canceled = 'CANCELED',
  Completed = 'COMPLETED',
  Failed = 'FAILED',
  InProgress = 'IN_PROGRESS',
  Pending = 'PENDING'
}

export type ScheduledOperationUpdateManyInlineInput = {
  /** Connect multiple existing ScheduledOperation documents */
  connect?: Maybe<Array<ScheduledOperationConnectInput>>;
  /** Disconnect multiple ScheduledOperation documents */
  disconnect?: Maybe<Array<ScheduledOperationWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing ScheduledOperation documents */
  set?: Maybe<Array<ScheduledOperationWhereUniqueInput>>;
};

export type ScheduledOperationUpdateOneInlineInput = {
  /** Connect existing ScheduledOperation document */
  connect?: Maybe<ScheduledOperationWhereUniqueInput>;
  /** Disconnect currently connected ScheduledOperation document */
  disconnect?: Maybe<Scalars['Boolean']>;
};

/** Identifies documents */
export type ScheduledOperationWhereInput = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<ScheduledOperationWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<ScheduledOperationWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<ScheduledOperationWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  createdBy?: Maybe<UserWhereInput>;
  description?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  description_contains?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  description_ends_with?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  description_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  description_not?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  description_not_contains?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  description_not_ends_with?: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  description_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  description_not_starts_with?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  description_starts_with?: Maybe<Scalars['String']>;
  errorMessage?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  errorMessage_contains?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  errorMessage_ends_with?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  errorMessage_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  errorMessage_not?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  errorMessage_not_contains?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  errorMessage_not_ends_with?: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  errorMessage_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  errorMessage_not_starts_with?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  errorMessage_starts_with?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  publishedBy?: Maybe<UserWhereInput>;
  release?: Maybe<ScheduledReleaseWhereInput>;
  status?: Maybe<ScheduledOperationStatus>;
  /** All values that are contained in given list. */
  status_in?: Maybe<Array<ScheduledOperationStatus>>;
  /** All values that are not equal to given value. */
  status_not?: Maybe<ScheduledOperationStatus>;
  /** All values that are not contained in given list. */
  status_not_in?: Maybe<Array<ScheduledOperationStatus>>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  updatedBy?: Maybe<UserWhereInput>;
};

/** References ScheduledOperation record uniquely */
export type ScheduledOperationWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>;
};

/** Scheduled Release system model */
export type ScheduledRelease = Node & {
  __typename?: 'ScheduledRelease';
  /** The time the document was created */
  createdAt: Scalars['DateTime'];
  /** User that created this document */
  createdBy?: Maybe<User>;
  /** Release description */
  description?: Maybe<Scalars['String']>;
  /** Get the document in other stages */
  documentInStages: Array<ScheduledRelease>;
  /** Release error message */
  errorMessage?: Maybe<Scalars['String']>;
  /** The unique identifier */
  id: Scalars['ID'];
  /** Whether scheduled release should be run */
  isActive: Scalars['Boolean'];
  /** Whether scheduled release is implicit */
  isImplicit: Scalars['Boolean'];
  /** Operations to run with this release */
  operations: Array<ScheduledOperation>;
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  /** Release date and time */
  releaseAt?: Maybe<Scalars['DateTime']>;
  /** System stage field */
  stage: Stage;
  /** Release Status */
  status: ScheduledReleaseStatus;
  /** Release Title */
  title?: Maybe<Scalars['String']>;
  /** The time the document was updated */
  updatedAt: Scalars['DateTime'];
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
};


/** Scheduled Release system model */
export type ScheduledReleaseCreatedByArgs = {
  locales?: Maybe<Array<Locale>>;
};


/** Scheduled Release system model */
export type ScheduledReleaseDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
  stages?: Array<Stage>;
};


/** Scheduled Release system model */
export type ScheduledReleaseOperationsArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  locales?: Maybe<Array<Locale>>;
  orderBy?: Maybe<ScheduledOperationOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  where?: Maybe<ScheduledOperationWhereInput>;
};


/** Scheduled Release system model */
export type ScheduledReleasePublishedByArgs = {
  locales?: Maybe<Array<Locale>>;
};


/** Scheduled Release system model */
export type ScheduledReleaseUpdatedByArgs = {
  locales?: Maybe<Array<Locale>>;
};

export type ScheduledReleaseConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: Maybe<ConnectPositionInput>;
  /** Document to connect */
  where: ScheduledReleaseWhereUniqueInput;
};

/** A connection to a list of items. */
export type ScheduledReleaseConnection = {
  __typename?: 'ScheduledReleaseConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<ScheduledReleaseEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type ScheduledReleaseCreateInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  errorMessage?: Maybe<Scalars['String']>;
  isActive?: Maybe<Scalars['Boolean']>;
  releaseAt?: Maybe<Scalars['DateTime']>;
  title?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type ScheduledReleaseCreateManyInlineInput = {
  /** Connect multiple existing ScheduledRelease documents */
  connect?: Maybe<Array<ScheduledReleaseWhereUniqueInput>>;
  /** Create and connect multiple existing ScheduledRelease documents */
  create?: Maybe<Array<ScheduledReleaseCreateInput>>;
};

export type ScheduledReleaseCreateOneInlineInput = {
  /** Connect one existing ScheduledRelease document */
  connect?: Maybe<ScheduledReleaseWhereUniqueInput>;
  /** Create and connect one ScheduledRelease document */
  create?: Maybe<ScheduledReleaseCreateInput>;
};

/** An edge in a connection. */
export type ScheduledReleaseEdge = {
  __typename?: 'ScheduledReleaseEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: ScheduledRelease;
};

/** Identifies documents */
export type ScheduledReleaseManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<ScheduledReleaseWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<ScheduledReleaseWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<ScheduledReleaseWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  createdBy?: Maybe<UserWhereInput>;
  description?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  description_contains?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  description_ends_with?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  description_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  description_not?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  description_not_contains?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  description_not_ends_with?: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  description_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  description_not_starts_with?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  description_starts_with?: Maybe<Scalars['String']>;
  errorMessage?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  errorMessage_contains?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  errorMessage_ends_with?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  errorMessage_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  errorMessage_not?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  errorMessage_not_contains?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  errorMessage_not_ends_with?: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  errorMessage_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  errorMessage_not_starts_with?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  errorMessage_starts_with?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  isActive?: Maybe<Scalars['Boolean']>;
  /** All values that are not equal to given value. */
  isActive_not?: Maybe<Scalars['Boolean']>;
  isImplicit?: Maybe<Scalars['Boolean']>;
  /** All values that are not equal to given value. */
  isImplicit_not?: Maybe<Scalars['Boolean']>;
  operations_every?: Maybe<ScheduledOperationWhereInput>;
  operations_none?: Maybe<ScheduledOperationWhereInput>;
  operations_some?: Maybe<ScheduledOperationWhereInput>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  publishedBy?: Maybe<UserWhereInput>;
  releaseAt?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  releaseAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  releaseAt_gte?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  releaseAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  releaseAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  releaseAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  releaseAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  releaseAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  status?: Maybe<ScheduledReleaseStatus>;
  /** All values that are contained in given list. */
  status_in?: Maybe<Array<ScheduledReleaseStatus>>;
  /** All values that are not equal to given value. */
  status_not?: Maybe<ScheduledReleaseStatus>;
  /** All values that are not contained in given list. */
  status_not_in?: Maybe<Array<ScheduledReleaseStatus>>;
  title?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  title_contains?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  title_ends_with?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  title_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  title_not?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  title_not_contains?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  title_not_ends_with?: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  title_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  title_not_starts_with?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  title_starts_with?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  updatedBy?: Maybe<UserWhereInput>;
};

export enum ScheduledReleaseOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  DescriptionAsc = 'description_ASC',
  DescriptionDesc = 'description_DESC',
  ErrorMessageAsc = 'errorMessage_ASC',
  ErrorMessageDesc = 'errorMessage_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  IsActiveAsc = 'isActive_ASC',
  IsActiveDesc = 'isActive_DESC',
  IsImplicitAsc = 'isImplicit_ASC',
  IsImplicitDesc = 'isImplicit_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  ReleaseAtAsc = 'releaseAt_ASC',
  ReleaseAtDesc = 'releaseAt_DESC',
  StatusAsc = 'status_ASC',
  StatusDesc = 'status_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

/** System Scheduled Release Status */
export enum ScheduledReleaseStatus {
  Completed = 'COMPLETED',
  Failed = 'FAILED',
  InProgress = 'IN_PROGRESS',
  Pending = 'PENDING'
}

export type ScheduledReleaseUpdateInput = {
  description?: Maybe<Scalars['String']>;
  errorMessage?: Maybe<Scalars['String']>;
  isActive?: Maybe<Scalars['Boolean']>;
  releaseAt?: Maybe<Scalars['DateTime']>;
  title?: Maybe<Scalars['String']>;
};

export type ScheduledReleaseUpdateManyInlineInput = {
  /** Connect multiple existing ScheduledRelease documents */
  connect?: Maybe<Array<ScheduledReleaseConnectInput>>;
  /** Create and connect multiple ScheduledRelease documents */
  create?: Maybe<Array<ScheduledReleaseCreateInput>>;
  /** Delete multiple ScheduledRelease documents */
  delete?: Maybe<Array<ScheduledReleaseWhereUniqueInput>>;
  /** Disconnect multiple ScheduledRelease documents */
  disconnect?: Maybe<Array<ScheduledReleaseWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing ScheduledRelease documents */
  set?: Maybe<Array<ScheduledReleaseWhereUniqueInput>>;
  /** Update multiple ScheduledRelease documents */
  update?: Maybe<Array<ScheduledReleaseUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple ScheduledRelease documents */
  upsert?: Maybe<Array<ScheduledReleaseUpsertWithNestedWhereUniqueInput>>;
};

export type ScheduledReleaseUpdateManyInput = {
  description?: Maybe<Scalars['String']>;
  errorMessage?: Maybe<Scalars['String']>;
  isActive?: Maybe<Scalars['Boolean']>;
  releaseAt?: Maybe<Scalars['DateTime']>;
  title?: Maybe<Scalars['String']>;
};

export type ScheduledReleaseUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: ScheduledReleaseUpdateManyInput;
  /** Document search */
  where: ScheduledReleaseWhereInput;
};

export type ScheduledReleaseUpdateOneInlineInput = {
  /** Connect existing ScheduledRelease document */
  connect?: Maybe<ScheduledReleaseWhereUniqueInput>;
  /** Create and connect one ScheduledRelease document */
  create?: Maybe<ScheduledReleaseCreateInput>;
  /** Delete currently connected ScheduledRelease document */
  delete?: Maybe<Scalars['Boolean']>;
  /** Disconnect currently connected ScheduledRelease document */
  disconnect?: Maybe<Scalars['Boolean']>;
  /** Update single ScheduledRelease document */
  update?: Maybe<ScheduledReleaseUpdateWithNestedWhereUniqueInput>;
  /** Upsert single ScheduledRelease document */
  upsert?: Maybe<ScheduledReleaseUpsertWithNestedWhereUniqueInput>;
};

export type ScheduledReleaseUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: ScheduledReleaseUpdateInput;
  /** Unique document search */
  where: ScheduledReleaseWhereUniqueInput;
};

export type ScheduledReleaseUpsertInput = {
  /** Create document if it didn't exist */
  create: ScheduledReleaseCreateInput;
  /** Update document if it exists */
  update: ScheduledReleaseUpdateInput;
};

export type ScheduledReleaseUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: ScheduledReleaseUpsertInput;
  /** Unique document search */
  where: ScheduledReleaseWhereUniqueInput;
};

/** Identifies documents */
export type ScheduledReleaseWhereInput = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<ScheduledReleaseWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<ScheduledReleaseWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<ScheduledReleaseWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  createdBy?: Maybe<UserWhereInput>;
  description?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  description_contains?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  description_ends_with?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  description_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  description_not?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  description_not_contains?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  description_not_ends_with?: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  description_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  description_not_starts_with?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  description_starts_with?: Maybe<Scalars['String']>;
  errorMessage?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  errorMessage_contains?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  errorMessage_ends_with?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  errorMessage_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  errorMessage_not?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  errorMessage_not_contains?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  errorMessage_not_ends_with?: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  errorMessage_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  errorMessage_not_starts_with?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  errorMessage_starts_with?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  isActive?: Maybe<Scalars['Boolean']>;
  /** All values that are not equal to given value. */
  isActive_not?: Maybe<Scalars['Boolean']>;
  isImplicit?: Maybe<Scalars['Boolean']>;
  /** All values that are not equal to given value. */
  isImplicit_not?: Maybe<Scalars['Boolean']>;
  operations_every?: Maybe<ScheduledOperationWhereInput>;
  operations_none?: Maybe<ScheduledOperationWhereInput>;
  operations_some?: Maybe<ScheduledOperationWhereInput>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  publishedBy?: Maybe<UserWhereInput>;
  releaseAt?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  releaseAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  releaseAt_gte?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  releaseAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  releaseAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  releaseAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  releaseAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  releaseAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  status?: Maybe<ScheduledReleaseStatus>;
  /** All values that are contained in given list. */
  status_in?: Maybe<Array<ScheduledReleaseStatus>>;
  /** All values that are not equal to given value. */
  status_not?: Maybe<ScheduledReleaseStatus>;
  /** All values that are not contained in given list. */
  status_not_in?: Maybe<Array<ScheduledReleaseStatus>>;
  title?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  title_contains?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  title_ends_with?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  title_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  title_not?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  title_not_contains?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  title_not_ends_with?: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  title_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  title_not_starts_with?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  title_starts_with?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  updatedBy?: Maybe<UserWhereInput>;
};

/** References ScheduledRelease record uniquely */
export type ScheduledReleaseWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>;
};

export type Shop = Node & {
  __typename?: 'Shop';
  address?: Maybe<Scalars['String']>;
  /** The time the document was created */
  createdAt: Scalars['DateTime'];
  /** User that created this document */
  createdBy?: Maybe<User>;
  dataProtectionForm?: Maybe<Asset>;
  /** Get the document in other stages */
  documentInStages: Array<Shop>;
  email?: Maybe<Scalars['String']>;
  furtherInformation?: Maybe<Scalars['String']>;
  /** List of Shop versions */
  history: Array<Version>;
  /** The unique identifier */
  id: Scalars['ID'];
  infoflyer?: Maybe<Scalars['Int']>;
  location?: Maybe<Location>;
  name?: Maybe<Scalars['String']>;
  newsletter?: Maybe<Scalars['Boolean']>;
  openinghours?: Maybe<Scalars['String']>;
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  scheduledIn: Array<ScheduledOperation>;
  shopBundesland?: Maybe<ShopBundesland>;
  shopStatus?: Maybe<ShopStatus>;
  shopTown?: Maybe<ShopTown>;
  shopType: Array<ShopType>;
  shopcategories: Array<ShopCategory>;
  /** System stage field */
  stage: Stage;
  stickerBack?: Maybe<Scalars['Int']>;
  stickerDelivery?: Maybe<Scalars['Boolean']>;
  stickerFront?: Maybe<Scalars['Int']>;
  trayinformation?: Maybe<Scalars['Int']>;
  /** The time the document was updated */
  updatedAt: Scalars['DateTime'];
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
  website?: Maybe<Scalars['String']>;
};


export type ShopCreatedByArgs = {
  locales?: Maybe<Array<Locale>>;
};


export type ShopDataProtectionFormArgs = {
  locales?: Maybe<Array<Locale>>;
};


export type ShopDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
  stages?: Array<Stage>;
};


export type ShopHistoryArgs = {
  limit?: Scalars['Int'];
  skip?: Scalars['Int'];
  stageOverride?: Maybe<Stage>;
};


export type ShopPublishedByArgs = {
  locales?: Maybe<Array<Locale>>;
};


export type ShopScheduledInArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  locales?: Maybe<Array<Locale>>;
  skip?: Maybe<Scalars['Int']>;
  where?: Maybe<ScheduledOperationWhereInput>;
};


export type ShopShopBundeslandArgs = {
  locales?: Maybe<Array<Locale>>;
};


export type ShopShopStatusArgs = {
  locales?: Maybe<Array<Locale>>;
};


export type ShopShopTownArgs = {
  locales?: Maybe<Array<Locale>>;
};


export type ShopShopTypeArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  locales?: Maybe<Array<Locale>>;
  orderBy?: Maybe<ShopTypeOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  where?: Maybe<ShopTypeWhereInput>;
};


export type ShopShopcategoriesArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  locales?: Maybe<Array<Locale>>;
  orderBy?: Maybe<ShopCategoryOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  where?: Maybe<ShopCategoryWhereInput>;
};


export type ShopUpdatedByArgs = {
  locales?: Maybe<Array<Locale>>;
};

export type ShopBundesland = Node & {
  __typename?: 'ShopBundesland';
  /** The time the document was created */
  createdAt: Scalars['DateTime'];
  /** User that created this document */
  createdBy?: Maybe<User>;
  /** Get the document in other stages */
  documentInStages: Array<ShopBundesland>;
  /** List of ShopBundesland versions */
  history: Array<Version>;
  /** The unique identifier */
  id: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  scheduledIn: Array<ScheduledOperation>;
  shops: Array<Shop>;
  /** System stage field */
  stage: Stage;
  /** The time the document was updated */
  updatedAt: Scalars['DateTime'];
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
};


export type ShopBundeslandCreatedByArgs = {
  locales?: Maybe<Array<Locale>>;
};


export type ShopBundeslandDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
  stages?: Array<Stage>;
};


export type ShopBundeslandHistoryArgs = {
  limit?: Scalars['Int'];
  skip?: Scalars['Int'];
  stageOverride?: Maybe<Stage>;
};


export type ShopBundeslandPublishedByArgs = {
  locales?: Maybe<Array<Locale>>;
};


export type ShopBundeslandScheduledInArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  locales?: Maybe<Array<Locale>>;
  skip?: Maybe<Scalars['Int']>;
  where?: Maybe<ScheduledOperationWhereInput>;
};


export type ShopBundeslandShopsArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  locales?: Maybe<Array<Locale>>;
  orderBy?: Maybe<ShopOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  where?: Maybe<ShopWhereInput>;
};


export type ShopBundeslandUpdatedByArgs = {
  locales?: Maybe<Array<Locale>>;
};

export type ShopBundeslandConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: Maybe<ConnectPositionInput>;
  /** Document to connect */
  where: ShopBundeslandWhereUniqueInput;
};

/** A connection to a list of items. */
export type ShopBundeslandConnection = {
  __typename?: 'ShopBundeslandConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<ShopBundeslandEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type ShopBundeslandCreateInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  name?: Maybe<Scalars['String']>;
  shops?: Maybe<ShopCreateManyInlineInput>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type ShopBundeslandCreateManyInlineInput = {
  /** Connect multiple existing ShopBundesland documents */
  connect?: Maybe<Array<ShopBundeslandWhereUniqueInput>>;
  /** Create and connect multiple existing ShopBundesland documents */
  create?: Maybe<Array<ShopBundeslandCreateInput>>;
};

export type ShopBundeslandCreateOneInlineInput = {
  /** Connect one existing ShopBundesland document */
  connect?: Maybe<ShopBundeslandWhereUniqueInput>;
  /** Create and connect one ShopBundesland document */
  create?: Maybe<ShopBundeslandCreateInput>;
};

/** An edge in a connection. */
export type ShopBundeslandEdge = {
  __typename?: 'ShopBundeslandEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: ShopBundesland;
};

/** Identifies documents */
export type ShopBundeslandManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<ShopBundeslandWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<ShopBundeslandWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<ShopBundeslandWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  createdBy?: Maybe<UserWhereInput>;
  id?: Maybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  name_contains?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  name_ends_with?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  name_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  name_not?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  name_not_contains?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  name_not_ends_with?: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  name_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  name_not_starts_with?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  name_starts_with?: Maybe<Scalars['String']>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  publishedBy?: Maybe<UserWhereInput>;
  scheduledIn_every?: Maybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: Maybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: Maybe<ScheduledOperationWhereInput>;
  shops_every?: Maybe<ShopWhereInput>;
  shops_none?: Maybe<ShopWhereInput>;
  shops_some?: Maybe<ShopWhereInput>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  updatedBy?: Maybe<UserWhereInput>;
};

export enum ShopBundeslandOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

export type ShopBundeslandUpdateInput = {
  name?: Maybe<Scalars['String']>;
  shops?: Maybe<ShopUpdateManyInlineInput>;
};

export type ShopBundeslandUpdateManyInlineInput = {
  /** Connect multiple existing ShopBundesland documents */
  connect?: Maybe<Array<ShopBundeslandConnectInput>>;
  /** Create and connect multiple ShopBundesland documents */
  create?: Maybe<Array<ShopBundeslandCreateInput>>;
  /** Delete multiple ShopBundesland documents */
  delete?: Maybe<Array<ShopBundeslandWhereUniqueInput>>;
  /** Disconnect multiple ShopBundesland documents */
  disconnect?: Maybe<Array<ShopBundeslandWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing ShopBundesland documents */
  set?: Maybe<Array<ShopBundeslandWhereUniqueInput>>;
  /** Update multiple ShopBundesland documents */
  update?: Maybe<Array<ShopBundeslandUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple ShopBundesland documents */
  upsert?: Maybe<Array<ShopBundeslandUpsertWithNestedWhereUniqueInput>>;
};

export type ShopBundeslandUpdateManyInput = {
  name?: Maybe<Scalars['String']>;
};

export type ShopBundeslandUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: ShopBundeslandUpdateManyInput;
  /** Document search */
  where: ShopBundeslandWhereInput;
};

export type ShopBundeslandUpdateOneInlineInput = {
  /** Connect existing ShopBundesland document */
  connect?: Maybe<ShopBundeslandWhereUniqueInput>;
  /** Create and connect one ShopBundesland document */
  create?: Maybe<ShopBundeslandCreateInput>;
  /** Delete currently connected ShopBundesland document */
  delete?: Maybe<Scalars['Boolean']>;
  /** Disconnect currently connected ShopBundesland document */
  disconnect?: Maybe<Scalars['Boolean']>;
  /** Update single ShopBundesland document */
  update?: Maybe<ShopBundeslandUpdateWithNestedWhereUniqueInput>;
  /** Upsert single ShopBundesland document */
  upsert?: Maybe<ShopBundeslandUpsertWithNestedWhereUniqueInput>;
};

export type ShopBundeslandUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: ShopBundeslandUpdateInput;
  /** Unique document search */
  where: ShopBundeslandWhereUniqueInput;
};

export type ShopBundeslandUpsertInput = {
  /** Create document if it didn't exist */
  create: ShopBundeslandCreateInput;
  /** Update document if it exists */
  update: ShopBundeslandUpdateInput;
};

export type ShopBundeslandUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: ShopBundeslandUpsertInput;
  /** Unique document search */
  where: ShopBundeslandWhereUniqueInput;
};

/** Identifies documents */
export type ShopBundeslandWhereInput = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<ShopBundeslandWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<ShopBundeslandWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<ShopBundeslandWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  createdBy?: Maybe<UserWhereInput>;
  id?: Maybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  name_contains?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  name_ends_with?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  name_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  name_not?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  name_not_contains?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  name_not_ends_with?: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  name_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  name_not_starts_with?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  name_starts_with?: Maybe<Scalars['String']>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  publishedBy?: Maybe<UserWhereInput>;
  scheduledIn_every?: Maybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: Maybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: Maybe<ScheduledOperationWhereInput>;
  shops_every?: Maybe<ShopWhereInput>;
  shops_none?: Maybe<ShopWhereInput>;
  shops_some?: Maybe<ShopWhereInput>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  updatedBy?: Maybe<UserWhereInput>;
};

/** References ShopBundesland record uniquely */
export type ShopBundeslandWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>;
};

export type ShopCategory = Node & {
  __typename?: 'ShopCategory';
  /** The time the document was created */
  createdAt: Scalars['DateTime'];
  /** User that created this document */
  createdBy?: Maybe<User>;
  /** Get the document in other stages */
  documentInStages: Array<ShopCategory>;
  /** List of ShopCategory versions */
  history: Array<Version>;
  /** The unique identifier */
  id: Scalars['ID'];
  isMain?: Maybe<Scalars['Boolean']>;
  name?: Maybe<Scalars['String']>;
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  scheduledIn: Array<ScheduledOperation>;
  shop: Array<Shop>;
  /** System stage field */
  stage: Stage;
  /** The time the document was updated */
  updatedAt: Scalars['DateTime'];
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
};


export type ShopCategoryCreatedByArgs = {
  locales?: Maybe<Array<Locale>>;
};


export type ShopCategoryDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
  stages?: Array<Stage>;
};


export type ShopCategoryHistoryArgs = {
  limit?: Scalars['Int'];
  skip?: Scalars['Int'];
  stageOverride?: Maybe<Stage>;
};


export type ShopCategoryPublishedByArgs = {
  locales?: Maybe<Array<Locale>>;
};


export type ShopCategoryScheduledInArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  locales?: Maybe<Array<Locale>>;
  skip?: Maybe<Scalars['Int']>;
  where?: Maybe<ScheduledOperationWhereInput>;
};


export type ShopCategoryShopArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  locales?: Maybe<Array<Locale>>;
  orderBy?: Maybe<ShopOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  where?: Maybe<ShopWhereInput>;
};


export type ShopCategoryUpdatedByArgs = {
  locales?: Maybe<Array<Locale>>;
};

export type ShopCategoryConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: Maybe<ConnectPositionInput>;
  /** Document to connect */
  where: ShopCategoryWhereUniqueInput;
};

/** A connection to a list of items. */
export type ShopCategoryConnection = {
  __typename?: 'ShopCategoryConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<ShopCategoryEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type ShopCategoryCreateInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  isMain?: Maybe<Scalars['Boolean']>;
  name?: Maybe<Scalars['String']>;
  shop?: Maybe<ShopCreateManyInlineInput>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type ShopCategoryCreateManyInlineInput = {
  /** Connect multiple existing ShopCategory documents */
  connect?: Maybe<Array<ShopCategoryWhereUniqueInput>>;
  /** Create and connect multiple existing ShopCategory documents */
  create?: Maybe<Array<ShopCategoryCreateInput>>;
};

export type ShopCategoryCreateOneInlineInput = {
  /** Connect one existing ShopCategory document */
  connect?: Maybe<ShopCategoryWhereUniqueInput>;
  /** Create and connect one ShopCategory document */
  create?: Maybe<ShopCategoryCreateInput>;
};

/** An edge in a connection. */
export type ShopCategoryEdge = {
  __typename?: 'ShopCategoryEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: ShopCategory;
};

/** Identifies documents */
export type ShopCategoryManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<ShopCategoryWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<ShopCategoryWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<ShopCategoryWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  createdBy?: Maybe<UserWhereInput>;
  id?: Maybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  isMain?: Maybe<Scalars['Boolean']>;
  /** All values that are not equal to given value. */
  isMain_not?: Maybe<Scalars['Boolean']>;
  name?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  name_contains?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  name_ends_with?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  name_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  name_not?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  name_not_contains?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  name_not_ends_with?: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  name_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  name_not_starts_with?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  name_starts_with?: Maybe<Scalars['String']>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  publishedBy?: Maybe<UserWhereInput>;
  scheduledIn_every?: Maybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: Maybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: Maybe<ScheduledOperationWhereInput>;
  shop_every?: Maybe<ShopWhereInput>;
  shop_none?: Maybe<ShopWhereInput>;
  shop_some?: Maybe<ShopWhereInput>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  updatedBy?: Maybe<UserWhereInput>;
};

export enum ShopCategoryOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  IsMainAsc = 'isMain_ASC',
  IsMainDesc = 'isMain_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

export type ShopCategoryUpdateInput = {
  isMain?: Maybe<Scalars['Boolean']>;
  name?: Maybe<Scalars['String']>;
  shop?: Maybe<ShopUpdateManyInlineInput>;
};

export type ShopCategoryUpdateManyInlineInput = {
  /** Connect multiple existing ShopCategory documents */
  connect?: Maybe<Array<ShopCategoryConnectInput>>;
  /** Create and connect multiple ShopCategory documents */
  create?: Maybe<Array<ShopCategoryCreateInput>>;
  /** Delete multiple ShopCategory documents */
  delete?: Maybe<Array<ShopCategoryWhereUniqueInput>>;
  /** Disconnect multiple ShopCategory documents */
  disconnect?: Maybe<Array<ShopCategoryWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing ShopCategory documents */
  set?: Maybe<Array<ShopCategoryWhereUniqueInput>>;
  /** Update multiple ShopCategory documents */
  update?: Maybe<Array<ShopCategoryUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple ShopCategory documents */
  upsert?: Maybe<Array<ShopCategoryUpsertWithNestedWhereUniqueInput>>;
};

export type ShopCategoryUpdateManyInput = {
  isMain?: Maybe<Scalars['Boolean']>;
  name?: Maybe<Scalars['String']>;
};

export type ShopCategoryUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: ShopCategoryUpdateManyInput;
  /** Document search */
  where: ShopCategoryWhereInput;
};

export type ShopCategoryUpdateOneInlineInput = {
  /** Connect existing ShopCategory document */
  connect?: Maybe<ShopCategoryWhereUniqueInput>;
  /** Create and connect one ShopCategory document */
  create?: Maybe<ShopCategoryCreateInput>;
  /** Delete currently connected ShopCategory document */
  delete?: Maybe<Scalars['Boolean']>;
  /** Disconnect currently connected ShopCategory document */
  disconnect?: Maybe<Scalars['Boolean']>;
  /** Update single ShopCategory document */
  update?: Maybe<ShopCategoryUpdateWithNestedWhereUniqueInput>;
  /** Upsert single ShopCategory document */
  upsert?: Maybe<ShopCategoryUpsertWithNestedWhereUniqueInput>;
};

export type ShopCategoryUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: ShopCategoryUpdateInput;
  /** Unique document search */
  where: ShopCategoryWhereUniqueInput;
};

export type ShopCategoryUpsertInput = {
  /** Create document if it didn't exist */
  create: ShopCategoryCreateInput;
  /** Update document if it exists */
  update: ShopCategoryUpdateInput;
};

export type ShopCategoryUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: ShopCategoryUpsertInput;
  /** Unique document search */
  where: ShopCategoryWhereUniqueInput;
};

/** Identifies documents */
export type ShopCategoryWhereInput = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<ShopCategoryWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<ShopCategoryWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<ShopCategoryWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  createdBy?: Maybe<UserWhereInput>;
  id?: Maybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  isMain?: Maybe<Scalars['Boolean']>;
  /** All values that are not equal to given value. */
  isMain_not?: Maybe<Scalars['Boolean']>;
  name?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  name_contains?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  name_ends_with?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  name_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  name_not?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  name_not_contains?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  name_not_ends_with?: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  name_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  name_not_starts_with?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  name_starts_with?: Maybe<Scalars['String']>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  publishedBy?: Maybe<UserWhereInput>;
  scheduledIn_every?: Maybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: Maybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: Maybe<ScheduledOperationWhereInput>;
  shop_every?: Maybe<ShopWhereInput>;
  shop_none?: Maybe<ShopWhereInput>;
  shop_some?: Maybe<ShopWhereInput>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  updatedBy?: Maybe<UserWhereInput>;
};

/** References ShopCategory record uniquely */
export type ShopCategoryWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>;
};

export type ShopConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: Maybe<ConnectPositionInput>;
  /** Document to connect */
  where: ShopWhereUniqueInput;
};

/** A connection to a list of items. */
export type ShopConnection = {
  __typename?: 'ShopConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<ShopEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type ShopCreateInput = {
  address?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  dataProtectionForm?: Maybe<AssetCreateOneInlineInput>;
  email?: Maybe<Scalars['String']>;
  furtherInformation?: Maybe<Scalars['String']>;
  infoflyer?: Maybe<Scalars['Int']>;
  location?: Maybe<LocationInput>;
  name?: Maybe<Scalars['String']>;
  newsletter?: Maybe<Scalars['Boolean']>;
  openinghours?: Maybe<Scalars['String']>;
  shopBundesland?: Maybe<ShopBundeslandCreateOneInlineInput>;
  shopStatus?: Maybe<ShopStatusCreateOneInlineInput>;
  shopTown?: Maybe<ShopTownCreateOneInlineInput>;
  shopType?: Maybe<ShopTypeCreateManyInlineInput>;
  shopcategories?: Maybe<ShopCategoryCreateManyInlineInput>;
  stickerBack?: Maybe<Scalars['Int']>;
  stickerDelivery?: Maybe<Scalars['Boolean']>;
  stickerFront?: Maybe<Scalars['Int']>;
  trayinformation?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  website?: Maybe<Scalars['String']>;
};

export type ShopCreateManyInlineInput = {
  /** Connect multiple existing Shop documents */
  connect?: Maybe<Array<ShopWhereUniqueInput>>;
  /** Create and connect multiple existing Shop documents */
  create?: Maybe<Array<ShopCreateInput>>;
};

export type ShopCreateOneInlineInput = {
  /** Connect one existing Shop document */
  connect?: Maybe<ShopWhereUniqueInput>;
  /** Create and connect one Shop document */
  create?: Maybe<ShopCreateInput>;
};

/** An edge in a connection. */
export type ShopEdge = {
  __typename?: 'ShopEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: Shop;
};

/** Identifies documents */
export type ShopManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<ShopWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<ShopWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<ShopWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: Maybe<Scalars['String']>;
  address?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  address_contains?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  address_ends_with?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  address_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  address_not?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  address_not_contains?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  address_not_ends_with?: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  address_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  address_not_starts_with?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  address_starts_with?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  createdBy?: Maybe<UserWhereInput>;
  dataProtectionForm?: Maybe<AssetWhereInput>;
  email?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  email_contains?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  email_ends_with?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  email_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  email_not?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  email_not_contains?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  email_not_ends_with?: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  email_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  email_not_starts_with?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  email_starts_with?: Maybe<Scalars['String']>;
  furtherInformation?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  furtherInformation_contains?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  furtherInformation_ends_with?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  furtherInformation_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  furtherInformation_not?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  furtherInformation_not_contains?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  furtherInformation_not_ends_with?: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  furtherInformation_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  furtherInformation_not_starts_with?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  furtherInformation_starts_with?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  infoflyer?: Maybe<Scalars['Int']>;
  /** All values greater than the given value. */
  infoflyer_gt?: Maybe<Scalars['Int']>;
  /** All values greater than or equal the given value. */
  infoflyer_gte?: Maybe<Scalars['Int']>;
  /** All values that are contained in given list. */
  infoflyer_in?: Maybe<Array<Scalars['Int']>>;
  /** All values less than the given value. */
  infoflyer_lt?: Maybe<Scalars['Int']>;
  /** All values less than or equal the given value. */
  infoflyer_lte?: Maybe<Scalars['Int']>;
  /** All values that are not equal to given value. */
  infoflyer_not?: Maybe<Scalars['Int']>;
  /** All values that are not contained in given list. */
  infoflyer_not_in?: Maybe<Array<Scalars['Int']>>;
  name?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  name_contains?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  name_ends_with?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  name_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  name_not?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  name_not_contains?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  name_not_ends_with?: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  name_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  name_not_starts_with?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  name_starts_with?: Maybe<Scalars['String']>;
  newsletter?: Maybe<Scalars['Boolean']>;
  /** All values that are not equal to given value. */
  newsletter_not?: Maybe<Scalars['Boolean']>;
  openinghours?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  openinghours_contains?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  openinghours_ends_with?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  openinghours_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  openinghours_not?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  openinghours_not_contains?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  openinghours_not_ends_with?: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  openinghours_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  openinghours_not_starts_with?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  openinghours_starts_with?: Maybe<Scalars['String']>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  publishedBy?: Maybe<UserWhereInput>;
  scheduledIn_every?: Maybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: Maybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: Maybe<ScheduledOperationWhereInput>;
  shopBundesland?: Maybe<ShopBundeslandWhereInput>;
  shopStatus?: Maybe<ShopStatusWhereInput>;
  shopTown?: Maybe<ShopTownWhereInput>;
  shopType_every?: Maybe<ShopTypeWhereInput>;
  shopType_none?: Maybe<ShopTypeWhereInput>;
  shopType_some?: Maybe<ShopTypeWhereInput>;
  shopcategories_every?: Maybe<ShopCategoryWhereInput>;
  shopcategories_none?: Maybe<ShopCategoryWhereInput>;
  shopcategories_some?: Maybe<ShopCategoryWhereInput>;
  stickerBack?: Maybe<Scalars['Int']>;
  /** All values greater than the given value. */
  stickerBack_gt?: Maybe<Scalars['Int']>;
  /** All values greater than or equal the given value. */
  stickerBack_gte?: Maybe<Scalars['Int']>;
  /** All values that are contained in given list. */
  stickerBack_in?: Maybe<Array<Scalars['Int']>>;
  /** All values less than the given value. */
  stickerBack_lt?: Maybe<Scalars['Int']>;
  /** All values less than or equal the given value. */
  stickerBack_lte?: Maybe<Scalars['Int']>;
  /** All values that are not equal to given value. */
  stickerBack_not?: Maybe<Scalars['Int']>;
  /** All values that are not contained in given list. */
  stickerBack_not_in?: Maybe<Array<Scalars['Int']>>;
  stickerDelivery?: Maybe<Scalars['Boolean']>;
  /** All values that are not equal to given value. */
  stickerDelivery_not?: Maybe<Scalars['Boolean']>;
  stickerFront?: Maybe<Scalars['Int']>;
  /** All values greater than the given value. */
  stickerFront_gt?: Maybe<Scalars['Int']>;
  /** All values greater than or equal the given value. */
  stickerFront_gte?: Maybe<Scalars['Int']>;
  /** All values that are contained in given list. */
  stickerFront_in?: Maybe<Array<Scalars['Int']>>;
  /** All values less than the given value. */
  stickerFront_lt?: Maybe<Scalars['Int']>;
  /** All values less than or equal the given value. */
  stickerFront_lte?: Maybe<Scalars['Int']>;
  /** All values that are not equal to given value. */
  stickerFront_not?: Maybe<Scalars['Int']>;
  /** All values that are not contained in given list. */
  stickerFront_not_in?: Maybe<Array<Scalars['Int']>>;
  trayinformation?: Maybe<Scalars['Int']>;
  /** All values greater than the given value. */
  trayinformation_gt?: Maybe<Scalars['Int']>;
  /** All values greater than or equal the given value. */
  trayinformation_gte?: Maybe<Scalars['Int']>;
  /** All values that are contained in given list. */
  trayinformation_in?: Maybe<Array<Scalars['Int']>>;
  /** All values less than the given value. */
  trayinformation_lt?: Maybe<Scalars['Int']>;
  /** All values less than or equal the given value. */
  trayinformation_lte?: Maybe<Scalars['Int']>;
  /** All values that are not equal to given value. */
  trayinformation_not?: Maybe<Scalars['Int']>;
  /** All values that are not contained in given list. */
  trayinformation_not_in?: Maybe<Array<Scalars['Int']>>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  updatedBy?: Maybe<UserWhereInput>;
  website?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  website_contains?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  website_ends_with?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  website_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  website_not?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  website_not_contains?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  website_not_ends_with?: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  website_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  website_not_starts_with?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  website_starts_with?: Maybe<Scalars['String']>;
};

export enum ShopOrderByInput {
  AddressAsc = 'address_ASC',
  AddressDesc = 'address_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  EmailAsc = 'email_ASC',
  EmailDesc = 'email_DESC',
  FurtherInformationAsc = 'furtherInformation_ASC',
  FurtherInformationDesc = 'furtherInformation_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  InfoflyerAsc = 'infoflyer_ASC',
  InfoflyerDesc = 'infoflyer_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  NewsletterAsc = 'newsletter_ASC',
  NewsletterDesc = 'newsletter_DESC',
  OpeninghoursAsc = 'openinghours_ASC',
  OpeninghoursDesc = 'openinghours_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  StickerBackAsc = 'stickerBack_ASC',
  StickerBackDesc = 'stickerBack_DESC',
  StickerDeliveryAsc = 'stickerDelivery_ASC',
  StickerDeliveryDesc = 'stickerDelivery_DESC',
  StickerFrontAsc = 'stickerFront_ASC',
  StickerFrontDesc = 'stickerFront_DESC',
  TrayinformationAsc = 'trayinformation_ASC',
  TrayinformationDesc = 'trayinformation_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  WebsiteAsc = 'website_ASC',
  WebsiteDesc = 'website_DESC'
}

export type ShopStatus = Node & {
  __typename?: 'ShopStatus';
  /** The time the document was created */
  createdAt: Scalars['DateTime'];
  /** User that created this document */
  createdBy?: Maybe<User>;
  /** Get the document in other stages */
  documentInStages: Array<ShopStatus>;
  /** List of ShopStatus versions */
  history: Array<Version>;
  /** The unique identifier */
  id: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  scheduledIn: Array<ScheduledOperation>;
  shops: Array<Shop>;
  /** System stage field */
  stage: Stage;
  /** The time the document was updated */
  updatedAt: Scalars['DateTime'];
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
};


export type ShopStatusCreatedByArgs = {
  locales?: Maybe<Array<Locale>>;
};


export type ShopStatusDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
  stages?: Array<Stage>;
};


export type ShopStatusHistoryArgs = {
  limit?: Scalars['Int'];
  skip?: Scalars['Int'];
  stageOverride?: Maybe<Stage>;
};


export type ShopStatusPublishedByArgs = {
  locales?: Maybe<Array<Locale>>;
};


export type ShopStatusScheduledInArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  locales?: Maybe<Array<Locale>>;
  skip?: Maybe<Scalars['Int']>;
  where?: Maybe<ScheduledOperationWhereInput>;
};


export type ShopStatusShopsArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  locales?: Maybe<Array<Locale>>;
  orderBy?: Maybe<ShopOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  where?: Maybe<ShopWhereInput>;
};


export type ShopStatusUpdatedByArgs = {
  locales?: Maybe<Array<Locale>>;
};

export type ShopStatusConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: Maybe<ConnectPositionInput>;
  /** Document to connect */
  where: ShopStatusWhereUniqueInput;
};

/** A connection to a list of items. */
export type ShopStatusConnection = {
  __typename?: 'ShopStatusConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<ShopStatusEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type ShopStatusCreateInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  name?: Maybe<Scalars['String']>;
  shops?: Maybe<ShopCreateManyInlineInput>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type ShopStatusCreateManyInlineInput = {
  /** Connect multiple existing ShopStatus documents */
  connect?: Maybe<Array<ShopStatusWhereUniqueInput>>;
  /** Create and connect multiple existing ShopStatus documents */
  create?: Maybe<Array<ShopStatusCreateInput>>;
};

export type ShopStatusCreateOneInlineInput = {
  /** Connect one existing ShopStatus document */
  connect?: Maybe<ShopStatusWhereUniqueInput>;
  /** Create and connect one ShopStatus document */
  create?: Maybe<ShopStatusCreateInput>;
};

/** An edge in a connection. */
export type ShopStatusEdge = {
  __typename?: 'ShopStatusEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: ShopStatus;
};

/** Identifies documents */
export type ShopStatusManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<ShopStatusWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<ShopStatusWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<ShopStatusWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  createdBy?: Maybe<UserWhereInput>;
  id?: Maybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  name_contains?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  name_ends_with?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  name_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  name_not?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  name_not_contains?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  name_not_ends_with?: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  name_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  name_not_starts_with?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  name_starts_with?: Maybe<Scalars['String']>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  publishedBy?: Maybe<UserWhereInput>;
  scheduledIn_every?: Maybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: Maybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: Maybe<ScheduledOperationWhereInput>;
  shops_every?: Maybe<ShopWhereInput>;
  shops_none?: Maybe<ShopWhereInput>;
  shops_some?: Maybe<ShopWhereInput>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  updatedBy?: Maybe<UserWhereInput>;
};

export enum ShopStatusOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

export type ShopStatusUpdateInput = {
  name?: Maybe<Scalars['String']>;
  shops?: Maybe<ShopUpdateManyInlineInput>;
};

export type ShopStatusUpdateManyInlineInput = {
  /** Connect multiple existing ShopStatus documents */
  connect?: Maybe<Array<ShopStatusConnectInput>>;
  /** Create and connect multiple ShopStatus documents */
  create?: Maybe<Array<ShopStatusCreateInput>>;
  /** Delete multiple ShopStatus documents */
  delete?: Maybe<Array<ShopStatusWhereUniqueInput>>;
  /** Disconnect multiple ShopStatus documents */
  disconnect?: Maybe<Array<ShopStatusWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing ShopStatus documents */
  set?: Maybe<Array<ShopStatusWhereUniqueInput>>;
  /** Update multiple ShopStatus documents */
  update?: Maybe<Array<ShopStatusUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple ShopStatus documents */
  upsert?: Maybe<Array<ShopStatusUpsertWithNestedWhereUniqueInput>>;
};

export type ShopStatusUpdateManyInput = {
  name?: Maybe<Scalars['String']>;
};

export type ShopStatusUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: ShopStatusUpdateManyInput;
  /** Document search */
  where: ShopStatusWhereInput;
};

export type ShopStatusUpdateOneInlineInput = {
  /** Connect existing ShopStatus document */
  connect?: Maybe<ShopStatusWhereUniqueInput>;
  /** Create and connect one ShopStatus document */
  create?: Maybe<ShopStatusCreateInput>;
  /** Delete currently connected ShopStatus document */
  delete?: Maybe<Scalars['Boolean']>;
  /** Disconnect currently connected ShopStatus document */
  disconnect?: Maybe<Scalars['Boolean']>;
  /** Update single ShopStatus document */
  update?: Maybe<ShopStatusUpdateWithNestedWhereUniqueInput>;
  /** Upsert single ShopStatus document */
  upsert?: Maybe<ShopStatusUpsertWithNestedWhereUniqueInput>;
};

export type ShopStatusUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: ShopStatusUpdateInput;
  /** Unique document search */
  where: ShopStatusWhereUniqueInput;
};

export type ShopStatusUpsertInput = {
  /** Create document if it didn't exist */
  create: ShopStatusCreateInput;
  /** Update document if it exists */
  update: ShopStatusUpdateInput;
};

export type ShopStatusUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: ShopStatusUpsertInput;
  /** Unique document search */
  where: ShopStatusWhereUniqueInput;
};

/** Identifies documents */
export type ShopStatusWhereInput = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<ShopStatusWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<ShopStatusWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<ShopStatusWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  createdBy?: Maybe<UserWhereInput>;
  id?: Maybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  name_contains?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  name_ends_with?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  name_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  name_not?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  name_not_contains?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  name_not_ends_with?: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  name_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  name_not_starts_with?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  name_starts_with?: Maybe<Scalars['String']>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  publishedBy?: Maybe<UserWhereInput>;
  scheduledIn_every?: Maybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: Maybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: Maybe<ScheduledOperationWhereInput>;
  shops_every?: Maybe<ShopWhereInput>;
  shops_none?: Maybe<ShopWhereInput>;
  shops_some?: Maybe<ShopWhereInput>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  updatedBy?: Maybe<UserWhereInput>;
};

/** References ShopStatus record uniquely */
export type ShopStatusWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>;
};

export type ShopTown = Node & {
  __typename?: 'ShopTown';
  /** The time the document was created */
  createdAt: Scalars['DateTime'];
  /** User that created this document */
  createdBy?: Maybe<User>;
  /** Get the document in other stages */
  documentInStages: Array<ShopTown>;
  /** List of ShopTown versions */
  history: Array<Version>;
  /** The unique identifier */
  id: Scalars['ID'];
  location?: Maybe<Location>;
  name?: Maybe<Scalars['String']>;
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  scheduledIn: Array<ScheduledOperation>;
  shop: Array<Shop>;
  /** System stage field */
  stage: Stage;
  /** The time the document was updated */
  updatedAt: Scalars['DateTime'];
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
};


export type ShopTownCreatedByArgs = {
  locales?: Maybe<Array<Locale>>;
};


export type ShopTownDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
  stages?: Array<Stage>;
};


export type ShopTownHistoryArgs = {
  limit?: Scalars['Int'];
  skip?: Scalars['Int'];
  stageOverride?: Maybe<Stage>;
};


export type ShopTownPublishedByArgs = {
  locales?: Maybe<Array<Locale>>;
};


export type ShopTownScheduledInArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  locales?: Maybe<Array<Locale>>;
  skip?: Maybe<Scalars['Int']>;
  where?: Maybe<ScheduledOperationWhereInput>;
};


export type ShopTownShopArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  locales?: Maybe<Array<Locale>>;
  orderBy?: Maybe<ShopOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  where?: Maybe<ShopWhereInput>;
};


export type ShopTownUpdatedByArgs = {
  locales?: Maybe<Array<Locale>>;
};

export type ShopTownConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: Maybe<ConnectPositionInput>;
  /** Document to connect */
  where: ShopTownWhereUniqueInput;
};

/** A connection to a list of items. */
export type ShopTownConnection = {
  __typename?: 'ShopTownConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<ShopTownEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type ShopTownCreateInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  location?: Maybe<LocationInput>;
  name?: Maybe<Scalars['String']>;
  shop?: Maybe<ShopCreateManyInlineInput>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type ShopTownCreateManyInlineInput = {
  /** Connect multiple existing ShopTown documents */
  connect?: Maybe<Array<ShopTownWhereUniqueInput>>;
  /** Create and connect multiple existing ShopTown documents */
  create?: Maybe<Array<ShopTownCreateInput>>;
};

export type ShopTownCreateOneInlineInput = {
  /** Connect one existing ShopTown document */
  connect?: Maybe<ShopTownWhereUniqueInput>;
  /** Create and connect one ShopTown document */
  create?: Maybe<ShopTownCreateInput>;
};

/** An edge in a connection. */
export type ShopTownEdge = {
  __typename?: 'ShopTownEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: ShopTown;
};

/** Identifies documents */
export type ShopTownManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<ShopTownWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<ShopTownWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<ShopTownWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  createdBy?: Maybe<UserWhereInput>;
  id?: Maybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  name_contains?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  name_ends_with?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  name_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  name_not?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  name_not_contains?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  name_not_ends_with?: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  name_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  name_not_starts_with?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  name_starts_with?: Maybe<Scalars['String']>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  publishedBy?: Maybe<UserWhereInput>;
  scheduledIn_every?: Maybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: Maybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: Maybe<ScheduledOperationWhereInput>;
  shop_every?: Maybe<ShopWhereInput>;
  shop_none?: Maybe<ShopWhereInput>;
  shop_some?: Maybe<ShopWhereInput>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  updatedBy?: Maybe<UserWhereInput>;
};

export enum ShopTownOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

export type ShopTownUpdateInput = {
  location?: Maybe<LocationInput>;
  name?: Maybe<Scalars['String']>;
  shop?: Maybe<ShopUpdateManyInlineInput>;
};

export type ShopTownUpdateManyInlineInput = {
  /** Connect multiple existing ShopTown documents */
  connect?: Maybe<Array<ShopTownConnectInput>>;
  /** Create and connect multiple ShopTown documents */
  create?: Maybe<Array<ShopTownCreateInput>>;
  /** Delete multiple ShopTown documents */
  delete?: Maybe<Array<ShopTownWhereUniqueInput>>;
  /** Disconnect multiple ShopTown documents */
  disconnect?: Maybe<Array<ShopTownWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing ShopTown documents */
  set?: Maybe<Array<ShopTownWhereUniqueInput>>;
  /** Update multiple ShopTown documents */
  update?: Maybe<Array<ShopTownUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple ShopTown documents */
  upsert?: Maybe<Array<ShopTownUpsertWithNestedWhereUniqueInput>>;
};

export type ShopTownUpdateManyInput = {
  location?: Maybe<LocationInput>;
  name?: Maybe<Scalars['String']>;
};

export type ShopTownUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: ShopTownUpdateManyInput;
  /** Document search */
  where: ShopTownWhereInput;
};

export type ShopTownUpdateOneInlineInput = {
  /** Connect existing ShopTown document */
  connect?: Maybe<ShopTownWhereUniqueInput>;
  /** Create and connect one ShopTown document */
  create?: Maybe<ShopTownCreateInput>;
  /** Delete currently connected ShopTown document */
  delete?: Maybe<Scalars['Boolean']>;
  /** Disconnect currently connected ShopTown document */
  disconnect?: Maybe<Scalars['Boolean']>;
  /** Update single ShopTown document */
  update?: Maybe<ShopTownUpdateWithNestedWhereUniqueInput>;
  /** Upsert single ShopTown document */
  upsert?: Maybe<ShopTownUpsertWithNestedWhereUniqueInput>;
};

export type ShopTownUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: ShopTownUpdateInput;
  /** Unique document search */
  where: ShopTownWhereUniqueInput;
};

export type ShopTownUpsertInput = {
  /** Create document if it didn't exist */
  create: ShopTownCreateInput;
  /** Update document if it exists */
  update: ShopTownUpdateInput;
};

export type ShopTownUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: ShopTownUpsertInput;
  /** Unique document search */
  where: ShopTownWhereUniqueInput;
};

/** Identifies documents */
export type ShopTownWhereInput = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<ShopTownWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<ShopTownWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<ShopTownWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  createdBy?: Maybe<UserWhereInput>;
  id?: Maybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  name_contains?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  name_ends_with?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  name_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  name_not?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  name_not_contains?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  name_not_ends_with?: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  name_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  name_not_starts_with?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  name_starts_with?: Maybe<Scalars['String']>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  publishedBy?: Maybe<UserWhereInput>;
  scheduledIn_every?: Maybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: Maybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: Maybe<ScheduledOperationWhereInput>;
  shop_every?: Maybe<ShopWhereInput>;
  shop_none?: Maybe<ShopWhereInput>;
  shop_some?: Maybe<ShopWhereInput>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  updatedBy?: Maybe<UserWhereInput>;
};

/** References ShopTown record uniquely */
export type ShopTownWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>;
};

export type ShopType = Node & {
  __typename?: 'ShopType';
  /** The time the document was created */
  createdAt: Scalars['DateTime'];
  /** User that created this document */
  createdBy?: Maybe<User>;
  /** Get the document in other stages */
  documentInStages: Array<ShopType>;
  /** List of ShopType versions */
  history: Array<Version>;
  /** The unique identifier */
  id: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  scheduledIn: Array<ScheduledOperation>;
  shops: Array<Shop>;
  /** System stage field */
  stage: Stage;
  /** The time the document was updated */
  updatedAt: Scalars['DateTime'];
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
};


export type ShopTypeCreatedByArgs = {
  locales?: Maybe<Array<Locale>>;
};


export type ShopTypeDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
  stages?: Array<Stage>;
};


export type ShopTypeHistoryArgs = {
  limit?: Scalars['Int'];
  skip?: Scalars['Int'];
  stageOverride?: Maybe<Stage>;
};


export type ShopTypePublishedByArgs = {
  locales?: Maybe<Array<Locale>>;
};


export type ShopTypeScheduledInArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  locales?: Maybe<Array<Locale>>;
  skip?: Maybe<Scalars['Int']>;
  where?: Maybe<ScheduledOperationWhereInput>;
};


export type ShopTypeShopsArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  locales?: Maybe<Array<Locale>>;
  orderBy?: Maybe<ShopOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  where?: Maybe<ShopWhereInput>;
};


export type ShopTypeUpdatedByArgs = {
  locales?: Maybe<Array<Locale>>;
};

export type ShopTypeConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: Maybe<ConnectPositionInput>;
  /** Document to connect */
  where: ShopTypeWhereUniqueInput;
};

/** A connection to a list of items. */
export type ShopTypeConnection = {
  __typename?: 'ShopTypeConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<ShopTypeEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type ShopTypeCreateInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  name?: Maybe<Scalars['String']>;
  shops?: Maybe<ShopCreateManyInlineInput>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type ShopTypeCreateManyInlineInput = {
  /** Connect multiple existing ShopType documents */
  connect?: Maybe<Array<ShopTypeWhereUniqueInput>>;
  /** Create and connect multiple existing ShopType documents */
  create?: Maybe<Array<ShopTypeCreateInput>>;
};

export type ShopTypeCreateOneInlineInput = {
  /** Connect one existing ShopType document */
  connect?: Maybe<ShopTypeWhereUniqueInput>;
  /** Create and connect one ShopType document */
  create?: Maybe<ShopTypeCreateInput>;
};

/** An edge in a connection. */
export type ShopTypeEdge = {
  __typename?: 'ShopTypeEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: ShopType;
};

/** Identifies documents */
export type ShopTypeManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<ShopTypeWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<ShopTypeWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<ShopTypeWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  createdBy?: Maybe<UserWhereInput>;
  id?: Maybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  name_contains?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  name_ends_with?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  name_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  name_not?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  name_not_contains?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  name_not_ends_with?: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  name_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  name_not_starts_with?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  name_starts_with?: Maybe<Scalars['String']>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  publishedBy?: Maybe<UserWhereInput>;
  scheduledIn_every?: Maybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: Maybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: Maybe<ScheduledOperationWhereInput>;
  shops_every?: Maybe<ShopWhereInput>;
  shops_none?: Maybe<ShopWhereInput>;
  shops_some?: Maybe<ShopWhereInput>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  updatedBy?: Maybe<UserWhereInput>;
};

export enum ShopTypeOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

export type ShopTypeUpdateInput = {
  name?: Maybe<Scalars['String']>;
  shops?: Maybe<ShopUpdateManyInlineInput>;
};

export type ShopTypeUpdateManyInlineInput = {
  /** Connect multiple existing ShopType documents */
  connect?: Maybe<Array<ShopTypeConnectInput>>;
  /** Create and connect multiple ShopType documents */
  create?: Maybe<Array<ShopTypeCreateInput>>;
  /** Delete multiple ShopType documents */
  delete?: Maybe<Array<ShopTypeWhereUniqueInput>>;
  /** Disconnect multiple ShopType documents */
  disconnect?: Maybe<Array<ShopTypeWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing ShopType documents */
  set?: Maybe<Array<ShopTypeWhereUniqueInput>>;
  /** Update multiple ShopType documents */
  update?: Maybe<Array<ShopTypeUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple ShopType documents */
  upsert?: Maybe<Array<ShopTypeUpsertWithNestedWhereUniqueInput>>;
};

export type ShopTypeUpdateManyInput = {
  name?: Maybe<Scalars['String']>;
};

export type ShopTypeUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: ShopTypeUpdateManyInput;
  /** Document search */
  where: ShopTypeWhereInput;
};

export type ShopTypeUpdateOneInlineInput = {
  /** Connect existing ShopType document */
  connect?: Maybe<ShopTypeWhereUniqueInput>;
  /** Create and connect one ShopType document */
  create?: Maybe<ShopTypeCreateInput>;
  /** Delete currently connected ShopType document */
  delete?: Maybe<Scalars['Boolean']>;
  /** Disconnect currently connected ShopType document */
  disconnect?: Maybe<Scalars['Boolean']>;
  /** Update single ShopType document */
  update?: Maybe<ShopTypeUpdateWithNestedWhereUniqueInput>;
  /** Upsert single ShopType document */
  upsert?: Maybe<ShopTypeUpsertWithNestedWhereUniqueInput>;
};

export type ShopTypeUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: ShopTypeUpdateInput;
  /** Unique document search */
  where: ShopTypeWhereUniqueInput;
};

export type ShopTypeUpsertInput = {
  /** Create document if it didn't exist */
  create: ShopTypeCreateInput;
  /** Update document if it exists */
  update: ShopTypeUpdateInput;
};

export type ShopTypeUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: ShopTypeUpsertInput;
  /** Unique document search */
  where: ShopTypeWhereUniqueInput;
};

/** Identifies documents */
export type ShopTypeWhereInput = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<ShopTypeWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<ShopTypeWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<ShopTypeWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  createdBy?: Maybe<UserWhereInput>;
  id?: Maybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  name_contains?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  name_ends_with?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  name_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  name_not?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  name_not_contains?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  name_not_ends_with?: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  name_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  name_not_starts_with?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  name_starts_with?: Maybe<Scalars['String']>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  publishedBy?: Maybe<UserWhereInput>;
  scheduledIn_every?: Maybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: Maybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: Maybe<ScheduledOperationWhereInput>;
  shops_every?: Maybe<ShopWhereInput>;
  shops_none?: Maybe<ShopWhereInput>;
  shops_some?: Maybe<ShopWhereInput>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  updatedBy?: Maybe<UserWhereInput>;
};

/** References ShopType record uniquely */
export type ShopTypeWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>;
};

export type ShopUpdateInput = {
  address?: Maybe<Scalars['String']>;
  dataProtectionForm?: Maybe<AssetUpdateOneInlineInput>;
  email?: Maybe<Scalars['String']>;
  furtherInformation?: Maybe<Scalars['String']>;
  infoflyer?: Maybe<Scalars['Int']>;
  location?: Maybe<LocationInput>;
  name?: Maybe<Scalars['String']>;
  newsletter?: Maybe<Scalars['Boolean']>;
  openinghours?: Maybe<Scalars['String']>;
  shopBundesland?: Maybe<ShopBundeslandUpdateOneInlineInput>;
  shopStatus?: Maybe<ShopStatusUpdateOneInlineInput>;
  shopTown?: Maybe<ShopTownUpdateOneInlineInput>;
  shopType?: Maybe<ShopTypeUpdateManyInlineInput>;
  shopcategories?: Maybe<ShopCategoryUpdateManyInlineInput>;
  stickerBack?: Maybe<Scalars['Int']>;
  stickerDelivery?: Maybe<Scalars['Boolean']>;
  stickerFront?: Maybe<Scalars['Int']>;
  trayinformation?: Maybe<Scalars['Int']>;
  website?: Maybe<Scalars['String']>;
};

export type ShopUpdateManyInlineInput = {
  /** Connect multiple existing Shop documents */
  connect?: Maybe<Array<ShopConnectInput>>;
  /** Create and connect multiple Shop documents */
  create?: Maybe<Array<ShopCreateInput>>;
  /** Delete multiple Shop documents */
  delete?: Maybe<Array<ShopWhereUniqueInput>>;
  /** Disconnect multiple Shop documents */
  disconnect?: Maybe<Array<ShopWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing Shop documents */
  set?: Maybe<Array<ShopWhereUniqueInput>>;
  /** Update multiple Shop documents */
  update?: Maybe<Array<ShopUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple Shop documents */
  upsert?: Maybe<Array<ShopUpsertWithNestedWhereUniqueInput>>;
};

export type ShopUpdateManyInput = {
  address?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  furtherInformation?: Maybe<Scalars['String']>;
  infoflyer?: Maybe<Scalars['Int']>;
  location?: Maybe<LocationInput>;
  name?: Maybe<Scalars['String']>;
  newsletter?: Maybe<Scalars['Boolean']>;
  openinghours?: Maybe<Scalars['String']>;
  stickerBack?: Maybe<Scalars['Int']>;
  stickerDelivery?: Maybe<Scalars['Boolean']>;
  stickerFront?: Maybe<Scalars['Int']>;
  trayinformation?: Maybe<Scalars['Int']>;
  website?: Maybe<Scalars['String']>;
};

export type ShopUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: ShopUpdateManyInput;
  /** Document search */
  where: ShopWhereInput;
};

export type ShopUpdateOneInlineInput = {
  /** Connect existing Shop document */
  connect?: Maybe<ShopWhereUniqueInput>;
  /** Create and connect one Shop document */
  create?: Maybe<ShopCreateInput>;
  /** Delete currently connected Shop document */
  delete?: Maybe<Scalars['Boolean']>;
  /** Disconnect currently connected Shop document */
  disconnect?: Maybe<Scalars['Boolean']>;
  /** Update single Shop document */
  update?: Maybe<ShopUpdateWithNestedWhereUniqueInput>;
  /** Upsert single Shop document */
  upsert?: Maybe<ShopUpsertWithNestedWhereUniqueInput>;
};

export type ShopUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: ShopUpdateInput;
  /** Unique document search */
  where: ShopWhereUniqueInput;
};

export type ShopUpsertInput = {
  /** Create document if it didn't exist */
  create: ShopCreateInput;
  /** Update document if it exists */
  update: ShopUpdateInput;
};

export type ShopUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: ShopUpsertInput;
  /** Unique document search */
  where: ShopWhereUniqueInput;
};

/** Identifies documents */
export type ShopWhereInput = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<ShopWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<ShopWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<ShopWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: Maybe<Scalars['String']>;
  address?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  address_contains?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  address_ends_with?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  address_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  address_not?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  address_not_contains?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  address_not_ends_with?: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  address_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  address_not_starts_with?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  address_starts_with?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  createdBy?: Maybe<UserWhereInput>;
  dataProtectionForm?: Maybe<AssetWhereInput>;
  email?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  email_contains?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  email_ends_with?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  email_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  email_not?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  email_not_contains?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  email_not_ends_with?: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  email_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  email_not_starts_with?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  email_starts_with?: Maybe<Scalars['String']>;
  furtherInformation?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  furtherInformation_contains?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  furtherInformation_ends_with?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  furtherInformation_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  furtherInformation_not?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  furtherInformation_not_contains?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  furtherInformation_not_ends_with?: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  furtherInformation_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  furtherInformation_not_starts_with?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  furtherInformation_starts_with?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  infoflyer?: Maybe<Scalars['Int']>;
  /** All values greater than the given value. */
  infoflyer_gt?: Maybe<Scalars['Int']>;
  /** All values greater than or equal the given value. */
  infoflyer_gte?: Maybe<Scalars['Int']>;
  /** All values that are contained in given list. */
  infoflyer_in?: Maybe<Array<Scalars['Int']>>;
  /** All values less than the given value. */
  infoflyer_lt?: Maybe<Scalars['Int']>;
  /** All values less than or equal the given value. */
  infoflyer_lte?: Maybe<Scalars['Int']>;
  /** All values that are not equal to given value. */
  infoflyer_not?: Maybe<Scalars['Int']>;
  /** All values that are not contained in given list. */
  infoflyer_not_in?: Maybe<Array<Scalars['Int']>>;
  name?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  name_contains?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  name_ends_with?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  name_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  name_not?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  name_not_contains?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  name_not_ends_with?: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  name_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  name_not_starts_with?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  name_starts_with?: Maybe<Scalars['String']>;
  newsletter?: Maybe<Scalars['Boolean']>;
  /** All values that are not equal to given value. */
  newsletter_not?: Maybe<Scalars['Boolean']>;
  openinghours?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  openinghours_contains?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  openinghours_ends_with?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  openinghours_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  openinghours_not?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  openinghours_not_contains?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  openinghours_not_ends_with?: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  openinghours_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  openinghours_not_starts_with?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  openinghours_starts_with?: Maybe<Scalars['String']>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  publishedBy?: Maybe<UserWhereInput>;
  scheduledIn_every?: Maybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: Maybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: Maybe<ScheduledOperationWhereInput>;
  shopBundesland?: Maybe<ShopBundeslandWhereInput>;
  shopStatus?: Maybe<ShopStatusWhereInput>;
  shopTown?: Maybe<ShopTownWhereInput>;
  shopType_every?: Maybe<ShopTypeWhereInput>;
  shopType_none?: Maybe<ShopTypeWhereInput>;
  shopType_some?: Maybe<ShopTypeWhereInput>;
  shopcategories_every?: Maybe<ShopCategoryWhereInput>;
  shopcategories_none?: Maybe<ShopCategoryWhereInput>;
  shopcategories_some?: Maybe<ShopCategoryWhereInput>;
  stickerBack?: Maybe<Scalars['Int']>;
  /** All values greater than the given value. */
  stickerBack_gt?: Maybe<Scalars['Int']>;
  /** All values greater than or equal the given value. */
  stickerBack_gte?: Maybe<Scalars['Int']>;
  /** All values that are contained in given list. */
  stickerBack_in?: Maybe<Array<Scalars['Int']>>;
  /** All values less than the given value. */
  stickerBack_lt?: Maybe<Scalars['Int']>;
  /** All values less than or equal the given value. */
  stickerBack_lte?: Maybe<Scalars['Int']>;
  /** All values that are not equal to given value. */
  stickerBack_not?: Maybe<Scalars['Int']>;
  /** All values that are not contained in given list. */
  stickerBack_not_in?: Maybe<Array<Scalars['Int']>>;
  stickerDelivery?: Maybe<Scalars['Boolean']>;
  /** All values that are not equal to given value. */
  stickerDelivery_not?: Maybe<Scalars['Boolean']>;
  stickerFront?: Maybe<Scalars['Int']>;
  /** All values greater than the given value. */
  stickerFront_gt?: Maybe<Scalars['Int']>;
  /** All values greater than or equal the given value. */
  stickerFront_gte?: Maybe<Scalars['Int']>;
  /** All values that are contained in given list. */
  stickerFront_in?: Maybe<Array<Scalars['Int']>>;
  /** All values less than the given value. */
  stickerFront_lt?: Maybe<Scalars['Int']>;
  /** All values less than or equal the given value. */
  stickerFront_lte?: Maybe<Scalars['Int']>;
  /** All values that are not equal to given value. */
  stickerFront_not?: Maybe<Scalars['Int']>;
  /** All values that are not contained in given list. */
  stickerFront_not_in?: Maybe<Array<Scalars['Int']>>;
  trayinformation?: Maybe<Scalars['Int']>;
  /** All values greater than the given value. */
  trayinformation_gt?: Maybe<Scalars['Int']>;
  /** All values greater than or equal the given value. */
  trayinformation_gte?: Maybe<Scalars['Int']>;
  /** All values that are contained in given list. */
  trayinformation_in?: Maybe<Array<Scalars['Int']>>;
  /** All values less than the given value. */
  trayinformation_lt?: Maybe<Scalars['Int']>;
  /** All values less than or equal the given value. */
  trayinformation_lte?: Maybe<Scalars['Int']>;
  /** All values that are not equal to given value. */
  trayinformation_not?: Maybe<Scalars['Int']>;
  /** All values that are not contained in given list. */
  trayinformation_not_in?: Maybe<Array<Scalars['Int']>>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  updatedBy?: Maybe<UserWhereInput>;
  website?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  website_contains?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  website_ends_with?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  website_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  website_not?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  website_not_contains?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  website_not_ends_with?: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  website_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  website_not_starts_with?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  website_starts_with?: Maybe<Scalars['String']>;
};

/** References Shop record uniquely */
export type ShopWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>;
};

/** Stage system enumeration */
export enum Stage {
  /** The Draft is the default stage for all your content. */
  Draft = 'DRAFT',
  /** The Published stage is where you can publish your content to. */
  Published = 'PUBLISHED'
}

export type Supporter = Node & {
  __typename?: 'Supporter';
  /** The time the document was created */
  createdAt: Scalars['DateTime'];
  /** User that created this document */
  createdBy?: Maybe<User>;
  /** Get the document in other stages */
  documentInStages: Array<Supporter>;
  /** List of Supporter versions */
  history: Array<Version>;
  /** The unique identifier */
  id: Scalars['ID'];
  /** System Locale field */
  locale: Locale;
  /** Get the other localizations for this document */
  localizations: Array<Supporter>;
  name?: Maybe<Scalars['String']>;
  picture?: Maybe<Asset>;
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  scheduledIn: Array<ScheduledOperation>;
  /** System stage field */
  stage: Stage;
  /** The time the document was updated */
  updatedAt: Scalars['DateTime'];
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
  website?: Maybe<Scalars['String']>;
};


export type SupporterCreatedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};


export type SupporterCreatedByArgs = {
  locales?: Maybe<Array<Locale>>;
};


export type SupporterDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
  stages?: Array<Stage>;
};


export type SupporterHistoryArgs = {
  limit?: Scalars['Int'];
  skip?: Scalars['Int'];
  stageOverride?: Maybe<Stage>;
};


export type SupporterLocalizationsArgs = {
  includeCurrent?: Scalars['Boolean'];
  locales?: Array<Locale>;
};


export type SupporterPictureArgs = {
  locales?: Maybe<Array<Locale>>;
};


export type SupporterPublishedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};


export type SupporterPublishedByArgs = {
  locales?: Maybe<Array<Locale>>;
};


export type SupporterScheduledInArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  locales?: Maybe<Array<Locale>>;
  skip?: Maybe<Scalars['Int']>;
  where?: Maybe<ScheduledOperationWhereInput>;
};


export type SupporterUpdatedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};


export type SupporterUpdatedByArgs = {
  locales?: Maybe<Array<Locale>>;
};

export type SupporterConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: Maybe<ConnectPositionInput>;
  /** Document to connect */
  where: SupporterWhereUniqueInput;
};

/** A connection to a list of items. */
export type SupporterConnection = {
  __typename?: 'SupporterConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<SupporterEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type SupporterCreateInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  /** Inline mutations for managing document localizations excluding the default locale */
  localizations?: Maybe<SupporterCreateLocalizationsInput>;
  /** name input for default locale (de) */
  name?: Maybe<Scalars['String']>;
  picture?: Maybe<AssetCreateOneInlineInput>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  /** website input for default locale (de) */
  website?: Maybe<Scalars['String']>;
};

export type SupporterCreateLocalizationDataInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  name?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
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
  /** Connect multiple existing Supporter documents */
  connect?: Maybe<Array<SupporterWhereUniqueInput>>;
  /** Create and connect multiple existing Supporter documents */
  create?: Maybe<Array<SupporterCreateInput>>;
};

export type SupporterCreateOneInlineInput = {
  /** Connect one existing Supporter document */
  connect?: Maybe<SupporterWhereUniqueInput>;
  /** Create and connect one Supporter document */
  create?: Maybe<SupporterCreateInput>;
};

/** An edge in a connection. */
export type SupporterEdge = {
  __typename?: 'SupporterEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: Supporter;
};

/** Identifies documents */
export type SupporterManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<SupporterWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<SupporterWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<SupporterWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  createdBy?: Maybe<UserWhereInput>;
  id?: Maybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  picture?: Maybe<AssetWhereInput>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  publishedBy?: Maybe<UserWhereInput>;
  scheduledIn_every?: Maybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: Maybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: Maybe<ScheduledOperationWhereInput>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  updatedBy?: Maybe<UserWhereInput>;
};

export enum SupporterOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  WebsiteAsc = 'website_ASC',
  WebsiteDesc = 'website_DESC'
}

export type SupporterUpdateInput = {
  /** Manage document localizations */
  localizations?: Maybe<SupporterUpdateLocalizationsInput>;
  /** name input for default locale (de) */
  name?: Maybe<Scalars['String']>;
  picture?: Maybe<AssetUpdateOneInlineInput>;
  /** website input for default locale (de) */
  website?: Maybe<Scalars['String']>;
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
  /** Localizations to delete */
  delete?: Maybe<Array<Locale>>;
  /** Localizations to update */
  update?: Maybe<Array<SupporterUpdateLocalizationInput>>;
  upsert?: Maybe<Array<SupporterUpsertLocalizationInput>>;
};

export type SupporterUpdateManyInlineInput = {
  /** Connect multiple existing Supporter documents */
  connect?: Maybe<Array<SupporterConnectInput>>;
  /** Create and connect multiple Supporter documents */
  create?: Maybe<Array<SupporterCreateInput>>;
  /** Delete multiple Supporter documents */
  delete?: Maybe<Array<SupporterWhereUniqueInput>>;
  /** Disconnect multiple Supporter documents */
  disconnect?: Maybe<Array<SupporterWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing Supporter documents */
  set?: Maybe<Array<SupporterWhereUniqueInput>>;
  /** Update multiple Supporter documents */
  update?: Maybe<Array<SupporterUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple Supporter documents */
  upsert?: Maybe<Array<SupporterUpsertWithNestedWhereUniqueInput>>;
};

export type SupporterUpdateManyInput = {
  /** Optional updates to localizations */
  localizations?: Maybe<SupporterUpdateManyLocalizationsInput>;
  /** name input for default locale (de) */
  name?: Maybe<Scalars['String']>;
  /** website input for default locale (de) */
  website?: Maybe<Scalars['String']>;
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
  /** Update many input */
  data: SupporterUpdateManyInput;
  /** Document search */
  where: SupporterWhereInput;
};

export type SupporterUpdateOneInlineInput = {
  /** Connect existing Supporter document */
  connect?: Maybe<SupporterWhereUniqueInput>;
  /** Create and connect one Supporter document */
  create?: Maybe<SupporterCreateInput>;
  /** Delete currently connected Supporter document */
  delete?: Maybe<Scalars['Boolean']>;
  /** Disconnect currently connected Supporter document */
  disconnect?: Maybe<Scalars['Boolean']>;
  /** Update single Supporter document */
  update?: Maybe<SupporterUpdateWithNestedWhereUniqueInput>;
  /** Upsert single Supporter document */
  upsert?: Maybe<SupporterUpsertWithNestedWhereUniqueInput>;
};

export type SupporterUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: SupporterUpdateInput;
  /** Unique document search */
  where: SupporterWhereUniqueInput;
};

export type SupporterUpsertInput = {
  /** Create document if it didn't exist */
  create: SupporterCreateInput;
  /** Update document if it exists */
  update: SupporterUpdateInput;
};

export type SupporterUpsertLocalizationInput = {
  create: SupporterCreateLocalizationDataInput;
  locale: Locale;
  update: SupporterUpdateLocalizationDataInput;
};

export type SupporterUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: SupporterUpsertInput;
  /** Unique document search */
  where: SupporterWhereUniqueInput;
};

/** Identifies documents */
export type SupporterWhereInput = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<SupporterWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<SupporterWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<SupporterWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  createdBy?: Maybe<UserWhereInput>;
  id?: Maybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  name_contains?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  name_ends_with?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  name_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  name_not?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  name_not_contains?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  name_not_ends_with?: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  name_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  name_not_starts_with?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  name_starts_with?: Maybe<Scalars['String']>;
  picture?: Maybe<AssetWhereInput>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  publishedBy?: Maybe<UserWhereInput>;
  scheduledIn_every?: Maybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: Maybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: Maybe<ScheduledOperationWhereInput>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  updatedBy?: Maybe<UserWhereInput>;
  website?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  website_contains?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  website_ends_with?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  website_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  website_not?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  website_not_contains?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  website_not_ends_with?: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  website_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  website_not_starts_with?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  website_starts_with?: Maybe<Scalars['String']>;
};

/** References Supporter record uniquely */
export type SupporterWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>;
};

export enum SystemDateTimeFieldVariation {
  Base = 'BASE',
  Combined = 'COMBINED',
  Localization = 'LOCALIZATION'
}

export type Translation = Node & {
  __typename?: 'Translation';
  category?: Maybe<Category>;
  /** The time the document was created */
  createdAt: Scalars['DateTime'];
  /** User that created this document */
  createdBy?: Maybe<User>;
  /** Get the document in other stages */
  documentInStages: Array<Translation>;
  /** List of Translation versions */
  history: Array<Version>;
  /** The unique identifier */
  id: Scalars['ID'];
  key: Scalars['String'];
  /** System Locale field */
  locale: Locale;
  /** Get the other localizations for this document */
  localizations: Array<Translation>;
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  scheduledIn: Array<ScheduledOperation>;
  /** System stage field */
  stage: Stage;
  /** The time the document was updated */
  updatedAt: Scalars['DateTime'];
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
  value?: Maybe<Scalars['String']>;
};


export type TranslationCreatedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};


export type TranslationCreatedByArgs = {
  locales?: Maybe<Array<Locale>>;
};


export type TranslationDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
  stages?: Array<Stage>;
};


export type TranslationHistoryArgs = {
  limit?: Scalars['Int'];
  skip?: Scalars['Int'];
  stageOverride?: Maybe<Stage>;
};


export type TranslationLocalizationsArgs = {
  includeCurrent?: Scalars['Boolean'];
  locales?: Array<Locale>;
};


export type TranslationPublishedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};


export type TranslationPublishedByArgs = {
  locales?: Maybe<Array<Locale>>;
};


export type TranslationScheduledInArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  locales?: Maybe<Array<Locale>>;
  skip?: Maybe<Scalars['Int']>;
  where?: Maybe<ScheduledOperationWhereInput>;
};


export type TranslationUpdatedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};


export type TranslationUpdatedByArgs = {
  locales?: Maybe<Array<Locale>>;
};

export type TranslationConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: Maybe<ConnectPositionInput>;
  /** Document to connect */
  where: TranslationWhereUniqueInput;
};

/** A connection to a list of items. */
export type TranslationConnection = {
  __typename?: 'TranslationConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<TranslationEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type TranslationCreateInput = {
  category?: Maybe<Category>;
  createdAt?: Maybe<Scalars['DateTime']>;
  key: Scalars['String'];
  /** Inline mutations for managing document localizations excluding the default locale */
  localizations?: Maybe<TranslationCreateLocalizationsInput>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  /** value input for default locale (de) */
  value?: Maybe<Scalars['String']>;
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
  /** Connect multiple existing Translation documents */
  connect?: Maybe<Array<TranslationWhereUniqueInput>>;
  /** Create and connect multiple existing Translation documents */
  create?: Maybe<Array<TranslationCreateInput>>;
};

export type TranslationCreateOneInlineInput = {
  /** Connect one existing Translation document */
  connect?: Maybe<TranslationWhereUniqueInput>;
  /** Create and connect one Translation document */
  create?: Maybe<TranslationCreateInput>;
};

/** An edge in a connection. */
export type TranslationEdge = {
  __typename?: 'TranslationEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: Translation;
};

/** Identifies documents */
export type TranslationManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<TranslationWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<TranslationWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<TranslationWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: Maybe<Scalars['String']>;
  category?: Maybe<Category>;
  /** All values that are contained in given list. */
  category_in?: Maybe<Array<Category>>;
  /** All values that are not equal to given value. */
  category_not?: Maybe<Category>;
  /** All values that are not contained in given list. */
  category_not_in?: Maybe<Array<Category>>;
  createdAt?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  createdBy?: Maybe<UserWhereInput>;
  id?: Maybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  key?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  key_contains?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  key_ends_with?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  key_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  key_not?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  key_not_contains?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  key_not_ends_with?: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  key_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  key_not_starts_with?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  key_starts_with?: Maybe<Scalars['String']>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  publishedBy?: Maybe<UserWhereInput>;
  scheduledIn_every?: Maybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: Maybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: Maybe<ScheduledOperationWhereInput>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  updatedBy?: Maybe<UserWhereInput>;
};

export enum TranslationOrderByInput {
  CategoryAsc = 'category_ASC',
  CategoryDesc = 'category_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  KeyAsc = 'key_ASC',
  KeyDesc = 'key_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  ValueAsc = 'value_ASC',
  ValueDesc = 'value_DESC'
}

export type TranslationUpdateInput = {
  category?: Maybe<Category>;
  key?: Maybe<Scalars['String']>;
  /** Manage document localizations */
  localizations?: Maybe<TranslationUpdateLocalizationsInput>;
  /** value input for default locale (de) */
  value?: Maybe<Scalars['String']>;
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
  /** Localizations to delete */
  delete?: Maybe<Array<Locale>>;
  /** Localizations to update */
  update?: Maybe<Array<TranslationUpdateLocalizationInput>>;
  upsert?: Maybe<Array<TranslationUpsertLocalizationInput>>;
};

export type TranslationUpdateManyInlineInput = {
  /** Connect multiple existing Translation documents */
  connect?: Maybe<Array<TranslationConnectInput>>;
  /** Create and connect multiple Translation documents */
  create?: Maybe<Array<TranslationCreateInput>>;
  /** Delete multiple Translation documents */
  delete?: Maybe<Array<TranslationWhereUniqueInput>>;
  /** Disconnect multiple Translation documents */
  disconnect?: Maybe<Array<TranslationWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing Translation documents */
  set?: Maybe<Array<TranslationWhereUniqueInput>>;
  /** Update multiple Translation documents */
  update?: Maybe<Array<TranslationUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple Translation documents */
  upsert?: Maybe<Array<TranslationUpsertWithNestedWhereUniqueInput>>;
};

export type TranslationUpdateManyInput = {
  category?: Maybe<Category>;
  /** Optional updates to localizations */
  localizations?: Maybe<TranslationUpdateManyLocalizationsInput>;
  /** value input for default locale (de) */
  value?: Maybe<Scalars['String']>;
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
  /** Update many input */
  data: TranslationUpdateManyInput;
  /** Document search */
  where: TranslationWhereInput;
};

export type TranslationUpdateOneInlineInput = {
  /** Connect existing Translation document */
  connect?: Maybe<TranslationWhereUniqueInput>;
  /** Create and connect one Translation document */
  create?: Maybe<TranslationCreateInput>;
  /** Delete currently connected Translation document */
  delete?: Maybe<Scalars['Boolean']>;
  /** Disconnect currently connected Translation document */
  disconnect?: Maybe<Scalars['Boolean']>;
  /** Update single Translation document */
  update?: Maybe<TranslationUpdateWithNestedWhereUniqueInput>;
  /** Upsert single Translation document */
  upsert?: Maybe<TranslationUpsertWithNestedWhereUniqueInput>;
};

export type TranslationUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: TranslationUpdateInput;
  /** Unique document search */
  where: TranslationWhereUniqueInput;
};

export type TranslationUpsertInput = {
  /** Create document if it didn't exist */
  create: TranslationCreateInput;
  /** Update document if it exists */
  update: TranslationUpdateInput;
};

export type TranslationUpsertLocalizationInput = {
  create: TranslationCreateLocalizationDataInput;
  locale: Locale;
  update: TranslationUpdateLocalizationDataInput;
};

export type TranslationUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: TranslationUpsertInput;
  /** Unique document search */
  where: TranslationWhereUniqueInput;
};

/** Identifies documents */
export type TranslationWhereInput = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<TranslationWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<TranslationWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<TranslationWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: Maybe<Scalars['String']>;
  category?: Maybe<Category>;
  /** All values that are contained in given list. */
  category_in?: Maybe<Array<Category>>;
  /** All values that are not equal to given value. */
  category_not?: Maybe<Category>;
  /** All values that are not contained in given list. */
  category_not_in?: Maybe<Array<Category>>;
  createdAt?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  createdBy?: Maybe<UserWhereInput>;
  id?: Maybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  key?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  key_contains?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  key_ends_with?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  key_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  key_not?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  key_not_contains?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  key_not_ends_with?: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  key_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  key_not_starts_with?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  key_starts_with?: Maybe<Scalars['String']>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  publishedBy?: Maybe<UserWhereInput>;
  scheduledIn_every?: Maybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: Maybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: Maybe<ScheduledOperationWhereInput>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  updatedBy?: Maybe<UserWhereInput>;
  value?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  value_contains?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  value_ends_with?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  value_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  value_not?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  value_not_contains?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  value_not_ends_with?: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  value_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  value_not_starts_with?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  value_starts_with?: Maybe<Scalars['String']>;
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
  /** The time the document was created */
  createdAt: Scalars['DateTime'];
  /** Get the document in other stages */
  documentInStages: Array<User>;
  /** The unique identifier */
  id: Scalars['ID'];
  /** Flag to determine if user is active or not */
  isActive: Scalars['Boolean'];
  /** User Kind. Can be either MEMBER, PAT or PUBLIC */
  kind: UserKind;
  /** The username */
  name: Scalars['String'];
  /** Profile Picture url */
  picture?: Maybe<Scalars['String']>;
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** System stage field */
  stage: Stage;
  /** The time the document was updated */
  updatedAt: Scalars['DateTime'];
};


/** User system model */
export type UserDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
  stages?: Array<Stage>;
};

export type UserConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: Maybe<ConnectPositionInput>;
  /** Document to connect */
  where: UserWhereUniqueInput;
};

/** A connection to a list of items. */
export type UserConnection = {
  __typename?: 'UserConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<UserEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
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
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: User;
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
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<UserWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<UserWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<UserWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  id?: Maybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  isActive?: Maybe<Scalars['Boolean']>;
  /** All values that are not equal to given value. */
  isActive_not?: Maybe<Scalars['Boolean']>;
  kind?: Maybe<UserKind>;
  /** All values that are contained in given list. */
  kind_in?: Maybe<Array<UserKind>>;
  /** All values that are not equal to given value. */
  kind_not?: Maybe<UserKind>;
  /** All values that are not contained in given list. */
  kind_not_in?: Maybe<Array<UserKind>>;
  name?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  name_contains?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  name_ends_with?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  name_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  name_not?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  name_not_contains?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  name_not_ends_with?: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  name_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  name_not_starts_with?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  name_starts_with?: Maybe<Scalars['String']>;
  picture?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  picture_contains?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  picture_ends_with?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  picture_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  picture_not?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  picture_not_contains?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  picture_not_ends_with?: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  picture_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  picture_not_starts_with?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  picture_starts_with?: Maybe<Scalars['String']>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
};

export enum UserOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  IsActiveAsc = 'isActive_ASC',
  IsActiveDesc = 'isActive_DESC',
  KindAsc = 'kind_ASC',
  KindDesc = 'kind_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  PictureAsc = 'picture_ASC',
  PictureDesc = 'picture_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

export type UserUpdateManyInlineInput = {
  /** Connect multiple existing User documents */
  connect?: Maybe<Array<UserConnectInput>>;
  /** Disconnect multiple User documents */
  disconnect?: Maybe<Array<UserWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing User documents */
  set?: Maybe<Array<UserWhereUniqueInput>>;
};

export type UserUpdateOneInlineInput = {
  /** Connect existing User document */
  connect?: Maybe<UserWhereUniqueInput>;
  /** Disconnect currently connected User document */
  disconnect?: Maybe<Scalars['Boolean']>;
};

/** Identifies documents */
export type UserWhereInput = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<UserWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<UserWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<UserWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  id?: Maybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  isActive?: Maybe<Scalars['Boolean']>;
  /** All values that are not equal to given value. */
  isActive_not?: Maybe<Scalars['Boolean']>;
  kind?: Maybe<UserKind>;
  /** All values that are contained in given list. */
  kind_in?: Maybe<Array<UserKind>>;
  /** All values that are not equal to given value. */
  kind_not?: Maybe<UserKind>;
  /** All values that are not contained in given list. */
  kind_not_in?: Maybe<Array<UserKind>>;
  name?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  name_contains?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  name_ends_with?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  name_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  name_not?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  name_not_contains?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  name_not_ends_with?: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  name_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  name_not_starts_with?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  name_starts_with?: Maybe<Scalars['String']>;
  picture?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  picture_contains?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  picture_ends_with?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  picture_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  picture_not?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  picture_not_contains?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  picture_not_ends_with?: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  picture_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  picture_not_starts_with?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  picture_starts_with?: Maybe<Scalars['String']>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
};

/** References User record uniquely */
export type UserWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>;
};

export type Version = {
  __typename?: 'Version';
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  revision: Scalars['Int'];
  stage: Stage;
};

export type VersionWhereInput = {
  id: Scalars['ID'];
  revision: Scalars['Int'];
  stage: Stage;
};

export enum _FilterKind {
  And = 'AND',
  Not = 'NOT',
  Or = 'OR',
  Contains = 'contains',
  ContainsAll = 'contains_all',
  ContainsNone = 'contains_none',
  ContainsSome = 'contains_some',
  EndsWith = 'ends_with',
  Eq = 'eq',
  EqNot = 'eq_not',
  Gt = 'gt',
  Gte = 'gte',
  In = 'in',
  Lt = 'lt',
  Lte = 'lte',
  NotContains = 'not_contains',
  NotEndsWith = 'not_ends_with',
  NotIn = 'not_in',
  NotStartsWith = 'not_starts_with',
  RelationalEvery = 'relational_every',
  RelationalNone = 'relational_none',
  RelationalSingle = 'relational_single',
  RelationalSome = 'relational_some',
  Search = 'search',
  StartsWith = 'starts_with'
}

export enum _MutationInputFieldKind {
  Enum = 'enum',
  Relation = 'relation',
  RichText = 'richText',
  RichTextWithEmbeds = 'richTextWithEmbeds',
  Scalar = 'scalar',
  Union = 'union',
  Virtual = 'virtual'
}

export enum _MutationKind {
  Create = 'create',
  Delete = 'delete',
  DeleteMany = 'deleteMany',
  Publish = 'publish',
  PublishMany = 'publishMany',
  Unpublish = 'unpublish',
  UnpublishMany = 'unpublishMany',
  Update = 'update',
  UpdateMany = 'updateMany',
  Upsert = 'upsert'
}

export enum _OrderDirection {
  Asc = 'asc',
  Desc = 'desc'
}

export enum _RelationInputCardinality {
  Many = 'many',
  One = 'one'
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
  Combined = 'combined',
  Localization = 'localization'
}
