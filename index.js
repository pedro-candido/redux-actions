let initialState = 0

// ACTIONS
const INCREMENT = 'INCREMENT'
const DECREMENT = 'DECREMENT'

// ACTION CREATORS
const increment = () =>{
    return { type: INCREMENT }
}

const decrement = () =>{
    return { type: DECREMENT }
}

// REDUCER
const reducer = (state = initialState, action) =>{
    switch(action.type){
        case INCREMENT:
            return state+1;
        case DECREMENT:
            return state-1;
    }
}

const store = Redux.createStore(reducer);

let incrementButton = document.querySelector('.increment'); 
let decrementButton = document.querySelector('.decrement'); 
const show = document.querySelector('.show-class');

incrementButton.addEventListener('click', ()=>{
    store.dispatch(increment());
    console.log(store.getState());
    show.innerHTML = store.getState();
})

decrementButton.addEventListener('click', ()=>{
    store.dispatch(decrement());
    console.log(store.getState());
    show.innerHTML = store.getState();
})

