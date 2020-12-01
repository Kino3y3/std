const React = require('react');
const { useState, useRef } = React;

const Gugudan = () => {
    const [first, setFirst] = useState(Math.ceil(Math.random() * 9));
    const [second, setSecond] = useState(Math.ceil(Math.random() * 9));
    const [value, setValue] = useState('');
    const [result, setResult] = useState('');
    const inputRef = useRef(null);

    // const [first, setFirst] = React.useState(Math.ceil(Math.random() * 9));
    // const [second, setSecond] = React.useState(Math.ceil(Math.random() * 9));
    // const [value, setValue] = React.useState('');
    // const [result, setResult] = React.useState('');
    // const inputRef = React.useRef(null);

    const onSubmit = (e) => {
        e.preventDefault();
        if (parseInt(value) === first * second) {
            setResult((prevResult) => {
                return 'correct! ' + value;
            });
            // setCounter((c) => c + 1)
            setFirst(Math.ceil(Math.random() * 9));
            setSecond(Math.ceil(Math.random() * 9));
            setValue('');
            inputRef.current.focus();
        } else {
            setResult('Incorrect');
            setValue('');
            inputRef.current.focus();
        }
    };

    const onChangeInput = (e) => {
        setValue(e.target.value);
    };

    console.log('render start');
    return (
        <>
            <div>{first} multiplied by {second}?</div>
            <form onSubmit={onSubmit}>
                <input ref={inputRef} onChange={onChangeInput} value={value} />	
                <button>submit</button>
            </form>
            <div id="result">{result}</div>
        </>
    );
};

module.exports = Gugudan;