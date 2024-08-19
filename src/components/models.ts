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
  path: string
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
