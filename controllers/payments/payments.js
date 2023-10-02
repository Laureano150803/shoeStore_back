import mercadopago from 'mercadopago';
import nodemailer from 'nodemailer'


const payments = async (req, res, next) => {

  let { unit_price, } = req.body
  

    mercadopago.configure({ access_token: process.env.ACCESS_TOKEN })
    

    const preference = {
      items: [
        {
          title:"shoes: " ,
          unit_price: unit_price,
          quantity: 1,
          currency_id: 'USD',
        },
      ],
        back_urls: {
          success: 'https://shoe-store-front-umber.vercel.app/',
          failure: 'https://shoe-store-front-umber.vercel.app/',
          pending: '',
        },
        auto_return: "approved",
    };

    mercadopago.preferences
      .create(preference)
      
      .then( response => {

        return res
          .status(200)
          .json({
            response,
            preferenceId: response.body.id
          })
      })
      .catch(err => console.log(err));

};

export default payments;