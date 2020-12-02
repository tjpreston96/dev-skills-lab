const Skill = require('../models/skill')


module.exports = {index, show, new: newSkill, create}


function index(req, res){
    res.render('skills/index', {
        skills: Skill.getAll(),
        time: req.time
    });
};

function show(req, res){
    res.render('skills/index', {skills: Skill.getOne(req.params.id)});
};

function newSkill(req, res){
    res.render('skills/new')
}

function create(req, res) {
    res.redirect('/skills')
}