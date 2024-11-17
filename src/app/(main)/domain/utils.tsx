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
};

export const getCategoryDescription = (category: QuestionCategoryEnum) => {
  switch (category) {
    case QuestionCategoryEnum.Perception:
      return "Conozcamos la perspectiva que dejamos en los demas y las suposiciones que hacemos sobre otros.";
    case QuestionCategoryEnum.Connection:
      return "Preguntas para conectar de manera profunda con el otro.";
    case QuestionCategoryEnum.Reflection:
      return "Reflexionemos sobre la experiencia que acabamos de vivir.";
  }
};

export const getTextColor = (category: QuestionCategoryEnum) => {
  switch (category) {
    case QuestionCategoryEnum.Connection:
      return "text-connection";
    case QuestionCategoryEnum.Perception:
      return "text-perception";
    case QuestionCategoryEnum.Reflection:
      return "text-reflection";
  }
};

export const getBackgroudColor = (category: QuestionCategoryEnum) => {
  switch (category) {
    case QuestionCategoryEnum.Connection:
      return "bg-connection";
    case QuestionCategoryEnum.Perception:
      return "bg-perception";
    case QuestionCategoryEnum.Reflection:
      return "bg-reflection";
  }
};
