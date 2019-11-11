// business logic
function Topping(name,large,medium,small){
    this.name=name;
    this.large=large;
    this.medium=medium;
    this.small=small;}
var marinatedChicken=new Topping("marinated chicken",200,100,50);
var marinatedSteak=new Topping("marinated BBQ steak",200,100,50);
var bacon=new Topping("bacon",160,80,40);
var pineapple=new Topping("pineapple",120,60,30);
var beefMushroom=new Topping("beef mushroom",160,80,40);
var beefPepperoni=new Topping("beef pepperoni",160,80,40);
var tomatoes=new Topping("tomatoes",120,60,30);
var onions=new Topping("onions",120,60,30);
var periperiChicken=new Topping("periperi chicken",200,100,50);
var sweetcorn=new Topping("sweet corn",160,80,40);

function Size(size){
    this.size=size;
}
var large=new Size(700);
var medium=new Size(500);
var small=new Size(200);

function Crust(type){
    this.type=type;
}
var thick=new Crust(150);
var thin=new Crust(100);

//user interface logic
$(document).ready(function(){
    $("#add-toppings").click(function(){
        $(".toppings-form").append('<form >'+
            'additional toppings <br>'+
            '<input list="toppings">'+
            '<datalist id="toppings">'+
                '<option value="marinated chicken">'+
                '<option value="marinated BBQ steak">'+
                '<option value="bacon">'+
                '<option value="pineapple">'+
                '<option value="beef mushroom">'+
                '<option value="beef pepperoni">'+
                '<option value="tomatoes">'+
                '<option value="onions">'+
                '<option value="periperi chicken">'+
                '<option value="sweet corn">'+                
            '</datalist>'+
        '</form>')
    })

    $("#add-pizza").click(function(){
        $(".add-pizza-form").append(
            '<div class="toppings-form">'+
                                '<form >'+
                                   ' toppings <br>'+
                                    '<input list="toppings">'+
                                    '<datalist id="toppings">'+
                                        '<option value="marinated chicken">'+
                                        '<option value="marinated BBQ steak">'+
                                        '<option value="bacon">'+
                                        '<option value="pineapple">'+
                                        '<option value="beef mushroom">'+
                                        '<option value="beef pepperoni">'+
                                        '<option value="tomatoes">'+
                                        '<option value="onions">'+
                                        '<option value="periperi chicken">'+
                                        '<option value="sweet corn">'+                
                                    '</datalist>'+
                                '</form>'+
                            '</div>'+

                            '<div class="sizes form">'+
                                '<form>'+
                                    'which size do you want: <br>'+
                                    '<input list="sizes">'+
                                    '<datalist id="sizes">'+
                                        '<option value="large">'+
                                        '<option value="medium">'+
                                        '<option value="small">'+
                                    '</datalist>'+
                                '</form>'+
                            '</div>'+

                            '<div class="crusts form">'+
                                '<form>'+
                                    'type of crust: <br>'+
                                    '<input list="crusts type">'+
                                    '<datalist id="crusts type">'+
                                        '<option value="large">'+
                                        '<option value="medium">'+
                                        '<option value="small">'+
                                    '</datalist>'+
                                '</form>'+
                            '</div>'+

                            '<div class="quantity">'+
                                '<form >'+
                                    'Quantity :<br>'+
                                    '<input type="number" name="quantity" min="0" >'+
                                '</form>'+        
                            '</div>'
        )
    })
    
})