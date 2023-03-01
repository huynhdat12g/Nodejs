var express = require('express');
var router = express.Router();
var mongoose =  require('mongoose');


//CONECTING DB// APP CONFI
mongoose.connect('mongodb+srv://Khoa21donga:Khoa21dongaKhoa21dongaKhoa21donga@cluster0.o9ivn6p.mongodb.net/test2?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false 
});

//SCHEMA
let lopSchema = mongoose.Schema({
  name: {
    type: String,
  },
  numberStudent: {
    type: String,
  }
});

//MODEL
let Lop = mongoose.model('Lop', lopSchema);

/* GET home page. */
router.get('/', function(req, res, next) {
  Lop.find({}, (Error, data)=>{
    console.log('danh sach', data);
    res.render('index', {lops: data});

  })
  
});
//form-add
router.get('/form-add', function(req, res, next){
  res.render('form-add', {});
});
router.post('/add', function (req, res, next) {
  Lop.create(req.body);
  res.redirect('/');
});
router.get('/form-update/:id', function (req, res, next) {
  Lop.findById(req.params.id, (err, data) => {
    res.render('form-update', { Lop: data });
  });
});

router.post('/update', function (req, res, next) {
  monHoc.findByIdAndUpdate(req.body.id, req.body, (error, data) => {
    res.redirect('/');
  });
});

router.get('/form-delete/:id', function (req, res, next) {
  Lop.findByIdAndDelete(req.params.id, (err, data) => {
    res.redirect('/');
  });
});

module.exports = router;
