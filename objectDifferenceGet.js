/*
Задача состоит в том, чтобы определить, какие дисциплины первого семестра были убраны во втором семестре. Опять же, это упрощённая задача, но её достаточно, чтобы схватить суть. Условимся, если дисциплина имеет значение null, это означает, что она существует, но на момент создания карты данные по ней не были определены или уточнены (возможно, это произойдёт позже) — реальная жизнь накладывает свои сложности. Алгоритм может быть таким:

Подготавливаем массив-результат — аккумулятор, в котором будем вести список убранных дисциплин.
Получаем все дисциплины первого семестра. Дисциплины — это ключи, для получения массива ключей у объекта есть специальный метод Object.keys().
Перебираем дисциплины первого семестра. Для каждой дисциплины определяем, есть ли она в карте дисциплин второго семестра:
Если свойства нет (то есть дисциплина была убрана во втором семестре), то добавляем её в массив-результат.
Возвращаем результирующий массив.
*/
//Первый семестр
const firstSemesterSubjects = {
  chemistry: {
    faculty: 'Chemistry faculty',
    teacher: 'Ivanov',
  },
  law: {
    // какие-то характеристики
  },
  informatics: null,
  microeconomics: {
    // какие-то характеристики
  },
};
//Второй семестр
const secondSemesterSubjects = {
  microeconomics: null,
  chemistry: {
    faculty: 'Chemistry faculty',
    teacher: 'Ivanov',
  },
  informatics: {
    // какие-то характеристики
  },
};


const getRemovedSubjects = (first, second) => {
  const removedSubjects = [];
  const firstSemesterSubjects = Object.keys(first);

  for (const subject of firstSemesterSubjects) {
    if (!second.hasOwnProperty(subject)) {
      removedSubjects.push(subject);
    }
  }

  return removedSubjects;
};

getRemovedSubjects(firstSemesterSubjects, secondSemesterSubjects);
// ['law']
