import React from "react";
import  { Redirect } from "react-router-dom";



import Home from '../../modules/home';
import Faq from '../../modules/faq/faq';
import Contact from '../../modules/contact/contact';
import GetStarted from '../../modules/auth/gettingstarted/gettingstarted';
import Register from '../../modules/auth/register/register';
import Verification from '../../modules/auth/verification/verification';
import Login from '../../modules/auth/login/login';
import ForgotPassword from '../../modules/auth/forgotpassword/forgotpassword';
import ProcessPassword from '../../modules/auth/processpassword/processpassword';
import ResetPassword from '../../modules/auth/resetpassword/resetpassword';
import UpdatedPassword from '../../modules/auth/passwordupdated/passwordupdated';
// import GetSubscription from '../../modules/BusinessFlow/getsubscriptions/getsubscription';
import Subscribe from '../../modules/BusinessFlow/subscribe/subscribe';
import Bid from '../../modules/BusinessFlow/bid/bid'
import RegisterBusiness from '../../modules/BusinessFlow/registerbusiness/registerbusiness';
import VerifyBusiness from '../../modules/BusinessFlow/verifybusiness/verifybusiness';
import RegisterVehicle from '../../modules/BusinessFlow/registervehicle/registervehicle';
import DispatchRequest from '../../modules/BusinessFlow/dispatchrequest/dispatchrequest';
import DispatchDetails from '../../modules/BusinessFlow/dispatchdetails/dispatchdetails';
import CreateParcel from '../../modules/UserFlow/createparcel/createparcel';
import ParcelCreated from '../../modules/UserFlow/parcelcreated/parcelcreated';
import AllOffers from '../../modules/UserFlow/alloffers/allofers';
import PayonDelivery from '../../modules/UserFlow/payondelivery/payondelivery';
import OrderPlaced from '../../modules/UserFlow/orderplaced/orderplaced';
// IMPORT FOR USER ACCOUNT
import UserAccount from '../../modules/UserFlow/useraccount/wallet/account';
import TrackParcel from '../../modules/UserFlow/useraccount/trackparcel/trackparcel';
import Feedback from '../../modules/UserFlow/useraccount/feedback/feedback';
import SubmitFeedback from '../../modules/UserFlow/useraccount/submitfeedback/submitfeedback';
import DispatchHistory from '../../modules/UserFlow/useraccount/dispatchhistory/dispatchhistory';
import DispatchHistoryDetails from '../../modules/UserFlow/useraccount/dispatchhistorydetails/dispatchhistorydetails';
import Notifications from '../../modules/UserFlow/useraccount/notifications/notifications';
import Profile from '../../modules/UserFlow/useraccount/profile/profile';
import Security from '../../modules/UserFlow/useraccount/security/security';
// IMPORT FOR BUSINESS ACCOUNT
import BusinessAccount from '../../modules/BusinessFlow/businessaccount/wallet/account';
import Fleet from '../../modules/BusinessFlow/businessaccount/fleet/fleet';
import BusinessBid from '../../modules/BusinessFlow/businessaccount/bid/bid';
import SingleBusinessBid from '../../modules/BusinessFlow/businessaccount/bid/singlebid';
import BusinessDispatchHistory from '../../modules/BusinessFlow/businessaccount/dispatchhistory/dispatchhistory';
import BusinessDispatchHistoryDetails from '../../modules/BusinessFlow/businessaccount/dispatchhistorydetails/dispatchhistorydetails';
import BusinessNotifications from '../../modules/BusinessFlow/businessaccount/notifications/notifications';
import BusinessSubscription from '../../modules/BusinessFlow/businessaccount/subscription/subscription';
import OtherPlans from '../../modules/BusinessFlow/businessaccount/subscription/otherplans';
import BusinessSecurity from '../../modules/BusinessFlow/businessaccount/security/security';
import BusinessProfile from '../../modules/BusinessFlow/businessaccount/profile/profile';



const customerRoutes = [
    { path: "/create-parcel", component: CreateParcel },
    { path: "/parcel-created", component: ParcelCreated },
    
    // Customer Account //
    { path: "/user-account", component: UserAccount },
    { path: "/user-track-parcel", component: TrackParcel },
    { path: "/user-feedback", component: Feedback },
    { path: "/user-submit-feedback", component: SubmitFeedback },
    { path: "/user-dispatch-history", component: DispatchHistory },
    { path: "/user-dispatch-history-details/:id", component: DispatchHistoryDetails },
    { path: "/user-notifications", component: Notifications },
    { path: "/user-profile", component: Profile },
    { path: "/user-security", component: Security },

    {path: "/", exact:true, component: () => <Redirect to="/create-parcel" />},
]


const businessRoutes = [
    { path: "/register-vehicle", component: RegisterVehicle },
    { path: "/subscribe", component: Subscribe },
    // { path: "/get-subscription", component: GetSubscription },
    { path: "/dispatch-request", component: DispatchRequest },
    { path: "/dispatch-request", component: DispatchRequest },
    { path: "/dispatch-details/:id", component: DispatchDetails },
    { path: "/bid-successful", component: Bid },
    { path: "/pay-on-delivery", component: PayonDelivery },
    { path: "/order-placed", component: OrderPlaced },
    // Business Account //
    { path: "/business-account", component: BusinessAccount },
    { path: "/fleet", component: Fleet },
    { path: "/business-bids", component: BusinessBid },
    { path: "/business-bid/:id", component: SingleBusinessBid },
    { path: "/business-dispatch-history", component: BusinessDispatchHistory },
    { path: "/business-dispatch-history-details/:id", component: BusinessDispatchHistoryDetails },
    { path: "/business-subscriptions", component: BusinessSubscription },
    { path: "/other-subscription-plans", component: OtherPlans },
    { path: "/business-notifications", component: BusinessNotifications },
    { path: "/business-profile", component: BusinessProfile },
    { path: "/business-security", component: BusinessSecurity },

    {path: "/", exact:true, component: () => <Redirect to="/get-started" />}
    // {path: "/", exact:true, component: () => <Redirect to="/register-business" />},
]

const authRoutes = [
    { path: "/all-offers", component: AllOffers},
    { path: "/register", component: Register },
    { path: "/get-started", component: GetStarted },
    { path: "/verification", component: Verification },
    { path: "/signin", component: Login },
    { path: "/forgotpassword", component: ForgotPassword },
    { path: "/processpassword", component: ProcessPassword },
    { path: "/resetpassword", component: ResetPassword },
    { path: "/updated-password", component: UpdatedPassword },
    { path: "/faq", component: Faq },
    { path: "/contact", component: Contact},
    { path: "/register-business", component: RegisterBusiness },
    { path: "/verify-business", component: VerifyBusiness },
    { path: "/get-started", component: GetStarted },
    { path: "/home", component: Home },

]

export {
    customerRoutes,
    businessRoutes,
    authRoutes
}