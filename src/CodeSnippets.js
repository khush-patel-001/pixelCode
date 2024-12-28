const codeSnippets = {
  javascript: "console.log('Hello World!');",
  python: "print('Hello World!')",
  java: 'public class Main {\n  public static void main(String[] args) {\n    System.out.println("Hello World!");\n  }\n}',
  c: '#include <stdio.h>\nint main() {\n  printf("Hello World!\\n");\n  return 0;\n}',
  cpp: '#include <iostream>\nint main() {\n  std::cout << "Hello World!" << std::endl;\n  return 0;\n}',
  csharp:
    'using System;\nclass MainClass {\n  public static void Main (string[] args) {\n    Console.WriteLine("Hello World!");\n  }\n}',
  php: '<?php\n  echo "Hello World!";\n?>',
  typescript: "console.log('Hello World!');",
  swift: 'print("Hello World!")',
  ruby: "puts 'Hello World!'",
  go: 'package main\nimport "fmt"\nfunc main() {\n  fmt.Println("Hello World!")\n}',
  kotlin: 'fun main() {\n  println("Hello World!")\n}',
  r: "cat('Hello World!\\n')",
  rust: 'fn main() {\n  println!("Hello World!");\n}',
  perl: 'print "Hello World!\\n";',
  dart: "void main() {\n  print('Hello World!');\n}",
};

export default codeSnippets;
