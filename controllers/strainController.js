const Strain = require('../models/strainModel');

// Generate Random Strains
const getRandomStrains = async (req, res) => {
    try {
        const CannabisAPI = require('../api/cannabis_random');
        const async_random = async () => {
            let strain_effect_list = [];
            let strain_name_list = [];
            let strain_image_list = [];
            let strain_thc_list = [];
            let strain_cbd_list = [];
            let strain_type_list = [];
            
            //generate a random number
            const min = 0;
            const max = 70;
            function generate_random_number(min, max)  {
                return Math.random() * (max - min) + min;
            };
            
            for (i = 0; i < 6; i++) {
                const response = await CannabisAPI.get_strain_by_ID(generate_random_number(min, max));
                strain_name_list[i] = response.data[0].strain;
                strain_image_list[i] = response.data[0].imgThumb;
                strain_effect_list[i] = response.data[0].goodEffects;
                strain_thc_list[i] = response.data[0].thc;
                strain_cbd_list[i] = response.data[0].cbd;
                strain_type_list[i] = response.data[0].strainType;
            }
            var pageData = {
                strain_image : strain_image_list,
                strain_name : strain_name_list,
                strain_effects : strain_effect_list,
                strain_thc : strain_thc_list,
                strain_cbd : strain_cbd_list,
                strain_type : strain_type_list
            }
            res.render('home',pageData);
            //console.log(req.oidc.isAuthenticated() ? 'Logged in' : 'Logged out') 
        }
        async_random();

    }
    catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
};

// Random Strain - When API call limit exceeds - ONLY FOR TESTING. REMOVE DURING PRODUCTION
const getRandomStrainsTest = async (req, res) => {
    let strain_effect_list = ["happy, euphoric, sleepy, relaxed", "energetic", "sleepy", "hungry", "uplifted"];
    let strain_name_list = ["Purple Kush", "Pineapple Express", "Mad Mango", "OG Kush", "Golden Goat"];
    let strain_image_list = ["https://images.unsplash.com/photo-1603909223429-69bb7101f420?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80","https://images.unsplash.com/photo-1603909223429-69bb7101f420?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80","https://images.unsplash.com/photo-1603909223429-69bb7101f420?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80","https://images.unsplash.com/photo-1603909223429-69bb7101f420?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80","https://images.unsplash.com/photo-1603909223429-69bb7101f420?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80","https://images.unsplash.com/photo-1603909223429-69bb7101f420?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80"];
    let strain_thc_list = ["10","20","30","40","50"];
    let strain_cbd_list = ["10","20","30","40","50"];
    let strain_type_list = ["indica","indica","indica","sativa","hybrid"];

    var pageData = {
        strain_image : strain_image_list,
        strain_name : strain_name_list,
        strain_effects : strain_effect_list,
        strain_thc : strain_thc_list,
        strain_cbd : strain_cbd_list,
        strain_type : strain_type_list,
    }   
    res.render('home',pageData);
};

// Random Strain - When API call limit exceeds - ONLY FOR TESTING. REMOVE DURING PRODUCTION
const searchStrainTest = async (req, res) => {
  strain_name = "Purple Kush";
  strain_image = "https://images.unsplash.com/photo-1603909223429-69bb7101f420?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80";
  strain_effects= "happy, euphoric, sleepy, relaxed";
  strain_thc = "10";
  strain_cbd = "20";
  strain_type = "indica";

  var pageData = {
    strain_image : strain_image,
    strain_name : strain_name,
    strain_effects : strain_effects,
    strain_type : strain_type,
    strain_thc : strain_thc,
    strain_cbd : strain_cbd,
  }
  res.render('search_results',pageData);
  //console.log(req.oidc.isAuthenticated() ? 'Logged in' : 'Logged out');
};



// Search strain
const searchStrain = async (req, res) => {
  try {
    const Cannabis_Search_API = require('../api/cannabis_search');
    const async_search = async () => {
        const response = await Cannabis_Search_API.search_strain(req.query.search);
        strain_name = response.data[0].strain;
        strain_image = response.data[0].imgThumb;
        strain_effects= response.data[0].goodEffects;
        strain_thc = response.data[0].thc;
        strain_cbd = response.data[0].cbd;
        strain_type = response.data[0].strainType;

        var pageData = {
            strain_image : strain_image,
            strain_name : strain_name,
            strain_effects : strain_effects,
            strain_thc : strain_thc,
            strain_cbd : strain_cbd,
            strain_type : strain_type
        }
        res.render('search_results',pageData);
    }
    async_search();
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Add strain to collection
const addStrainToCollection = async (req, res) => {
  try {
    if (!req.oidc.isAuthenticated()) {
      return res.redirect('/login');
    }

    const Cannabis_Search_API = require('../api/cannabis_search');
    const response = await Cannabis_Search_API.search_strain(req.query.strain_name);
    const strain = response.data[0];
    const pageData = {
      user: req.oidc.user.name,
      strain_image: strain.imgThumb,
      strain_name: strain.strain,
      strain_effects: strain.goodEffects,
      strain_thc: strain.thc,
      strain_cbd: strain.cbd,
      strain_type: strain.strainType,
    };

    const existingStrain = await Strain.findOne({ strain_name: strain.strain });
    if (existingStrain) {
      return res.render('strain_collected', pageData);
    }

    const newStrain = new Strain(pageData);
    await newStrain.save();
    res.render('strain_collected', pageData);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

// View collection
const viewCollection = (req, res) => {
  if (!req.oidc.isAuthenticated()) {
    return res.redirect('/login');
  }

  Strain.find({ user: req.oidc.user.name }, (err, strains) => {
    if (err) {
      return res.status(500).json({ error: 'Internal server error' });
    }
    const pageData = {
      strains: strains,
    };
    res.render('my_collection', pageData);
  });
};

// Delete strain
const deleteStrain = (req, res) => {
  if (!req.oidc.isAuthenticated()) {
    return res.redirect('/login');
  }

  const strain_name = req.query.strain_name;
  Strain.findOneAndDelete({ strain_name: strain_name }, (err, strain) => {
    if (strain) {
      Strain.find({ user: req.oidc.user.name }, (err, strains) => {
        if (err) {
          return res.status(500).json({ error: 'Internal server error' });
        }
        const message = 'Strain deleted successfully!';
        const pageData = {
          strains: strains,
          message: message,
        };
        res.render('my_collection', pageData);
      });
    }
  });
};

module.exports = {
  getRandomStrains,
  searchStrain,
  addStrainToCollection,
  viewCollection,
  deleteStrain,
};
