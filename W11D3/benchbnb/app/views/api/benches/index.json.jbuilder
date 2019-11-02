@benches.each do |bench|
  json.set! bench.id do
    # json.partial! 'api/benches/bench', bench: bench
    json.extract! bench, :id, :description, :lat, :lng
  end
end
