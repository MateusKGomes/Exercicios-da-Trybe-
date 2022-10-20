const order = {
    name: 'Rafael Andrade',
    phoneNumber: '11-98763-1416',
    address: {
      street: 'Rua das Flores',
      number: '389',
      apartment: '701',
    },
    order: {
      pizza: {
        marguerita: {
          amount: 1,
          price: 25,
        },
        pepperoni: {
          amount: 1,
          price: 20,
        },
      },
      drinks: {
        coke: {
          type: 'Coca-Cola Zero',
          price: 10,
          amount: 1,
        },
      },
      delivery: {
        deliveryPerson: 'Ana Silveira',
        price: 5,
      },
    },
    payment: {
      total: 60,
    },
  };
  
  const customerInfo = (order) => {
    const getDeliveryPerson = order.order.delivery.deliveryPerson;
    const getNamePerson = order[`name`];
    const getPhoneNumber = order[`phoneNumber`];
    const getStreetName = order.address[`street`]
    const getNumberAdress = order.address[`number`];
    const getApartmentNumber = order.address[`apartment`];
    // console.log(`Olá, ${getDeliveryPerson}, entrega para: ${getNamePerson}.
    // Telefone: ${getPhoneNumber}, 
    // R. ${getStreetName}, N° ${getNumberAdress}, AP: ${getApartmentNumber}`);
  };
  customerInfo(order);
  
  const orderModifier = (order) => {
    const getDeliveryPerson = order.name = 'Luiz Silva';
    const getPizza = Object.keys(order.order.pizza);
    const getCoke = order.order.drinks.coke.type;
    const payment = order.payment = '50';
    console.log(`Olá ${getDeliveryPerson}, o total do seu pedido de ${getPizza} e ${getCoke}, é R$ ${payment}.`);

  };
  
  orderModifier(order);