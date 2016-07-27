package sorting

var selectManyTemplate = `
{{$current_values := (raw_value_of .ResourceValue .Meta)}}
{{$collectionValue := (call .CollectionValue)}}

<div class="qor-field__show">
	{{range $value := $current_values}}
		{{stringify $value}}
	{{end}}
</div>

<div class="qor-field__edit qor-field__block qor-dragable">
	<ul class="qor-dragable__list">
		{{range $value := $current_values}}
			{{range $values := $collectionValue}}
				{{if (is_equal $value (index $values 0))}}
					<li data-index="{{index $values 0}}" data-value="{{index $values 1}}">
						<span>{{index $values 1}}</span>
						<i class="material-icons qor-dragable__list-delete">clear</i>
						<i class="material-icons qor-dragable__list-handle">drag_handle</i>
					</li>
				{{end}}
			{{end}}
		{{end}}
	</ul>

	<select class="hidden qor-dragable__list-data" id="{{.InputName}}" name="{{.InputName}}" multiple>
		{{range $value := $current_values}}
			{{range $values := $collectionValue}}
				{{if (is_equal $value (index $values 0))}}
					<option selected value="{{index $values 0}}">{{index $values 1}}</option>
				{{end}}
			{{end}}
		{{end}}
	</select>

	<button class="mdl-button mdl-button--fab mdl-button--mini-fab mdl-button--primary mdl-js-button mdl-js-ripple-effect qor-dragable__button-add" type="button">
		<i class="material-icons">add</i>
	</button>

	<select class="qor-field__input" data-toggle="qor.chooser.sortable" data-placeholder="{{t "qor_admin.form.enter_search_term" "Enter Search Term"}}" {{if not (has_update_permission .Meta)}}disabled{{end}} multiple>
		{{range $values := $collectionValue}}
			<option value="{{index $values 0}}" data-index="{{index $values 0}}" data-value="{{index $values 1}}" {{if (is_included $current_values (index $values 0))}}selected{{end}}>
				{{index $values 1}}
			</option>
		{{end}}
	</select>

	<input type="hidden" name="{{.InputName}}" value="">
</div>

{{javascript_tag "sorting-sortable-select-many"}}
{{stylesheet_tag "sorting-sortable-select-many"}}
`
