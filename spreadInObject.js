    const user = { name: 'Vasya', age: 25 };
    const user2 = { name: 'Petya', surname: 'Ivanov' };
    //В результат слияния записывается свойство того ключа, который стоит правее
    const newUser = { ...user, married: true, ...user2 };
    console.log(newUser); // => { name: 'Petya', age: 25, married: true, surname: 'Ivanov' }

    const married = true;
    //const property = 'middleName'; // для задания динамического свойства
    const newUser2 = {
      married,
      'middleName': 'Nikolaevich',
      ...user,
      ...user2,
    };
    console.log(newUser2); // =>
    // { married: true,
    //   middleName: 'Nikolaevich',
    //   name: 'Petya',
    //   age: 25,
    //   surname: 'Ivanov' }
    
