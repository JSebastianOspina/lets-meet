export enum QuestionCategoryEnum {
    Perception = 'perception',
    Connection = 'connection',
    Reflection = 'reflection'
}


export interface CategoryContent {
    questions: string[],
    actions: string[]
    finalActions?: string[]
}