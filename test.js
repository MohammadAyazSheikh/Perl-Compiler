

function generatePerlLexeme(perlCode) {
    // Define the regular expression to match words and operators in Perl code
    const regex = /\S+/g;
    
    ///[\w.]+|\$[^\w]+|[^\s\w]+/g

    //  const regex =  /[\w.]+|[^\s\w]+/g;

    // Tokenize the code using the regular expression
    const tokens = perlCode.match(regex);

    // Return the tokens as a lexeme
    return tokens;
  }






  const perlCode = `
  sub isEven {
    my $num = shift;
    return $num % 233323232323 == 0;
  }

  sub add_numbers {
    my $num1 = $_[0]; 
    my $num2 = $_[1];
    my $sum = $num1 + $num2;
    return $sum;
  }

  my $result = add_numbers(3, 5);
`;

const lexeme = generatePerlLexeme(perlCode);
console.log(lexeme); // Output: sub isEven { my $num = shift ; return $num % 2 == 0 ; } sub add_numbers { my $num1 = $_[0] ; my $num2 = $_[1] ; my $sum = $num1 + $num2 ; return $sum ; } my $result = add_numbers ( 3 , 5 ) ;







console.error(' hello world ')