import React, { Fragment, useEffect, useState } from 'react';
import Breadcrumb from '../common/breadcrumb';
import { SimplePricingCard, Standard, LorumIpsum, Purchase, Business,Premium,Subscribe,PricingTableWithBorder,PricingTableWithRibbons,Popular,Extra,Pricings,StandardArray,Business_Premium_Array,ColorHighlight } from '../../constant';
import { collection, getDocs } from 'firebase/firestore';
import { firebase_app } from '../../data/config';
import { getProducts , getStripePayments} from "@stripe/firestore-stripe-payments";

const Pricing = () => {

    const prices = {};
    const functionLocation = 'us-east1';
    const [pricing,setPricing]=useState([])
    const payments = getStripePayments(firebase_app, {
        productsCollection: "products",
        customersCollection: "Users",
      });

    useEffect(() => {
        //debugger;
        fetchDoc();
        const unsubscribe = firebase_app.firestore().collection('products').onSnapshot((snapshot) => {
            const newItem = snapshot.docs.map((doc) => ({
                id: doc.id,
                ...doc.data()
            }))
            setPricing(newItem)
        })
        return () => unsubscribe();
    }, []);


    const fetchDoc = async ()=>{
        // const products = getProducts(payments, {
        //     includePrices: true,
        //     activeOnly: true,
        //   });
        //   for (const product of products) {
        //     console.log(product.description);
        //   }
//     const sfRef = firebase_app.firestore().collection('products').doc('prod_Lmb4CSoupgPkLy');
//     const collections = await sfRef.listCollections();
//     collections.forEach(collection => {
//       console.log('Found subcollection with id:', collection.id);
//     });

//     const sfRef = firebase_app.firestore().collection('products');
//     const priceSnap = await firebase_app.firestore()
//     .collection('prices')
//     .where('active', '==', true)
//     .orderBy('unit_amount')
//     .get();
// console.log(priceSnap);
}

//     const db = firebase_app.firestore();

// /**
//  * Firebase Authentication configuration
//  */
// const firebaseUI = new firebaseui.auth.AuthUI(firebase.auth());
// const firebaseUiConfig = {
//   callbacks: {
//     signInSuccessWithAuthResult: function (authResult, redirectUrl) {
//       // User successfully signed in.
//       // Return type determines whether we continue the redirect automatically
//       // or whether we leave that to developer to handle.
//       return true;
//     },
//     uiShown: () => {
//       document.querySelector('#loader').style.display = 'none';
//     },
//   },
//   signInFlow: 'popup',
//   signInSuccessUrl: '/',
//   signInOptions: [
//     firebase.auth.GoogleAuthProvider.PROVIDER_ID,
//     firebase.auth.EmailAuthProvider.PROVIDER_ID,
//   ],
//   credentialHelper: firebaseui.auth.CredentialHelper.NONE,
//   // Your terms of service url.
//   tosUrl: 'https://example.com/terms',
//   // Your privacy policy url.
//   privacyPolicyUrl: 'https://example.com/privacy',
// };
// firebase.auth().onAuthStateChanged((firebaseUser) => {
//   if (firebaseUser) {
//     document.querySelector('#loader').style.display = 'none';
//     document.querySelector('main').style.display = 'block';
//     currentUser = firebaseUser.uid;
//     startDataListeners();
//   } else {
//     document.querySelector('main').style.display = 'none';
//     firebaseUI.start('#firebaseui-auth-container', firebaseUiConfig);
//   }
// });

// /**
//  * Data listeners
//  */
// function startDataListeners() {
//   // Get all our products and render them to the page
//   const products = document.querySelector('.products');
//   const template = document.querySelector('#product');
//   db.collection('products')
//     .where('active', '==', true)
//     .get()
//     .then(function (querySnapshot) {
//       querySnapshot.forEach(async function (doc) {
//         const priceSnap = await doc.ref
//           .collection('prices')
//           .where('active', '==', true)
//           .orderBy('unit_amount')
//           .get();
//         if (!'content' in document.createElement('template')) {
//           console.error('Your browser doesn’t support HTML template elements.');
//           return;
//         }

//         const product = doc.data();
//         const container = template.content.cloneNode(true);

//         container.querySelector('h2').innerText = product.name.toUpperCase();
//         container.querySelector('.description').innerText =
//           product.description?.toUpperCase() || '';
//         // Prices dropdown
//         priceSnap.docs.forEach((doc) => {
//           const priceId = doc.id;
//           const priceData = doc.data();
//           prices[priceId] = priceData;
//           const content = document.createTextNode(
//             `${new Intl.NumberFormat('en-US', {
//               style: 'currency',
//               currency: priceData.currency,
//             }).format((priceData.unit_amount / 100).toFixed(2))} per ${
//               priceData.interval ?? 'once'
//             }`
//           );
//           const option = document.createElement('option');
//           option.value = priceId;
//           option.appendChild(content);
//           container.querySelector('#price').appendChild(option);
//         });

//         if (product.images.length) {
//           const img = container.querySelector('img');
//           img.src = product.images[0];
//           img.alt = product.name;
//         }

//         const form = container.querySelector('form');
//         form.addEventListener('submit', subscribe);

//         products.appendChild(container);
//       });
//     });
//   // Get all subscriptions for the customer
//   db.collection('customers')
//     .doc(currentUser)
//     .collection('subscriptions')
//     .where('status', 'in', ['trialing', 'active'])
//     .onSnapshot(async (snapshot) => {
//       if (snapshot.empty) {
//         // Show products
//         document.querySelector('#subscribe').style.display = 'block';
//         return;
//       }
//       document.querySelector('#subscribe').style.display = 'none';
//       document.querySelector('#my-subscription').style.display = 'block';
//       // In this implementation we only expect one Subscription to exist
//       const subscription = snapshot.docs[0].data();
//       const priceData = (await subscription.price.get()).data();
//       document.querySelector(
//         '#my-subscription p'
//       ).textContent = `You are paying ${new Intl.NumberFormat('en-US', {
//         style: 'currency',
//         currency: priceData.currency,
//       }).format((priceData.unit_amount / 100).toFixed(2))} per ${
//         priceData.interval
//       }, giving you the role: ${await getCustomClaimRole()}. 🥳`;
//     });
// }

// /**
//  * Event listeners
//  */

// // Signout button
// document
//   .getElementById('signout')
//   .addEventListener('click', () => firebase.auth().signOut());

// // Checkout handler
// async function subscribe(event) {
//   event.preventDefault();
//   document.querySelectorAll('button').forEach((b) => (b.disabled = true));
//   const formData = new FormData(event.target);
//   const selectedPrice = {
//     price: formData.get('price'),
//   };
//   // For prices with metered billing we need to omit the quantity parameter.
//   // For all other prices we set quantity to 1.
//   if (prices[selectedPrice.price]?.recurring?.usage_type !== 'metered')
//     selectedPrice.quantity = 1;
//   const checkoutSession = {
//     automatic_tax: true,
//     tax_id_collection: true,
//     collect_shipping_address: true,
//     allow_promotion_codes: true,
//     line_items: [selectedPrice],
//     success_url: window.location.origin,
//     cancel_url: window.location.origin,
//     metadata: {
//       key: 'value',
//     },
//   };
//   // For one time payments set mode to payment.
//   if (prices[selectedPrice.price]?.type === 'one_time') {
//     checkoutSession.mode = 'payment';
//     checkoutSession.payment_method_types = ['card', 'sepa_debit', 'sofort'];
//   }

//   const docRef = await db
//     .collection('customers')
//     .doc(currentUser)
//     .collection('checkout_sessions')
//     .add(checkoutSession);
//   // Wait for the CheckoutSession to get attached by the extension
//   docRef.onSnapshot((snap) => {
//     const { error, url } = snap.data();
//     if (error) {
//       // Show an error to your customer and then inspect your function logs.
//       alert(`An error occured: ${error.message}`);
//       document.querySelectorAll('button').forEach((b) => (b.disabled = false));
//     }
//     if (url) {
//       window.location.assign(url);
//     }
//   });
// }

// // Billing portal handler
// document
//   .querySelector('#billing-portal-button')
//   .addEventListener('click', async (event) => {
//     document.querySelectorAll('button').forEach((b) => (b.disabled = true));

//     // Call billing portal function
//     const functionRef = firebase
//       .app()
//       .functions(functionLocation)
//       .httpsCallable('ext-firestore-stripe-subscriptions-createPortalLink');
//     const { data } = await functionRef({ returnUrl: window.location.origin });
//     window.location.assign(data.url);
//   });

// // Get custom claim role helper
// async function getCustomClaimRole() {
//   await firebase.auth().currentUser.getIdToken(true);
//   const decodedToken = await firebase.auth().currentUser.getIdTokenResult();
//   return decodedToken.claims.stripeRole;
// }

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
            pricing.map((data, i) => (
                <div className="col-xl-6 col-sm-12 xl-50" key={i}>
                <div className="card text-center pricing-simple" >
                    <div className="card-body">
                        <h3>{data.name}</h3>
                        <h1>{"$15"}</h1>
                        <h6 className="mb-0">{data.description}</h6>
                    </div><a className="btn btn-lg btn-primary btn-block" href="#javascript">
                        <h5 className="mb-0">Subscribe</h5></a>
                </div>
            </div>
            ))
        }

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