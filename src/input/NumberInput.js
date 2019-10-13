import React, {Component} from 'react';
import './NumberInput.css'

export default class NumberInput extends Component {

    constructor(props) {
        super(props);
        this.state = {
            tip: '',
            className: ''
        };
    }

    changeHandler = () => {
        let {tip, className} = this.state;
        let inputValue = this.inputValue.value;
        let {minValue, maxValue} = this.props;
        console.log(inputValue);
        const reg = /^\d*?$/;
        const result = reg.test(inputValue);
        console.log(result);
        if (!result) {
            inputValue = inputValue.replace(/[^0-9]/ig, '');
            tip = '只能输入数字';
            className = 'errorValue';
        } else {
            tip = '';
            className = 'rightValue'
            if (inputValue * 1 < minValue) {// *1 表示将字符串转换成数字
                inputValue = minValue;
                tip = `输入范围：[${minValue}, ${maxValue}]`;
                className = 'errorValue'
            } else if (inputValue * 1 > maxValue) {
                inputValue = maxValue;
                tip = `输入范围：[${minValue}, ${maxValue}]`;
                className = 'errorValue'
            } else {
                tip = '';
                className = 'rightValue'
            }
        }
        console.log(inputValue);
        this.inputValue.value = inputValue;
        this.setState({
            tip: tip,
            className: className
        });
    };

    render() {
        return (
            <div>
                <input className={this.state.className} placeholder={this.props.placeholder}
                       onChange={this.changeHandler} ref={input => this.inputValue = input}/>
                <br/>
                <div>{this.state.tip}</div>
            </div>
        )
    }
}