import { ChartType } from "angular-google-charts"

export interface Chart {
    type: ChartType,
    data: (Date | number)[][],
    columnNames: string[]
}