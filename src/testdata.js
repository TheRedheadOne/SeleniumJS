var nav = require('./navigation.js'),
    efp = require('./efilingparams.js'),
    req = require('./commonFunctions.js');

const webdriver = require('selenium-webdriver'),
      By = require('selenium-webdriver').By,
      until = require('selenium-webdriver').until;

var userLogin = "script@gmail.com",
    userPassword = "Password1",
    trunkLogin = 'smass@stratuspro.com',
    trunkPassword = 'MustRelease2015!';

var dev = 'http://192.168.2.77:98/',
    sprint3 = 'https://192.168.2.77:100/',
    trunk = 'http://192.168.2.77:90/',
    release = 'http://192.168.2.77:91/';

var env = sprint3,
    login = userLogin,
    password = userPassword;

var chapter7 = By.xpath("//select[@id='Case_Chapter']/option[@value='1']"),
    chapter13 = By.xpath("//select[@id='Case_Chapter']/option[@value='4']"),
    individual = By.xpath("//select[@id='Case_Ownership']/option[@value='1']"),
    joint = By.xpath("//select[@id='Case_Ownership']/option[@value='2']");

var testMatter = {
        //isBankruptcy: true,
        chapter: chapter7,
        type: individual,
        jurisdiction: {
            state: efp.illinois.self,
            county: efp.county,
            district: efp.illinois.ilnb,
            division: undefined
        },
        isOverMedian: false
};

var determinePhone = function() { //10-digit phone
        var num = Math.floor((Math.random() * 10000000000) + 1);
                while (num.toString().length != 10) {
                    num = Math.floor((Math.random() * 10000000000) + 1);
                }
        return num.toString()
    };

var determineSSN = function() { //9-digit ssn
        var num = Math.floor((Math.random() * 1000000000) + 1);
                while (num.toString().length != 9) {
                    num = Math.floor((Math.random() * 1000000000) + 1);
                }
        return num.toString()
    };



var testPerson = {
    firstName: 'Keira' + Math.floor((Math.random() * 100) + 1),
    lastName: 'Metz'  + Math.floor((Math.random() * 100) + 1),
    middleName: '',
    displayName: function() {return this.lastName + ', ' + this.firstName + ' ' + this.middleName},
    phone: determinePhone(), 
    email: function() {return this.firstName.charAt(0).toLowerCase() + '.' + this.lastName.toLowerCase() + '@test.com'},
    ssn: determineSSN(),
    zip: '60007'
};

var testCompany = {
    displayName: 'CompanyOfYourDream' + Math.floor((Math.random() * 100) + 1),
    phone: determinePhone(),
    email: function() {return 'info@' + this.displayName.toLowerCase() + '.com'},
    zip: '60007'
};

var selMatterType = ';',
    selChapter = 'chapter 7',
    selJurisdiction = 'illinois';    


module.exports = {
    login: login,
    password: password,
    dev: dev,
    sprint3: sprint3,
    trunk: trunk,
    env: env,
    
    testPerson: testPerson,
    testCompany: testCompany,
    testMatter: testMatter,
    
    selMatterType: selMatterType,
    selChapter: selChapter,
    selJurisdiction: selJurisdiction
};