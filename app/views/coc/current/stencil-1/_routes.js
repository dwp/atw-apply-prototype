module.exports = function (router) {
//urgentbox Router

router.post('/coc/current/stencil-1/change-options', function(req, res, next){
     if (req.session.data['change']){
       for (i = 0; i<req.session.data['change'].length; i++){
         switch (req.session.data['change'][i]){
           case "Name" : return res.redirect("name"); next(); break;
           case "Contact details" : return res.redirect("contact-details"); next(); break;
           case "Home address" : return res.redirect("address"); next(); break;
           case "Work address" : return res.redirect("work-address"); next(); break;
           case "Bank details" : return res.redirect("bank-details"); next(); break;
           case "Something else" : return res.redirect("something-else"); next(); break;
           case "null" : return res.redirect("null"); next(); break;
           default: continue;
         }
         break;
       }
     } else {
     }
  return res.redirect("urgent"); next();
  })

  router.post('/coc/current/stencil-1/name', function(req, res, next){
     if (req.session.data['change']){
       for (i = 0; i<req.session.data['change'].length; i++){
         switch (req.session.data['change'][i]){
           case "Contact details" : return res.redirect("contact-details"); next(); break;
           case "Home address" : return res.redirect("address"); next(); break;
           case "Work address" : return res.redirect("work-address"); next(); break;
           case "Bank details" : return res.redirect("bank-details"); next(); break;
           case "Something else" : return res.redirect("something-else"); next(); break;
           case "null" : return res.redirect("null"); next(); break;
           default: continue;
         }
         break;
       }
     } else {
     }
  return res.redirect("urgent"); next();
  })

  router.post('/coc/current/stencil-1/contact-details', function(req, res, next){
     if (req.session.data['change']){
       for (i = 0; i<req.session.data['change'].length; i++){
         switch (req.session.data['change'][i]){
           case "Home address" : return res.redirect("address"); next(); break;
           case "Work address" : return res.redirect("work-address"); next(); break;
           case "Bank details" : return res.redirect("bank-details"); next(); break;
           case "Something else" : return res.redirect("something-else"); next(); break;
           case "null" : return res.redirect("null"); next(); break;
           default: continue;
         }
         break;
       }
     } else {
     }
  return res.redirect("urgent"); next();
  })

  router.post('/coc/current/stencil-1/address', function(req, res, next){
     if (req.session.data['change']){
       for (i = 0; i<req.session.data['change'].length; i++){
         switch (req.session.data['change'][i]){
           case "Work address" : return res.redirect("work-address"); next(); break;
           case "Bank details" : return res.redirect("bank-details"); next(); break;
           case "Something else" : return res.redirect("something-else"); next(); break;
           case "null" : return res.redirect("null"); next(); break;
           default: continue;
         }
         break;
       }
     } else {
     }
  return res.redirect("urgent"); next();
  })

  router.post('/coc/current/stencil-1/work-address', function(req, res, next){
     if (req.session.data['change']){
       for (i = 0; i<req.session.data['change'].length; i++){
         switch (req.session.data['change'][i]){
           case "Bank details" : return res.redirect("bank-details"); next(); break;
           case "Something else" : return res.redirect("something-else"); next(); break;
           case "null" : return res.redirect("null"); next(); break;
           default: continue;
         }
         break;
       }
     } else {
     }
  return res.redirect("urgent"); next();
  })

  router.post('/coc/current/stencil-1/bank-details', function(req, res, next){
     if (req.session.data['change']){
       for (i = 0; i<req.session.data['change'].length; i++){
         switch (req.session.data['change'][i]){

           case "Something else" : return res.redirect("something-else"); next(); break;
           case "null" : return res.redirect("null"); next(); break;
           default: continue;
         }
         break;
       }
     } else {
     }
  return res.redirect("urgent"); next();
  })

  router.post('/coc/current/stencil-1/something-else', function(req, res, next){
     if (req.session.data['change']){
       for (i = 0; i<req.session.data['change'].length; i++){
         switch (req.session.data['change'][i]){

           case "null" : return res.redirect("null"); next(); break;
           default: continue;
         }
         break;
       }
     } else {
     }
  return res.redirect("urgent"); next();
  })


  router.get('/coc/current/stencil-1/address', function (req, res) {
    res.redirect('/coc/current/stencil-1/lookup-address')
  })

}
