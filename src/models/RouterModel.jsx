import ModelLocation from "../components/ModelLocation/ModelLocation";
import CartPage from "../pages/CartPage";
import CategoryPage from "../pages/CategoryPage";
import ContactPage from "../pages/ContactPage";
import DownloadPage from "../pages/DownloadPage";
import HomePage from "../pages/HomePage";
import NewsPage from "../pages/NewsPage";
import NotfondPage from "../pages/NotfondPage";
import ProductdetailPage from "../pages/ProductdetailPage";
import NewsDetailPage from "../pages/NewsDetailPage";
import Address from "../pages/ShippingAddress";

export const MAIN_ROUTES = [
    {
        id: 0,
        routerName: 'notfoundpage',
        routerPath: '*',
        routerComponent: <NotfondPage/>,
    },
    {
        id: 1,
        routerName: 'homepage',
        routerPath: '/',
        routerComponent: <HomePage/>,
    },
    {
        id: 2,
        routerName: 'CategoryPage',
        routerPath: '/category/:category',
        routerComponent: <CategoryPage/>,
    },{
        id: 3,
        routerName: 'ProductdetailPage',
        routerPath: '/productdetail/:barcode',
        routerComponent: <ProductdetailPage/>,
    },{
        id: 4,
        routerName: 'ModelLocation',
        routerPath: '/modellocation',
        routerComponent: <ModelLocation/>,
    }, {
        id: 5,
        routerName: 'Checkout',
        routerPath: '/checkout',
        routerComponent: <CartPage/>,
    },
    {
        id: 6,
        routerName: 'Download',
        routerPath: '/download',
        routerComponent: <DownloadPage/>,
    },
    {
        id: 7,
        routerName: 'Contact',
        routerPath: '/contact',
        routerComponent: <ContactPage/>,
    },
    {
        id: 8,
        routerName: 'News',
        routerPath: '/news-page',
        routerComponent: <NewsPage/>,
    },
    {
        id: 9,
        routerName: 'NewsDetail',
        routerPath: '/news-page/:id',
        routerComponent: <NewsDetailPage />,
    },
    {
        id: 10,
        routerName: 'Address',
        routerPath: '/address',
        routerComponent: <Address />,
    }
];