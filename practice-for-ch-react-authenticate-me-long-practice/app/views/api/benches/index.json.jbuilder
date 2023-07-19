@benches.each do |bench|
    json.set! bench.id do 
        json.extract! bench, :id, :title, :description, :price, :seating
    end 
end 