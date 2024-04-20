(() => {

  function isRedFruit( fruit: string ): boolean {
      const redFruits = ['manzana', 'cereza', 'ciruela'];
      return redFruits.includes(fruit);
  }

  const fruits = {
      red: ['manzana','fresa'],
      yellow: ['piña','banana'],
      purple: ['moras','uvas']
  }

  type FruitColor = 'red' | 'yellow' | 'purple' | 'pink';

  function getFruitsByColor( color: FruitColor ): string[] {
      if (!Object.keys(fruits).includes(color)) {
        throw new Error('the color must be: red, yellow, purple');
      }

      return fruits[color as keyof typeof fruits];
  }

  const WORKING_STEPS = {
      isFirstStepWorking: true,
      isSecondStepWorking: true,
      isThirdStepWorking: false,
      isFourthStepWorking: false,
  }

  const STEP_WORKING = {
      1: 'First step broken.',
      2: 'Second step broken.',
      3: 'Third step broken.',
      4: 'Working properly!',
  }

  function workingSteps() {
      const countSteps = Object.values(WORKING_STEPS).filter( value => value === true ).length;
      return STEP_WORKING[countSteps as keyof typeof STEP_WORKING];
  }

  // isRedFruit
  console.log({ isRedFruit: isRedFruit('cereza'), fruit: 'cereza' }); // true
  console.log({ isRedFruit: isRedFruit('piña'), fruit: 'piña' }); // true

  //getFruitsByColor
  console.log({ redFruits: getFruitsByColor('red') }); // ['manzana', 'fresa']
  console.log({ yellowFruits: getFruitsByColor('yellow') }); // ['piña', 'banana']
  console.log({ purpleFruits: getFruitsByColor('purple') }); // ['moras', 'uvas']
  console.log({ pinkFruits: getFruitsByColor('pink') }); // Error: the color must be: red, yellow, purple

  // workingSteps
  console.log({ workingSteps: workingSteps() }); // Cambiar los valores de la línea 31 y esperar los resultados


})();
