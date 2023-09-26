import Shoe from '../../models/Shoe.js';
import Company from '../../models/Company.js';

const create = async (req, res) => {
  try {
    
    const company = await Company.findOne({ user_id: req.user._id });

    if (!company) {
      return res.status(404).json({success:false, response: 'Company not found' });
    }

    
    req.body.company_id = company._id;

    
    const createdShoe = await Shoe.create(req.body);
    res.status(201).json({ success:true, response: 'Shoe created successfully', shoe: createdShoe });
  } catch (error) {
   
    res.status(500).json({ response: 'Internal Server Error', error: error.message });
  }
};

export default create ;
