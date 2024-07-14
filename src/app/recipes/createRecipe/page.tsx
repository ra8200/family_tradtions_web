import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select"

export default function Component() {
  return (
    <div className="container max-w-md mx-auto px-4 py-8">
      <div className="space-y-6">
        <div className="space-y-2">
          <Label htmlFor="name">Recipe Name</Label>
          <Input id="name" placeholder="Enter recipe name" />
        </div>
        <div className="space-y-2">
          <Label>Recipe Image</Label>
          <div className="flex justify-center px-6 pt-5 pb-6 border-2 border-dashed rounded-md">
            <div className="space-y-1 text-center">
              <UploadIcon className="mx-auto h-12 w-12 text-muted-foreground" />
              <div className="flex text-sm text-muted-foreground">
                <label
                  htmlFor="file-upload"
                  className="relative cursor-pointer rounded-md font-medium focus-within:outline-none"
                >
                  <span>Upload an image</span>
                  <Input id="file-upload" name="file-upload" type="file" className="sr-only" />
                </label>
                <p className="pl-1">or drag and drop</p>
              </div>
              <p className="text-xs text-muted-foreground">PNG, JPG up to 5MB</p>
            </div>
          </div>
        </div>
        <div className="space-y-4">
          <Label>Ingredients</Label>
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <Input placeholder="Enter ingredient" />
              <Button variant="outline" size="icon" className="rounded-full">
                <PlusIcon className="w-4 h-4" />
              </Button>
            </div>
            <div className="flex items-center gap-2">
              <Input placeholder="Enter ingredient" />
              <Button variant="outline" size="icon" className="rounded-full">
                <PlusIcon className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
        <div className="space-y-4">
          <Label>Instructions</Label>
          <Textarea placeholder="Enter instructions" rows={3} />
        </div>
        <div className="space-y-2">
          <Label htmlFor="recipe-book">Recipe Book</Label>
          <Select>
            <SelectTrigger id="recipe-book">
              <SelectValue placeholder="Select recipe book" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="favorites">Favorites</SelectItem>
              <SelectItem value="healthy">Healthy Recipes</SelectItem>
              <SelectItem value="quick">Quick & Easy</SelectItem>
              <SelectItem value="desserts">Desserts</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <Button className="w-full">Save Recipe</Button>
      </div>
    </div>
  )
}

function PlusIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 12h14" />
      <path d="M12 5v14" />
    </svg>
  )
}


function UploadIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
      <polyline points="17 8 12 3 7 8" />
      <line x1="12" x2="12" y1="3" y2="15" />
    </svg>
  )
}


function XIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  )
}