
$(document).ready(function() {

    //ScoreCard Variables
    var correct = 0;
    var incorrect = 0;
    var unanswered = 0;
    
    
    
    
   
// The questions and answers
    var questions = [{
        ques: "In what year was Pixar founded?",
        ans: ["1979", "1986", "1995", "2000"],
        name: "firstyear",
        correctans: "1986"
    },{
        ques: "Which tech mogul provided funding and became a co-founder of Pixar?",
        ans: ["Steve Jobs", "Bill Gates", "Peter Thiel", "Mark Zuckerberg"],
        name: "2ndq",
        correctans: "Steve Jobs"
    },{
        ques: "What was Pixar's first feature-length film that was released in 1995?",
        ans: ["Toy Story", "A Bug's Life", "Monster's Inc", "Finding Nemo"],
        name: "3rdq",
        correctans: "Toy Story"
    },
  ];




    

  // The start function
    $("#start").on("click", function() {
        addQuestions();
        time = 60; // Insert the amount of time you want the user to have
        timer();
    });


    // The adding of questions
    function addQuestions () {
        $("#start-screen").hide();
        for (var i = 0; i < questions.length; i++) {
            $("#questions-box").append($("<br>"+"<h4>"+questions[i].ques+"<h4>"))
            for (var j = 0; j < questions[i].ans.length; j++) {
                $("#questions-box").append($("<input type='radio' class='radio-button'value='"+questions[i].ans[j]+"'name='question-"+i+"'>"+questions[i].ans[j]+"<br>"))
            }
        };
        $("#submit-button").append($("<button type='button' class='btn btn-success p-2 mb-3' id='submitbutton'>Submit</button>"))
    }

       // CREATE TIMER BELOW

       function timer(){
        $("#timer").text(time+" seconds remaining")
        timeInterval = setInterval(function(){
            if (time>1){
                time--;
                $("#timer").text(time+" seconds remaining");            
            } else {            
                time--;
                $("#timer").text(time+" seconds remaining");            
                clearInterval(timeInterval);
                $("#timer").text("Time is Up!");
                // Insert scoring function
            }
        }, 1000)
    }

    // If user presses submit
    // $("#submit-button").on("click", function() {
        
    // }


    // Scoring function after time runs out
    
    var gradeQuiz = $('#submit-button').on('click', function() {

        var correctAnswers = 0;
        var wrongAnswers = 0;
        var unAnswered = 0;
    
        // loop through correctArray & radioName to match html elements & answers
        for (var i = 0; i < 10; i++) {
    
            if ($('input:radio[name="' + questions[i].name + '"]:checked').val() === questions[i].correctans) {
    
                correctAnswers++;
            } else {
                wrongAnswers++;
            };

            console.log(correctAnswers);
            console.log(wrongAnswers);
        };

        });



        // Closing of the whole thing below
        
    });
    
    