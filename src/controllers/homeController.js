import db from '../models/index';
import CRUDService from "../services/CRUDServices";

let getHomePage = async (req, res) => {
    try {
        let data = await db.User.findAll();
        return res.render('homepage.ejs', {
            data: JSON.stringify(data)
        });
    } catch (e) {
        console.log(e);
    }
}

let getCRUD = (req, res) => {
    return res.render('crud.ejs');
}

let postCRUD = async (req, res) => {
    console.log(req.body);
    let message = await CRUDService.crateNewUser(req.body);
    console.log(message);
    return res.send('<div>Post curd in sever</div><br><a href="/crud"><button>crud</button></a>');
}

let displayGetCRUD = async (req, res) => {
    let data = await CRUDService.getAllUser();
    console.log('-------');
    console.log(data);
    console.log('-------');

    return res.render('displayCRUD.ejs', {
        dataTable: data
    })
}

let getEditCRUD = async (req, res) => {
    let userId = req.query.id;
    console.log(userId);


    if (userId) {
        let userData = await CRUDService.getUserInfoById(userId);

        console.log(userData);

        return res.render('editCRUD.ejs',
            {
                user: userData
            }
        );

    } else {
        return res.send('User not found!');
    }
}

let putCRUD = async (req, res) => {
    let data = req.body; // laays heets thoong tin nhaap vaof
    //     //     // let allUser = 
    await CRUDService.updateUserData(data);
    return res.send('update!');
    //     //     // return res.render('displayCRUD.ejs', {
    //     //     //     user: allUser
    //     //     // });

}

module.exports = {
    getHomePage: getHomePage,
    getCRUD: getCRUD,
    postCRUD: postCRUD,
    displayGetCRUD: displayGetCRUD,
    getEditCRUD: getEditCRUD,
    putCRUD: putCRUD,
}
