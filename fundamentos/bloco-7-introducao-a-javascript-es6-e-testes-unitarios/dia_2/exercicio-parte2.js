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
        }
      },
      drinks: {
        coke: {
          type: 'Coca-Cola Zero',
          price: 10,
          amount: 1,
        }
      },
      delivery: {
        deliveryPerson: 'Ana Silveira',
        price: 5,
      }
    },
    payment: {
      total: 60,
    },
  };

  
  
  const customerInfo = (order) => {
      const deliveryPerson = order.order.delivery.deliveryPerson
      const person = order.name
      const phone = order.phoneNumber
      const street = order.address.street
      const number = order.address.number
      const apartment = order.address.apartment
    
  console.log(`Ola ${deliveryPerson}, entrega para: ${person}, telefone: ${phone}, R. ${street}, N: ${number}, AP: ${apartment} `);
}
  
  customerInfo(order);
  
  const orderModifier = (order) => {
    const newName = order.name = 'Luiz Silva';
    const newPaymet = order.payment.total = '50'
    const pizzas = Object.keys(order.order.pizza)
    const refri = order.order.drinks.coke.type
    console.log(`Olá ${newName}, o total do seu pedido de ${pizzas[0]}, ${pizzas[1]} e ${refri} é R$ ${newPaymet}.`);
  }
  
  orderModifier(order);

  //console.log(`O pedido é do ${Object.values(order.name)}`);