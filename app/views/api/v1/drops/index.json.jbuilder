json.latest_drop do
  if @latest_drop
    json.title @latest_drop.title || "pending"
    json.drop_date @latest_drop.drop_date.strftime("%B %-dth, %I:%M %P")
    json.image @latest_drop.drop_image
    json.price @latest_drop.price
  else
    json.pending true
  end
end

json.drops @drops do |drop|
  json.title drop.title
  json.drop_date drop.drop_date
  json.image drop.drop_image
  json.price drop.price
end
