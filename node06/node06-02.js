$(function() {
    var $width = $('#rectangle-width'),
      $height = $('#rectangle-height'),
      $calc = $('#rectangle-calc'),
      blnValid ;//一个验证的变量
  
    $calc.click(function() {
      if(!blnValid) return;//如果输入值为空，不执行运算，不会显示运算结果。
  
      var width = Number($width.val()),
        height = Number($height.val()),
        p = roundFractional(width * 2 + height * 2, 2),
        a = roundFractional(width * height, 2);
  
      $('#rectangle-perimeter').val(p);
      $('#rectangle-area').val(a);
    });
  
    $width.focusout(function() {
      blnValid = validate('#rectangle-width');//默认false，不可转换焦点，
      //除非输入合法值
      /*
      Validate 事件和CausesValidation 属性协同工怍，
      防止控件失去焦点直到满足确定的准则
      这样当您想把焦点从一个地方转换到另一个时，Validate 事件发生。
      */
    });
    
    $height.focusout(function() {
      blnValid = validate('#rectangle-height');
    });
    
    /**
     * 小数点后面保留第 n 位
     * 
     * @param x 做近似处理的数
     * @param n 小数点后第 n 位
     * @returns 近似处理后的数 
     */
    function roundFractional(x, n) {
      return Math.round(x * Math.pow(10, n)) / Math.pow(10, n);
    }
  
    /**
     * 对字段进行数据合法性校验
     *
     * @param field 字段的 id
     * @returns boolean 验证通过为 true，验证不通过为 false
     */
    function validate(field) {
      var $data = $(field),
        $message = $(field + '-validate'),
        label = $(field).attr('data-label');
  
      if($data.val() === '') {
        $message.html(label + '不能为空！');
        $data.select();
        //表示当前焦点被选中，如果去掉select，输入框会失去限制转换的效果。
        return false;
      }
  
      if(!/^-?(0|[1-9]\d*)(\.\d*)?([eE][+-]?\d+)?$/.test($data.val())) {
        //test()方法用于检验一个字符串是否匹配某个模式。
        //语法：RegExpObject.test(string).
        $message.html(label + '必须是数值');
        $data.select();
        return false;
      }
  
      if(window.Number($data.val()) < 0) {
        $message.html(label + '必须大于零');
        $data.select();
        return false;
      }
  
      $message.html('');
      return true;
    }
  });
  