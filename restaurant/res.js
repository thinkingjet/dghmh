// Our data object that will be sent via post request to the server to be used in our Yelp API search
let yelpSearchParams = {
    term: 'romantic restaurants',
    limit: '4',
    location: '',
    price: '',
    open_at: ''
};
let dateAndTime;

const dateAndTimeSetter = () => {
    if ($('#date').val() == "" && $('#start').val() == "") {
        let today = new Date();
        today = today.toISOString();
        today = today.split('T');
        today = today[0];
        let time = `24:00:00 UTC`
        let finalTime = Date.parse(`${today} ${time}`);
        dateAndTime = finalTime / 1000 | 0;
        yelpSearchParams.open_at = dateAndTime;
    } else if ($('#date').val() == "" && $('#start').val() != "") {
        let today = new Date();
        today = today.toISOString();
        today = today.split('T');
        today = today[0];
        let time = ($('#start').val());
        let finalTime = Date.parse(`${today} ${time}`);
        dateAndTime = finalTime / 1000 | 0;
        yelpSearchParams.open_at = dateAndTime;
    } else if ($('#date').val() != "" && $('#start').val() == "") {
        let today = ($('#date').val());
        let time = `24:00:00 UTC`
        let finalTime = Date.parse(`${today} ${time}`);
        dateAndTime = finalTime / 1000 | 0;
        yelpSearchParams.open_at = dateAndTime;
    } else if ($('#date').val() != "" && $('#start').val() != "") {
        let today = ($('#date').val());
        let time = ($('#start').val());
        let finalTime = Date.parse(`${today} ${time}`);
        dateAndTime = finalTime / 1000 | 0;
        yelpSearchParams.open_at = dateAndTime;
    }
    $.ajax({
            url: "/results/timeInfo",
            method: 'POST',
            dataType: 'json',
            data: yelpSearchParams,
        })
        .done((data) => {
            window.location.href = './price'
        });
}

const priceBuilder = () => {
    let priceArr = [];
    if ($('#1').prop('checked') == false && $('#2').prop('checked') == false && $('#3').prop('checked') == false && $('#4').prop('checked') == false) {
        let defaultPrice = `2,3`;
        yelpSearchParams.price = defaultPrice;
    } else {
        if ($('#1').is(':checked')) {
            priceArr.push(1);
        }
        if ($('#2').is(':checked')) {
            priceArr.push(2);
        }
        if ($('#3').is(':checked')) {
            priceArr.push(3);
        }
        if ($('#4').is(':checked')) {
            priceArr.push(4);
        }
        let priceHolder = priceArr.toString();
        yelpSearchParams.price = priceHolder;
    }
}

const zipcodeSetter = () => {
    let zipcode;
    if ($('#zipcode').val() == "") {
        zipcode = `20005`;
    } else zipcode = $('#zipcode').val();
    yelpSearchParams.location = zipcode;
    $.ajax({
        url: "/results/priceInfo",
        method: 'POST',
        dataType: 'json',
        data: yelpSearchParams,
    }).done((data) => {
        window.location.href = './dateResults'
    });
}

const termUpdater = () => {
    yelpSearchParams.term = `Fun Things to Do on Date Night`;
    yelpSearchParams.price = '1,2,3,4';
    yelpSearchParams.limit = '10';
    $.ajax({
        url: "/results/term",
        method: 'POST',
        dataType: 'json',
        data: yelpSearchParams,
    })
}

const dataQuery = (cb) => {
    let currentURL = window.location.origin;
    $.ajax({
            url: `${currentURL}/results`,
            method: "GET"
        })
        .done((data) => {
            yelpSearchParams.open_at = data.open_at;
            yelpSearchParams.location = data.location;
            yelpSearchParams.price = data.price;
            cb(yelpSearchParams);
        });
}

// Restaurant result function
const yelpSearch = (data) => {
    $.ajax({
        url: "/results/data",
        method: 'POST',
        dataType: 'json',
        data: data,
    }).done((data) => {
        console.log(data);
        for (let i = 0; i < data.length; i++) {

            let restaurantResults = $(`
            <div class ="row">
              <div class="col-md-7">
                <h4>${data[i].name}</h4>
              </div>
              <div class="col-md-1 justify-content-md-center">
                <a href= ${data[i].url} target="blank"><i class= "fab fa-yelp"></i></a>
              </div>
              <div class="col-md-1 justify-content-md-center">
                <h4> ${data[i].price}</h4>
              </div>
            </div>
            <div class="row">
              <div class ="col-md-10">
              <p>
                ${data[i].location.address1}
                <br>
                ${data[i].location.city}, ${data[i].location.state} ${data[i].location.zip_code}
              </p>
              </div>
            </div>
          </div>`);

            $("#restaurantRes").append(restaurantResults);
        };
        return data;

    });

}

// Fun stuff result function

const yelpSearchTwo = (data) => {
    termUpdater();
    $.ajax({
        url: "/results/data",
        method: 'POST',
        dataType: 'json',
        data: data,
    }).done((data) => {
        console.log(data);
        $(".contentRes").show();
        for (let i = 0; i < data.length; i++) {

            let funResults = $(`
            <div class ="row">
              <div class="col-md-7">
                <h4>${data[i].name}</h4>
              </div>
              <div class="col-md-1 justify-content-md-center">
                <a href= ${data[i].url} target="blank"><i class= "fab fa-yelp"></i></a>
              </div>
              <div class="col-md-1 justify-content-md-center">
                <h4> ${data[i].price}</h4>
              </div>
            </div>
            <div class="row">
              <div class ="col-md-10">
                <p>
                  ${data[i].location.address1}
                  <br>
                  ${data[i].location.city}, ${data[i].location.state} ${data[i].location.zip_code}
                </p>
              </div>
            </div>
          </div>`);

            $("#funData").append(funResults);
        };
        return data;


    });
}

// index page button listener, calls fuction that sets data object paramaters
$('#btnIndex').on("click", (event) => {
    event.preventDefault();
    dateAndTimeSetter();

    showSecond();
});

$('#goBackFirst').on("click", (event) => {
    event.preventDefault();

    showFirst();
});

$('#goBackSecond').on("click", (event) => {
    event.preventDefault();

    showSecond();
});

$('#btnPrice').on("click", (event) => {
    event.preventDefault();
    priceBuilder();
    zipcodeSetter();
    
    showThird();
});

$('#btnMovies').on("click", (event) => {
    event.preventDefault();
    dataQuery((data) => {
        yelpSearch(data);
        yelpSearchTwo(data);
    })
    $('#btnMovies').hide();
    $('#restart').show();
    let resetButton = $(`
    <div class ="row justify-content-md-center animated fadeIn">
    <a href="./index.html">
    <button class="btn-lg hvr-grow-shadow">
        <i class="fa fa-redo justify-content-center">
        </i>
        <br> Restart
    </button>
</a>
  </div>`);
    $("#restart").append(resetButton);
});



//navigating
function showFirst(){
    document.getElementById("first").style.display = "block";
    document.getElementById("second").style.display = "none";
    document.getElementById("third").style.display = "none";
}

function showSecond(){
    document.getElementById("first").style.display = "none";
    document.getElementById("second").style.display = "block";
    document.getElementById("third").style.display = "none";
}

function showThird(){
    document.getElementById("first").style.display = "none";
    document.getElementById("second").style.display = "none";
    document.getElementById("third").style.display = "block";
}