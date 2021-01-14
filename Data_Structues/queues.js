// function to create and work with queues

function Queue (){
    collection = [];
    this.print = function(){
        console.log(collection);
    };

    this.enqueue = function(element){
        collection.push(element);
    };

    this.dequeue = function(){
        return collection.shift();
    };

    this.front = ( ) => {
        return collection[0];
    };

    this.size = ( ) => {
        return collection.length;
    };

    this.isEmpty = () => {
        return (collection.length === 0)
    };

}

var q = new Queue();
q.enqueue('a');
q.enqueue('b');
q.enqueue('c');
q.print();
q.dequeue();
console.log(q.front());
q.print();


function PriorityQueue (){
    var collection = [];
    this.printCollection = () => {
        console.log(collection);
    };
    this.enqueue = element => {
        if (this.isEmpty()){
            collection.push(element);
        }
        else{
            var added = false;
            for (var i=0; i<collection.length; i++){
                // check for priorities
                if (element[1] < collection[i][1]){
                    collection.splice(i, 0, element);
                    added = true;
                    break;
                }   
            }
            if (!added){
                collection.push(element);

            }
            
        }

    };
    this.dequeue = () => {
        var value = collection.shift();
        return value[0];
    }

    this.front = () => {
        return collection[0]
    }

    this.size = () => {
        return collection.length;
    }

    this.isEmpty = () => {
        return (collection.length === 0);
    }

}

var pq = new PriorityQueue();
pq.enqueue(['Beau Carnes', 2]);
pq.enqueue(['Quincy Larson', 3]);
pq.enqueue(['Ewa Mitulska-Wajcik', 1]);
pq.enqueue(['Briana Swift', 2]);
pq.printCollection();
pq.dequeue();
console.log(pq.front());
pq.printCollection();

