function main() {
    doAllTheThings();
}

function doAllTheThings() {
    try{
        throw {
            message: "Everything's ruined",
            name: "FatalException",
            toString: function(){return this.name + ": " + this.message;}
        }
    }
    catch (e) {
        reportError(e);
    }
}

function reportError(e) {
    $('.js-error-report').text("Uh oh, something went wrong! Here's what we know: " + e.message);
}



/* From here down, you are not expected to
 understand.... for now :)


 Nothing to see here!

 */


$(main);