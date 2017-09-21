CPP_DIR=./cpp
JAVA_DIR=./java
PYTHON_DIR=./python

protoc --proto_path=. --cpp_out=$CPP_DIR --java_out=$JAVA_DIR --python_out=$PYTHON_DIR *.proto
