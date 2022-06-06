import React from 'react';
import Default from '../components/dashboard/defaultCompo/default';
import Ecommerce from '../components/dashboard/ecommerce';

// Import custom Components 
import University from '../components/dashboard/university';
import Crypto from '../components/dashboard/crypto/crypto-component';
import ServerComponent from '../components/dashboard/server/server-component';
import Project from '../components/dashboard/project/project';

// widgets
import General from '../components/widgets/general';
import Chart from '../components/widgets/chart';

// Base
import Typography from '../components/base/typography';
import Avatar from '../components/base/avatar';
import HelperClass from '../components/base/helperclass';
import Grid from '../components/base/grid';
import TagsandPills from '../components/base/tagsandpills';
import ProgressBar from '../components/base/progressBar';
import ModalComponent from '../components/base/modalComponent';
import AlertComponent from '../components/base/Alert/Alert';
import PopoverComponent from '../components/base/Popover/Popover';
import TooltipsComponent from '../components/base/tooltipsComponent';
import Spinner from '../components/base/spinner';
import DropdownComponent from '../components/base/DropDown/Dropdown';
import TabBootstrap from '../components/base/Tabs/TabBootstrap';
import TabLine from '../components/base/Tabs/TabLine';
import Accordion from '../components/base/Accordian/Accordian';
import Navs from '../components/base/Nav/Navs';
import List from '../components/base/lists/list';
import Shadow from '../components/base/shadow';


// Advance
import Scrollable from '../components/advance/scrollable';
import Toastr from '../components/advance/toastr';
import RatingComponent from '../components/advance/ratingComponent';
import DropzoneComponent from '../components/advance/dropzone';
import TourComponent from '../components/advance/tourComponent';
import SweetAlert from '../components/advance/sweetAlert';
import SlickSlider from '../components/advance/slickSlider';
import CarouselComponent from '../components/advance/Carousels/carouselComponent';
import Ribbon from '../components/advance/ribbon';
import Pagination from '../components/advance/pagination';
import Steps from '../components/advance/steps';
import UIBreadCrumb from '../components/advance/uibreadcrumb';
import RangeSlider from '../components/advance/rangeSlider';
import ImageCropper from '../components/advance/imageCropper';
import StickyNotes from '../components/advance/stickyNotes';
import DragNDropComp from '../components/advance/drag-n-drop/dragNDropComp';
import UploadImage from '../components/advance/uploadImage';

// icons 
import FlagIcons from '../components/icons/flagIcons';
import FontAwsomeIcon from '../components/icons/fontAwsomeIcon';
import IcoIcons from '../components/icons/icoIcons';
import ThemifyIcons from '../components/icons/themifyIcons';
import FeatherIcons from '../components/icons/featherIcons';
import WeatherIcons from '../components/icons/weatherIcons';

// buttons
import DefaultBtn from '../components/buttons/default-btn';
import FlatBtn from '../components/buttons/flatBtn';
import EdgeBtn from '../components/buttons/edgeBtn';
import RaisedBtn from '../components/buttons/raisedBtn';
import GroupBtn from '../components/buttons/groupBtn';

// gallery
import ImageGallery from '../components/gallery/imageGallery';
import ImageHover from '../components/gallery/imageHover';
import ImageWithDesc from '../components/gallery/imageWithDesc';
import MesonryGallery from '../components/gallery/mesonryGallery';
import MesonryDesc from '../components/gallery/mesonryDesc';

// forms 
import FormValidation from '../components/forms/form-control/form-validation';
import BaseInput from '../components/forms/form-control/baseInput';
import RadioCheckbox from '../components/forms/form-control/radio-checkbox';
import InputGroupComp from '../components/forms/form-control/inputGroup';
import MegaOptions from '../components/forms/form-control/megaOptions';

import DatepickerComponent from '../components/forms/form-widgets/datepickerComponent';
import TimePickerWrapper from '../components/forms/form-widgets/timepickerComponent/timepicker';
import TypeaheadComp from '../components/forms/form-widgets/typeaheadComponent/typeahead';


import FormDefault from '../components/forms/form-layout/formDefault';
import FormWizard from '../components/forms/form-layout/wizard/form-wizard';


// tables 
import BasicTable from '../components/tables/bootstrap/basicTable';
import StylingTable from '../components/tables/bootstrap/stylingTable';
import BorderTable from '../components/tables/bootstrap/borderTable';
import SizingTable from '../components/tables/bootstrap/sizingTable';
import DataTableComponent from '../components/tables/dataTableComponent';

// cards
import BasicCards from '../components/cards/basicCards';
import CreativeCards from '../components/cards/creativeCards';
import TabCard from '../components/cards/tabCard';
import DraggingCards from '../components/cards/draggingCards';

// timeline
import Timeline2 from '../components/timelines/timeline2';
import Timeline from '../components/timelines/timeline';

// charts
import GoogleChart from '../components/charts/googleChart';
import ChartJs from '../components/charts/chartJs';
import Knobcharts from '../components/charts/knob';
import ApexCharts from '../components/charts/apex-chart';
import Chartist from '../components/charts/chartistComponent';

// maps
import GoogleMap from '../components/map/googleMap';
import LeafletMapComp from '../components/map/leafletMap';

// editors
import Editor1 from '../components/editor/ckEditor';
import Editor2 from '../components/editor/mdeEditor';
import Editor3 from '../components/editor/aceCodeEditor';

// users
import UserProfile from '../components/users/userProfile';
import UserEdit from '../components/users/userEdit';
import UserCards from '../components/users/user-cards';

// Calender
import Calender1 from '../components/calender/calender1';
import Calender2 from '../components/calender/calender2';

// blog
import BlogDetail from '../components/blog/blogDetail';
import BlogSingle from '../components/blog/blogSingle';
import BlogPost from '../components/blog/blogPost';

// job search 
import CardView from '../components/jobSearch/cardView';
import JobList from '../components/jobSearch/job-list';
import JobDetail from '../components/jobSearch/job-detail';
import JobApply from '../components/jobSearch/job-apply';

// learning 
import LearningList from '../components/learning/learning-list';
import LearningDeatil from '../components/learning/learning-deatil';

// Import Applications Components
import Todo from '../components/applications/todo-app/todo';
import EmailDefault from '../components/applications/email-app/emailDefault';
import Chat from '../components/applications/chat-app/chat';
import EcommerceApp from '../components/applications/ecommerce-app/product';
import AddToCart from '../components/applications/ecommerce-app/add-to-cart';
import WishlistComponent from '../components/applications/ecommerce-app/wishlist';
import ProductDetail from '../components/applications/ecommerce-app/product-detail/product-detail';
import Invoice from '../components/applications/ecommerce-app/invoice';
import Checkout from '../components/applications/ecommerce-app/checkout';
import TodoFirebase from '../components/applications/todo-firebase-app/todo-firebase';
import ContactApp from '../components/applications/contact-app/contactApp';
import ProductList from '../components/applications/ecommerce-app/product-list';
import Payment from '../components/applications/ecommerce-app/payment';
import History from '../components/applications/ecommerce-app/history';
import BookmarkApp from '../components/applications/bookmark-app/bookmarkApp';
import TaskApp from '../components/applications/task-app/taskApp';

import ProjectApp from '../components/applications/project/project'
import NewProject from '../components/applications/project/new-project'
import ProjectDetails from '../components/applications/project/project-details'
import KanbanBoard from '../components/applications/kanban-board/kanbanBoard'
import FileManager from '../components/applications/file-manager/file-manager'

import SocialApp from '../components/social-app/socialApp';
import FaqComponent from '../components/faq/faqComponent';
import KnowledgebaseComponent from '../components/knowledgebase/knowledgebaseComponent';
import SupportTicket from '../components/support-ticket/supportTicket';

// search page
import Searchpage from '../components/search/searchpage';

// sample page
import Samplepage from '../components/sample/samplepage';

// Pricing
import Pricing from '../components/price/pricing';

export const routes = [
    { path: `/dashboard/default`, Component: <Default /> },
    { path: `/dashboard`, Component: <Ecommerce /> },
    // { path: `${process.env.PUBLIC_URL}/dashboard/ecommerce`, Component: <Ecommerce /> },
    { path: `${process.env.PUBLIC_URL}/dashboard/university`, Component: <University /> },
    { path: `${process.env.PUBLIC_URL}/dashboard/crypto`, Component: <Crypto /> },
    { path: `/AllUsers`, Component: <ServerComponent /> },
    // { path: `${process.env.PUBLIC_URL}/dashboard/server`, Component: <ServerComponent /> },
    { path: `${process.env.PUBLIC_URL}/dashboard/project`, Component: <Project /> },

    // {/* Widgets Menu */}
    { path: `${process.env.PUBLIC_URL}/widgets/general`, Component: <General /> },
    { path: `${process.env.PUBLIC_URL}/widgets/chart`, Component: <Chart /> },

    //    {/* base */}
    { path: `${process.env.PUBLIC_URL}/base/typography`, Component: <Typography /> },
    { path: `${process.env.PUBLIC_URL}/base/avatar`, Component: <Avatar /> },
    { path: `/base/grid`, Component: <Grid /> },
    { path: `${process.env.PUBLIC_URL}/base/helperclass`, Component: <HelperClass /> },
    { path: `${process.env.PUBLIC_URL}/base/tagsandpills`, Component: <TagsandPills /> },
    { path: `${process.env.PUBLIC_URL}/base/progressBar`, Component: <ProgressBar /> },
    { path: `${process.env.PUBLIC_URL}/base/modalComponent`, Component: <ModalComponent /> },
    { path: `${process.env.PUBLIC_URL}/base/alert`, Component: <AlertComponent /> },
    { path: `${process.env.PUBLIC_URL}/base/popoverComponent`, Component: <PopoverComponent /> },
    { path: `${process.env.PUBLIC_URL}/base/tooltipsComponent`, Component: <TooltipsComponent /> },
    { path: `${process.env.PUBLIC_URL}/base/spinner`, Component: <Spinner /> },
    { path: `${process.env.PUBLIC_URL}/base/dropdownComponent`, Component: <DropdownComponent /> },
    { path: `${process.env.PUBLIC_URL}/base/tabs/tab-bootstrap`, Component: <TabBootstrap /> },
    { path: `${process.env.PUBLIC_URL}/base/tabs/tab-line`, Component: <TabLine /> },
    { path: `${process.env.PUBLIC_URL}/base/accordion`, Component: <Accordion /> },
    { path: `${process.env.PUBLIC_URL}/base/navs`, Component: <Navs /> },
    { path: `${process.env.PUBLIC_URL}/base/shadow`, Component: <Shadow /> },
    { path: `${process.env.PUBLIC_URL}/base/list`, Component: <List /> },

    // {/* Advance */}2
    { path: `${process.env.PUBLIC_URL}/advance/scrollable`, Component: <Scrollable /> },
    { path: `${process.env.PUBLIC_URL}/advance/bootstrap-notify`, Component: <Toastr /> },
    { path: `${process.env.PUBLIC_URL}/advance/ratingComponent`, Component: <RatingComponent /> },
    { path: `${process.env.PUBLIC_URL}/advance/dropzone`, Component: <DropzoneComponent /> },
    { path: `${process.env.PUBLIC_URL}/advance/tourComponent`, Component: <TourComponent /> },
    { path: `${process.env.PUBLIC_URL}/advance/sweetAlert`, Component: <SweetAlert /> },
    { path: `${process.env.PUBLIC_URL}/advance/slick-slider`, Component: <SlickSlider /> },
    { path: `${process.env.PUBLIC_URL}/advance/carouselComponent`, Component: <CarouselComponent /> },
    { path: `${process.env.PUBLIC_URL}/advance/ribbon`, Component: <Ribbon /> },
    { path: `${process.env.PUBLIC_URL}/advance/pagination`, Component: <Pagination /> },
    { path: `${process.env.PUBLIC_URL}/advance/steps`, Component: <Steps /> },
    { path: `${process.env.PUBLIC_URL}/advance/uibreadcrumb`, Component: <UIBreadCrumb /> },
    { path: `${process.env.PUBLIC_URL}/advance/rangeSlider`, Component: <RangeSlider /> },
    { path: `${process.env.PUBLIC_URL}/advance/imageCropper`, Component: <ImageCropper /> },
    { path: `${process.env.PUBLIC_URL}/advance/stickyNotes`, Component: <StickyNotes /> },
    { path: `${process.env.PUBLIC_URL}/advance/dragNDropComp`, Component: <DragNDropComp /> },
    { path: `${process.env.PUBLIC_URL}/advance/uploadImage`, Component: <UploadImage /> },

    //   {/* icons */}
    { path: `${process.env.PUBLIC_URL}/icons/flagIcons`, Component: <FlagIcons /> },
    { path: `${process.env.PUBLIC_URL}/icons/fontAwsomeIcon`, Component: <FontAwsomeIcon /> },
    { path: `${process.env.PUBLIC_URL}/icons/icoIcons`, Component: <IcoIcons /> },
    { path: `${process.env.PUBLIC_URL}/icons/themifyIcons`, Component: <ThemifyIcons /> },
    { path: `${process.env.PUBLIC_URL}/icons/featherIcons`, Component: <FeatherIcons /> },
    { path: `${process.env.PUBLIC_URL}/icons/weatherIcons`, Component: <WeatherIcons /> },

    // {/* buttons */}
    { path: `${process.env.PUBLIC_URL}/buttons/default-btn`, Component: <DefaultBtn /> },
    { path: `${process.env.PUBLIC_URL}/buttons/flatBtn`, Component: <FlatBtn /> },
    { path: `${process.env.PUBLIC_URL}/buttons/edgeBtn`, Component: <EdgeBtn /> },
    { path: `${process.env.PUBLIC_URL}/buttons/raisedBtn`, Component: <RaisedBtn /> },
    { path: `${process.env.PUBLIC_URL}/buttons/groupBtn`, Component: <GroupBtn /> },

    // {/* gallery */}
    { path: `${process.env.PUBLIC_URL}/gallery/imageGallery`, Component: <ImageGallery /> },
    { path: `${process.env.PUBLIC_URL}/gallery/imageWithDesc`, Component: <ImageWithDesc /> },
    { path: `${process.env.PUBLIC_URL}/gallery/imageHover`, Component: <ImageHover /> },
    { path: `${process.env.PUBLIC_URL}/gallery/mesonryGallery`, Component: <MesonryGallery /> },
    { path: `${process.env.PUBLIC_URL}/gallery/mesonryDesc`, Component: <MesonryDesc /> },

    // {/* Forms */}
    { path: `${process.env.PUBLIC_URL}/forms-controls/form-validation`, Component: <FormValidation /> },
    { path: `${process.env.PUBLIC_URL}/forms-controls/baseInput`, Component: <BaseInput /> },
    { path: `${process.env.PUBLIC_URL}/forms-controls/radio-checkbox`, Component: <RadioCheckbox /> },
    { path: `${process.env.PUBLIC_URL}/forms-controls/inputGroup`, Component: <InputGroupComp /> },
    { path: `${process.env.PUBLIC_URL}/forms-controls/megaOptions`, Component: <MegaOptions /> },

    { path: `${process.env.PUBLIC_URL}/form-layout/formDefault`, Component: <FormDefault /> },
    { path: `${process.env.PUBLIC_URL}/form-layout/FormWizard`, Component: <FormWizard /> },

    { path: `${process.env.PUBLIC_URL}/form-widget/datepickerComponent`, Component: <DatepickerComponent /> },
    { path: `${process.env.PUBLIC_URL}/form-widget/timepicker`, Component: <TimePickerWrapper /> },
    { path: `${process.env.PUBLIC_URL}/form-widget/typeahead`, Component: <TypeaheadComp /> },


    // {/* Tables */}
    { path: `${process.env.PUBLIC_URL}/table/datatable`, Component: <DataTableComponent /> },
    { path: `${process.env.PUBLIC_URL}/table/basic`, Component: <BasicTable /> },
    { path: `${process.env.PUBLIC_URL}/table/sizing`, Component: <SizingTable /> },
    { path: `${process.env.PUBLIC_URL}/table/border`, Component: <BorderTable /> },
    { path: `${process.env.PUBLIC_URL}/table/styling`, Component: <StylingTable /> },

    // {/* cards */}
    { path: `${process.env.PUBLIC_URL}/cards/basicCards`, Component: <BasicCards /> },
    { path: `${process.env.PUBLIC_URL}/cards/creativeCards`, Component: <CreativeCards /> },
    { path: `${process.env.PUBLIC_URL}/cards/tabCard`, Component: <TabCard /> },
    { path: `${process.env.PUBLIC_URL}/cards/draggingCards`, Component: <DraggingCards /> },

    // {/* Timeline */}
    { path: `${process.env.PUBLIC_URL}/timelines/timeline`, Component: <Timeline /> },
    { path: `${process.env.PUBLIC_URL}/timelines/timeline2`, Component: <Timeline2 /> },

    // {/* Charts */}
    { path: `${process.env.PUBLIC_URL}/charts/googleChart`, Component: <GoogleChart /> },
    { path: `${process.env.PUBLIC_URL}/charts/chartJs`, Component: <ChartJs /> },
    { path: `${process.env.PUBLIC_URL}/knob/knob-charts`, Component: <Knobcharts /> },
    { path: `${process.env.PUBLIC_URL}/charts/apex-chart`, Component: <ApexCharts /> },
    { path: `${process.env.PUBLIC_URL}/charts/chartist-chart`, Component: <Chartist /> },

    // {/* Map */}
    { path: `${process.env.PUBLIC_URL}/map/googleMap`, Component: <GoogleMap /> },
    { path: `${process.env.PUBLIC_URL}/map/leafletMap`, Component: <LeafletMapComp /> },

    // {/* Editor */}
    { path: `${process.env.PUBLIC_URL}/editor/ckEditor`, Component: <Editor1 /> },
    { path: `${process.env.PUBLIC_URL}/editor/mdeEditor`, Component: <Editor2 /> },
    { path: `${process.env.PUBLIC_URL}/editor/acecodeEditor`, Component: <Editor3 /> },

    // {/* Users */}
    { path: `${process.env.PUBLIC_URL}/users/userProfile`, Component: <UserProfile /> },
    { path: `${process.env.PUBLIC_URL}/users/userEdit`, Component: <UserEdit /> },
    { path: `${process.env.PUBLIC_URL}/users/userCards`, Component: <UserCards /> },

    // {/* Calender */}
    { path: `${process.env.PUBLIC_URL}/calender/calender1`, Component: <Calender1 /> },
    { path: `${process.env.PUBLIC_URL}/calender/calender2`, Component: <Calender2 /> },

    // {/* Blog */}
    { path: `${process.env.PUBLIC_URL}/blog/blogDetail`, Component: <BlogDetail /> },
    { path: `${process.env.PUBLIC_URL}/blog/blogSingle`, Component: <BlogSingle /> },
    { path: `${process.env.PUBLIC_URL}/blog/blogPost`, Component: <BlogPost /> },

    // {/* Social App */}
    { path: `${process.env.PUBLIC_URL}/social/socialApp`, Component: <SocialApp /> },

    // {/* Job Search App */}
    { path: `${process.env.PUBLIC_URL}/jobSearch/cardView`, Component: <CardView /> },
    { path: `${process.env.PUBLIC_URL}/jobSearch/job-list`, Component: <JobList /> },
    { path: `${process.env.PUBLIC_URL}/jobSearch/job-detail/:id`, Component: <JobDetail /> },
    { path: `${process.env.PUBLIC_URL}/jobSearch/job-apply/:id`, Component: <JobApply /> },

    // {/* Learning App */}
    { path: `${process.env.PUBLIC_URL}/learning/learning-list`, Component: <LearningList /> },
    { path: `${process.env.PUBLIC_URL}/learning/learning-detail/:id`, Component: <LearningDeatil /> },

    // {/* FAQ */}
    { path: `${process.env.PUBLIC_URL}/faq/faqComponent`, Component: <FaqComponent /> },

    // {/* Knowledgebase */}
    { path: `${process.env.PUBLIC_URL}/knowledgebase/knowledgebaseComponent`, Component: <KnowledgebaseComponent /> },

    // {/* Support Ticket */}
    { path: `${process.env.PUBLIC_URL}/support-ticket/supportTicket`, Component: <SupportTicket /> },

    // {/* Applications */}
    { path: `${process.env.PUBLIC_URL}/todo-app/todo`, Component: <Todo /> },
    { path: `${process.env.PUBLIC_URL}/email-app/emailDefault`, Component: <EmailDefault /> },
    { path: `${process.env.PUBLIC_URL}/chat-app/chat`, Component: <Chat /> },

    // {/* Ecommerce App */}
    { path: `${process.env.PUBLIC_URL}/ecommerce/product`, Component: <EcommerceApp /> },
    { path: `${process.env.PUBLIC_URL}/ecommerce/cart/:id`, Component: <AddToCart /> },
    { path: `${process.env.PUBLIC_URL}/ecommerce/wishlist/:id`, Component: <WishlistComponent /> },
    { path: `${process.env.PUBLIC_URL}/ecommerce/product-detail/:id`, Component: <ProductDetail /> },
    { path: `${process.env.PUBLIC_URL}/ecommerce/checkout`, Component: <Checkout /> },
    { path: `${process.env.PUBLIC_URL}/ecommerce/invoice`, Component: <Invoice /> },
    { path: `${process.env.PUBLIC_URL}/ecommerce/product-list`, Component: <ProductList /> },
    { path: `${process.env.PUBLIC_URL}/ecommerce/payment`, Component: <Payment /> },
    { path: `${process.env.PUBLIC_URL}/ecommerce/history`, Component: <History /> },

    // {/* To-Do-Firebase */}
    { path: `${process.env.PUBLIC_URL}/todo-app/todo-firebase`, Component: <TodoFirebase /> },

    // {/* CONTACT APP */}
    { path: `${process.env.PUBLIC_URL}/contact-app/contact`, Component: <ContactApp /> },

    // {/* Bookmark App */}
    { path: `${process.env.PUBLIC_URL}/bookmark-app/bookmark`, Component: <BookmarkApp /> },

    // {/* Task App */}
    { path: `${process.env.PUBLIC_URL}/taks-app/task`, Component: <TaskApp /> },

    { path: `${process.env.PUBLIC_URL}/project/project-list`, Component: <ProjectApp /> },
    { path: `${process.env.PUBLIC_URL}/project/new-project`, Component: <NewProject /> },
    { path: `${process.env.PUBLIC_URL}/project/project-details`, Component: <ProjectDetails /> },
    { path: `${process.env.PUBLIC_URL}/kanban-board`, Component: <KanbanBoard /> },
    { path: `${process.env.PUBLIC_URL}/file-manager`, Component: <FileManager /> },

    // {/* Search page */}
    { path: `${process.env.PUBLIC_URL}/search/searchpage`, Component: <Searchpage /> },

    // {/* Sample page */}
    { path: `${process.env.PUBLIC_URL}/sample/samplepage`, Component: <Samplepage /> },

    // {/* Pricing */}
    // { path: `${process.env.PUBLIC_URL}/price/pricing`, Component: <Pricing /> },
    { path: `/pricing`, Component: <Pricing /> },
]
