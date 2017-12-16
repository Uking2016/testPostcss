const postCssLess = require('postcss-less');
var postcss = require('postcss');
const less = `
.content{
  margin-top: 16/@r;
  border-top: 1px solid #e6e6e6;
  border-bottom: 1px solid #e6e6e6;
  .content-one{
    background-color: #fff;
    height:3rem;
    padding: 16/@r;
    .red{
      color:#a83b00;
    }
    .left{
      height:inherit;
      padding: 0 .5rem;
      span{
        display: block;
        font-size: 2.872rem;
        line-height: 2.75rem;
        color:#b53030;
      }
    }
    h4{
      font-size: 1.125rem;
      color:#333333;
    }
    p{
      height:1.25rem;
      line-height: 1.25rem;
      font-size: 0;
      color:#666666;
      span{
        display: inline-block;
        vertical-align: middle;
        font-size: .875rem;
        margin-right: .125rem;
      }
    }
  }
  .content-two{
    font-size: 24/@r;
    background-color: #fffaf0;
    text-align: center;
    ul{
      width: 100%;
      padding: 8/@r 0;
    }
    li{
      width: 50%;
      .two-wrapper{
        border-right: 1px solid #cccccc;
      }
    }
    p{
      color: #666666;
      span{
        color: #b53030;
      }
      i{
        font-style: normal;
      }
    }
  }
}

`;
const root_ = postCssLess.parse(less);
postcss(require('./myplugin.js'))
    .process(less, {
        syntax: postCssLess
    })
    .then((result) => {
        console.log(result);
        result.content.replace('#fff', '#333')
        console.log(result.content); // this will be value of `lessCode` without changing comments or mixins
    });
