var user = require('../user.js');

module.exports = {
    getName: function(req, res, next){
        var user1 = {"name": user.name}
        console.log('getting name')
        return res.status(200).send(user1);
    },
    getLocation: function(req, res, next){
        var location1 = {"location": user.location}
        return res.status(200).json(location1);
    },
    getOccupations: function(req, res, next){
        var occupations1 = {"occupations": user.occupations}
        return res.status(200).json(occupations1)
    },
    getLatestOccupation: function(req, res, next){
        var latestOccupation = {"latestOccupation": user.occupations[user.occupations.length - 1]}
        return res.status(200).json(latestOccupation)
    },
    getHobbies: function(req, res, next){
        var hobbies = {"hobbies": user.hobbies};
        return res.status(200).json(hobbies);
    },
    getHobbyByType: function(req, res, next){
        var hobbyType = req.params.type;
        var hobbies = user.hobbies;
        var error = "Type Not Found"
        // console.log(hobbyType)

        for (var i = 0; i < hobbies.length; i++) {
            console.log(hobbies[i].type)
            if (hobbies[i].type.toLowerCase() == hobbyType.toLowerCase()) {
                return res.status(200).json(hobbies[i]);
            }
            
        }
        return res.status(400).json(error)
        
    },
    getFamily: function(req, res, next){
        var family = {"family": user.family};
        var relation = req.query.relation.toLowerCase();

        if (relation) {
            var returnedMember = user.family.find(function(member) {
                return member.relation.toLocaleLowerCase() === relation;
            });
            return res.status(200).send(returnedMember);
        } else {
            return res.status(200).json(family);
        }

        
    },
    getFamilyMemberByGender: function(req, res, next){
        var family = user.family;
        var gender = req.params.gender;
        var error = "There are no " + gender + " family members.";
        var arr = [];

        for (var i = 0; i < family.length; i++) {
            if (family[i].gender.toLowerCase() == gender.toLowerCase()) {
                arr.push(family[i])
            }
            
        }
        if(arr === []){
            return res.status(400).json(error)   
        }
        return res.status(200).json(arr);
    },
    getRestaurants: function(req, res){
        var restaurants = user.restaurants;
        console.log(restaurants);
        return res.status(200).json(restaurants);
    },
    getRestaurantsByName: function(req, res){
        var restaurants = user.restaurants;
        var name = req.params.name;
        var error = "There are no restaurants called " + name + ".";
        var arr = [];

        for (var i = 0; i < restaurants.length; i++) {
            if (restaurants[i].name.toLowerCase() == name.toLowerCase()) {
                arr.push(restaurants[i])
            }   
        }
        if(arr === []){
            return res.status(400).json(error)   
        }
        return res.status(200).json(arr);
    }
}