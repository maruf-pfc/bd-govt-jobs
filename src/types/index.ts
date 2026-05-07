export interface ImportantDates {
  applyStart: string
  applyEnd: string
  examDate?: string
}

export interface Job {
  id: string
  title: string
  titleEn: string
  organization: string
  organizationEn: string
  division: string
  jobType: string
  payScale: string
  payScaleEn: string
  importantDates: ImportantDates
  applicationFee: string
  applyLink: string
  officialNotification: string
  howToApply: string
  howToApplyEn: string
  sourceWebsite: string
  lastUpdated: string
}
