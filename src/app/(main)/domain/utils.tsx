import { QuestionCategoryEnum } from "./enums/types";

export const getCategoryDisplayName = (category: QuestionCategoryEnum) => {
    switch (category) {
        case QuestionCategoryEnum.Connection:
            return "Conexión";
        case QuestionCategoryEnum.Perception:
            return "Percepción";
        case QuestionCategoryEnum.Reflection:
            return "Reflexión";
    }
}