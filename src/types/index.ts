export interface ImportantDates {
  applyStart: string // ISO: "2025-12-04"
  applyEnd: string // ISO: "2025-12-24"
  examDate?: string // Optional
}

export interface VacancyQuota {
  total: number
  merit: number
  freedomFighter: number
  ethnic: number
  disabled: number
}

export interface Job {
  id: string
  title: string
  titleEn: string
  organization: string
  organizationEn: string
  ministry?: string
  ministryEn?: string
  division: string
  jobType: string
  payScale: string
  payScaleEn: string
  importantDates: ImportantDates
  circularRef?: string
  circularDate?: string
  applicationFee: string
  applyLink: string
  officialNotification: string
  howToApply: string
  howToApplyEn: string
  sourceWebsite: string
  lastUpdated: string
  vacancyQuota?: VacancyQuota
}
