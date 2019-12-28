// Tags
export interface ITag {
  name: string;
  href: string;
}

export interface ITagged {
  [type: string]: ITag[] | undefined;
}

// Data
export interface IContent {
  conetntURL: string[];
  thumbnailURL?: string;
}

// Output
export interface IID<ID = number> { id: ID; }

export interface IData<ID = number, TAGS extends ITagged = IStdTaging> extends IID<ID> {
  content: IContent[] | IContent;
  tags: TAGS;
}

// Extra
export interface IStdTaging extends ITagged {
  tags?: ITag[];

  artists?: ITag[];
  groups?: ITag[];

  characters?: ITag[];
  parodies?: ITag[];

  languages?: ITag[];
  categories?: ITag[];
}

export interface ITitled {
  title: string;
  titleAlt?: string | null;
}

