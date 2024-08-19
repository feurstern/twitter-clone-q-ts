export interface Todo {
  id: number;
  content: string;
}

export interface Meta {
  totalCount: number;
}

export interface listDrawerInterfacee {
  iconName: string,
  sectionName: string,
  path?: string,
  fn?: string,
}

export interface rightDrawerListInterface {
  title: string,
  subTitle: string,
  caption: string
}

export interface rightDrawerWhoIsToFollowInterface {
  accountName: string,
  accountId: string
  image: string,
  isViP: boolean
}


export interface settingMenuListInterface {
  menu: string
  subMenu: string[],
}

/* actually I want to set the id properties, 
but since it was for prototype and mostly hardcode
I will use the default index instead as the primary id
*/
export interface newsFeedInterface {
  username: string,
  userProfileImage: string,
  userId: string,
  caption: string,
  video?: string[],
  image?: string[]
  datePosted: string,
}
