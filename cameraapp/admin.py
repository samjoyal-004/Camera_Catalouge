from django.contrib import admin
from django.utils.html import format_html
from cameraapp.models import Camera





class CameraTypeFilter(admin.SimpleListFilter):
    title = 'Camera Type'
    parameter_name = 'camera_type'

    def lookups(self, request, model_admin):
        camera_types = set([c.camera_type for c in model_admin.model.objects.all()])
        return [(c, c) for c in camera_types]

    def queryset(self, request, queryset):
        if self.value():
            return queryset.filter(camera_type=self.value())
        return queryset
    
    
@admin.register(Camera)   
class CameraAdmin(admin.ModelAdmin):
    list_display = ('title', 'camera_type', 'resolution', 'sensor', 'uses', 'description', 'image_preview')
    list_filter = (CameraTypeFilter, 'resolution', 'sensor', 'uses') 
    search_fields = ('title', 'camera_type', 'sensor', 'description') # Use custom filter
    def image_preview(self, obj):
        if obj.image:
            return format_html('<img src="{}" width="100" height="100" />', obj.image.url)
        return 'No Image'
    image_preview.allow_tags = True 
    image_preview.short_description = 'Image Preview'

    def delete_model(self, request, obj):
      obj.delete()


