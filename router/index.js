const Router = require('express').Router;
const OrderController = require('../controllers/order-controller');
const ContentController = require('../controllers/content-controller');
const TrackController = require('../controllers/track-controller');
const UserController = require('../controllers/user-controller');
const UploadController = require('../controllers/upload-controller');
const ProductController = require('../controllers/product-controller');
const TransactionController = require('../controllers/transaction-controller');
const PostController = require('../controllers/post-controller');
const ReviewController = require('../controllers/review-controller');

const authMiddleware = require('../middlewares/auth-middleware');

const router = new Router();

router.resource = (name, controller) => {
    router.get(`/${name}s`, controller.getAll);
    router.post(`/${name}`, authMiddleware, controller.create);
    router.put(`/${name}/:id`, authMiddleware, controller.edit);
    router.delete(`/${name}/:id`, authMiddleware, controller.delete);
}

router.post('/login', UserController.login);
router.post('/logout', authMiddleware, UserController.logout);
router.get('/refresh', UserController.refresh);

router.post('/upload', authMiddleware, UploadController.uploadFiles);

router.get('/content/:name', ContentController.getContent);
router.post('/content/:name', authMiddleware, ContentController.setContent);

router.post('/transaction', TransactionController.createTransaction);
router.put('/transaction/complete/:id', TransactionController.completeTransaction);

router.post('/order', OrderController.createOrder);
router.get('/order/:id', OrderController.getOrder);

router.get('/track/search', TrackController.searchTrack);

router.get('/products', ProductController.getAllProducts);
router.post('/product', authMiddleware, ProductController.createProduct);
router.delete('/product/:id', authMiddleware, ProductController.deleteProduct);
router.put('/product/:id', authMiddleware, ProductController.editProduct);

router.get('/posts', PostController.getAll);
router.get('/posts/:id', PostController.getOne);
router.post('/post', authMiddleware, PostController.create);
router.put('/post/:id', authMiddleware, PostController.edit);
router.delete('/post/:id', authMiddleware, PostController.delete);

router.get('/reviews', ReviewController.getAll);
router.post('/review', ReviewController.create);
router.put('/review/:id', authMiddleware, ReviewController.edit);
router.delete('/review/:id', authMiddleware, ReviewController.delete);

router.get('/cards', TransactionController.getCards);
router.post('/cards', TransactionController.saveCardData);
router.delete('/card/:id', authMiddleware, TransactionController.deleteCard);

// router.resource('review', ReviewController);

module.exports = router;