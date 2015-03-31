

var Quiz = function(questions) {
    this.questions = questions;
    
    this.$template = {
        "header": document.querySelector(".question"),
        "options": document.querySelector(".question-choices")
    };
    
    this.init();
}

Quiz.prototype = {
    "init": function() {
        this.question = 0;
        
        this.generateQuestion();
        this.bindEvents();
    },
    "calculateScore": function() {
        var correctCount = 0
        
        this.questions.forEach(function(question) {
            if ( question.selectedAnswer === question.correctAnswer ) correctCount += 1
        })
        
        return {
            "correct": correctCount,
            "total": this.questions.length
        }
    },
    "score": function() {
        var score = this.calculateScore()
        alert("Score: " + ((score.correct / score.total) * 100) + "%")
    },
    "generateQuestion": function() {
        var question = this.questions[this.question];
        
        this.$template.header.innerHTML = question.question;
        this.$template.options.innerHTML = "";
        question.choices.forEach(this.createRadio.bind(this));
        
        var score = this.calculateScore()
        console.log(score)
        document.querySelector(".question-running-total").innerText = score.correct + "/" + score.total
    },
    "bindEvents": function() {
        var _this = this,
            $nextBtn = document.querySelector(".question-navigation--next"),
            $prevBtn = document.querySelector(".question-navigation--prev");
        
        $nextBtn.addEventListener("click", function(e) {
            //Go to the next question
            _this.question++;
            
            if ( _this.question == _this.questions.length ) {
                _this.score();
            } else {
                _this.generateQuestion();
            }
        });
        
        $prevBtn.addEventListener("click", function(e) {
            _this.question--;
            
            if ( _this.question <= 0 ) _this.question = 0
            
            _this.generateQuestion();
        });
    },
    "createRadio": function(choice, index) {
        var question = this.questions[this.question];
        
        var radio = document.createElement("input");
        radio.type = "radio";
        radio.name = "options";
        radio.id = "option-"+index;
        
        if ( question.selectedAnswer === index ) {
            radio.checked = true;
        }
        
        radio.addEventListener("click", function(e) {
            question.selectedAnswer = index;
        })
        
        var radioText = document.createElement("label");
        radioText.setAttribute("for", "option-"+index)
        radioText.innerHTML = choice;
        
        radioText.insertBefore(radio, radioText.firstChild);
        this.$template.options.appendChild(radioText);
    }
}

var q = new Quiz(allQuestions)
