import React, { Fragment, useEffect, useState } from 'react';
import Breadcrumb from '../common/breadcrumb';
import { firebase_app } from '../../data/config';

const Pricing = () => {

    const prices = {};
    //const [pricing,setPricing]=useState([]);
    const [test,testPrice]=useState([]);

    const currentUser = firebase_app.auth().currentUser.uid;

    useEffect(() => {
      //  startDataListeners();
      function startDataListeners() {
      
        firebase_app.firestore().collection('products')
          .where('active', '==', true)
          .get()
          .then(function (querySnapshot) {
            querySnapshot.forEach(async function (doc) {
              const priceSnap = await doc.ref
                .collection('prices')
                .where('active', '==', true)
                .orderBy('unit_amount')
                .get();
               const product = doc.data();
            
              priceSnap.docs.forEach((doc) => {
                const priceId = doc.id;
                const priceData = doc.data();
                prices[priceId] = priceData;
                const content = document.createTextNode(
                  `${new Intl.NumberFormat('en-US', {
                    style: 'currency',
                    currency: priceData.currency,
                  }).format((priceData.unit_amount / 100).toFixed(2))} per ${
                    priceData.interval ?? 'once'
                  }`
                );
                
               // setPricing(arr => [...arr , product]);
                //console.log(pricing);
 const finalPrice = ({
   id: doc.id,  
   content : content.data,
   product: product
 }); 
 console.log(finalPrice);
 testPrice(tarr => [...tarr , finalPrice]);

              });
            });
          });
        }
        startDataListeners();
    },  []);

    // const fetchCarList= useCallback(() => {
       
    //     }

//     function startDataListeners() {
      
//         firebase_app.firestore().collection('products')
//           .where('active', '==', true)
//           .get()
//           .then(function (querySnapshot) {
//             querySnapshot.forEach(async function (doc) {
//               const priceSnap = await doc.ref
//                 .collection('prices')
//                 .where('active', '==', true)
//                 .orderBy('unit_amount')
//                 .get();
//                const product = doc.data();
            
//               priceSnap.docs.forEach((doc) => {
//                 const priceId = doc.id;
//                 const priceData = doc.data();
//                 prices[priceId] = priceData;
//                 const content = document.createTextNode(
//                   `${new Intl.NumberFormat('en-US', {
//                     style: 'currency',
//                     currency: priceData.currency,
//                   }).format((priceData.unit_amount / 100).toFixed(2))} per ${
//                     priceData.interval ?? 'once'
//                   }`
//                 );
                
//                 setPricing(arr => [...arr , product]);
//                 console.log(pricing);
//  const finalPrice = ({
//    id: doc.id,  
//    content : content.data,
//    product: product
//  }); 
//  console.log(finalPrice);
//  testPrice(tarr => [...tarr , finalPrice]);

//               });
//             });
//           });
//         }

        async function subscribe(event, priDa) {
            
            event.preventDefault();
           //document.querySelectorAll('button').forEach((b) => (b.disabled = true))
            console.log(priDa);
            const selectedPrice = {
            //   price: formData.get('price'),
            price: priDa,
            };
            // For prices with metered billing we need to omit the quantity parameter.
            // For all other prices we set quantity to 1.
            if (prices[selectedPrice.price]?.recurring?.usage_type !== 'metered')
              selectedPrice.quantity = 1;
            const checkoutSession = {
              automatic_tax: true,
              tax_id_collection: true,
              collect_shipping_address: true,
              allow_promotion_codes: true,
              line_items: [selectedPrice],
              success_url: "http://localhost:3000/dashboard",
              cancel_url: window.location.origin,
              metadata: {
                key: 'value',
              },
            };
            // For one time payments set mode to payment.
            if (prices[selectedPrice.price]?.type === 'one_time') {
              checkoutSession.mode = 'payment';
              checkoutSession.payment_method_types = ['card', 'sepa_debit', 'sofort'];
            }
          
            const docRef = await firebase_app.firestore()
              .collection('Users')
              .doc(currentUser)
              .collection('checkout_sessions')
              .add(checkoutSession);
            // Wait for the CheckoutSession to get attached by the extension
            docRef.onSnapshot((snap) => {
              const { error, url } = snap.data();
              if (error) {
                // Show an error to your customer and then inspect your function logs.
                console.log(error);
                alert(`An error occured: ${error.message}`);
                //document.querySelectorAll('button').forEach((b) => (b.disabled = false));
              }
              if (url) {
                window.location.assign(url);
              }
            });
          }

    return (
        <Fragment>
            <Breadcrumb title="Pricing" parent="Pricing" />
            <div className="container-fluid">
                <div className="row">
                    <div className="col-sm-12">
                        <div className="card">
                            <div className="card-header">
                                <h5>Pricing</h5>
                            </div>
                            <div className="card-body row pricing-content">           
       {
            test.map((dta, i) => (
                <div className="col-xl-4 col-sm-12 xl-50" key={i}>
                <div className="card text-center pricing-simple" >
                    <div className="card-body">
                        <h3>{dta.product.name}</h3>
                        <h4>{dta.content}</h4>
                        <h6 className="mb-0">{dta.product.description}</h6>
                    </div><a className="btn btn-lg btn-primary btn-block" href="#javascript">
                        <h5 className="mb-0" onClick={(e)=>subscribe(e, dta.id)}>Subscribe</h5></a>
                </div>
            </div>
            ))
        }

            {/* <section className="products"></section> */}

                                {/* <div className="col-xl-3 col-sm-6 xl-50">
                                    <div className="card text-center pricing-simple">
                                        <div className="card-body">
                                            <h3>{Standard}</h3>
                                            <h1>{"$15"}</h1>
                                            <h6 className="mb-0">{LorumIpsum}</h6>
                                        </div><a className="btn btn-lg btn-primary btn-block" href="#javascript">
                                            <h5 className="mb-0">{Purchase}</h5></a>
                                    </div>
                                </div>
                                 <div className="col-xl-3 col-sm-6 xl-50">
                                    <div className="card text-center pricing-simple">
                                        <div className="card-body">
                                            <h3>{Business}</h3>
                                            <h1>{"$25"}</h1>
                                            <h6 className="mb-0">{LorumIpsum}</h6>
                                        </div><a className="btn btn-lg btn-primary btn-block" href="#javascript">
                                            <h5 className="mb-0">{Purchase}</h5></a>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-sm-6 xl-50">
                                    <div className="card text-center pricing-simple">
                                        <div className="card-body">
                                            <h3>{Premium}</h3>
                                            <h1>{"$35"}</h1>
                                            <h6 className="mb-0">{LorumIpsum}</h6>
                                        </div><a className="btn btn-lg btn-primary btn-block" href="#javascript">
                                            <h5 className="mb-0">{Purchase}</h5></a>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-sm-6 xl-50">
                                    <div className="card text-center pricing-simple">
                                        <div className="card-body">
                                            <h3>{Extra}</h3>
                                            <h1>{"$45"}</h1>
                                            <h6 className="mb-0">{LorumIpsum}</h6>
                                        </div><a className="btn btn-lg btn-primary btn-block" href="#javascript">
                                            <h5 className="mb-0">{Purchase}</h5></a>
                                    </div>
                                </div>  */}
                            </div>
                        </div>
                    </div>
                    {/* <div className="col-sm-12">
                        <div className="card">
                            <div className="card-header">
                                <h5>{Pricings}</h5>
                            </div>
                            <div className="card-body row pricing-content">
                                <div className="col-md-4">
                                    <div className="pricing-block card text-center">
                                        <svg x="0" y="0" viewBox="0 0 360 220">
                                            <g>
                                                <path d="M0.732,193.75c0,0,29.706,28.572,43.736-4.512c12.976-30.599,37.005-27.589,44.983-7.061                                        c8.09,20.815,22.83,41.034,48.324,27.781c21.875-11.372,46.499,4.066,49.155,5.591c6.242,3.586,28.729,7.626,38.246-14.243                                        s27.202-37.185,46.917-8.488c19.715,28.693,38.687,13.116,46.502,4.832c7.817-8.282,27.386-15.906,41.405,6.294V0H0.48L0.732,193.75z"></path>
                                            </g>
                                            <text transform="matrix(1 0 0 1 69.7256 116.2686)" fill="#fff" fontSize="78.4489">{"$10"}</text>
                                            <text transform="matrix(0.9566 0 0 1 197.3096 83.9121)" fill="#fff" fontSize="29.0829">{".99"}</text>
                                            <text transform="matrix(1 0 0 1 233.9629 115.5303)" fill="#fff" fontSize="15.4128">{"/Month"}</text>
                                        </svg>
                                        <div className="pricing-inner">
                                            <h3 className="font-primary">{Standard}</h3>
                                            <ul className="pricing-inner">
                                                {StandardArray.map((items,i) => 
                                                    <li key={i}>
                                                    <h6><b>{items.content1}</b> {items.content2}</h6>
                                                    </li>
                                                )}
                                            </ul>
                                            <button className="btn btn-primary btn-lg" type="button">{Subscribe}</button>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="pricing-block card text-center">
                                        <svg x="0" y="0" viewBox="0 0 360 220">
                                            <g>
                                                <path d="M0.732,193.75c0,0,29.706,28.572,43.736-4.512c12.976-30.599,37.005-27.589,44.983-7.061                                        c8.09,20.815,22.83,41.034,48.324,27.781c21.875-11.372,46.499,4.066,49.155,5.591c6.242,3.586,28.729,7.626,38.246-14.243                                        s27.202-37.185,46.917-8.488c19.715,28.693,38.687,13.116,46.502,4.832c7.817-8.282,27.386-15.906,41.405,6.294V0H0.48                                        L0.732,193.75z"></path>
                                            </g>
                                            <text transform="matrix(1 0 0 1 69.7256 116.2686)" fill="#fff" fontSize="78.4489">{"$20"}</text>
                                            <text transform="matrix(0.9566 0 0 1 197.3096 83.9121)" fill="#fff" fontSize="29.0829">{".99"}</text>
                                            <text transform="matrix(1 0 0 1 233.9629 115.5303)" fill="#fff" fontSize="15.4128">{"/Month"}</text>
                                        </svg>
                                        <div className="pricing-inner">
                                            <h3 className="font-primary">{Business}</h3>
                                            <ul className="pricing-inner">
                                                {Business_Premium_Array.map((items,i) => 
                                                    <li key={i}>
                                                        <h6><b>{items.content1}</b> {items.content2}</h6>
                                                    </li>
                                                )}
                                            </ul>
                                            <button className="btn btn-primary btn-lg" type="button">{Subscribe}</button>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="pricing-block card text-center">
                                        <svg x="0" y="0" viewBox="0 0 360 220">
                                            <g>
                                                <path d="M0.732,193.75c0,0,29.706,28.572,43.736-4.512c12.976-30.599,37.005-27.589,44.983-7.061                                        c8.09,20.815,22.83,41.034,48.324,27.781c21.875-11.372,46.499,4.066,49.155,5.591c6.242,3.586,28.729,7.626,38.246-14.243                                        s27.202-37.185,46.917-8.488c19.715,28.693,38.687,13.116,46.502,4.832c7.817-8.282,27.386-15.906,41.405,6.294V0H0.48                                        L0.732,193.75z"></path>
                                            </g>
                                            <text transform="matrix(1 0 0 1 69.7256 116.2686)" fill="#fff" fontSize="78.4489">{"$30"}</text>
                                            <text transform="matrix(0.9566 0 0 1 197.3096 83.9121)" fill="#fff" fontSize="29.0829">{".99"}</text>
                                            <text transform="matrix(1 0 0 1 233.9629 115.5303)" fill="#fff" fontSize="15.4128">{"/Month"}</text>
                                        </svg>
                                        <div className="pricing-inner">
                                            <h3 className="font-primary">{Premium}</h3>
                                            <ul className="pricing-inner">
                                                {Business_Premium_Array.map((items,i) => 
                                                    <li key={i}>
                                                        <h6><b>{items.content1}</b> {items.content2}</h6>
                                                    </li>
                                                )}
                                            </ul>
                                            <button className="btn btn-primary btn-lg" type="button">{Subscribe}</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-12">
                        <div className="card">
                            <div className="card-header">
                                <h5>{PricingTableWithBorder}</h5>
                            </div>
                            <div className="card-body row pricing-card-design-2 pricing-content">
                                <div className="col-md-4">
                                    <div className="pricing-block card text-center">
                                        <svg x="0" y="0" viewBox="0 0 360 220">
                                            <g>
                                                <path d="M0.732,193.75c0,0,29.706,28.572,43.736-4.512c12.976-30.599,37.005-27.589,44.983-7.061                                        c8.09,20.815,22.83,41.034,48.324,27.781c21.875-11.372,46.499,4.066,49.155,5.591c6.242,3.586,28.729,7.626,38.246-14.243                                        s27.202-37.185,46.917-8.488c19.715,28.693,38.687,13.116,46.502,4.832c7.817-8.282,27.386-15.906,41.405,6.294V0H0.48                                        L0.732,193.75z"></path>
                                            </g>
                                            <text transform="matrix(1 0 0 1 69.7256 116.2686)" fill="#fff" fontSize="78.4489">{"$10"}</text>
                                            <text transform="matrix(0.9566 0 0 1 197.3096 83.9121)" fill="#fff" fontSize="29.0829">{".99"}</text>
                                            <text transform="matrix(1 0 0 1 233.9629 115.5303)" fill="#fff" fontSize="15.4128">{"/Month"}</text>
                                        </svg>
                                        <div className="pricing-inner">
                                            <h3 className="font-primary">{Standard}</h3>
                                            <ul className="pricing-inner">
                                                {StandardArray.map((items,i) => 
                                                    <li key={i}>
                                                    <h6><b>{items.content1}</b> {items.content2}</h6>
                                                    </li>
                                                )}
                                            </ul>
                                            <button className="btn btn-primary btn-lg" type="button">{Subscribe}</button>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="pricing-block card text-center">
                                        <svg x="0" y="0" viewBox="0 0 360 220">
                                            <g>
                                                <path d="M0.732,193.75c0,0,29.706,28.572,43.736-4.512c12.976-30.599,37.005-27.589,44.983-7.061                                        c8.09,20.815,22.83,41.034,48.324,27.781c21.875-11.372,46.499,4.066,49.155,5.591c6.242,3.586,28.729,7.626,38.246-14.243                                        s27.202-37.185,46.917-8.488c19.715,28.693,38.687,13.116,46.502,4.832c7.817-8.282,27.386-15.906,41.405,6.294V0H0.48                                        L0.732,193.75z"></path>
                                            </g>
                                            <text transform="matrix(1 0 0 1 69.7256 116.2686)" fill="#fff" fontSize="78.4489">{"$20"}</text>
                                            <text transform="matrix(0.9566 0 0 1 197.3096 83.9121)" fill="#fff" fontSize="29.0829">{".99"}</text>
                                            <text transform="matrix(1 0 0 1 233.9629 115.5303)" fill="#fff" fontSize="15.4128">{"/Month"}</text>
                                        </svg>
                                        <div className="pricing-inner">
                                            <h3 className="font-primary">{Business}</h3>
                                            <ul className="pricing-inner">
                                                {Business_Premium_Array.map((items,i) => 
                                                    <li key={i}>
                                                        <h6><b>{items.content1}</b> {items.content2}</h6>
                                                    </li>
                                                )}
                                            </ul>
                                            <button className="btn btn-primary btn-lg" type="button">{Subscribe}</button>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="pricing-block card text-center">
                                        <svg x="0" y="0" viewBox="0 0 360 220">
                                            <g>
                                                <path d="M0.732,193.75c0,0,29.706,28.572,43.736-4.512c12.976-30.599,37.005-27.589,44.983-7.061                                        c8.09,20.815,22.83,41.034,48.324,27.781c21.875-11.372,46.499,4.066,49.155,5.591c6.242,3.586,28.729,7.626,38.246-14.243                                        s27.202-37.185,46.917-8.488c19.715,28.693,38.687,13.116,46.502,4.832c7.817-8.282,27.386-15.906,41.405,6.294V0H0.48                                        L0.732,193.75z"></path>
                                            </g>
                                            <text transform="matrix(1 0 0 1 69.7256 116.2686)" fill="#fff" fontSize="78.4489">{"$30"}</text>
                                            <text transform="matrix(0.9566 0 0 1 197.3096 83.9121)" fill="#fff" fontSize="29.0829">{".99"}</text>
                                            <text transform="matrix(1 0 0 1 233.9629 115.5303)" fill="#fff" fontSize="15.4128">{"/Month"}</text>
                                        </svg>
                                        <div className="pricing-inner">
                                            <h3 className="font-primary">{Premium}</h3>
                                            <ul className="pricing-inner">
                                                {Business_Premium_Array.map((items,i) => 
                                                    <li key={i}>
                                                        <h6><b>{items.content1}</b> {items.content2}</h6>
                                                    </li>
                                                )}
                                            </ul>
                                            <button className="btn btn-primary btn-lg" type="button">{Subscribe}</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-12">
                        <div className="card">
                            <div className="card-header">
                                <h5>{ColorHighlight}</h5>
                            </div>
                            <div className="card-body pricing-card-design-1">
                                <div className="row pricing-content">
                                    <div className="col-md-4">
                                        <div className="pricing-block card text-center">
                                            <svg x="0" y="0" viewBox="0 0 360 220">
                                                <g>
                                                    <path d="M0.732,193.75c0,0,29.706,28.572,43.736-4.512c12.976-30.599,37.005-27.589,44.983-7.061                                          c8.09,20.815,22.83,41.034,48.324,27.781c21.875-11.372,46.499,4.066,49.155,5.591c6.242,3.586,28.729,7.626,38.246-14.243                                          s27.202-37.185,46.917-8.488c19.715,28.693,38.687,13.116,46.502,4.832c7.817-8.282,27.386-15.906,41.405,6.294V0H0.48                                          L0.732,193.75z"></path>
                                                </g>
                                                <text transform="matrix(1 0 0 1 69.7256 116.2686)" fill="#fff" fontSize="78.4489">{"$10"}</text>
                                                <text transform="matrix(0.9566 0 0 1 197.3096 83.9121)" fill="#fff" fontSize="29.0829">{".99"}</text>
                                                <text transform="matrix(1 0 0 1 233.9629 115.5303)" fill="#fff" fontSize="15.4128">{"/Month"}</text>
                                            </svg>
                                            <div className="pricing-inner">
                                                <h3 className="font-primary">{Standard}</h3>
                                                <ul className="pricing-inner">
                                                    {StandardArray.map((items,i) => 
                                                        <li key={i}>
                                                        <h6><b>{items.content1}</b> {items.content2}</h6>
                                                        </li>
                                                    )}
                                                </ul>
                                                <button className="btn btn-primary btn-lg" type="button">{Subscribe}</button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="pricing-block card text-center bg-primary pricing-active">
                                            <svg x="0" y="0" viewBox="0 0 360 220">
                                                <g>
                                                    <path d="M0.732,193.75c0,0,29.706,28.572,43.736-4.512c12.976-30.599,37.005-27.589,44.983-7.061                                          c8.09,20.815,22.83,41.034,48.324,27.781c21.875-11.372,46.499,4.066,49.155,5.591c6.242,3.586,28.729,7.626,38.246-14.243                                          s27.202-37.185,46.917-8.488c19.715,28.693,38.687,13.116,46.502,4.832c7.817-8.282,27.386-15.906,41.405,6.294V0H0.48                                          L0.732,193.75z"></path>
                                                </g>
                                                <text transform="matrix(1 0 0 1 69.7256 116.2686)" fill="#fff" fontSize="78.4489">{"$20"}</text>
                                                <text transform="matrix(0.9566 0 0 1 197.3096 83.9121)" fill="#fff" fontSize="29.0829">{".99"}</text>
                                                <text transform="matrix(1 0 0 1 233.9629 115.5303)" fill="#fff" fontSize="15.4128">{"/Month"}</text>
                                            </svg>
                                            <div className="pricing-inner"><h3>{Business}</h3>
                                                <ul className="pricing-inner">
                                                    {Business_Premium_Array.map((items,i) => 
                                                        <li key={i}>
                                                            <h6><b>{items.content1}</b> {items.content2}</h6>
                                                        </li>
                                                    )}
                                                </ul>
                                                <button className="btn btn-primary btn-lg" type="button">{Subscribe}</button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="pricing-block card text-center">
                                            <svg x="0" y="0" viewBox="0 0 360 220">
                                                <g>
                                                    <path d="M0.732,193.75c0,0,29.706,28.572,43.736-4.512c12.976-30.599,37.005-27.589,44.983-7.061                                          c8.09,20.815,22.83,41.034,48.324,27.781c21.875-11.372,46.499,4.066,49.155,5.591c6.242,3.586,28.729,7.626,38.246-14.243                                          s27.202-37.185,46.917-8.488c19.715,28.693,38.687,13.116,46.502,4.832c7.817-8.282,27.386-15.906,41.405,6.294V0H0.48                                          L0.732,193.75z"></path>
                                                </g>
                                                <text transform="matrix(1 0 0 1 69.7256 116.2686)" fill="#fff" fontSize="78.4489">{"$30"}</text>
                                                <text transform="matrix(0.9566 0 0 1 197.3096 83.9121)" fill="#fff" fontSize="29.0829">{".99"}</text>
                                                <text transform="matrix(1 0 0 1 233.9629 115.5303)" fill="#fff" fontSize="15.4128">{"/Month"}</text>
                                            </svg>
                                            <div className="pricing-inner">
                                                <h3 className="font-primary">{Premium}</h3>
                                                <ul className="pricing-inner">
                                                    {Business_Premium_Array.map((items,i) => 
                                                        <li key={i}>
                                                            <h6><b>{items.content1}</b> {items.content2}</h6>
                                                        </li>
                                                    )}
                                                </ul>
                                                <button className="btn btn-primary btn-lg" type="button">{Subscribe}</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-12">
                        <div className="card">
                            <div className="card-header">
                                <h5>{PricingTableWithRibbons}</h5>
                            </div>
                            <div className="card-body pricing-card-design-3">
                                <div className="row pricing-content-ribbons">
                                    <div className="col-md-4">
                                        <div className="pricing-block card text-center">
                                            <div className="ribbon ribbon-bookmark ribbon-vertical-left ribbon-danger"><i className="icofont icofont-love"></i></div>
                                            <svg x="0" y="0" viewBox="0 0 360 220">
                                                <g>
                                                    <path d="M0.732,193.75c0,0,29.706,28.572,43.736-4.512c12.976-30.599,37.005-27.589,44.983-7.061                                          c8.09,20.815,22.83,41.034,48.324,27.781c21.875-11.372,46.499,4.066,49.155,5.591c6.242,3.586,28.729,7.626,38.246-14.243                                          s27.202-37.185,46.917-8.488c19.715,28.693,38.687,13.116,46.502,4.832c7.817-8.282,27.386-15.906,41.405,6.294V0H0.48                                          L0.732,193.75z"></path>
                                                </g>
                                                <text transform="matrix(1 0 0 1 69.7256 116.2686)" fill="#fff" fontSize="78.4489">{"$10"}</text>
                                                <text transform="matrix(0.9566 0 0 1 197.3096 83.9121)" fill="#fff" fontSize="29.0829">{".99"}</text>
                                                <text transform="matrix(1 0 0 1 233.9629 115.5303)" fill="#fff" fontSize="15.4128">{"/Month"}</text>
                                            </svg>
                                            <div className="pricing-inner">
                                                <h3 className="font-primary">{Standard}</h3>
                                                <ul className="pricing-inner">
                                                    {StandardArray.map((items,i) => 
                                                        <li key={i}>
                                                        <h6><b>{items.content1}</b> {items.content2}</h6>
                                                        </li>
                                                    )}
                                                </ul>
                                                <button className="btn btn-primary btn-lg" type="button">{Subscribe}</button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="pricing-block card text-center">
                                            <svg x="0" y="0" viewBox="0 0 360 220">
                                                <g>
                                                    <path d="M0.732,193.75c0,0,29.706,28.572,43.736-4.512c12.976-30.599,37.005-27.589,44.983-7.061                                          c8.09,20.815,22.83,41.034,48.324,27.781c21.875-11.372,46.499,4.066,49.155,5.591c6.242,3.586,28.729,7.626,38.246-14.243                                          s27.202-37.185,46.917-8.488c19.715,28.693,38.687,13.116,46.502,4.832c7.817-8.282,27.386-15.906,41.405,6.294V0H0.48                                          L0.732,193.75z"></path>
                                                </g>
                                                <text transform="matrix(1 0 0 1 69.7256 116.2686)" fill="#fff" fontSize="78.4489">{"$20"}</text>
                                                <text transform="matrix(0.9566 0 0 1 197.3096 83.9121)" fill="#fff" fontSize="29.0829">{".99"}</text>
                                                <text transform="matrix(1 0 0 1 233.9629 115.5303)" fill="#fff" fontSize="15.4128">{"/Month"}</text>
                                            </svg>
                                            <div className="pricing-inner">
                                                <h3 className="font-primary">{Business}</h3>
                                                <ul className="pricing-inner">
                                                    {Business_Premium_Array.map((items,i) => 
                                                        <li key={i}>
                                                            <h6><b>{items.content1}</b> {items.content2}</h6>
                                                        </li>
                                                    )}
                                                </ul>
                                                <button className="btn btn-primary btn-lg" type="button">{Subscribe}</button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="pricing-block card text-center">
                                            <svg x="0" y="0" viewBox="0 0 360 220">
                                                <g>
                                                    <path d="M0.732,193.75c0,0,29.706,28.572,43.736-4.512c12.976-30.599,37.005-27.589,44.983-7.061                                          c8.09,20.815,22.83,41.034,48.324,27.781c21.875-11.372,46.499,4.066,49.155,5.591c6.242,3.586,28.729,7.626,38.246-14.243                                          s27.202-37.185,46.917-8.488c19.715,28.693,38.687,13.116,46.502,4.832c7.817-8.282,27.386-15.906,41.405,6.294V0H0.48                                          L0.732,193.75z"></path>
                                                </g>
                                                <text transform="matrix(1 0 0 1 69.7256 116.2686)" fill="#fff" fontSize="78.4489">{"$30"}</text>
                                                <text transform="matrix(0.9566 0 0 1 197.3096 83.9121)" fill="#fff" fontSize="29.0829">{".99"}</text>
                                                <text transform="matrix(1 0 0 1 233.9629 115.5303)" fill="#fff" fontSize="15.4128">{"/Month"}</text>
                                            </svg>
                                            <div className="pricing-inner">
                                                <h3 className="font-primary">{Premium}</h3>
                                                <ul className="pricing-inner">
                                                    {Business_Premium_Array.map((items,i) => 
                                                        <li key={i}>
                                                            <h6><b>{items.content1}</b> {items.content2}</h6>
                                                        </li>
                                                    )}
                                                </ul>
                                                <button className="btn btn-primary btn-lg" type="button">{Subscribe}</button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="pricing-block card text-center">
                                            <svg x="0" y="0" viewBox="0 0 360 220">
                                                <g>
                                                    <path d="M0.732,193.75c0,0,29.706,28.572,43.736-4.512c12.976-30.599,37.005-27.589,44.983-7.061                                          c8.09,20.815,22.83,41.034,48.324,27.781c21.875-11.372,46.499,4.066,49.155,5.591c6.242,3.586,28.729,7.626,38.246-14.243                                          s27.202-37.185,46.917-8.488c19.715,28.693,38.687,13.116,46.502,4.832c7.817-8.282,27.386-15.906,41.405,6.294V0H0.48                                          L0.732,193.75z"></path>
                                                </g>
                                                <text transform="matrix(1 0 0 1 69.7256 116.2686)" fill="#fff" fontSize="78.4489">{"$10"}</text>
                                                <text transform="matrix(0.9566 0 0 1 197.3096 83.9121)" fill="#fff" fontSize="29.0829">{".99"}</text>
                                                <text transform="matrix(1 0 0 1 233.9629 115.5303)" fill="#fff" fontSize="15.4128">{"/Month"}</text>
                                            </svg>
                                            <div className="pricing-inner">
                                                <h3 className="font-primary">{Standard}</h3>
                                                <ul className="pricing-inner">
                                                    {StandardArray.map((items,i) => 
                                                        <li key={i}>
                                                        <h6><b>{items.content1}</b> {items.content2}</h6>
                                                        </li>
                                                    )}
                                                </ul>
                                                <button className="btn btn-primary btn-lg" type="button">{Subscribe}</button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="pricing-block card text-center">
                                            <div className="ribbon ribbon-bookmark ribbon-danger">{Popular}</div>
                                            <svg x="0" y="0" viewBox="0 0 360 220">
                                                <g>
                                                    <path d="M0.732,193.75c0,0,29.706,28.572,43.736-4.512c12.976-30.599,37.005-27.589,44.983-7.061                                          c8.09,20.815,22.83,41.034,48.324,27.781c21.875-11.372,46.499,4.066,49.155,5.591c6.242,3.586,28.729,7.626,38.246-14.243                                          s27.202-37.185,46.917-8.488c19.715,28.693,38.687,13.116,46.502,4.832c7.817-8.282,27.386-15.906,41.405,6.294V0H0.48                                          L0.732,193.75z"></path>
                                                </g>
                                                <text transform="matrix(1 0 0 1 69.7256 116.2686)" fill="#fff" fontSize="78.4489">{"$20"}</text>
                                                <text transform="matrix(0.9566 0 0 1 197.3096 83.9121)" fill="#fff" fontSize="29.0829">{".99"}</text>
                                                <text transform="matrix(1 0 0 1 233.9629 115.5303)" fill="#fff" fontSize="15.4128">{"/Month"}</text>
                                            </svg>
                                            <div className="pricing-inner">
                                                <h3 className="font-primary">{Business}</h3>
                                                <ul className="pricing-inner">
                                                    {Business_Premium_Array.map((items,i) => 
                                                        <li key={i}>
                                                            <h6><b>{items.content1}</b> {items.content2}</h6>
                                                        </li>
                                                    )}
                                                </ul>
                                                <button className="btn btn-primary btn-lg" type="button">{Subscribe}</button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="pricing-block card text-center">
                                            <svg x="0" y="0" viewBox="0 0 360 220">
                                                <g>
                                                    <path d="M0.732,193.75c0,0,29.706,28.572,43.736-4.512c12.976-30.599,37.005-27.589,44.983-7.061                                          c8.09,20.815,22.83,41.034,48.324,27.781c21.875-11.372,46.499,4.066,49.155,5.591c6.242,3.586,28.729,7.626,38.246-14.243                                          s27.202-37.185,46.917-8.488c19.715,28.693,38.687,13.116,46.502,4.832c7.817-8.282,27.386-15.906,41.405,6.294V0H0.48                                          L0.732,193.75z"></path>
                                                </g>
                                                <text transform="matrix(1 0 0 1 69.7256 116.2686)" fill="#fff" fontSize="78.4489">{"$30"}</text>
                                                <text transform="matrix(0.9566 0 0 1 197.3096 83.9121)" fill="#fff" fontSize="29.0829">{".99"}</text>
                                                <text transform="matrix(1 0 0 1 233.9629 115.5303)" fill="#fff" fontSize="15.4128">{"/Month"}</text>
                                            </svg>
                                            <div className="pricing-inner">
                                                <h3 className="font-primary">{Premium}</h3>
                                                <ul className="pricing-inner">
                                                    {Business_Premium_Array.map((items,i) => 
                                                        <li key={i}>
                                                            <h6><b>{items.content1}</b> {items.content2}</h6>
                                                        </li>
                                                    )}
                                                </ul>
                                                <button className="btn btn-primary btn-lg" type="button">{Subscribe}</button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="pricing-block card text-center">
                                            <svg x="0" y="0" viewBox="0 0 360 220">
                                                <g>
                                                    <path d="M0.732,193.75c0,0,29.706,28.572,43.736-4.512c12.976-30.599,37.005-27.589,44.983-7.061                                          c8.09,20.815,22.83,41.034,48.324,27.781c21.875-11.372,46.499,4.066,49.155,5.591c6.242,3.586,28.729,7.626,38.246-14.243                                          s27.202-37.185,46.917-8.488c19.715,28.693,38.687,13.116,46.502,4.832c7.817-8.282,27.386-15.906,41.405,6.294V0H0.48                                          L0.732,193.75z"></path>
                                                </g>
                                                <text transform="matrix(1 0 0 1 69.7256 116.2686)" fill="#fff" fontSize="78.4489">{"$10"}</text>
                                                <text transform="matrix(0.9566 0 0 1 197.3096 83.9121)" fill="#fff" fontSize="29.0829">{".99"}</text>
                                                <text transform="matrix(1 0 0 1 233.9629 115.5303)" fill="#fff" fontSize="15.4128">{"/Month"}</text>
                                            </svg>
                                            <div className="pricing-inner">
                                                <h3 className="font-primary">{Standard}</h3>
                                                <ul className="pricing-inner">
                                                    {StandardArray.map((items,i) => 
                                                        <li key={i}>
                                                        <h6><b>{items.content1}</b> {items.content2}</h6>
                                                        </li>
                                                    )}
                                                </ul>
                                                <button className="btn btn-primary btn-lg" type="button">{Subscribe}</button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="pricing-block card text-center">
                                            <svg x="0" y="0" viewBox="0 0 360 220">
                                                <g>
                                                    <path d="M0.732,193.75c0,0,29.706,28.572,43.736-4.512c12.976-30.599,37.005-27.589,44.983-7.061                                          c8.09,20.815,22.83,41.034,48.324,27.781c21.875-11.372,46.499,4.066,49.155,5.591c6.242,3.586,28.729,7.626,38.246-14.243                                          s27.202-37.185,46.917-8.488c19.715,28.693,38.687,13.116,46.502,4.832c7.817-8.282,27.386-15.906,41.405,6.294V0H0.48                                          L0.732,193.75z"></path>
                                                </g>
                                                <text transform="matrix(1 0 0 1 69.7256 116.2686)" fill="#fff" fontSize="78.4489">{"$20"}</text>
                                                <text transform="matrix(0.9566 0 0 1 197.3096 83.9121)" fill="#fff" fontSize="29.0829">{".99"}</text>
                                                <text transform="matrix(1 0 0 1 233.9629 115.5303)" fill="#fff" fontSize="15.4128">{"/Month"}</text>
                                            </svg>
                                            <div className="pricing-inner">
                                                <h3 className="font-primary">{Business}</h3>
                                                <ul className="pricing-inner">
                                                    {Business_Premium_Array.map((items,i) => 
                                                        <li key={i}>
                                                            <h6><b>{items.content1}</b> {items.content2}</h6>
                                                        </li>
                                                    )}
                                                </ul>
                                                <button className="btn btn-primary btn-lg" type="button">{Subscribe}</button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="pricing-block card text-center">
                                            <div className="ribbon ribbon-clip-right ribbon-right ribbon-danger">{Popular}</div>
                                            <svg x="0" y="0" viewBox="0 0 360 220">
                                                <g>
                                                    <path d="M0.732,193.75c0,0,29.706,28.572,43.736-4.512c12.976-30.599,37.005-27.589,44.983-7.061                                          c8.09,20.815,22.83,41.034,48.324,27.781c21.875-11.372,46.499,4.066,49.155,5.591c6.242,3.586,28.729,7.626,38.246-14.243                                          s27.202-37.185,46.917-8.488c19.715,28.693,38.687,13.116,46.502,4.832c7.817-8.282,27.386-15.906,41.405,6.294V0H0.48                                          L0.732,193.75z"></path>
                                                </g>
                                                <text transform="matrix(1 0 0 1 69.7256 116.2686)" fill="#fff" fontSize="78.4489">{"$30"}</text>
                                                <text transform="matrix(0.9566 0 0 1 197.3096 83.9121)" fill="#fff" fontSize="29.0829">{".99"}</text>
                                                <text transform="matrix(1 0 0 1 233.9629 115.5303)" fill="#fff" fontSize="15.4128">{"/Month"}</text>
                                            </svg>
                                            <div className="pricing-inner">
                                                <h3 className="font-primary">{Premium}</h3>
                                                <ul className="pricing-inner">
                                                    {Business_Premium_Array.map((items,i) => 
                                                        <li key={i}>
                                                            <h6><b>{items.content1}</b> {items.content2}</h6>
                                                        </li>
                                                    )}
                                                </ul>
                                                <button className="btn btn-primary btn-lg" type="button">{Subscribe}</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> */}
                </div>
            </div>
        </Fragment>
    );
};

export default Pricing;