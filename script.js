 const testingScope = (escopo) => {
    if (escopo === true) {
      let ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
      ifScope = `${ifScope}  ótimo, fui utilizada no escopo!`;
      console.log(ifScope);
    } else {
      const elseScope = 'Não devo ser utilizada fora do meu escopo (else)';
      console.log(elseScope);
    }
  }

  testingScope(true);

  const oddsAndEvens = [13, 3, 4, 10, 7, 2];
  oddsAndEvens.sort(function(a, b){
    if(a > b) return 1;
    if(a< b) return -1;
    return 0;

  });
  console.log(`Os numeros ${oddsAndEvens} se encontram em ordem crescente!`);

